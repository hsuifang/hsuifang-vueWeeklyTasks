<template>
  <div
    ref="refProductCanvas"
    class="offcanvas offcanvas-end"
    data-bs-backdrop="false"
    tabindex="-1"
    aria-labelledby="createItemLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="createItemLabel">產品資訊</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form @submit.prevent="submitProductItem" class="row g-3 align-items-end">
        <div class="col-md-12">
          <label for="title" class="form-label">產品名稱</label>
          <input type="text" class="form-control" id="title" v-model="currentProductItem.title" />
        </div>

        <div class="col-12">
          <label for="description" class="form-label">描述</label>
          <textarea
            class="form-control"
            id="description"
            placeholder="描述"
            row="3"
            v-model="currentProductItem.description"
          ></textarea>
        </div>
        <div class="col-12">
          <label for="content" class="form-label">內容</label>
          <textarea
            class="form-control"
            id="content"
            placeholder="內容"
            row="3"
            v-model="currentProductItem.content"
          ></textarea>
        </div>

        <div class="col-md-6">
          <label for="originPrice" class="form-label">原價</label>
          <input
            type="number"
            min="0"
            class="form-control"
            id="originPrice"
            v-model.number="currentProductItem.origin_price"
          />
        </div>
        <div class="col-md-6">
          <label for="price" class="form-label">售價</label>
          <input
            type="number"
            min="0"
            class="form-control"
            id="price"
            v-model.number="currentProductItem.price"
          />
        </div>
        <div class="col-md-4">
          <label for="category" class="form-label">類別</label>
          <input
            type="text"
            class="form-control"
            id="category"
            v-model="currentProductItem.category"
          />
        </div>
        <div class="col-md-4">
          <label for="unit" class="form-label">單位</label>
          <input type="text" class="form-control" id="unit" v-model="currentProductItem.unit" />
        </div>
        <div class="col-md-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="isEnabled"
              v-model="currentProductItem.is_enabled"
            />
            <label class="form-check-label" for="isEnabled"> 啟用 </label>
          </div>
        </div>
        <div class="col-md-12">
          <label for="rate" class="form-label">評價 - {{ currentProductItem.rate }}</label>
          <input
            type="range"
            class="form-range w-100"
            min="0"
            max="5"
            step="0.5"
            id="rate"
            v-model="currentProductItem.rate"
          />
        </div>
        <!-- 圖片 -->
        <div class="col-md-12">
          <label class="form-label" for="imageUrl">主要圖片</label>
          <img :src="currentProductItem.imageUrl" alt="" v-if="currentProductItem.imageUrl" />
          <input
            id="imageUrl"
            type="text"
            class="form-control"
            v-model.trim="currentProductItem.imageUrl"
          />
        </div>
        <div class="col-md-6" v-for="(img, idx) in currentProductItem.imagesUrl" :key="`img${idx}`">
          <label :for="`thumbnail${idx}`" class="form-label">縮圖{{ idx + 1 }}</label>
          <img v-if="img" :src="img" alt="暫時無圖片" />
          <input
            :id="`thumbnail${idx}`"
            type="text"
            class="form-control"
            v-model.trim="currentProductItem.imagesUrl[idx]"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary text-white w-100 rounded-pill">
            新增/編輯
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';

export default {
  props: {
    isCreate: {
      type: Boolean,
    },
    productItem: {
      type: Object,
    },
  },
  data() {
    return {
      currentProductItem: null,
      bsOffcanvas: '',
    };
  },
  methods: {
    // 新增及編輯
    submitProductItem() {
      const productId = this.currentProductItem.id;
      this.$emit('submitProductItem', {
        isNew: !productId,
        content: this.currentProductItem,
      });
    },
    openModal() {
      this.bsOffcanvas.show();
    },
    closeModal() {
      this.bsOffcanvas.hide();
    },
  },
  mounted() {
    const offCanvas = this.$refs.refProductCanvas;
    this.bsOffcanvas = new Offcanvas(offCanvas);
  },
  watch: {
    productItem(val) {
      this.currentProductItem = { ...val };
    },
  },
  created() {
    this.currentProductItem = { ...this.productItem };
  },
};
</script>
