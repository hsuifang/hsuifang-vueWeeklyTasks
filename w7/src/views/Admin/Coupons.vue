<template>
  <div class="container pt-4 pb-4 pt-lg-7 pb-lg-7">
    <div class="card">
      <div class="card-body">
        <!-- create Btn -->
        <div class="d-flex justify-content-md-between pr-3 mb-4">
          <h2 class="h6 text-secondary">優惠券清單</h2>
          <button
            class="btn btn-outline-primary rounded-pill shadow-sm"
            type="button"
            aria-controls="modifyCoupoonItem"
            @click="handleCouponItem(null)"
          >
            建立新優惠券
          </button>
        </div>
        <table class="table caption-top">
          <thead>
            <tr>
              <th scope="col">產品名稱</th>
              <th scope="col">折扣碼</th>
              <th scope="col">使用期限</th>
              <th scope="col">優惠價</th>
              <th scope="col">是否啟用</th>
              <th scope="col">功能</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="isLoading">
              <td class="text-center text-muted" colspan="5">
                <img width="100" src="https://media.giphy.com/media/wnYB3vx9t6PXiq1ubB/giphy.gif" />
              </td>
            </tr>
            <template v-else>
              <tr v-for="item in coupons" :key="item.id">
                <td>{{ item.title }}</td>
                <td>{{ item.code }}</td>
                <td>{{ item.due_date && new Date(item.due_date).toLocaleDateString('zh-TW') }}</td>
                <td>{{ item.percent }}折</td>
                <td>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      v-model="item.is_enabled"
                      @change="toggleCouponItemStatus(item)"
                    />
                  </div>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-primary me-1"
                    data-action="remove"
                    @click="handleCouponItem(item)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger text-white"
                    data-action="remove"
                    @click="deleteCouponItem({ id: item.id, title: item.title })"
                  >
                    刪除
                  </button>
                </td>
              </tr>
              <!-- no data -->
              <tr v-if="coupons.length === 0" class="text-center text-muted" colspan="6">
                <td class="text-center text-muted" colspan="6">無商品</td>
              </tr>
            </template>
          </tbody>
        </table>
        <div class="d-flex justify-content-md-between">
          <p>
            目前有 <span>{{ coupons.length }}</span> 項優惠券
          </p>
          <Pagination :pageInfo="pageInfo" @changePage="changePage"></Pagination>
        </div>
      </div>
    </div>
    <CouponModal
      ref="couponModal"
      :isCreate="isCreateItem"
      :couponDetail="currentItem"
      @updateCoupon="submitCouponItem"
      @clearItem="currentItem = {}"
    />
  </div>
</template>
<script>
import { apiGetCoupons, apiCreateCoupon, apiUpdateCoupon, apiDelCoupon } from '@/api';
import Pagination from '@/components/Pagination.vue';
import CouponModal from '@/components/CouponModal.vue';

export default {
  components: {
    Pagination,
    CouponModal,
  },
  data() {
    return {
      currentItem: {},
      coupons: [],
      couponsCount: 0,
      pageInfo: {
        current_page: 1,
        has_next: false,
        has_pre: false,
        total_pages: 1,
      },
      isCreateItem: true,
      isLoading: false,
    };
  },
  methods: {
    generateItem() {
      return {
        title: '',
        is_enabled: 1,
        percent: 0,
        due_date: '',
      };
    },
    // 取得產品資料
    async fetchCoupons(page = 1) {
      try {
        this.isLoading = true;
        const res = await apiGetCoupons(page);
        const { coupons, pagination, success } = res.data;
        if (success) {
          this.coupons = coupons;
          this.pageInfo = pagination;
        } else {
          this.$vHttpsNotice(res, '優惠券顯示');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.isLoading = false;
      }
    },
    async toggleCouponItemStatus(item) {
      console.log(item);
      this.isLoading = true;
      this.currentItem = item;
      this.currentItem.is_enabled = this.currentItem.is_enabled ? 1 : 0;

      this.isCreateItem = false;

      await this.submitCouponItem(this.currentItem);
      this.isLoading = false;
    },
    async deleteCouponItem({ id, title }) {
      if (window.confirm(`你確定要刪除-${title}嗎？`)) {
        this.isLoading = true;
        try {
          const res = await apiDelCoupon(id);
          if (res.data.success) {
            this.fetchCoupons();
          }
        } catch (error) {
          this.isLoading = false;
          this.$vErrorNotice();
        }
      }
    },
    // 新增及編輯
    async submitCouponItem(content) {
      try {
        const couponId = content.id;
        const res = this.isCreateItem
          ? await apiCreateCoupon({ data: content })
          : await apiUpdateCoupon({ id: couponId, data: { data: content } });
        const { success } = res.data;
        if (success) {
          this.$refs.couponModal.closeModal();
          if (couponId) {
            const idx = this.coupons.findIndex((item) => item.id === couponId);
            if (idx !== -1) {
              this.coupons[idx] = content;
            }
          } else {
            this.fetchCoupons();
          }
        }
        this.$vHttpsNotice(res, `${this.isCreateItem ? '新增' : '調整'}優惠券調整`);
      } catch (error) {
        this.$vErrorNotice();
      }
    },
    // 觸發新增編輯按鈕
    handleCouponItem(item) {
      if (item) {
        this.currentItem = item;
        this.isCreateItem = false;
      } else {
        this.currentItem = this.generateItem();
        this.isCreateItem = true;
      }
      this.$refs.couponModal.openModal();
    },
    // [emit]: product-canvasoff
    updateCouponItem(info) {
      this.submitCouponItem(info);
    },
    changePage(page) {
      this.fetchCoupons(page);
    },
    init() {
      this.currentItem = this.generateItem();
      this.fetchCoupons();
    },
  },
  created() {
    this.init();
  },
};
</script>
