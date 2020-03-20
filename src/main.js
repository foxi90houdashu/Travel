import Vue from 'vue'
import App from './App.vue'
import router from './router'

// VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// 公共css样式
import './assets/styles/iconfont.css'
import './main.css'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
