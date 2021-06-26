<template>
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    data-bs-backdrop="static"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('clearItem')"
          ></button>
        </div>
        <div class="modal-body px-5 py-4">
          <div class="row">
            <div class="col-lg-5 mb-5">
              <h3 class="fs-6 bg-light rounded-pill px-4 py-3 fw-bold text-secondary">用戶資料</h3>
              <ul class="list-unstyled px-4" v-if="tempOrder.user">
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">姓名</h4>
                  <p>{{ tempOrder.user.name }}</p>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">Email</h4>
                  <p>{{ tempOrder.user.email }}</p>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">電話</h4>
                  <p>{{ tempOrder.user.tel }}</p>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">地址</h4>
                  <p>{{ tempOrder.user.address }}</p>
                </li>
              </ul>
            </div>
            <div class="col-lg-7">
              <h3 class="fs-6 bg-light rounded-pill px-4 py-3 fw-bold text-secondary">訂單細節</h3>
              <ul class="list-unstyled px-4 mb-4">
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">訂單編號</h4>
                  <p>{{ tempOrder.id }}</p>
                </li>
                <li class="d-flex justify-content-between align-items-center py-3 border-bottom">
                  <h4 class="fs-6 mb-0">下單時間</h4>
                  <p>
                    {{ $filters.localeDateStr(tempOrder.create_at) }}
                    {{ $filters.localeTimeStr(tempOrder.create_at) }}
                  </p>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">付款時間</h4>
                  <p>
                    <span v-if="tempOrder.paid_date">
                      {{ $filters.localeDateStrs(tempOrder.paid_date) }}
                    </span>
                    <span v-else>-</span>
                  </p>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">付款狀態</h4>
                  <p>
                    <strong v-if="tempOrder.is_paid" class="text-success">已付款</strong>
                    <span v-else class="text-muted">尚未付款</span>
                  </p>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom">
                  <h4 class="fs-6 mb-0">總金額</h4>
                  <p>
                    {{ $filters.currency(tempOrder.total) }}
                  </p>
                </li>
              </ul>
              <h3 class="fs-6 bg-light rounded-pill px-4 py-3 mb-3 fw-bold text-secondary">
                選購商品
              </h3>
              <ul class="list-unstyled px-4 mb-3">
                <li
                  class="d-flex justify-content-between"
                  v-for="item in tempOrder.products"
                  :key="item.id"
                >
                  <h3 class="fs-6">{{ item.product.title }}</h3>
                  <p>{{ item.qty }} / {{ item.product.unit }}</p>
                  <p>{{ $filters.currency(item.final_total) }}</p>
                </li>
              </ul>
              <div class="d-flex justify-content-end px-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="$emit('updateOrder', tempOrder)">
            修改付款狀態
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    orderInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  mixins: [modalMixin],
  emits: ['updateOrder', 'clearItem'],
  data() {
    return {
      tempOrder: {},
    };
  },
  watch: {
    orderInfo() {
      this.tempOrder = { ...this.orderInfo };
    },
  },
};
</script>
