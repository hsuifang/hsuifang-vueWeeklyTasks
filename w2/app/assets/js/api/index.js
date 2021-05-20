import req from './https'
import { apiPath } from './https'

export const apiSignIn = (data) => {
  return req('post', `/admin/signin`, data)
}

export const apiLogout = () => {
  return req('post', `/logout`)
}

export const apiGetProducts = (page) => {
  return req('get', `/api/${apiPath}/products?page=${page}`)
}

export const apiDeleteProductItem = (productId) => {
  return req('delete', `/api/${apiPath}/admin/product/${productId}`)
}
