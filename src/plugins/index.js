import Vue from 'vue';
import vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
Vue.use(vuetify, {
  theme: {
    primary: colors.grey.darken4,
    secondary: colors.lightBlue.lighten1,
    accent: colors.lightBlue.lighten1,
  },
  iconfont: 'mdi',
});
