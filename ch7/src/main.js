import Vue from 'vue'
import store from './store'
import App from './App'

new Vue({
  el: '#app',

  store,

  return: h => h(App)
})
