<template>
  <div class="container py-5">
    <ul class="nav justify-content-center align-items-center">
      <li class="nav-item"><router-link class="nav-link" to="/">回到前台</router-link></li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/orders">後台訂單</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/coupons">後台優惠券</router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="handleLogout">登出</a>
      </li>
    </ul>
    <router-view v-if="isAuthenticated"></router-view>
  </div>
</template>
<script>
import { apiCheckUser, apiLogout } from '@/api';
import JWT from '@/api/cookies';

export default {
  name: 'Dashboard',
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    async checkLogin() {
      this.$vLoading(true);
      const token = JWT.getToken();
      if (token) {
        try {
          const res = await apiCheckUser(token);
          const { success } = res.data;
          if (success) {
            this.isAuthenticated = true;
            this.$router.push('/admin/products');
          } else {
            this.$router.push('/login');
          }
        } catch (error) {
          this.$vErrorNotice();
        } finally {
          this.$vLoading(false);
        }
      } else {
        this.$router.push('/login');
        this.$vLoading(false);
      }
    },
    // logout
    async handleLogout() {
      this.$vLoading(true);
      try {
        const res = await apiLogout();
        if (res.data.success) {
          JWT.removeToken();
          this.isAuthenticated = false;
          this.$router.push('/login');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
