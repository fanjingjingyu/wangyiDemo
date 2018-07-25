<template>
<div class="TM">
  <div class="Timer">
    <div class="TimeAreaContainer">
      <div class="TimerLeft">
          <span class="XG">严选限时购</span>
        <div class="DJS">
          <span  >02</span>
          <span  >:</span>
          <span  >38</span>
          <span  >:</span>
          <span  >28</span>
        </div>
        <div>
       <span class="NextTime">
          <span>下一场</span>
          <span>18:00</span>
          <span>开始</span>
        </span>
        </div>
      </div>
      <div class="TimerRight">
        <img src="./0.png" alt="">
        <div class="Price">
          <span>￥255</span><hr>
          <span>￥299</span> <hr>
        </div>
      </div>
    </div>
    </div>
    <div class="Fuli">
      <img src="./fulishe.jpg" alt="">
    </div>
</div>
</template>
<script>
</script>
<style>
  .TM{
    width: 100%;
    margin: 0.01rem;
  }
  .TimeAreaContainer{
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0.2rem;
    background-color: white;
    float: left;
  }

  .TimerLeft{
    padding:0.2rem 0.2rem;
    display: flex;
    font-size: 0.5rem;
    line-height: 0.8rem;
    flex-direction: column;
    letter-spacing: 0.1rem;
    justify-content: center;
    align-items: center;
    margin-left: 0.2rem;
  }
  .XG{
    width: 3.5rem;
    display: flex;
  }
  .DJS{
    color: #ffffff;
    width: 3.5rem;
    display: flex;
  }
   .DJS span{
    margin: 0.02rem;
    background-color: #000000;
    color: #ffffff;
  }
  .DJS span:nth-child(2),.DJS span:nth-child(4){
    color: #000000;
    background-color: #ffffff;
  }
  .NextTime{
    width: 3.5rem;
    display: flex;
    font-size: 0.3rem;
  }
  .TimerRight{
    position: relative;
    margin:0.2rem 0.2rem;
    width: 5rem;
    height:4rem;
  }
  .Price{
    position: absolute;
    width: 1.2rem;
    height:1.2rem;
    border-radius: 50%;
    background-color: #e88818;
    bottom:0.5rem;
    right:0.5rem;
    display:inline-block;
    text-align: center;
    vertical-align: middle;
   }
  .Price span{
    display: block;
    margin-top: 0.2rem;
    color: #ffffff;
    font-size: 0.2rem;
    font-weight: bold;
  }

  .Fuli{
    display: inline-block;
    margin: 0.2rem 0;
    width: 100%;
    height: 4rem;
  }

</style>
