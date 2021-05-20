import { JWT } from './api/localStorage.js'
import { apiSignIn, apiLogout } from './api/index.js'

const domElement = {
  loginAccount: () => document.getElementById('js-loginEmail'),
  loginPassword: () => document.getElementById('js-loginPassword'),
  loginForm: () => document.getElementById('js-loginForm'),
  navbar: () => document.getElementById('js-navbar'),
  productCrm: () => document.getElementById('js-productCrm'),
  login: () => document.getElementById('js-login'),
  logout: () => document.getElementById('js-logout'),
  loginModal: new bootstrap.Modal(document.getElementById('js-loginModal')),
}

const app = {
  data: {
    isAuthenticated: !!JWT.getToken(),
  },
  async login() {
    try {
      const username = domElement.loginAccount().value
      const password = domElement.loginPassword().value
      const user = { username, password }
      const res = await apiSignIn(user)
      const { success, token } = res.data
      if (success) {
        JWT.saveToken(token)
        this.data.isAuthenticated = true
        this.render()
        domElement.loginModal.hide()
      }
    } catch (error) {
      console.dir(error)
    }
  },
  async logout() {
    try {
      const res = await apiLogout()
      if (res.data.success) {
        JWT.removeToken()
        this.data.isAuthenticated = false
        this.render()
      }
    } catch (error) {
      console.dir(error)
    }
  },
  async render() {
    if (!this.data.isAuthenticated) {
      domElement.navbar().innerHTML = `<li class="nav-item">
          <a href="#" class="btn btn-primary btn-sm text-white" id="js-login">登入</a>
        </li>`

      domElement.login().addEventListener('click', (e) => {
        e.preventDefault()
        domElement.loginModal.show()
      })
    } else {
      domElement.navbar().innerHTML = `
        <li class="nav-item">
          <button class="btn btn-primary btn-sm text-white me-2" id="js-productCrm">產品後台</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-primary btn-sm" id="js-logout">登出</button>
        </li>`

      domElement.productCrm().addEventListener('click', (e) => {
        location.assign('product.html')
      })

      domElement.logout().addEventListener('click', (e) => {
        e.preventDefault()
        this.logout()
      })
    }
  },
  created() {
    this.render()
  },
}

app.created()

domElement.loginForm().addEventListener('submit', (e) => {
  e.preventDefault()
  app.login()
})
