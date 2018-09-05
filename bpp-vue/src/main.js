import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import axios from './axios'
require('../static/css/reset.css')
require('../static/css/main.css')

Vue.use(Mint);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})
