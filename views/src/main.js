import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routers from './router'
import Store from './store/main'

// Bootstrap四个引用全家桶
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery'
import 'popper.js'

Vue.use(Vuex)
Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'history',
  routes: Routers
})

const store = new Vuex.Store(Store)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')