<template>
   <div >
     <Header></Header>
     <div class="wrap">
       <ShopCart></ShopCart>
     </div>
   </div>
</template>

<script>
  import Header from '../../components/Header/Header.vue'
  import ShopCart from '../../components/ShopCart/ShopCart/ShopCart.vue'

  export default {
    components: {
      Header,
      ShopCart,
    }
  }
</script>


<style>

.wrap{
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1.5rem;

}
</style>
