<template>
 <div class="HeaderWrap">
   <div class="nav-header">
     <header class="header">
       <a href="javascript:;" class="logo"></a>
       <div class="search">
         <i class="icon"></i>
         <span class="serach-content">搜索商品，共97565款好物</span>
       </div>
     </header>
     <div class="scroll">
       <div class="scroll-container ">
         <ul class="list">
           <li class="listItem  ">
             <span class="txt txt1">推荐</span>
           </li>
           <li class="listItem"  >
             <span class="txt">居家 </span>
           </li>
           <li class="listItem"  >
             <span class="txt :after">鞋包配饰 </span>
           </li>
           <li class="listItem  ">
             <span class="txt">推荐</span>
           </li>
           <li class="listItem"  >
             <span class="txt">居家 </span>
           </li>
           <li class="listItem"  >
             <span class="txt :after">鞋包配饰 </span>
           </li>
           <li class="listItem"  >
             <span class="txt">服装 </span>
           </li>
           <li class="listItem"  >
             <span class="txt">电器 </span>
           </li>
         </ul>
       </div>
     </div>
   </div>
 </div>

</template>

<script>

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
    background-image: url("./imgHeader/logo.png");
    width: 1.9rem;
    height: 0.6rem;
    margin-right: 0.3rem;
    background-position: center;
    background-size: 100% 100%;

  }
 .search{
    display: flex;
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
    color: #414141;
    display: block;
  }
.scroll{
  width: 100%;
  display: flex;
  overflow: scroll;
  background-color: #ffffff;
}

 .list{
    width: 100%;
    float: left;
    display: flex;
    font-size: 0.4rem;
    padding-left: 0.3rem;

  }
 ::-webkit-scrollbar{
   display: none;
 }
 .listItem {
    width: 1.8rem;
    margin-right: 0.5rem;
    text-align: center;
    vertical-align: middle;
  }
 .txt{
   display:inline-block;

 }
 .txt1{
   border-bottom: solid 3px #cc0031;
   margin-bottom: 0.15rem;
   line-height: 0.5rem;
   color: #b4282d;
  }



</style>
