import req from './https';

const apiPath = process.env.VUE_APP_PATH;

// 登入及驗證
//
export const apiSignIn = (data) => req('post', '/admin/signin', data);
export const apiLogout = () => req('post', '/logout');
export const apiCheckUser = (token) => req('post', '/api/user/check', { api_token: token });

// 客戶購物 [免驗證]
//
// 產品列表
export const apiGetCleintProducts = (page) => req('get', `/api/${apiPath}/products?page=${page}`);
// 單一產品細節
export const apiGetSpecficProduct = (id) => req('get', `/api/${apiPath}/product/${id}`);
// 加入購物車
export const apiAddCart = function apiAddCart({ id, qty }) {
  return req('post', `/api/${apiPath}/cart`, {
    data: { product_id: id, qty },
  });
};
// 調整購物車產品數量
export const apiUpdateCart = function apiUpdateCart({ cartId, productId, qty }) {
  return req('put', `/api/${apiPath}/cart/${cartId}`, {
    data: { product_id: productId, qty },
  });
};
// 刪除購物車項目（單一、全部）
export const apiDeleteCart = (id) => req('delete', `/api/${apiPath}/cart/${id}`);
// 刪除購物車項目（單一、全部）
export const apiDeleteAllCart = () => req('delete', `/api/${apiPath}/carts`);
// 購物車列表
export const apiGetCartList = () => req('get', `/api/${apiPath}/cart`);
// 結帳付款
export const apiGenerateOrder = function apiGenerateOrder({ user, message }) {
  return req('post', `/api/${apiPath}/order`, { data: { user, message } });
};

// 管理控制台 [需驗證]
//
export const apiGetAdminProducts = function apiGetAdminProducts(page) {
  return req('get', `/api/${apiPath}/admin/products?page=${page}`);
};

export const apiCreateProduct = (data) => req('post', `/api/${apiPath}/admin/product`, data);

export const apiUpdateProduct = function apiUpdateProduct({ id, data }) {
  return req('put', `/api/${apiPath}/admin/product/${id}`, data);
};

export const apiDeleteProductItem = function apiDeleteProductItem(productId) {
  return req('delete', `/api/${apiPath}/admin/product/${productId}`);
};
