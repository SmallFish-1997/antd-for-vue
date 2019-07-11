import '@babel/polyfill';
import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import store from './store'
import i18n from './language/i18n';
import {
  Button,
  LocaleProvider,
  DatePicker,
  Radio,
} from 'ant-design-vue'
Vue.use(Button)
Vue.use(LocaleProvider)
Vue.use(DatePicker)
Vue.use(Radio)

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
