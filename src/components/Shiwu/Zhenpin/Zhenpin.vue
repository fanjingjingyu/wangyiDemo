<template>

<div>
  <!--严选臻品 -->
  <div class="Zhenpin">
    <div class="ZhenpinWrap">
      <div class="ZhenpinContainer">
        <div class="ZhenpinWrapInfo">
          <span class="ZhenpinGoods">优质的成熟蜜千里挑一</span>
          <hr><span class="ZhenpinGoodsPrice">成熟洋槐蜜限时45元</span>
        </div>
        <div class="ZhenpinWrapImg">
          <img src="../../img/jshao/3.jpg" alt=""></div>
      </div>
      <div class="ZhenpinContainer">
        <div class="ZhenpinWrapInfo">
          <span class="ZhenpinGoods">优质的成熟蜜千里挑一</span>
          <hr><span class="ZhenpinGoodsPrice">成熟洋槐蜜限时45元</span>
        </div>
        <div class="ZhenpinWrapImg">
          <img src="../../img/jshao/4.jpg" alt=""></div>
      </div>
    </div>
  </div>

  <!--严选look-->
  <div class="TheLook">
    <div class="LookTitle">
      <span>严选LOOK</span>
    </div>
    <div class="LookContainer">
      <div class="LookInner">
        <img src="../../img/deng.jpg" alt="">
        <div class="LTuijTxt">
          <!--<img src="../../img/avatar/1.png" alt="">-->
          <span class="Ttxt1"></span>
           <span  class="Ttxt3"> 买了两次，还想要买个白色的 </span>
        </div>
      </div>
    </div>
  </div>

<!--   更多精彩-->
  <div class="TheMore">
    <div class="MoreTitle">
      <span>更多精彩</span>
    </div>
    <div class="MoreContainer">
      <div class="MoreInner">
        <img src="../../img/article/chuang.jpg" alt="">
        <div class="MTuijTxt">
          <span class="Ttxt1">选择一种风格，选择一种人生</span>
        </div>
      </div>
    </div>
    <div class="MoreContainer">
      <div class="MoreInner">
        <img src="../../img/article/chuang.jpg" alt="">
        <div class="MTuijTxt">
          <span class="Ttxt1">选择一种风格，选择一种人生</span>
        </div>
      </div>
    </div>
    <div class="MoreContainer">
      <div class="MoreInner">
        <img src="../../img/article/chuang.jpg" alt="">
        <div class="MTuijTxt">
          <span class="Ttxt1">选择一种风格，选择一种人生</span>
        </div>
      </div>
    </div>
    <div class="MoreContainer">
      <div class="MoreInner">
        <img src="../../img/article/chuang.jpg" alt="">
        <div class="MTuijTxt">
          <span class="Ttxt1">选择一种风格，选择一种人生</span>
        </div>
      </div>
    </div>
    <div class="MoreContainer">
      <div class="MoreInner">
        <img src="../../img/article/chuang.jpg" alt="">
        <div class="MTuijTxt">
          <span class="Ttxt1">选择一种风格，选择一种人生</span>
        </div>
      </div>
    </div>
    <div class="MoreContainer">
      <div class="MoreInner">
        <img src="../../img/article/chuang.jpg" alt="">
        <div class="MTuijTxt">
          <span class="Ttxt1">选择一种风格，选择一种人生</span>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>

</script>
<style>
  /*  严选推荐*/
  .Zhenpin{
    width: 100%;
    background-color: #ffffff;
  }
  .ZhenpinWrap{
    width: 100%;
  }
  .ZhenpinContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 100%;
    padding:0.2rem;

    background-color: #ffffff;
  }
  .ZhenpinWrapInfo{
    padding-top: 1rem;
    border: 1px solid #d9d9d9;
    margin-left: 0.3rem;
    width:5.3rem;
    height: 4.5rem;
    line-height: 1rem;

  }
  .ZhenpinWrapImg{
    width: 4.5rem;
    height: 4.5rem;
  }
  .ZhenpinWrapImg Img{
    width: 100%;
    height: 100%;
    background-size: 100%;
  }

  .ZhenpinGoods{
    font-size: 0.45rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    margin-left: 0.4rem;
  }
  .ZhenpinGoodsPrice{
    font-size: 0.38rem;
    margin-left: 0.4rem;
  }
  /*  严选look*/

  .TheLook{
    width: 100%;
  }
  .LookTitle{
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
  .LookContainer{
    width: 100%;
    background-color: #ffffff;
  }
  .LookInner{
    width:100%;
    padding: 0.4rem;
  }
  .LookInner img{
    width: 100%;
    height:8rem;
    display: inline-block;
    margin-left: 0.1rem;
    margin-bottom: 0.3rem;
  }
  .LTuijTxt{
    margin-top: 0.2rem;
  }
  .Ttxt1 {
    font-size: 0.5rem;
    line-height: 0.5rem;
  }

  .Ttxt3{
    font-size: 0.4rem;
    line-height: 0.4rem;
    color: #414141;
  }

/*   更多精彩*/

  .TheMore{
    width: 100%;
  }
  .MoreTitle{
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
  .MoreTitle span :before{
    content: " ";
    width: 80%;
    height: 2px;
    background-color: #bab5b2;
  }
  .MoreContainer{
    width: 100%;
    background-color: #ffffff;
  }
  .MoreInner{
    width:100%;
    padding: 0.4rem;
  }
  .MoreInner img{
    width: 100%;
    height:5rem;
    display: inline-block;
    margin-left: 0.1rem;
  }
  .MTuijTxt{
    margin-top: 0.2rem;
  }
  .Ttxt1 {
    font-size: 0.3rem;
    line-height: 0.5rem;
  }


</style>
