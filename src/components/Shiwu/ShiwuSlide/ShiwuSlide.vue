<template>
  <div>
    <div class="swiper-container  " >
      <div class="swiper-wrapper  ">
        <div class="swiper-slide slideImg1">
          <img src="../../img/swImgSlide/1.jpg">
        </div>
        <div class="swiper-slide slideImg2">
          <img src="../../img/swImgSlide/2.jpg">
        </div>
        <div class="swiper-slide slideImg3">
          <img src="../../img/swImgSlide/3.jpg">
        </div>
        <div class="swiper-slide slideImg4">
          <img src="../../img/swImgSlide/4.jpg">
        </div>
        <div class="swiper-slide slideImg5">
          <img src="../../img/swImgSlide/5.jpg">
        </div>
        <div class="swiper-slide slideImg6">
          <img src="../../img/swImgSlide/6.jpg">
        </div>
        <div class="swiper-slide slideImg7">
          <img src="../../img/swImgSlide/7.jpg">
        </div>
        <div class="swiper-slide slideImg8">
          <img src="../../img/swImgSlide/8.jpg">
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
    margin-top: 2.2rem;
    background-color: #ffffff;
  }
  .swiper-container img{
    width: 100%;
    padding-left: 0.3rem;
  }
  .swiper-wrapper{
    width: 9rem;
    margin-left: 0.2rem;
    margin-right: 0.1rem;

  }

</style>
