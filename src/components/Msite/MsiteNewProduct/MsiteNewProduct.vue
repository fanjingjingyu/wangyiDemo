<template>
  <div class="TheNewGoods">
    <div class="NewGoodsTitle">
      <span>特色好物</span>
    </div>
    <div class="NewGoodsList">
      <div class="NewGoodsContainer">
        <ul  class="NewGoodsInner">
          <li  class="NewGoodsInItem">
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/1.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="NewGoodsInItem">
            <span class="xuan">3色可选</span>
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/2.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="NewGoodsInItem">
            <span class="xuan">3色可选</span>
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/3.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="NewGoodsInItem">
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/4.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="NewGoodsInItem">
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/5.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
              <span class="Fujia">限时购</span>
            </a>
          </li>
          <li  class="NewGoodsInItem">
            <span class="xuan">3色可选</span>
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/6.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>

              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="NewGoodsInItem">
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsImg">
                <img src="../img/newGoods/7.png" alt="">
                <div class="NewGoodsImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
              </a>
          </li>
          <li  class="NewGoodsInItem">
            <a  class="NewGoodsInfo" href="">
              <div class="NewGoodsMore">
                <span  >更多特色好物</span>
                <hr>
                <img  src="../img/right.png"  >
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>

</script>



<style>

  .TheNewGoods{
    width: 100%;
    margin-top: 0.1rem;
    background-color: #ffffff;
  }
  .NewGoodsTitle{
    width: 100%;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .NewGoodsTitle span{
    font-size: 0.5rem;
    line-height: 1.5rem;
  }
  .NewGoodsContainer{
    width: 100%;
  }
  .NewGoodsList{
    display: flex;
    width: 10rem;

  }
  .NewGoodsInner{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: wrap;
  }
  .NewGoodsInItem{
    position: relative;
    width: 47%;
    font-size: 0.4rem;
    padding:0.2rem;
    margin-left: 0.1rem;

  }
  .NewGoodsInfo{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .NewGoodsImg{
    width: 100%;
    display: block;
    background-color: #f4f4f4;
  }

  .NewGoodsImgInfo{
    position: relative;
    left: 0;
    top:0;
    width: 100%;
    font-size: 0.38rem;
    padding: 0.1rem;
    line-height: 0.38rem;
    vertical-align: middle;
    text-align: center;
    flex-flow: nowrap;
    background-color: #f1ece2;

  }
  .NewGoodsInfo span{
    margin-left: 0.2rem;
    padding-top: 0.1rem;
  }
  .price{
    color: red;
  }
  .Fujia{
    color: #ffffff;
    background-color: #f48f18;
    width: 40%;
    vertical-align: middle;
    text-align: center;
    line-height: 0.4rem;

  }
  .NewGoodsMore{
    font-size: 0.5rem;
    line-height: 0.6rem;
    text-align: center;
    vertical-align: middle;

  }
  .NewGoodsMore Img{
    width: 0.8rem;

  }
  .NewGoodsImg img{

  }
  .xuan{
    position: absolute;
    left:0.4rem;
    top:0.4rem;
    color: #e8c117;
    background-color: #f4f4f4;
    font-size: 0.3rem;
    width: 0.4rem;
    line-height: 0.4rem;
    display: flex;
    font-weight: bold;
    flex-direction: column;
    border: 1px solid #e8c117;
  }

</style>
