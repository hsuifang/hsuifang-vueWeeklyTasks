import { apiGetProducts, apiDeleteProductItem } from './api/index.js'
import { JWT } from './api/localStorage.js'
const app = {
  data: {
    privilege: null,
    products: [],
    productCount: 0,
    pageInfo: null,
    uiSelector: {
      clientProductList: '#js-productList',
      serverProductList: '#js-serverProductList',
      deleteProductItem: '.js-deleteBtn',
      productCount: '#js-productCount',
    },
  },
  async fetchData(page = 1) {
    try {
      const res = await apiGetProducts(page)
      const { products, pagination, success } = res.data
      if (success) {
        this.data.products = products
        this.data.pageInfo = pagination
      }
      this.dispatchRender()
    } catch (error) {
      console.log(error)
    }
  },
  async deleteProductItem(e) {
    if (window.confirm('你確定要刪除嗎？')) {
      try {
        const { id } = e.dataset
        const res = await apiDeleteProductItem(id)
        if (res.data.success) {
          this.fetchData()
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  dispatchRender() {
    if (this.data.privilege === 'admin') {
      this.renderServer()
    } else {
      this.renderClient()
    }
  },
  renderClient() {
    const { uiSelector, products } = this.data
    const el = document.querySelector(uiSelector.clientProductList)
    const view = products.reduce((acc, item) => {
      return item.is_enabled === 1
        ? `${acc}
        <li class="col-12 col-sm-6 col-md-3 mb-3">
        <div class="card">
          <div class="card-img-top">
            <img src="${item.imageUrl}" class="hv-zoom" alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-title text-dark mb-0">${item.title}</h5>
            <p class="mb-3 text-muted">${item.description}</p>
            <div class="d-flex justify-content-between mb-2">
              <div class="d-flex">
                <p class="fw-bold me-2 text-dark">$ ${item.price}</p>
                <p class="text-decoration-line-through fst-italic text-secondary">$ ${item.origin_price}</p>
              </div>
              <p class="text-dark">剩下${item.num}個</p>
            </div>
            <p>
              <a href="#" class="btn btn-outline-primary text-primary" data-addcardid="${item.id}">購物車</a>
              <a href="#" class="btn btn-primary text-white" data-currentbuyid="${item.id}">立即購買</a>
            </p>
          </div>
        </div>
      </li>`
        : acc
    }, '')
    el.innerHTML = view || '<p>無資料😊</p>'
  },
  renderServer() {
    const { uiSelector, products } = this.data
    const el = document.querySelector(uiSelector.serverProductList)
    const productCount = document.querySelector(uiSelector.productCount)

    const view = products.reduce((acc, item) => {
      return `${acc}
          <tr><td>${item.title}</td>
          <td>${item.unit} ${item.origin_price}</td>
          <td>${item.unit} ${item.price}</td>
          <td><span class="${
            item.is_enabled ? 'text-success' : 'text-secondary'
          }">${item.is_enabled ? '啟用' : '未啟用'}</span></td>
          <td><button type="button" class="btn btn-sm btn-outline-danger move js-deleteBtn" data-action="remove" data-id="${
            item.id
          }"> 刪除 </button></td><tr>`
    }, '')
    el.innerHTML =
      view ||
      `<tr><td class="text-center text-muted" colspan="5">無商品 / ㄏ</td></tr>`
    // add number in count
    productCount.innerText = products.length
    // 刪除按鈕增加event
    const deleteAllBtn = document.querySelectorAll(uiSelector.deleteProductItem)
    deleteAllBtn.forEach((item) => {
      item.addEventListener('click', () => {
        this.deleteProductItem(item)
      })
    })

    productCount.textContent = this.data.products.length
  },
  created(privilege) {
    this.data.privilege = privilege
    this.fetchData()
  },
}

try {
  const path = window.location.pathname
  if (path === '/index.html' || path === '/') {
    app.created('client')
  } else if (path === '/product.html') {
    if (!!JWT.getToken()) {
      app.created('admin')
    } else {
      throw new Error('invalid')
    }
  } else {
    throw new Error('invalid')
  }
} catch (error) {
  location.assign('index.html')
}
