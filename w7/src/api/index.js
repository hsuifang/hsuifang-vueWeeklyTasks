import req from './https';

const apiPath = process.env.VUE_APP_PATH;
const userPath = `/api/${apiPath}`;
const adminPath = `${userPath}/admin`;

// 登入及驗證
//
export const apiSignIn = (data) => req('post', '/admin/signin', data);
export const apiLogout = () => req('post', '/logout');
export const apiCheckUser = (token) => req('post', '/api/user/check', { api_token: token });

// 客戶購物 [免驗證]
//
// 產品列表
export const apiGetCleintProducts = (page) => req('get', `${userPath}/products?page=${page}`);
// 單一產品細節
export const apiGetSpecficProduct = (id) => req('get', `${userPath}/product/${id}`);
// 加入購物車
export const apiAddCart = function apiAddCart({ id, qty }) {
  return req('post', `${userPath}/cart`, {
    data: { product_id: id, qty },
  });
};
// 調整購物車產品數量
export const apiUpdateCart = function apiUpdateCart({ cartId, productId, qty }) {
  return req('put', `${userPath}/cart/${cartId}`, {
    data: { product_id: productId, qty },
  });
};
// 刪除購物車項目（單一、全部）
export const apiDeleteCart = (id) => req('delete', `${userPath}/cart/${id}`);
// 刪除購物車項目（單一、全部）
export const apiDeleteAllCart = () => req('delete', `${userPath}/carts`);
// 購物車列表
export const apiGetCartList = () => req('get', `${userPath}/cart`);
// 結帳付款
export const apiGenerateOrder = function apiGenerateOrder({ user, message }) {
  return req('post', `${userPath}/order`, { data: { user, message } });
};

export const apiApplyCoupon = (code) => req('post', `${userPath}/coupon`, { data: { code } });

// 管理控制台 [需驗證]
//
// 產品
export const apiGetAdminProducts = function apiGetAdminProducts(page) {
  return req('get', `${adminPath}/products?page=${page}`);
};

export const apiCreateProduct = (data) => req('post', `${adminPath}/product`, data);

export const apiUpdateProduct = function apiUpdateProduct({ id, data }) {
  return req('put', `${adminPath}/product/${id}`, data);
};

export const apiDeleteProductItem = function apiDeleteProductItem(productId) {
  return req('delete', `${adminPath}/product/${productId}`);
};

// 訂單
export const apiGetOrders = (page) => req('get', `${adminPath}/orders?page=${page}`);
export const apiUpdateOrder = ({ id, data }) => req('put', `${adminPath}/order/${id}`, data);
export const apiDelOrder = (orderId) => req('delete', `${adminPath}/order/${orderId}`);
export const apiDelOrderAll = () => req('delete', `${adminPath}/orders/all`);

// 優惠券
export const apiGetCoupons = (page) => req('get', `${adminPath}/coupons?page=${page}`);
export const apiCreateCoupon = (data) => req('post', `${adminPath}/coupon`, data);
export const apiUpdateCoupon = ({ id, data }) => req('put', `${adminPath}/coupon/${id}`, data);
export const apiDelCoupon = (couponId) => req('delete', `${adminPath}/coupon/${couponId}`);

// 文章
export const apiGetArticles = (page) => req('get', `${adminPath}/articles?page=${page}`);
export const apiCreateArticle = (data) => req('post', `${adminPath}/article`, data);
export const apiGetArticle = (id) => req('get', `${adminPath}/article/${id}`);
export const apiUpdateArticle = ({ id, data }) => req('put', `${adminPath}/article/${id}`, data);
export const apiDelArticle = (articleId) => req('delete', `${adminPath}/article/${articleId}`);

// 圖片上傳
export const apiUploadImg = (formData) => req('form', `${adminPath}/upload`, formData);
