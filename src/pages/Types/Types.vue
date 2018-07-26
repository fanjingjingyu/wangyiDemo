<template>
  <div>
    <Header></Header>
    <div class="wrap">
      <Types></Types>
    </div>

  </div>
</template>
<script>
  import Header from '../../components/Header/Header.vue'
  import Types from '../../components/Types/Types.vue'

  export default {
    components:{
      Header,
      Types,

          }
  }

</script>

<style>
  .wrap{
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 1.8rem;
  }
</style>
