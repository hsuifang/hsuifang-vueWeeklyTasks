import {
  apiGetAdminProducts,
  apiCreateProduct,
  apiUpdateProduct,
  apiDeleteProductItem,
  apiSignIn,
  apiLogout
} from './api/index.js'
import { JWT } from './api/cookies.js'

const App = {
  data() {
    return {
      isAuthenticated: !!JWT.getToken(),
      refName: {
        productCanvasoff: 'modifyProductItem',
        loginModal: 'loginModal',
      },
      productCount: 0,
      pageInfo: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
      products: [],
      isLoading: false,
      currentProductItem: null,
      isCreateItem: true
    }
  },
  methods: {
    generateItemForm() {
      return {
        title: '',
        category: '',
        origin_price: null,
        price: null,
        unit: '',
        description: '',
        content: '',
        is_enabled: true,
        imageUrl: '',
        rate: 5,
        imagesUrl: ['', '', '', '', ''],
      }
    },
    // 取得產品資料
    async fetchProductData(page = 1) {
      try {
        this.isLoading = true
        const res = await apiGetAdminProducts(page)
        const { products, pagination, success, message } = res.data
        if (success) {
          this.products = products.map((item) => ({
            ...item,
            is_enabled: Boolean(item.is_enabled)
          }))
          this.pageInfo = pagination
        } else {
          alert(message)
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async toggleProductItemStatus(item) {
      this.isLoading = true
      this.currentProductItem = item
      this.currentProductItem.is_enabled = !this.currentProductItem.is_enabled
      await this.submitProductItem({isNew: false, content: this.currentProductItem})
      this.isLoading = false
    },
    async deleteProductItem({id, title}) {
      if (window.confirm(`你確定要刪除-${title}嗎？`)) {
        this.isLoading = true
        try {
          const res = await apiDeleteProductItem(id)
          if (res.data.success) {
            this.fetchProductData()
          }
        } catch (error) {
          this.isLoading = false
          console.log(error)
        }
      }
    },
    // 新增及編輯
    async submitProductItem({isNew, content}) {
      try {
        const productId = content.id
        const res = isNew
          ? await apiCreateProduct({ data: content })
          : await apiUpdateProduct({ id: productId, data: { data: content } })
        const { success, message } = res.data
        if (success) {
          this.$refs[this.refName.productCanvasoff].closeModal()
          if (productId) {
            const idx = this.products.findIndex((item) => item.id === productId)
            if (idx !== -1) {
              this.products[idx] = content
            }
          } else {
            this.fetchProductData()
          }
        }
        alert(message)
      } catch (error) {
        console.log(error)
      }
    },
    // [emit]: product-canvasoff
    updateProductItem (info) {
      this.submitProductItem(info)
    },
    // 觸發新增編輯按鈕
    handleProductItem(item) {
      if (item) {
        this.currentProductItem = item
        this.isCreateItem = false
      } else {
        this.currentProductItem = this.generateItemForm()
        this.isCreateItem = true
      }
      this.$refs[this.refName.productCanvasoff].openModal()
    },
    // 打開登入頁面
    toggleLoginModal() {
      this.$refs[this.refName.loginModal].openModal()
    },
    // [Emit] changePage
    changePage (page) {
      this.fetchProductData(page)
    },
    // logout
    async handleLogout() {
      try {
        const res = await apiLogout()
        if (res.data.success) {
          JWT.removeToken()
          this.isAuthenticated = false
        }
      } catch (error) {
        console.dir(error)
      }
    },
    // [Emit] login
    handleLoginSuccess () {
      this.isAuthenticated = true
      this.fetchProductData()
    },
    init() {
      this.currentProductItem = this.generateItemForm()
      if (JWT.getToken()) {
        this.fetchProductData()
      }
    }
  },
  created() {
    this.init()
  }
}

const app = Vue.createApp(App)

// 元件 - 新增編輯
app.component('productCanvasoff', {
  template: '#productCanvasoff',
  props: {
    isCreate: {
      type: Boolean
    },
    productItem: {
      type: Object
    }
  },
  data () {
    return {
      refProductCanvas: 'modifyProductItem',
      currentProductItem: null,
      bsOffcanvas: ''
    }
  },
  methods: {
    // 新增及編輯
    submitProductItem() {
      const productId = this.currentProductItem.id
      this.$emit('submitProductItem', 
        {
          isNew: !productId,
          content: this.currentProductItem
        }
      )
    },
    openModal() {
      this.bsOffcanvas.show()
    },
    closeModal() {
      this.bsOffcanvas.hide()
    }
  },
  mounted () {
    const offCanvas = this.$refs[this.refProductCanvas]
    this.bsOffcanvas = new bootstrap.Offcanvas(offCanvas)
  },
  watch: {
    productItem(val) {
      this.currentProductItem = { ...val }
    }
  },
  created () {
    this.currentProductItem = { ...this.productItem }
  }
})

// 元件 - 頁碼
app.component('page', {
  template: '#page',
  props: {
    pageInfo: {
      type: Object
    }
  },
  methods: {
    changePage(num) {
      if (num !== this.pageInfo.current_page) {
        this.$emit('changePage', num)
      }
    }
  },
})

// 元件 - 登入
app.component('theLogin', {
  template: '#theLogin',
  data () {
    return {
      refLoginModal: 'refLoginModal',
      bsModal: '',
      login: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    async handleLogin() {
      try {
        const { username, password } = this.login
        const user = { username, password }
        const res = await apiSignIn(user)
        const { success, token } = res.data
        if (success) {
          JWT.saveToken(token)
          this.$emit('handleLoginSuccess')
          this.bsModal.hide()
        } else {
          alert('登入失敗')
        }
      } catch (error) {
        console.dir(error)
      }
    },
    openModal() {
      this.bsModal.show()
    },
    closeModal() {
      this.bsModal.hide()
    }
  },
  mounted () {
    const loginModal = this.$refs[this.refLoginModal]
    this.bsModal = new bootstrap.Modal(loginModal)
  }
})

app.mount('#app')
