<template>
  <router-view />
  <Loading v-model:active="isLoading" :is-full-page="fullPage" loader="bars" color="#ffbbb9" />
</template>

<script>
import emitter from '@/services/emitter';
import Loading from 'vue-loading-overlay';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    handleLoading(status) {
      this.isLoading = status;
    },
  },
  created() {
    emitter.on('v-loading', ({ isLoading }) => this.handleLoading(isLoading));
  },
};
</script>

<style lang="scss">
@import './assets/all';
</style>
