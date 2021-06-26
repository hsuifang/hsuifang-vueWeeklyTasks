<template>
  <div class="container min-vh-100">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card top-50 p-3">
          <div class="card-body">
            <form @submit.prevent="handleLogin" id="js-loginForm">
              <h3 class="text-center">登入</h3>
              <div class="mb-3">
                <label for="js-loginEmail" class="form-label">帳號</label>
                <input
                  id="js-loginEmail"
                  type="email"
                  class="form-control"
                  v-model.trim="login.username"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="js-loginPassword" class="form-label">密碼</label>
                <input
                  id="js-loginPassword"
                  type="password"
                  class="form-control"
                  v-model.trim="login.password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary text-white m-auto d-block">送出</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JWT from '@/api/cookies';
import { apiSignIn } from '@/api';

export default {
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async handleLogin() {
      this.$vLoading(true);
      try {
        const { username, password } = this.login;
        const user = { username, password };
        const res = await apiSignIn(user);
        const { success, token } = res.data;
        if (success) {
          JWT.saveToken(token);
          this.$router.push('/admin/products');
        } else {
          this.$vHttpsNotice(res, '登入');
        }
      } catch (error) {
        this.$vErrorNotice();
      } finally {
        this.$vLoading(false);
      }
    },
  },
};
</script>
