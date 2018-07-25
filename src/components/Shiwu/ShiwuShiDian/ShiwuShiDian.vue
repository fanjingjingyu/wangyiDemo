<template>
  <div>
    <div class="Ten">
      <div class="TheTimeTen">
        <div class="TimeTenTitle">
          <span>十点一刻</span>
        </div>
        <div class="TimeTenContainer">
          <ul class="TimeTenList"   >
            <li class="TimeTenInner">
              <span class="TheTimeTenInfo" >
                <span class="Topic">— 今日话题 —</span>
                <h3>关于单身</h3>
                <h5>聊聊单身的好处</h5>
                <span class="Head">
                  <img src="../../img/shidian/1.png" alt="">
                  <img src="../../img/shidian/2.png" alt="">
                  <img src="../../img/shidian/3.png" alt="">
                  <span class="Heads">...</span>
                  <span  class="count">  631人参与话题</span>
                </span>
              </span>
             </li>
            <li class="TimeTenInner">
              <span class="TheTimeTenInfo" >
                <span class="Topic">— 今日话题 —</span>
                <h3>关于单身</h3>
                <h5>聊聊单身的好处</h5>
                <span class="Head">
                  <img src="../../img/shidian/1.png" alt="">
                  <img src="../../img/shidian/2.png" alt="">
                  <img src="../../img/shidian/3.png" alt="">
                  <span class="Heads">...</span>
                  <span  class="count">  631人参与话题</span>
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <!--   床垫臻品-->
    <div class="TheBed">
        <div class="BedTitle">
          <span>床垫臻品</span>
        </div>
        <div class="BedContainer">
          <div class="BedInner">
            <img src="../../img/article/chuang.jpg" alt="">
            <div class="BTuijTxt">
              <span class="Ttxt1">卧室的舒适，都在床上</span>
              <hr><span  class="Ttxt3">严选床垫选购指南 </span>
            </div>
          </div>
        </div>
    </div>





   </div>
</template>

<script>

</script>

<style>

  .TheTimeTen{
    width: 100%;
  }
  .TimeTenTitle{
    width: 100%;
    font-size: 0.2rem;
    line-height: 1.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .TimeTenTitle span{
    display:block;
    font-size: 0.5rem;
    text-align: center;
    vertical-align: middle;
  }
  .TimeTenContainer{
    width: 100%;
    height: 6.2rem;
    display: flex;
    float: left;
    background-color: #ffffff;
    margin-bottom: 0.2rem;
  }
  .TimeTenList {
      width: 100%;
      display: flex;
      position: relative;
      overflow: scroll;
    }
  .TimeTenInner{
     width: 100%;
     height: 6rem;
   }
  .TheTimeTenInfo{
     background-image: url("../../img/shidian/bj.png");
     background-repeat: no-repeat;
     margin: 0.3rem;
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: flex-start;
     width: 8rem;
     height: 6rem;
   }
  .Topic{
   font-size: 0.4rem;
   margin-bottom: 0.3rem;
   margin-top: 0.3rem;
 }
  .TheTimeTenInfo h3{
   font-size: 0.5rem;
   margin-top: 0.4rem;
 }
  .TheTimeTenInfo h5{
    font-size: 0.4rem;
    margin-top: 0.3rem;
    margin-bottom:1rem;
  }
  .Head{
    width: 7rem;
    height: 0.6rem;
    left: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Head img{
  display: inline-block;
  border-radius: 50%;
}
  .Heads{
    font-size: 0.4rem;
    font-weight: bold;
    border: 2px solid ;
    background-color: #d9d9d9;
    border-radius: 50%;
    color: white;
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    vertical-align: middle;
 }
  .count{
    font-size: 0.35rem;
    width: 4rem;
    line-height: 0.3rem;
    padding-left: 0.2rem;
  }

    /*::-webkit-scrollbar-thumb{*/
            /*display: none; !*隐藏滚动条*!*/
        /*}*/

  /*   床垫臻品*/

  .TheBed{
    width: 100%;
  }
  .BedTitle{
    padding-top: 0.2rem;
    width: 100%;
    display: flex;
    font-size: 0.5rem;
    line-height: 1.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .BedContainer{
    width: 100%;
    background-color: #ffffff;
  }
  .BedInner{
    width:100%;
    padding: 0.4rem;
  }
  .BedInner img{
    width: 100%;
    height:5rem;
    display: inline-block;
    margin-left: 0.1rem;
  }
  .BTuijTxt{
    margin-top: 0.2rem;
  }
  .Ttxt1,  {
    font-size: 0.5rem;
    line-height: 0.5rem;
  }

  .Ttxt3{
    font-size: 0.4rem;
    line-height: 0.4rem;
    color: #414141;
  }



</style>
