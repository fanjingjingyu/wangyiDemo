<template>

  <div class="TypeWrap">
    <div class="TypeWrapLeft  ">
      <ul class="TypeWrapLeftList  ">
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
        <li class="TypeWrapListItem">推荐专区</li>
        <li class="TypeWrapListItem">爆品区</li>
        <li class="TypeWrapListItem">夏季专区</li>
      </ul>
    </div>
    <div class="TypeRight">
      <div class="TypeWrapRight">
        <div class="TypeRightImg"></div>
        <span class="TypeRightTxt">-- 推荐专区分类 --</span>
        <div class="TheTypeLists   ">
          <ul class="TheTypeList  scrollWrap ">
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/5.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/5.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/5.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/5.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/3.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/2.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/3.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
              <img class="TheTypes" src="../img/types/1.png" alt="">
              <span>服装夏季专享</span>
            </li>
            <li class="TheTypeListI">
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
    border-top: solid 2px #d9d9d9;
    width: 100%;
    margin-top: 0.2rem;
}
  .TypeWrapLeft{
    border-right: solid 2px #d9d9d9;
    width: 30%;

    vertical-align: middle;
    text-align: center;
    float: left;
    padding-bottom: 0.5rem;
    /*overflow: hidden;*/
      }
  .TypeWrapLeftList{
    width: 100%;
    height: 15rem;
    font-size: 0.45rem;
    overflow: scroll;
  }
  ::-webkit-scrollbar{
    display: none;
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
    border-left: solid 2px #cc0031;
  }
  .TypeRight{
    overflow: scroll;
  }
  .TypeWrapRight{
    height: 15rem;
    float: right;
    text-align: center;
    vertical-align: middle;
    padding-top: 0.3rem;
   }

  .TypeRightImg{
    background-image: url("../img/types/1.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    display:inline-block;
    width: 6rem;
    height: 3rem;
    text-align: center;
    vertical-align: middle;

  }
  .TypeRightTxt{
    display:inline-block;
    font-size: 0.4rem;
    padding-top: 0.4rem;
     }

  .TheTypeList{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-flow: wrap;
    width: 100%;
    overflow: scroll;
  }

  .TheTypeListI{
    font-size: 0.2rem;
    margin: 0.3rem;
    float: left;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .TheTypeListI{
    font-size: 0.3rem;
    display:block;
    text-align: center;
    vertical-align: middle;
    width: 1.5rem;
  }

</style>
