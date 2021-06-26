<template>
  <div class="container pt-5 pb-3 mb-3">
    <!-- 商品列表-->
    <div class="row">
      <template v-if="products.length > 0">
        <div class="col-12 col-md-5 col-lg-4" v-for="item in products" :key="item.id">
          <div class="card mb-2 shadow-sm">
            <div class="card-img-top bg-primary">
              <img v-if="item.imageUrl" :src="item.imageUrl" alt="主要圖片" />
            </div>
            <div class="card-body">
              <h2 class="h6 card-title mb-1">{{ item.title }}</h2>
              <i
                class="fa fa-star text-warning mb-2"
                v-for="star in Number(item.rate || 0)"
                :key="star"
              ></i>
              <h5 class="text-secondary">NT${{ item.price }}</h5>
              <div class="d-flex justify-content-end">
                <div>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm rounded-pill me-2 px-3"
                    @click="showProductDetail(item)"
                    :disabled="loadingItem.pos === 'detail'"
                  >
                    查看
                  </button>
                  <div
                    v-if="loadingItem.pos === 'detail' && loadingItem.id === item.id"
                    class="position-absolute top-50 start-100"
                    style="transform: translateX(-20px)"
                  >
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-secondary btn-sm rounded-pill px-3 text-white"
                    @click="addToCart({ productId: item.id, qty: 1 })"
                    :disabled="loadingItem.pos === 'list' && loadingItem.id === item.id"
                  >
                    加入購物車
                  </button>
                  <div
                    v-if="loadingItem.pos === 'list' && loadingItem.id === item.id"
                    class="position-absolute top-50 start-100"
                    style="transform: translateX(-10px)"
                  >
                    <div class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <p v-else>目前無資料</p>
    </div>

    <!-- modal -->
    <UserProductModal ref="productModal" :item-detail="targetProduct" @add-cart="addToCart" />
  </div>
</template>
<script>
import { apiGetCleintProducts, apiAddCart, apiGetSpecficProduct } from '@/api';
import UserProductModal from '@/components/UserProductModal.vue';

export default {
  name: 'product',
  components: {
    UserProductModal,
  },
  data() {
    return {
      carts: [],
      products: [],
      pageInfo: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
      loadingItem: {
        pos: '',
        id: '',
      },
      targetProduct: {},
    };
  },
  methods: {
    async fetchProductList(page = 1) {
      this.$vLoading(true);
      try {
        const res = await apiGetCleintProducts(page);
        const { success, products, pagination } = res.data;
        if (success) {
          this.products = products;
          this.pageInfo = pagination;
        } else {
          this.$vHttpsNotice(res, '產品顯示');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
    async addToCart({ productId, qty }) {
      this.toggleLoding({ pos: 'list', id: productId });
      try {
        const res = await apiAddCart({ id: productId, qty });
        this.$vHttpsNotice(res, '加入購物車');
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.toggleLoding({ pos: '', id: '' });
      }
    },
    async showProductDetail(item) {
      this.toggleLoding({ pos: 'detail', id: item.id });
      const res = await apiGetSpecficProduct(item.id);
      const { success, product } = res.data;
      if (success) {
        this.targetProduct = product;
        this.$refs.productModal.openModal();
      } else {
        this.$vHttpsNotice(res, '查看產品');
      }
      this.toggleLoding({ pos: '', id: '' });
    },
    toggleLoding({ pos, id }) {
      this.loadingItem.pos = pos;
      this.loadingItem.id = id;
    },
  },
  created() {
    this.fetchProductList();
  },
};
</script>
