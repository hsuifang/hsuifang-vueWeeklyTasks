<template>
  <div class="container pt-4 pb-4 pt-lg-7 pb-lg-7">
    <div class="card">
      <div class="card-body">
        <!-- create Btn -->
        <div class="d-flex justify-content-md-between pr-3 mb-4">
          <h2 class="h6 text-secondary">產品清單</h2>
          <button
            class="btn btn-outline-primary rounded-pill shadow-sm"
            type="button"
            aria-controls="modifyProductItem"
            @click="handleProductItem(null)"
          >
            建立新的產品
          </button>
        </div>
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">產品名稱</th>
              <th scope="col">評價</th>
              <th scope="col">原價</th>
              <th scope="col">售價</th>
              <th scope="col">是否啟用</th>
              <th scope="col">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ item.rate || '-' }}</td>
              <td>$ {{ item.origin_price }}</td>
              <td>$ {{ item.price }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :checked="item.is_enabled"
                    @change="toggleProductItemStatus(item)"
                  />
                </div>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-primary me-1"
                  data-action="remove"
                  @click="handleProductItem(item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-danger text-white"
                  data-action="remove"
                  @click="deleteProductItem({ id: item.id, title: item.title })"
                >
                  刪除
                </button>
              </td>
            </tr>
            <!-- no data -->
            <tr v-if="products.length === 0" class="text-center text-muted" colspan="5">
              <td class="text-center text-muted" colspan="5">無商品</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-md-between">
          <p>
            目前有 <span>{{ products.length }}</span> 項產品
          </p>
          <Pagination :pageInfo="pageInfo" @changePage="changePage"></Pagination>
        </div>
      </div>
    </div>

    <ProductModal
      ref="productModal"
      :productItem="currentProductItem"
      @submitProductItem="updateProductItem"
    />
  </div>
</template>
<script>
import {
  apiGetAdminProducts,
  apiDeleteProductItem,
  apiCreateProduct,
  apiUpdateProduct,
} from '@/api';
import Pagination from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';

export default {
  components: {
    Pagination,
    ProductModal,
  },
  data() {
    return {
      currentProductItem: null,
      products: [],
      productCount: 0,
      pageInfo: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
      isCreateItem: true,
    };
  },
  methods: {
    generateItemForm() {
      return {
        title: '',
        category: '',
        origin_price: null,
        price: null,
        unit: '',
        description: '',
        content: '',
        is_enabled: true,
        imageUrl: '',
        rate: 5,
        imagesUrl: ['', '', '', '', ''],
      };
    },
    // 取得產品資料
    async fetchProductData(page = 1) {
      try {
        this.$vLoading(true);
        const res = await apiGetAdminProducts(page);
        const { products, pagination, success, message } = res.data;
        if (success) {
          this.products = products.map((item) => ({
            ...item,
            is_enabled: Boolean(item.is_enabled),
          }));
          this.pageInfo = pagination;
        } else {
          alert(message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$vLoading(false);
      }
    },
    async toggleProductItemStatus(item) {
      this.currentProductItem = item;
      this.currentProductItem.is_enabled = !this.currentProductItem.is_enabled;
      await this.submitProductItem({ isNew: false, content: this.currentProductItem });
    },
    async deleteProductItem({ id, title }) {
      if (window.confirm(`你確定要刪除-${title}嗎？`)) {
        this.$vLoading(true);
        try {
          const res = await apiDeleteProductItem(id);
          if (res.data.success) {
            this.fetchProductData();
          }
        } catch (error) {
          this.$vLoading(false);
          console.log(error);
        }
      }
    },
    // 新增及編輯
    async submitProductItem({ isNew, content }) {
      try {
        this.$vLoading(true);
        const productId = content.id;
        const res = isNew
          ? await apiCreateProduct({ data: content })
          : await apiUpdateProduct({ id: productId, data: { data: content } });
        const { success, message } = res.data;
        if (success) {
          this.$refs.productModal.closeModal();
          if (productId) {
            const idx = this.products.findIndex((item) => item.id === productId);
            if (idx !== -1) {
              this.products[idx] = content;
            }
          } else {
            this.fetchProductData();
          }
        }
        alert(message);
      } catch (error) {
        console.log(error);
      } finally {
        this.$vLoading(false);
      }
    },
    // 觸發新增編輯按鈕
    handleProductItem(item) {
      if (item) {
        this.currentProductItem = item;
        this.isCreateItem = false;
      } else {
        this.currentProductItem = this.generateItemForm();
        this.isCreateItem = true;
      }
      this.$refs.productModal.openModal();
    },
    // [emit]: product-canvasoff
    updateProductItem(info) {
      this.submitProductItem(info);
    },
    changePage(page) {
      this.fetchProductData(page);
    },
    init() {
      this.currentProductItem = this.generateItemForm();
      this.fetchProductData();
    },
  },
  created() {
    this.init();
  },
};
</script>
