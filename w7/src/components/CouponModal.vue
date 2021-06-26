<template>
  <div
    class="modal fade"
    ref="modal"
    id="couponModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="couponModal"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isCreate">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('clearItem')"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title">名稱</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="couponInfo.title"
              placeholder="請輸入標題"
            />
          </div>
          <div class="mb-3">
            <label for="code">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="code"
              v-model="couponInfo.code"
              placeholder="請輸入優惠碼"
            />
          </div>
          <div class="mb-3">
            <label for="dueDate">到期日</label>
            <DatePicker class="inline-block h-full" v-model="dueDate">
              <template v-slot="{ inputValue, togglePopover }">
                <div class="flex items-center">
                  <input
                    id="dueDate"
                    :value="inputValue"
                    class="form-control"
                    @focus="togglePopover()"
                  />
                </div>
              </template>
            </DatePicker>
          </div>
          <div class="mb-3">
            <label for="percent">折扣百分比</label>
            <input
              type="number"
              class="form-control"
              id="percent"
              min="0"
              max="100"
              v-model.number="couponInfo.percent"
              placeholder="請輸入折扣百分比"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="couponInfo.is_enabled"
                id="isEnabled"
              />
              <label class="form-check-label" for="isEnabled"> 啟用 </label>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="$emit('updateCoupon', couponInfo)">
            更新優惠券
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';
import { DatePicker } from 'v-calendar';

export default {
  props: {
    isCreate: {
      type: Boolean,
    },
    couponDetail: {
      type: Object,
    },
  },
  emits: ['updateCoupon', 'clearItem'],
  components: {
    DatePicker,
  },
  mixins: [modalMixin],
  data() {
    return {
      couponInfo: {},
      dueDate: '',
      date: '',
    };
  },
  watch: {
    couponDetail(val) {
      this.couponInfo = { ...val };
      const date = this.couponInfo.due_date;
      this.dueDate = date ? new Date(date) : new Date();
    },
    dueDate() {
      const dateISOString = this.dueDate.toISOString();
      const date = dateISOString.split('T')[0];
      this.couponInfo.due_date = new Date(`${date} 23:59:59`).getTime();
    },
  },
};
</script>
