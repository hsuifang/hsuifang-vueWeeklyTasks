// api
const reqPathInfo = {
  url: 'https://vue3-course-api.hexschool.io/',
  path: 'hsuifangfangfang',
}
const AxiosInstance = axios.create({
  baseURL: reqPathInfo.url,
})
const api = {
  // 產品列表
  getProducts: (page) => {
    return AxiosInstance.get(`/api/${reqPathInfo.path}/products?page=${page}`)
  },
  // 單一產品細節
  getSpecficProduct: (id) => {
    return AxiosInstance.get(`/api/${reqPathInfo.path}/product/${id}`)
  },
  // 加入購物車
  addCart: ({ id, qty }) => {
    return AxiosInstance.post(`/api/${reqPathInfo.path}/cart`, {
      data: { product_id: id, qty },
    })
  },
  // 調整購物車產品數量
  updateCart: ({ cartId, productId, qty }) => {
    return AxiosInstance.put(`/api/${reqPathInfo.path}/cart/${cartId}`, {
      data: { product_id: productId, qty },
    })
  },
  // 刪除購物車項目（單一、全部）
  deleteCart: (id) => {
    return AxiosInstance.delete(`/api/${reqPathInfo.path}/cart/${id}`)
  },
  // 刪除購物車項目（單一、全部）
  deleteAllCart: () => {
    return AxiosInstance.delete(`/api/${reqPathInfo.path}/carts`)
  },
  // 購物車列表
  getCartList: () => {
    return AxiosInstance.get(`/api/${reqPathInfo.path}/cart`)
  },
  // 結帳付款
  generateOrder: ({ user, message }) => {
    return AxiosInstance.post(`/api/${reqPathInfo.path}/order`, {
      data: { user, message },
    })
  },
}

// form validate
const { defineRule, Form, Field, ErrorMessage, configure } = VeeValidate
const { required, email, min, max } = VeeValidateRules
const { localize, loadLocaleFromURL } = VeeValidateI18n

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

loadLocaleFromURL(
  'https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_TW.json'
)

configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true,
})

// vue
const app = Vue.createApp({
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage,
  },
  data() {
    return {
      loadingItem: {
        pos: null,
        id: null,
      },
      products: [],
      pageInfo: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
      targetProduct: {},
      carts: [],
      price: {
        total: 0,
        final: 0,
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    }
  },
  methods: {
    async fetchProductList(page = 1) {
      try {
        const res = await api.getProducts(page)
        const { success, products, pagination } = res.data
        if (success) {
          this.products = products
          this.pageInfo = pagination
        } else {
          alert('系統發生異常，請聯絡客服')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async showProductDetail(item) {
      this.toggleLoding({ pos: 'detail', id: item.id })
      const res = await api.getSpecficProduct(item.id)
      const { success, product, message } = res.data
      if (success) {
        this.targetProduct = product
        this.$refs.productModal.openModal()
      } else {
        alert(message)
      }
      this.toggleLoding({ pos: '', id: '' })
    },
    requestAddCart({ productId, qty }) {
      this.toggleLoding({ pos: 'list', id: productId })
      const idx = this.carts.findIndex((item) => item.product.id === productId)
      if (idx === -1) {
        this.addToCart({ productId, qty })
      } else {
        this.updateCart({
          cartId: this.carts[idx].id,
          productId,
          qty: this.carts[idx].qty + qty,
        })
      }
    },
    async addToCart({ productId, qty }) {
      try {
        const res = await api.addCart({ id: productId, qty })
        const { success, message } = res.data
        if (success) {
          await this.fetchCartList()
        } else {
          alert(message)
        }
        this.toggleLoding({ pos: '', id: '' })
      } catch (error) {
        console.log(error)
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        const res = await api.updateCart({ cartId, productId, qty })
        const { success, message } = res.data
        if (success) {
          this.fetchCartList()
        } else {
          alert(message)
        }
        this.toggleLoding({ pos: '', id: '' })
      } catch (error) {
        console.log(error)
      }
    },
    async fetchCartList() {
      try {
        const res = await api.getCartList()
        const { success, message, data } = res.data
        if (success) {
          this.carts = data.carts
          this.price.total = data.total
          this.price.final = data.final_total
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteItemFromCart({ cartId }) {
      this.toggleLoding({ pos: 'delItem', id: cartId })
      try {
        const res = await api.deleteCart(cartId)
        const { success, message } = res.data
        if (success) {
          this.fetchCartList()
        } else {
          alert(message)
        }
        this.toggleLoding({ pos: '', id: '' })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteAllCart() {
      this.toggleLoding({ pos: 'delAll' })
      try {
        const res = await api.deleteAllCart()
        const { success, message } = res.data
        if (success) {
          this.carts = []
        } else {
          alert(message)
        }
        this.toggleLoding({ pos: '' })
      } catch (error) {
        console.log(error)
      }
    },
    async requestOrder() {
      this.toggleLoding({ pos: 'requestOrder' })
      try {
        const res = await api.generateOrder({
          user: this.form.user,
          message: this.form.message,
        })
        const { success, message } = res.data
        if (success) {
          this.fetchCartList()
          this.$refs.form.resetForm()
        } else {
          alert(message)
        }
        this.toggleLoding({ pos: '' })
      } catch (error) {
        console.log(error)
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos
      this.loadingItem.id = id
    },
  },
  created() {
    this.fetchProductList()
    this.fetchCartList()
  },
})

app.component('productDetailModal', {
  template: '#productDetailModal',
  props: {
    itemDetail: {
      type: Object,
    },
  },
  data() {
    return {
      productModal: '',
      productDetail: {},
      requestQty: 1,
    }
  },
  computed: {
    resetImages() {
      const imagesArr = this.productDetail.imagesUrl
      return imagesArr
        ? this.productDetail.imagesUrl.filter((item) => Boolean(item))
        : []
    },
  },
  methods: {
    openModal() {
      this.productModal.show()
    },
    closeModal() {
      this.productModal.hide()
    },
    addCart() {
      this.$emit('addCart', {
        productId: this.productDetail.id,
        qty: this.requestQty,
      })
      this.closeModal()
    },
  },
  watch: {
    itemDetail(val) {
      this.productDetail = val
    },
  },
  mounted() {
    const productModal = this.$refs.productModal
    this.productModal = new bootstrap.Modal(productModal)
  },
})

app.mount('#app')
