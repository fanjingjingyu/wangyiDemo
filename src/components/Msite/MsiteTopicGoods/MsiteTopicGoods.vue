<template>
<div>
  <div class="TheTopic">
    <div class="TopicTitle">
      <span>专题精选</span>
      <img src="./topic/right.png"></img>
    </div>
    <div class="TopicContainer">
      <div class="TopicList">
        <div class="TopicInner">
          <img src="./topic/8.jpg" alt="">
         <div >
           <span class="Ttxt1">青汁兑蜂蜜, 轻盈又甜蜜</span>
           <span  class="Ttxt2">129元起</span><hr>
           <span  class="Ttxt3"> 每天来杯青汁蜂蜜水，给生活添一点甜蜜</span>
         </div>
        </div>
        <div class="TopicInner">
          <img src="./topic/1.jpg" alt="">
          <span class="Ttxt1">青汁兑蜂蜜, 轻盈又甜蜜</span>
          <span  class="Ttxt2">129元起</span><hr>
          <span  class="Ttxt3"> 每天来杯青汁蜂蜜水，给生活添一点甜蜜</span>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>

</script>
<style>
.TheTopic{
  width: 100%;
}
  .TopicTitle{
    width: 100%;
    display: flex;
    font-size: 0.2rem;
    line-height: 1.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .TopicTitle span{
    display: inline-block;
    font-size: 0.5rem;
    text-align: center;
    vertical-align: middle;
  }
  .TopicTitle img{
    width: 0.4rem;
    height:0.4rem;
    display: inline-block;
    margin-left: 0.1rem;
  }
  .TopicContainer{
    width: 100%;
    background-color: #ffffff;
  }
  .TopicList{
    display: flex;
    font-size: 0.3rem;
    overflow: scroll;
    }
::-webkit-scrollbar-thumb{
  display: none; /*隐藏滚动条*/
}
.TopicInner{
    width:100%;
    padding: 0.4rem;

}
  .TopicList span{
    margin-top: 0.05rem;
    font-size: 0.3rem;
    display: inline-block;
    padding: 0.1rem;
    justify-content: space-between;
  }
  .Ttxt2 {
    float: right;
    color: #cc0031;
}




</style>
