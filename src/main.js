import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

localStorage.setItem('token', '123')
console.log('在main中设置了token')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
