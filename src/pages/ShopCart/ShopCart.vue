<template>
  <div>
    <div class="WrapQuan">
      <span class=" Cart">购物车</span>
      <span class=" Quan">领券</span>
    </div>
     <div class="wrap">
       <ShopCart></ShopCart>
     </div>
   </div>
</template>

<script>

  import ShopCart from '../../components/ShopCart/ShopCart/ShopCart.vue'

  export default {
    components: {
      ShopCart,
    }
  }
</script>


<style>
.WrapQuan{
  width: 100%;
  padding-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}
.Cart{
  text-align: center;
  vertical-align: middle;
  width: 80%;
  height:1.2rem;
  font-size: 0.6rem;
  line-height: 0.6rem;
}
.Quan {

  color: #cc0031;
  width: 20%;
  height: 1.2rem;
  font-size: 0.4rem;
  line-height: 0.6rem;
}
.wrap{
  width: 100%;
  background-color: #d9d9d9;


}
</style>
