<template>
  <div id="app">

      <router-view/>
    <!--底部组件-->
    <FooterGuide v-show="$route.meta.isShow "/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuid/FooterGuide.vue'


export default {
  components: {
    FooterGuide,

  }
}
</script>

<style>

</style>
