<template>
  <div
    ref="modal"
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    aria-labelledby="userProductModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">產品</h5>
          <button
            type="button"
            class="btn-close my-1"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-5">
                <div class="gallerySlides">
                  <div
                    v-if="productDetail.imageUrl"
                    class="gallerySlides__main"
                    :style="{ backgroundImage: `url(${productDetail.imageUrl})` }"
                  ></div>
                  <div v-else class="gallerySlides__main">
                    <p class="gallerySlides__caption">目前無圖片</p>
                  </div>
                  <ul class="gallerySlides__wrap">
                    <li
                      v-for="(item, idx) in resetImages"
                      :key="idx"
                      class="gallerySlides__slideImg"
                      :style="{ backgroundImage: `url(${item})` }"
                    ></li>
                  </ul>
                </div>
              </div>
              <div class="col-7">
                <h1 class="h3 text-secondary">{{ productDetail.title }}</h1>
                <div class="d-flex align-items-end">
                  <h2 class="h4 me-1 mb-0">$ {{ productDetail.price }}</h2>
                  <p class="text-muted">
                    <del>$ {{ productDetail.origin_price }}</del>
                  </p>
                </div>
                <p class="text-secondary mb-0">類別:{{ productDetail.category }}</p>
                <i
                  class="fa fa-star mb-4 text-warning"
                  v-for="star in Number(productDetail.rate || 0)"
                  :key="star"
                ></i>
                <p class="fw-bold ps-1 mb-2">
                  剩下 {{ productDetail.num }} {{ productDetail.unit }}
                </p>
                <div class="input-group mb-2">
                  <div class="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="購買數量"
                      min="1"
                      aria-describedby="button-addon3"
                      class="form-control border-0"
                      v-model.number="requestQty"
                    />
                    <div class="input-group-append border-0">
                      <button
                        type="button"
                        class="btn btn-primary px-4 rounded-pill"
                        @click="addCart"
                      >
                        <i class="fa fa-cart-plus me-2"></i>加入購物車
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <ul class="list-unstyled pb-3">
                  <li>
                    <h6>內容</h6>
                    <p>{{ productDetail.content }}</p>
                  </li>
                  <li>
                    <h6>描述</h6>
                    <p>{{ productDetail.description }}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// https://getbootstrap.com/docs/5.0/getting-started/webpack/
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    itemDetail: {
      type: Object,
    },
  },
  mixins: [modalMixin],
  data() {
    return {
      productDetail: {},
      requestQty: 1,
    };
  },
  computed: {
    resetImages() {
      const imagesArr = this.productDetail.imagesUrl;
      return imagesArr ? this.productDetail.imagesUrl.filter((item) => Boolean(item)) : [];
    },
  },
  methods: {
    addCart() {
      this.$emit('addCart', {
        productId: this.productDetail.id,
        qty: this.requestQty,
      });
      this.closeModal();
    },
  },
  watch: {
    itemDetail(val) {
      this.productDetail = val;
    },
  },
};
</script>
