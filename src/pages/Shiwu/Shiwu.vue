<template>
 <div >
   <Header></Header>
      <div class="wrap">
        <ShiwuSlide></ShiwuSlide>
        <ShiwuArticle></ShiwuArticle>
        <ShiwuShiDian></ShiwuShiDian>
        <Zhenpin></Zhenpin>
      </div>
</div>
</template>

<script>
 import Header from '../../components/Header/Header.vue'
 import ShiwuSlide from '../../components/Shiwu/ShiwuSlide/ShiwuSlide.vue'
 import ShiwuArticle from '../../components/Shiwu/ShiwuArticle/ShiwuArticle.vue'
 import ShiwuShiDian from '../../components/Shiwu/ShiwuShiDian/ShiwuShiDian.vue'
 import Zhenpin from '../../components/Shiwu/Zhenpin/Zhenpin.vue'

 export default {

   components: {
     Header,
     ShiwuSlide,
     ShiwuArticle,
     ShiwuShiDian,
     Zhenpin,

   }

  }

</script>


<style>
  .wrap{
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 2.2rem;
  }

</style>
