<template>
  <div class="MsiteWrap">
    <Header></Header>
    <div class="wrap">
      <MsiteSlide></MsiteSlide>
      <MsiteBrandProduce></MsiteBrandProduce>
      <MsiteTimer></MsiteTimer>
      <MsiteTopicGoods></MsiteTopicGoods>
      <MsiteJujiaGoods></MsiteJujiaGoods>
      <MsiteGoods></MsiteGoods>
      <MsiteNewProduct></MsiteNewProduct>
      <MsiteFooter></MsiteFooter>
      <MsiteFixs></MsiteFixs>
    </div>
   </div>


</template>


<script>
  import Header from '../../components/Header/Header.vue'
  import MsiteSlide from '../../components/Msite/MsiteSlide/MsiteSlide.vue'
  import MsiteBrandProduce from '../../components/Msite/MsiteBrandProduce/MsiteBrandProduce.vue'
  import MsiteTimer from '../../components/Msite/MsiteTimer/MsiteTimer.vue'
  import MsiteTopicGoods from '../../components/Msite/MsiteTopicGoods/MsiteTopicGoods.vue'
  import MsiteJujiaGoods from '../../components/Msite/MsiteJujiaGoods/MsiteJujiaGoods.vue'
  import MsiteGoods from '../../components/Msite/MsiteGoods/MsiteGoods.vue'
  import MsiteNewProduct from '../../components/Msite/MsiteNewProduct/MsiteNewProduct.vue'
  import MsiteFooter from '../../components/Msite/MsiteFooter/MsiteFooter.vue'
  import MsiteFixs from '../../components/Msite/MsiteFixs/MsiteFixs.vue'

  export default {
    components: {
      Header,
      MsiteSlide,
      MsiteBrandProduce,
      MsiteTimer,
      MsiteTopicGoods,
      MsiteJujiaGoods,
      MsiteGoods,
      MsiteNewProduct,
      MsiteFooter,
      MsiteFixs
    }
  }
</script>


<style>

.wrap{
  width: 100%;
  margin-bottom: 1.8rem;
  margin-top: 2.2rem;
}

</style>
