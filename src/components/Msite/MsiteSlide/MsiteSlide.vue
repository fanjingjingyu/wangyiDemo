<template>
<div>
  <div class="swiper-container  " >
    <div class="swiper-wrapper  ">
      <div class="swiper-slide slideImg1">
        <img src="./imgSlide/01.jpg">
      </div>
      <div class="swiper-slide slideImg2">
        <img src="./imgSlide/02.jpg">
      </div>
      <div class="swiper-slide slideImg3">
        <img src="./imgSlide/03.jpg">
      </div>

      <div class="swiper-slide slideImg4">
        <img src="./imgSlide/04.jpg">
      </div>
      <div class="swiper-slide slideImg5">
        <img src="./imgSlide/05.jpg">
      </div>

      <div class="swiper-slide slideImg6">
        <img src="./imgSlide/06.jpg">
      </div>
      <div class="swiper-slide slideImg7">
        <img src="./imgSlide/07.jpg">
      </div>

      <div class="swiper-slide slideImg8">
        <img src="./imgSlide/08.jpg">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>

</div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      this.$nextTick(()=> {
        new Swiper('.swiper-container', {
          slidesPerView: 'auto', /*swiper内容超出添加横向滚动条*/

          autoplay:true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  }


</script>


<style>

.swiper-container{
   width: 100%;

}
  .swiper-container img{
    width: 100%;

  }
</style>
