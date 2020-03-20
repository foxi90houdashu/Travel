<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import Swiper from './components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper
  }
}
</script>
