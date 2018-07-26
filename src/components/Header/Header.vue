<template>
  <div>
    <div class="HeaderWrap">
      <div class="nav-header">
        <header class="header">
          <router-link to="/Msite" class="headHome"></router-link>
          <router-link  class="headLogo"></router-link>
          <div class="search">
            <i class="icon"></i>
            <span class="headSerach ">搜索商品，共97565款好物</span>
          </div>
          <router-link to="/ ShopCart" class="headCart">
            <i class="HeaderCartCon"></i>
          </router-link>
        </header>

      </div>
    </div>
  </div>


</template>
<script>

  export default {
    name:'Header'



  }

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
  }
 .headLogo   {
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
  .headSerach {

    display: block;
  }

.headHome{
  display: inline-block;
  background-color: lawngreen;
  background-image: url("./imgHeader/home1.png");
  background-size: 100%;
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
}
  .headCart{
    display: inline-block;
    vertical-align: middle;
    background-color: #003399;
    background-image: url("./imgHeader/cart1.png");
    width: 0.4rem;
    height: 0.4rem;
    background-size: 100%;
    background-repeat:no-repeat;

  }


</style>
