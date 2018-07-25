<template>
  <div>
    <div class="TypeWrap">
      <div class="TypeWrapLeft">
        <ul class="TypeWrapLeftList">
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">爆品区</li>
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">爆品区</li>
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">爆品区</li>
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">爆品区</li>
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">爆品区</li>
          <li class="TypeWrapListItem">推荐专区</li>
          <li class="TypeWrapListItem">爆品区</li>
          <li class="TypeWrapListItem">夏季专区</li>
        </ul>
      </div>
      <div class="TypeWrapRight">
        <div class="TypeRightImg"></div>
        <span class="TypeRightTxt">-- 推荐专区分类 --</span>
        <div class="TheTypeList">
          <ul class="TheTypeList">
            <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/5.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/3.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/2.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/3.png" alt="">
              <span>服装夏季专享</span>
            </li>
             <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListItem">
              <img class="TheTypes" src="../img/types/4.png" alt="">
              <span>服装夏季专享</span>
            </li>
           </ul>
          </div>
       </div>
    </div>
  </div>
</template>

<script>

</script>


<style>
  .TypeWrap{
    border-top: solid 2px rgba(242, 245, 244, 0);
    width: 100%;
    margin-top: 0.4rem;
}
  .TypeWrapLeft{
    width: 3rem;
    vertical-align: middle;
    text-align: center;
    float: left;
    background-color: #ffffff;

  }
  .TypeWrapLeftList{
    width: 100%;
    font-size: 0.45rem;
    overflow: scroll;
  }
  .TypeWrapListItem{
    width: 100%;
    height:0.4rem;
    line-height: 0.6rem;
    padding-bottom: 0.7rem;
    padding-top: 0.4rem;
  }
  .TypeWrapListItem:first-child{
    color: #cc0031;
    font-size: 0.6rem;
  }
  .TypeWrapRight{

    width:7rem;
    float: right;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0.3rem;
   }
  .TypeRightImg{
    background-image: url("../img/types/1.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    display:block;
    width: 6rem;
    height: 3rem;

  }
  .TypeRightTxt{
    display:block;
    font-size: 0.4rem;
    padding-top: 0.4rem;
     }
  .TheTypeList{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0.2rem;
    flex-flow: wrap;
    overflow: scroll;
  }
  ::-webkit-scrollbar{
    display: none;
  }
  .TheTypeListItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.3rem;
    margin: 0.2rem;
  }
  .TheTypes{
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    background-size: 100%;

  }
  .TheTypeListItem{
    font-size: 0.3rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: 1.5rem;
  }

</style>
