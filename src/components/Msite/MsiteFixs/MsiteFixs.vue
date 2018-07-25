<template>
  <div class="TheFix">
    <div class="BackTop"></div>
    <div class="Gift"></div>
  </div>
</template>



<script>

</script>


<style>
  .TheFix{
    z-index: 10;
  }

  .BackTop{
    background-image: url("../img/top.png");
    position: fixed;
    right: 0.5rem;
    bottom: 1.5rem;
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    background-size: 1rem 1rem;
    display: none;
  }

  .Gift{
    background-image: url("../img/gift.png");
    position: fixed;
    right: 0;
    width: 1.5rem;
    height: 1rem;
    bottom: 3.2rem;
    display: block;
    -webkit-animation: 0.5s moveLeft;
    animation: .5s moveLeft;
  }
</style>
