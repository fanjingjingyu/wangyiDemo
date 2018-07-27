<template>
  <div>
    <header class="header">
      <router-link  to="/Msite" class="HeadLogo"></router-link>
      <div class="MSearch">
        <i class="MSearchCon  "></i>
        <span class=" SerachIcon  ">搜索商品，共97565款好物</span>
      </div>
    </header>
    <div class="scroll-container">
      <ul class="list">
        <li class="listItem  ">
          <span class=" listItemtxt ">推荐</span>
        </li>
        <li class="listItem"  >
          <span class=" listItemtxt  ">居家 </span>
        </li>
        <li class="listItem"  >
          <span class="listItemtxt">鞋包配饰 </span>
        </li>
        <li class="listItem"  >
          <span class="listItemtxt">服装 </span>
        </li>
        <li class="listItem  ">
          <span class="listItemtxt ">推荐</span>
        </li>
        <li class="listItem"  >
          <span class="listItemtxt  ">居家 </span>
        </li>
        <li class="listItem"  >
          <span class="listItemtxt :after">鞋包配饰 </span>
        </li>
        <li class="listItem"  >
          <span class="listItemtxt">服装 </span>
        </li>
        <li class="listItem"  >
          <span class="listItemtxt">电器 </span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState, mapActions} from 'vuex'

  export default {


  mounted () {
      this.$nextTick(() => {
        new BScroll('.scroll-container', {
          Type: 2,  // 因为惯性滑动不会触发
          click: true,   //默认是禁止点击的
          scrollX: true,
          scrollY:false
        })
      })
    }


  }
</script>

<style>

 .header{
   padding:0.3rem ;
   display: flex;
   align-items: center;
   justify-content: space-around;
 }
 .HeadLogo   {
   background-image: url("./imgHeader/logo.png");
   width: 1.9rem;
   height: 0.6rem;
   background-size: 100%;
   margin-right: 0.2rem;
 }

 .MSearch{
   display: flex;
   align-items: center;
   justify-content: center;
   width: 65%;
   height: 0.9rem;
   font-size: 0.4rem;
   background-color: #ededed;
   border-radius: 0.2rem;
 }
 .MSearchCon  {
   display: flex;
   width: 0.7rem;
   height: 0.7rem;
   background-image: url("./imgHeader/search.png");
   background-repeat: no-repeat;
   background-size: 100%  ;
   margin-right: 0.2rem;
   margin-left: 0.2rem;
 }

 .scroll-container{
    width: 10rem;
    overflow: hidden;
  }
 .list{
    width: 100%;
    display :flex;
    align-items: center;
    margin-left: 0.2rem;
    background-color: #ffffff;
    flex-shrink: 0 ; /*!*文字不换行*!*/
  }

 .listItem {
    width: 100%;
    display: flex;
    line-height: 0.5rem;
    font-size: 0.4rem;
    background-color: #FFFFFF;
  }
 .listItemtxt{
   width:1.5rem;
   height: 0.5rem;
   text-align: center;
   vertical-align: middle;
 }

  .listItem:first-child {
     color: #b4282d;
     border-bottom: solid 2px #b4282d;
     }

   /*.listItem:first-child :after{*/
    /*position: absolute;*/
    /*content: "";*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*height: 0.06rem;*/
    /*width: 90%;*/
    /*margin-left: 0.1rem;*/
    /*background-color: #b4282d;*/
  /*}*/



</style>
