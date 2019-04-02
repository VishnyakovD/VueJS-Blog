import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'


import VueAxios from 'vue-axios'
import axios from 'axios'

import ElementUI from 'element-ui';
Vue.use(ElementUI);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
