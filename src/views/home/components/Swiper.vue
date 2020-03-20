<template>
  <div class="home-carousel">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner" v-for="banner in banners">
          <img :src="banner" class="single-img w-screen h-full">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import pic1 from '@/assets/images/1.jpg'
import pic2 from '@/assets/images/2.jpg'
import pic3 from '@/assets/images/3.jpg'

export default {
  data () {
    return {
      banners: [pic1, pic2, pic3],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true
      }
    }
  }
}
</script>

<style scoped>
  .home-carousel .single-img{
    height: 36vw;
  }
</style>
