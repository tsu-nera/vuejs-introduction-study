import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
  el: '#app',

  store,

  return: h => h(App)
})
