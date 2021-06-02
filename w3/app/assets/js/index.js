import {
  apiGetAdminProducts,
  apiCreateProduct,
  apiUpdateProduct,
  apiDeleteProductItem,
  apiSignIn,
  apiLogout,
  apiCheckUserStatus
} from './api/index.js'
import { JWT } from './api/cookies.js'

const App = {
  data() {
    return {
      isAuthenticated: !!JWT.getToken(),
      login: {
        username: '',
        password: '',
      },
      refName: {
        productCanvasoff: 'modifyProductItem',
        loginModal: 'loginModal',
      },
      productCount: 0,
      pageInfo: null,
      products: [],
      isLoading: false,
      currentProductItem: null,
      bsOffcanvas: '',
      bsModal: '',
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
            is_enabled: Boolean(item.is_enabled),
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
    // 新增及編輯
    async submitProductItem() {
      try {
        const data = { data: this.currentProductItem }
        const productId = this.currentProductItem.id
        const res = productId
          ? await apiUpdateProduct({ id: productId, data })
          : await apiCreateProduct(data)
        const { success, message } = res.data
        if (success) {
          this.bsOffcanvas.hide()
          if (productId) {
            const idx = this.products.findIndex((item) => item.id === productId)
            if (idx !== -1) {
              this.products[idx] = data.data
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
    async toggleProductItemStatus(item) {
      this.isLoading = true
      this.currentProductItem = item
      this.currentProductItem.is_enabled = !this.currentProductItem.is_enabled
      await this.submitProductItem()
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
    async handleLogin() {
      try {
        const { username, password } = this.login
        const user = { username, password }
        const res = await apiSignIn(user)
        const { success, token } = res.data
        if (success) {
          JWT.saveToken(token)
          this.isAuthenticated = true
          this.bsModal.hide()
          this.fetchProductData()
        } else {
          alert('登入失敗')
        }
      } catch (error) {
        console.dir(error)
      }
    },
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
    handleProductItem(item) {
      this.currentProductItem = item
      this.bsOffcanvas.show()
    },
    toggleModal() {
      this.bsModal.toggle()
    },
    async init() {
      try {
        this.currentProductItem = this.generateItemForm()
        const res = await apiCheckUserStatus()
        const {success, message} = res.data
        if (success) {
          this.fetchProductData()
        } else if (!success) {
          alert(message)
          JWT.removeToken()
          this.isAuthenticated = false
        }
      } catch (error) {
        console.log(error) 
      }
    }
  },
  mounted() {
    // 登入
    const loginModal = this.$refs[this.refName.loginModal]
    this.bsModal = new bootstrap.Modal(loginModal)
    // 產品資料
    const offCanvas = this.$refs[this.refName.productCanvasoff]
    this.bsOffcanvas = new bootstrap.Offcanvas(offCanvas)
  },
  created() {
    this.init()
  },
}

Vue.createApp(App).mount('#app')
