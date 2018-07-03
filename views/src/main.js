import Vue from 'vue'
import App from './App.vue'

// sb bootstrap四个引用全家桶
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery'
import 'popper.js'

new Vue({
  render: h => h(App)
}).$mount('#app')