<template>
 <div>
   <div class="nav-header">
     <header class="header">
       <slot class="HomeIcon">

       </slot>
       <a href="javascript:;" class="logo"></a>
         <div class="search">
           <i class="icon"></i>
           <span class="serach-content">搜索商品，共97565款好物</span>
         </div>
      <slot>

      </slot>

     </header>
     <div class="scroll">
       <div class="scroll-container">
         <div class="list">
           <div class="listItem  ">
             <a class="txt ">推荐</a>
           </div>
           <div class="listItem"  >
             <a class="txt  ">居家 </a>
           </div>
           <div class="listItem"  >
             <a class="txt :after">鞋包配饰 </a>
           </div>
           <div class="listItem"  >
             <a class="txt">服装 </a>
           </div>
           <div class="listItem"  >
             <a class="txt">电器 </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>

</template>

<script>

/*
  export default {
    components: {
      Header
    }
  }*/
</script>

<style>
 .nav-header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    z-index: 10;
    background-color: #ffffff;
 }

 .header{
    padding:0.3rem ;
    display: flex;
    align-items: center;
  }
  .header .logo  {
    display: flex;
    /*padding-top: 0.3rem;*/
    background-image: url("./imgHeader/logo.png");
    width: 1.9rem;
    height: 0.6rem;
    margin-right: 0.3rem;
    background-position: center;
    background-size: 100% 100%;

  }
 .search{
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 0.9rem;
    font-size: 0.4rem;
    background-color: #ededed;
    border-radius: 0.1rem;

  }
   .search .icon{
    display: flex;
    align-items: baseline;
    width: 0.3rem;
    height: 0.3rem;
    background-image: url("./imgHeader/search.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 0.2rem;
  }
  .serach-content{
    color: #000000;
    display: block;
  }
  .scroll{

  }
  .scroll-container{
    width: 100%;
    display: flex;
    overflow: hidden;
  }
 .list{
    width: 100%;
    display :flex;
    justify-content: space-around;
    flex-shrink: 0 ; /*!*文字不换行*!*/
    margin-top: -0.1rem;
   background-color: #ffffff;

  }
 .listItem {
    display: flex;
    justify-content: space-around;
    font-size: 0.4rem;
    padding-top: 0.2rem;

  }
 .listItem .txt{
    position: relative;
    padding: 0 0.2rem;
    line-height: 0.5rem;
    font-size: 0.4rem;
    text-align: center;
    background-color: #FFFFFF;
  }
   .listItem:active{
    color: #b4282d;
  }
   .listItem:first-child :after{
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 0.06rem;
    width: 90%;
    margin-left: 0.1rem;
    background-color: #b4282d;
  }



</style>
