// [ Data ]
const domElement = {
  productList: document.getElementById('productList'),
  addProduct: document.getElementById('addProduct'),
  productCount: document.getElementById('productCount'),
  clearAll: document.getElementById('clearAll'),
  title: document.getElementById('title'),
  origin_price: document.getElementById('origin_price'),
  price: document.getElementById('price'),
}
let productForm = {
  title: domElement['title'],
  origin_price: domElement['origin_price'],
  price: domElement['price'],
  get data() {
    return {
      title: this.title.value.trim(),
      origin_price: parseInt(this.origin_price.value) || 0,
      price: parseInt(this.price.value) || 0,
    }
  },
  set data(val) {
    let { title = '', origin_price = 0, price = 0 } = val
    this.title.value = title
    this.origin_price.value = origin_price
    this.price.value = price
  },
}

let productData = []

// [ Methods ]
// 用戶可以新增產品，新增後會移除 input 的內容
function addProduct() {
  const timeStamp = Math.floor(Date.now())
  const { title, origin_price, price } = productForm.data
  if (title !== '') {
    productData.push({
      id: timeStamp,
      title,
      origin_price,
      price,
      is_enabled: false,
    })
    productForm.data = {}
    render()
  }
}
// 用戶可以一鍵刪除所有產品
function clearAll() {
  productData = []
  render()
}
// 用戶可以針對產品切換啟用狀態
// 用戶可以刪除單一產品
function toggleSwitch(e) {
  const action = e.target.dataset.action
  const id = parseInt(e.target.dataset.id)
  let newIndex = productData.findIndex((item) => item.id === id)
  if (action === 'remove') {
    productData.splice(newIndex, 1)
  } else if (action === 'complete') {
    productData[newIndex]['is_enabled'] = !productData[newIndex]['is_enabled']
  }
  render()
}
// render view
function render() {
  let str = ''
  productData.forEach((item) => {
    str += `
  <tr>
    <td>${item.title}</td>
    <td width="120">
      ${item.origin_price}
    </td>
    <td width="120">
      ${item.price}
    </td>
    <td width="100">
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" id="is_enabled" ${
          item.is_enabled ? 'checked' : ''
        } data-action="complete" data-id="${item.id}">
        <label class="form-check-label" for="is_enabled">${
          item.is_enabled ? '啟用' : '未啟用'
        }</label>
      </div>
    </td>
    <td width="120">
      <button type="button" class="btn btn-sm btn-danger move" data-action="remove" data-id="${
        item.id
      }"> 刪除 </button>
    </td>
  </tr>`
  })
  domElement['productList'].innerHTML = str
  domElement['productCount'].textContent = productData.length
}
// [ Trigger ]
domElement['addProduct'].addEventListener('click', (e) => {
  addProduct()
})
domElement['productList'].addEventListener('click', (e) => {
  toggleSwitch(e)
})
domElement['clearAll'].addEventListener('click', (e) => {
  e.preventDefault()
  clearAll()
})
