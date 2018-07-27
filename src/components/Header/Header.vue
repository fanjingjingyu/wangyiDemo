<template>
  <div>
    <div class="HeaderWrap">
      <div class="nav-header">
        <header class="header">
          <router-link to="/Msite" class="HeadHome"></router-link>
          <router-link to="/Msite" class="HeadLogo"></router-link>
         <div class="search">
           <i class="icon  "></i>
           <span class="HeadSerach "  >搜索商品，共97565款好物</span>
         </div>
         <div to="/ ShopCart" class="HeadCart"  >
           <i class="HeaderCartCon"></i>
         </div>
        </header>
      </div>
    </div>
  </div>


</template>
<script>



</script>



<style>
  .HeaderWrap{
    width: 100%;
  }
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
    justify-content: space-around;
  }
 .HeadLogo   {

    background-image: url("./imgHeader/logo.png");
    width: 1.9rem;
    height: 0.6rem;
    background-size: 100%;
  }

 .search{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20%;
    max-width: 68%;
    height: 0.9rem;
    font-size: 0.4rem;
    background-color: #ededed;
    border-radius: 0.1rem;
  }
 .icon  {
    display: flex;
    /*align-items: baseline;*/
    width: 0.6rem;
    height: 0.6rem;
    background-image: url("./imgHeader/search.png");
    background-repeat: no-repeat;
    background-size: 100%  ;
    margin-right: 0.2rem;
  }

.HeadHome{
  display: block;
/*  background-color: lawngreen;*/
  background-image: url("./imgHeader/home1.png");
  background-size: 100%;
  width: 0.6rem;
  height: 0.6rem;
  float: left;
  vertical-align: middle;
}
  .HeadCart{
    display: block;
    vertical-align: middle;
    float: right;
    background-image: url("./imgHeader/cart1.png");
    width: 0.6rem;
    height: 0.6rem;
    background-size: 100%;
    background-repeat:no-repeat;

  }


</style>
