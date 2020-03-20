import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 公共css样式
import './assets/styles/iconfont.css'
import './main.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
