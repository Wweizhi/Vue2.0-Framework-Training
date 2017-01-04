import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import Rx from 'rxjs/Rx'
import VueRx from 'vue-rx'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRx, Rx)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})