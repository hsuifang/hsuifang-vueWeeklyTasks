<template>
  <!-- 購物車 -->
  <div class="pb-5">
    <div class="container">
      <!-- 訊息 -->
      <div v-show="info.isShow" class="alert" :class="info.status" role="alert">
        {{ info.msg }}
      </div>
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
                          <span class="text-muted font-weight-normal font-italic"
                            >類別: {{ item.product.category }}</span
                          >
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
          <h6 class="bg-light rounded-pill px-4 py-3 fw-bold text-secondary">金額明細</h6>
          <div class="p-4">
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">購買</strong><strong>NT$ {{ price.total }}</strong>
              </li>
              <li class="d-flex justify-content-between py-3 border-bottom">
                <strong class="text-muted">折扣</strong><strong>$0.00</strong>
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
                class="btn btn-secondary rounded-pill py-2 px-4"
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
} from '@/api';
import emitter from '@/services/emitter';

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
      info: {
        isShow: '',
        status: '',
        msg: '',
      },
    };
  },
  methods: {
    async fetchCartList() {
      emitter.emit('v-loading', { isLoading: true });
      try {
        const res = await apiGetCartList();
        const { success, message, data } = res.data;
        if (success) {
          this.carts = data.carts;
          this.price.total = data.total;
          this.price.final = data.final_total;
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        emitter.emit('v-loading', { isLoading: false });
      }
    },
    async updateCart({ cartId, productId, qty }) {
      try {
        const res = await apiUpdateCart({ cartId, productId, qty });
        const { success, message } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.showMsg({ msg: message, status: 'danger' });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItemFromCart({ cartId }) {
      this.toggleLoding({ pos: 'delItem', id: cartId });
      try {
        const res = await apiDeleteCart(cartId);
        const { success, message } = res.data;
        if (success) {
          this.fetchCartList();
        } else {
          this.showMsg({ msg: message, status: 'danger' });
        }
        this.toggleLoding({ pos: '', id: '' });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteAllCart() {
      try {
        const res = await apiDeleteAllCart();
        const { success, message } = res.data;
        if (success) {
          this.carts = [];
          this.fetchCartList();
        } else {
          this.showMsg({ msg: message, status: 'danger' });
        }
      } catch (error) {
        console.log(error);
      }
    },
    async requestOrder() {
      this.toggleLoding({ pos: 'requestOrder' });
      try {
        const res = await apiGenerateOrder({
          user: this.form.user,
          message: this.form.message,
        });
        const { success, message } = res.data;
        if (success) {
          this.$router.push('/');
          // await this.fetchCartList();
          // await this.$refs.form.resetForm(); // 記得要清data資料
        } else {
          this.showMsg({ msg: message, status: 'danger' });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.toggleLoding({ pos: '' });
      }
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
    showMsg({ msg, status }) {
      this.info.isShow = true;
      this.info.status = `alert-${status}`;
      this.info.msg = msg;
      setTimeout(() => {
        this.info.isShow = false;
        this.info.status = '';
        this.info.msg = '';
      }, 2000);
    },
  },
  created() {
    this.fetchCartList();
  },
};
</script>
