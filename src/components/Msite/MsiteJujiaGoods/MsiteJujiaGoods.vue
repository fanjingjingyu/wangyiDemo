<template>
<div>
  <div class="TheJujia">
    <div class="JujiaTitle">
      <span>居家好物</span>
    </div>
    <div class="JujiaList">
      <div class="JujiaContainer">
        <ul  class="JujiaInner">
          <li  class="JujiaInItem">
            <a  class="JujiaInfo" href="">
              <div class="JujiaImg">
                <img src="./jujia/01.png" alt="">
                <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="JujiaInItem">
            <span class="xuan">3色可选</span>
            <a  class="JujiaInfo" href="">
              <div class="JujiaImg">
                <img src="./jujia/02.png" alt="">
                <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="JujiaInItem">
            <span class="xuan">3色可选</span>
             <a  class="JujiaInfo" href="">
               <div class="JujiaImg">
                 <img src="./jujia/03.png" alt="">
                 <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
               </div>
               <span>模块懒人随席垫</span>
               <span class="price">￥459</span>
             </a>
           </li>
          <li  class="JujiaInItem">
             <a  class="JujiaInfo" href="">
               <div class="JujiaImg">
                 <img src="./jujia/04.png" alt="">
                 <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
               </div>
               <span>模块懒人随席垫</span>
               <span class="price">￥459</span>
             </a>
           </li>
          <li  class="JujiaInItem">
              <a  class="JujiaInfo" href="">
                <div class="JujiaImg">
                  <img src="./jujia/05.png" alt="">
                  <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
                </div>
                <span>模块懒人随席垫</span>
                <span class="price">￥459</span>
                <span class="Fujia">限时购</span>
              </a>
            </li>
          <li  class="JujiaInItem">
            <span class="xuan">3色可选</span>
            <a  class="JujiaInfo" href="">
              <div class="JujiaImg">
                <img src="./jujia/06.png" alt="">
                <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
              </div>

              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
            </a>
          </li>
          <li  class="JujiaInItem">
            <a  class="JujiaInfo" href="">
              <div class="JujiaImg">
                <img src="./jujia/04.png" alt="">
                <div class="JujiaImgInfo">自由化贴心承托可拆洗</div>
              </div>
              <span>模块懒人随席垫</span>
              <span class="price">￥459</span>
              <span class="Fujia">限时购</span>
            </a>
          </li>
          <li  class="JujiaInItem">
            <a  class="JujiaInfo" href="">
              <div class="JujiaMore">
                <span  >更多居家好物</span>
                <hr>
                <img  src="./jujia/right.png" alt="">
              </div>
            </a>
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

  .TheJujia{
    width: 100%;
    margin-top: 0.1rem;
    background-color: #ffffff;
  }
  .JujiaTitle{
    width: 100%;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  .JujiaTitle span{
    font-size: 0.5rem;
    line-height: 1.5rem;
  }
 .JujiaContainer{
    width: 100%;
  }
  .JujiaList{
    display: flex;
    width: 10rem;

  }
 .JujiaInner{
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   flex-flow: wrap;
  }
 .JujiaInItem{
   position: relative;
   width: 47%;
   font-size: 0.4rem;
   padding:0.2rem;
   margin-left: 0.1rem;

 }
.JujiaInfo{
   width: 100%;
   display: flex;
   flex-direction: column;
}
.JujiaImg{
  width: 100%;
  display: block;
  background-color: #f4f4f4;
}

  .JujiaImgInfo{
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
.JujiaInfo span{
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
.JujiaMore{
  font-size: 0.5rem;
  line-height: 0.6rem;
  text-align: center;
  vertical-align: middle;

}
  .JujiaMore Img{
    width: 0.8rem;

  }
.JujiaImg img{

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
