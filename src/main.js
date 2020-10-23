import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './assets/js/rem'
import axios from 'axios'
Vue.prototype.axios=axios 

import { Button } from 'vant';
Vue.use(Button);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
