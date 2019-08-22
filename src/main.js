import { NavBar } from 'vant';
import { Button } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/nav-bar/style';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'



Vue.config.productionTip = false

Vue.use(NavBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
