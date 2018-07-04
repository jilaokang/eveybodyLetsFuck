import Vue from 'vue'
import App from './App.vue'

// sb bootstrap四个引用全家桶
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery'
import 'popper.js'

// 配置vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routers from './router'

const router = new VueRouter({
  mode: 'history',
  routes:routers
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')