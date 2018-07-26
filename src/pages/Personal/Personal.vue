<template>
 <div>
   <Header></Header>
   <div class="wrap">
     <Personal></Personal>
   </div>
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
  .wrap{
    width: 100%;

  }
</style>
