<template>
 <div>
   <div class="FooterWrap">
     <footer class="footerContainer">
      <span class="guide_item"  @click="goto('/Msite')">
        <img class="tabBar Msite" src="./images/home2.png">
        <span class="txt" >首页</span>
      </span>
       <span class="guide_item" @click="goto('/Shiwu')" >
        <img class="tabBar Shiwu" src="./images/shiwu1.png">
        <span  class="txt"  >识物</span>
      </span>
       <span class="guide_item" @click="goto('/Types')">
        <img class="tabBar Types" src="./images/types1.png" >
        <span class="txt"  >分类</span>
      </span>
       <span class="guide_item" @click="goto('/ShopCart')">
        <img class="tabBar ShopCart" src="./images/cart1.png" >
        <span class="txt"  >购物车</span>
      </span>
       <span class="guide_item"  @click="goto('/Personal')">
        <img class="tabBar Personal" src="./images/personal1.png" >
        <span class="txt"  >个人</span>
      </span>
     </footer>

   </div>
 </div>


</template>
<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }

    }
  }
</script>
<style>

  .FooterWrap{
    width: 100%;
  }
  .footerContainer {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-top:1px solid #d9d9d9;
    bottom: 0;
    left:0;
    height:1.8rem;
    background-color:#fafafafa;
    margin-top:0.2rem;
  }
 .guide_item{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-bottom: 0.1rem;

}
  .tabBar{
    width: 0.8rem;
    height: 0.8rem;
    background-size: 100%;
  }

  .guide_item .txt{
    width: 100%;

    font-size: 0.3rem;
    margin-top: 0.15rem;
    text-align: center;
  }


</style>
