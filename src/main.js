
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/mock/mockServer'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
