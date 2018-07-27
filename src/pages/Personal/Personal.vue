<template>
 <div>
  <!-- <div class="HeaderWrap">
     <div class="nav-header">
       <header class="header">
         <router-link to="/Msite" class="HeadHome"></router-link>
         <router-link to="/Msite" class="HeadLogo"></router-link>
         <div class="search">
           <i class="icon  "></i>
         </div>
         <div to="/ ShopCart" class="HeadCart"  >
           <i class="HeaderCartCon"></i>
         </div>
       </header>
     </div>
   </div>-->
   <Header></Header>
   <Personal></Personal>

 </div>

</template>


<script>
  import Header from '../../components/Header/Header.vue'

  import Personal from '../../components/Personal/Personal/Personal.vue'

  export default {

    components: {
      Header,
      Personal,
    }
  }
</script>

<style>
  .HeaderWrap{
    width: 100%;
    background-color: #d9d9d9;
  }

  .header{
    background-color: #ffffff;
    width: 100%;
    height: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .HeadLogo   {
    background-image: url("./../../components/img/imgHeader/logo.png");
    display: inline-block;
    width: 2.5rem;
    height: 0.9rem;
    margin-left: 1.2rem;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .icon  {
    display: flex;
    width: 0.7rem;
    height: 0.7rem;
    background-image: url("./../../components/img/imgHeader/search.png");
    background-repeat: no-repeat;
    background-size: 100%  ;
    margin-left: 0.2rem;
    background-color: #ffffff;
  }

  .HeadHome{
    display: block;
    background-image: url("./../../components/FooterGuid/images/home1.png");
    background-size: 100%;
    width: 0.7rem;
    height: 0.7rem;
    float: left;
    vertical-align: middle;
  }
  .HeadCart{
    display: block;
    vertical-align: middle;
    float: right;
    background-image: url("./../../components/FooterGuid/images/cart1.png");
    width: 0.7rem;
    height: 0.7rem;
    background-size: 100%;
    background-repeat:no-repeat;

  }

</style>
