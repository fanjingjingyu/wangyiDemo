<template>
  <div>
    <div class="nav-header">
      <header class="header">
        <div class="searchCon">
          <i class="icon HeadSerach  "></i>
          <span  >搜索商品，共97565款好物</span>
        </div>
      </header>
    </div>
    <div  >
      <Types></Types>
    </div>

  </div>
</template>
<script>
   import Types from '../../components/Types/Types.vue'

  export default {
    components:{
      Types,

          }
  }

</script>

<style>
  .nav-header{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-color: #ffffff;
  }
  .header{
    width: 100%;
    padding:0.2rem ;
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .searchCon{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 1rem;
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
    background-color: #ededed;
    border-radius: 0.2rem;
  }
  .HeadSerach  {
    display: flex;
    width: 0.6rem;
    height: 0.6rem;
    background-image: url("./imgHeader/search.png");
    background-repeat: no-repeat;
    background-size: 100%  ;
    margin-right: 0.2rem;
    background-color: #ededed;
  }


</style>
