import { createApp } from 'vue';

import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import $loading from '@/services/loading';
import { errorHandleMessage, httpNoticeMessage } from '@/services/noticeMessageState';

import App from './App.vue';
import router from './router';

import { currency, localeDateStr, localeTimeStr } from './services/filters';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);

// globalProperties start
app.config.globalProperties.$filters = {
  currency,
  localeDateStr,
  localeTimeStr,
};

app.config.globalProperties.$vLoading = $loading;

app.config.globalProperties.$vHttpsNotice = httpNoticeMessage;
app.config.globalProperties.$vErrorNotice = errorHandleMessage;
// globalProperties end

app
  .use(VueLoading)
  .use(router)
  .component('v-form', Form)
  .component('v-field', Field)
  .component('error-message', ErrorMessage)
  .mount('#app');
