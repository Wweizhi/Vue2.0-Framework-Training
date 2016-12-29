import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})