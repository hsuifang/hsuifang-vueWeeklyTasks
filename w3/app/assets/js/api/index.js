import req from './https'
import { apiPath } from './https'

export const apiSignIn = (data) => {
  return req('post', `/admin/signin`, data)
}

export const apiLogout = () => {
  return req('post', `/logout`)
}

export const apiCheckUserStatus = () => {
  return req('post', '/api/user/check')
}

export const apiGetProducts = (page) => {
  return req('get', `/api/${apiPath}/products?page=${page}`)
}

export const apiGetAdminProducts = (page) => {
  return req('get', `/api/${apiPath}/admin/products?page=${page}`)
}

export const apiCreateProduct = (data) => {
  return req('post', `/api/${apiPath}/admin/product`, data)
}

export const apiUpdateProduct = ({ id, data }) => {
  return req('put', `/api/${apiPath}/admin/product/${id}`, data)
}

export const apiDeleteProductItem = (productId) => {
  return req('delete', `/api/${apiPath}/admin/product/${productId}`)
}
