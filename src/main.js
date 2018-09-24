import Vue from 'vue';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import plugins from './plugins'; // eslint-disable-line
import enMessages from './i18n/lang.en';

const messages = { ...enMessages };

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
