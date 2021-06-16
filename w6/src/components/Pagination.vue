<template>
  <div class="btn-group me-2" role="group" aria-label="First group">
    <button
      type="button"
      class="btn btn-outline-primary"
      :disabled="!pageInfo.has_pre"
      @click="changePage(pageInfo.current_page - 1)"
    >
      &lt;
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: num === pageInfo.current_page }"
      v-for="num in pageInfo.total_pages"
      :key="`page${num}`"
      @click="changePage(num)"
    >
      {{ num }}
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      :disabled="!pageInfo.has_next"
      @click="changePage(pageInfo.current_page + 1)"
    >
      &gt;
    </button>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  props: {
    pageInfo: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    changePage(num) {
      if (num !== this.pageInfo.current_page) {
        this.$emit('changePage', num);
      }
    },
  },
};
</script>
