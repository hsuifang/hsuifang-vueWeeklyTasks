<template>
  <!-- 購物車 -->
  <div class="pb-5">
    <div class="container">
      <div class="row mt-4 mb-4 p-5 bg-white rounded shadow-sm">
        <div class="col-lg-12">
          <div class="text-end mb-2" v-if="carts.length > 0">
            <button
              type="button"
              class="btn btn-outline-secondary rounded-pill px-3"
              :disabled="loadingItem.pos === 'delAll'"
              @click="deleteAllCart"
            >
              刪除全部
            </button>
            <div
              v-if="loadingItem.pos === 'delAll'"
              class="spinner-border spinner-border-sm position-absolute top-50 start-100"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <p>名稱</p>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <p>金額</p>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <p>數量</p>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <p>刪除</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <template v-if="carts.length > 0">
                  <tr v-for="item in carts" :key="item.product_id">
                    <th scope="row">
                      <div class="p-2">
                        <img
                          :src="item.product.imageUrl"
                          alt=""
                          width="70"
                          height="70"
                          class="img-fluid rounded shadow-sm me-3"
                          style="height: 70px; object-fit: contain"
                        />
                        <div class="ml-3 d-inline-block align-middle">
                          <h5 class="mb-0 text-dark">{{ item.product.title }}</h5>
                          <p class="text-muted font-weight-normal font-italic mb-2">
                            類別: {{ item.product.category }}
                          </p>
                          <div v-if="item.coupon" class="text-muted fs-8">
                            優惠券:
                            <span class="bg-primary text-white rounded-pill py-1 px-2 fs-8">
                              {{ item.coupon.code }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td class="align-middle">
                      <strong>NT$ {{ item.product.price }}</strong>
                    </td>
                    <td class="align-middle">
                      <input
                        type="number"
                        class="form-control"
                        v-model.number="item.qty"
                        style="width: 80px"
                        min="1"
                        @change="
                          updateCart({
                            cartId: item.id,
                            productId: item.product_id,
                            qty: item.qty,
                          })
                        "
                      />
                    </td>
                    <td class="align-middle">
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        @click="deleteItemFromCart({ cartId: item.id })"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                      <div
                        v-if="loadingItem.pos === 'delItem' && loadingItem.id === item.id"
                        class="position-absolute top-50 start-50"
                      >
                        <div class="spinner-border spinner-border-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td colspan="4" class="text-center">目前無購物資料</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- 個人資訊 -->
      <div class="row p-5 bg-white rounded shadow-sm">
        <div class="col-lg-6">
          <h6 class="bg-light rounded-pill px-4 py-3 fw-bold text-secondary">優惠碼</h6>

          <div class="p-2">
            <div class="input-group mb-4 border rounded-pill p-2">
              <input
                type="text"
                aria-describedby="button-addon3"
                class="form-control border-0"
                v-model="couponCode"
              />
              <div
                v-if="loadingItem.pos === 'applyCoupon'"
                class="position-absolute top-50 start-100"
                style="transform: translateX(-10px)"
              >
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div class="input-group-append border-0">
                <button
                  id="button-addon3"
                  type="button"
                  class="btn btn-secondary text-white px-4 rounded-pill"
                  @click="applyCoupn"
                >
                  <i class="fa fa-gift me-2"></i>使用優惠券
                </button>
              </div>
            </div>
          </div>
          <h6 class="bg-light rounded-pill px-4 py-3 fw-bold text-secondary">金額明細</h6>

          <div class="pt-0 p-4">
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">購買</strong><strong>NT$ {{ price.total }}</strong>
              </li>
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">折扣</strong
                ><strong>${{ price.final - price.total }}</strong>
              </li>
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">總共</strong>
                <h5 class="fw-bold">NT$ {{ price.final }}</h5>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <h6 class="bg-light rounded-pill px-4 py-3 fw-bold text-secondary">購買者資訊</h6>
          <v-form ref="form" v-slot="{ errors }" @submit="requestOrder" class="px-3">
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <v-field
                id="name"
                name="姓名"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></v-field>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <v-field
                id="email"
                name="Email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['Email'] }"
                placeholder="請輸入Email"
                rules="email|required"
                v-model="form.user.email"
              ></v-field>
              <error-message name="Email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label">電話</label>
              <v-field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="min:8|max:10|required"
                v-model="form.user.tel"
              ></v-field>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <v-field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></v-field>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言或備註</label>
              <textarea
                id="message"
                cols="30"
                rows="2"
                class="form-control"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="btn btn-secondary rounded-pill py-2 px-4 text-white"
                :disabled="loadingItem.pos === 'requestOrder' || this.carts.length === 0"
              >
                購買確認
              </button>
              <div
                v-if="loadingItem.pos === 'requestOrder'"
                class="position-absolute top-50 start-100"
                style="transform: translateX(-10px)"
              >
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  apiGetCartList,
  apiDeleteCart,
  apiDeleteAllCart,
  apiUpdateCart,
  apiGenerateOrder,
  apiApplyCoupon,
} from '@/api';

export default {
  data() {
    return {
      carts: [],
      price: {
        total: 0,
        final_total: 0,
      },
      loadingItem: {
        pos: '',
        id: '',
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
      couponCode: '',
      usedCode: '',
      coupons: [],
    };
  },
  methods: {
    async fetchCartList() {
      this.$vLoading(true);
      try {
        const res = await apiGetCartList();
        const { success, data } = res.data;
        if (success) {
          this.carts = data.carts;
          this.price.total = data.total;
          this.price.final = data.final_total;
        } else {
          this.$vHttpsNotice(res, '查看購物清單');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        const res = await apiUpdateCart({ cartId, productId, qty });
        const { success } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '修改購物車');
        }
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    async deleteItemFromCart({ cartId }) {
      this.toggleLoding({ pos: 'delItem', id: cartId });
      try {
        const res = await apiDeleteCart(cartId);
        const { success } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '刪除購物車項目');
        }
        this.toggleLoding({ pos: '', id: '' });
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    async deleteAllCart() {
      try {
        const res = await apiDeleteAllCart();
        const { success } = res.data;
        if (success) {
          this.carts = [];
          this.fetchCartList();
        } else {
          this.$vHttpsNotice(res, '刪除所有購物車');
        }
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    async requestOrder() {
      this.toggleLoding({ pos: 'requestOrder' });
      try {
        const res = await apiGenerateOrder({
          user: this.form.user,
          message: this.form.message,
        });
        const { success } = res.data;
        if (success) {
          this.$vHttpsNotice(res, '送出訂單');
          this.$router.push('/');
          // await this.fetchCartList();
          // await this.$refs.form.resetForm(); // 記得要清data資料
        } else {
          this.$vHttpsNotice(res, '送出訂單');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '' });
      }
    },
    async applyCoupn() {
      this.toggleLoding({ pos: 'applyCoupon' });
      try {
        const res = await apiApplyCoupon(this.couponCode);
        if (res.data.success) {
          this.usedCode = this.couponCode;
        }
        this.couponCode = '';
        this.$vHttpsNotice(res, '使用優惠券');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '' });
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
  },
  created() {
    this.fetchCartList();
  },
};
</script>
