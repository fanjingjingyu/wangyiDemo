<template>
 <div>
     <!--关于推荐  多少篇文章-->
   <div >
       <div class="ArticleContainer">
         <ul  class="ArticleInner">
           <li  class="ArticleInItem">
             <a class="ArticleImgCon">
               <img src="../../img/article/1.png" alt="">
               <span>严选推荐</span>
               <div  class="ArticleNum">50篇文章</div>
             </a>
           </li>
           <li  class="ArticleInItem">
             <a class="ArticleImgCon">
               <img src="../../img/article/2.png" alt="">
               <span>模块懒挑款师退减</span>
               <div  class="ArticleNum">338篇文章</div>
             </a>
           </li>
           <li  class="ArticleInItem">
             <a class="ArticleImgCon">
               <img src="../../img/article/3.png" alt="">
               <span>丁磊的好货推荐</span>
               <div  class="ArticleNum">180篇文章</div>
             </a>
           </li>
           <li  class="ArticleInItem">
             <a class="ArticleImgCon">
               <img src="../../img/article/4.png" alt="">
               <span>模块懒人随席垫</span>
               <div  class="ArticleNum">1000篇文章</div>
             </a>
           </li>
           <li  class="ArticleInItem">
             <a class="ArticleImgCon">
               <img src="../../img/article/6.png" alt="">
               <span>模块懒人随席垫</span>
               <div  class="ArticleNum">50篇文章</div>
             </a>
           </li>
         </ul>
       </div>
     </div>
     <!--为你推荐-->
   <div >
      <div class="TheForyou">
        <div class="ForyouTitle">
          <span>为你推荐</span>
        </div>
        <div class="ForyouContainer">
          <div class="ForyouInner">
            <img src="../../img/article/chuang.jpg" alt="">
            <div class="TuijanTxt">
              <span class="Ttxt1">选择一种风格，选择一种人生</span>
              <span  class="Ttxt2">9.6元起</span><hr>
              <span  class="Ttxt3"> 风、北欧风、复古风等舒适款好物限时特价</span>
            </div>
          </div>
        </div>
      </div>
   </div>
     <!--作者推荐介绍-->
   <div class="Recommend">
    <div class="RecommendWrap">
      <div class="RecommendContainer">
        <div class="RecommendWrapInfo">
          <div class="RecommendTxt">
            <img class="RecommendAvatar" src="../../img/avatar/1.png" alt="">
            <span class="RecommendAvatarName">丁磊</span>
          </div>
          <span class="RecommendGoods">优质的成熟蜜千里挑一</span>
          <hr><span class="RecommendGoodsPrice">成熟洋槐蜜限时45元</span>
        </div>
        <div class="RecommendWrapImg">
          <img src="../../img/jshao/1.jpg" alt=""></div>
      </div>
      <div class="RecommendContainer">
        <div class="RecommendWrapInfo">
          <div class="RecommendTxt">
            <img class="RecommendAvatar" src="../../img/avatar/2.png" alt="">
            <span class="RecommendAvatarName">丁磊</span>
          </div>
          <span class="RecommendGoods">优质的成熟蜜千里挑一</span>
          <hr><span class="RecommendGoodsPrice">成熟洋槐蜜限时45元</span>
        </div>
        <div class="RecommendWrapImg">
          <img src="../../img/jshao/2.jpg" alt=""></div>
      </div>
    </div>
   </div>
<!--   高IQ好物-->
  <div class="GIqContainer">
          <div class="GIqInner">
              <div class="GIqInnerImg">
                <span class="tuijian">网易严选</span>
                <img src="../../img/avatar/5.jpg" alt="">
              </div>
              <div class="TuijanTxt">
                <span class="Ttxt1">高IQ好物</span>
                <span  class="Ttxt2">9.6元起</span><hr>
                <span  class="Ttxt3"> cmd科学家，必备这些好物好物限时特价</span>
            </div>
          </div>
        </div>

   <!--作者推荐介绍-->
   <div class="Recommend">
     <div class="RecommendWrap">
       <div class="RecommendContainer">
         <div class="RecommendWrapInfo">
           <div class="RecommendTxt">
             <img class="RecommendAvatar" src="../../img/avatar/1.png" alt="">
             <span class="RecommendAvatarName">丁磊</span>
           </div>
           <span class="RecommendGoods">优质的成熟蜜千里挑一</span>
           <hr><span class="RecommendGoodsPrice">成熟洋槐蜜限时45元</span>
         </div>
         <div class="RecommendWrapImg">
           <img src="../../img/jshao/3.jpg" alt=""></div>
       </div>
       <div class="RecommendContainer">
         <div class="RecommendWrapInfo">
           <div class="RecommendTxt">
             <img class="RecommendAvatar" src="../../img/avatar/2.png" alt="">
             <span class="RecommendAvatarName">丁磊</span>
           </div>
           <span class="RecommendGoods">优质的成熟蜜千里挑一</span>
           <hr><span class="RecommendGoodsPrice">成熟洋槐蜜限时45元</span>
         </div>
         <div class="RecommendWrapImg">
           <img src="../../img/jshao/4.jpg" alt=""></div>
       </div>
     </div>
   </div>

</div>


</template>


<script>
</script>



<style>

  .ArticleContainer{
    width: 100%;
    margin-top: 0.2rem;
    background-color: #f0edeb;

  }
.ArticleInner{
    float: left;
    width: 10rem;
    height: 5rem;
    display: flex;
    overflow: scroll;
    margin-bottom: 0.2rem;
    background-color: #ffffff;
  }
  ::-webkit-scrollbar{
    display: none;
  }
 .ArticleInItem{
   width: 5rem;
   height: 5rem;
   margin: 0.2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   }
  .ArticleImgCon{
    width: 3rem;
    height:4rem;
    display: block;
    text-align: center;
    vertical-align: middle;
    position: relative;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
 .ArticleInItem img{
   width: 3rem;
   height: 3rem;
 }
  .ArticleInItem span{
    width: 100%;
    font-size: 0.35rem;
    line-height: 0.35rem;
    display:inline-block;
    margin-top: 0.2rem;
  }
  /*
  渐变背景颜色
  background-image: linear-gradient(to right, black, red);  */
  .ArticleNum{
    position: absolute;
    width: 3rem;
    font-size: 0.4rem;
    line-height: 0.6rem;
    top:0;
    left: 0;
    color: #ffffff;
    opacity: 0.8;
    background-image: linear-gradient(to right, #f0edeb, #bab5b2);
  }
/* 为你推荐*/

  .TheForyou{
    width: 100%;
  }
  .ForyouTitle{
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
  .ForyouContainer{
    width: 100%;
    background-color: #ffffff;
  }
  .ForyouInner{
    width:100%;
    padding: 0.4rem;
  }
  .ForyouInner img{
    width: 100%;
    height:5rem;
    display: inline-block;
    margin-left: 0.1rem;
  }
  .TuijanTxt{
    margin-top: 0.2rem;
  }
  .Ttxt1, .Ttxt2{
    font-size: 0.5rem;
    line-height: 0.5rem;
  }
  .Ttxt2{
    float: right;
  }
.Ttxt3{
  font-size: 0.4rem;
  line-height: 0.4rem;
  color: #414141;
}


/*  作者推荐*/
.Recommend{
  width: 100%;
  background-color: #ffffff;
}
.RecommendWrap{
  width: 100%;

}
.RecommendContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  width: 100%;
  padding:0.2rem;
  background-color: #ffffff;
}
.RecommendWrapInfo{
  border: 1px solid #d9d9d9;
  margin-left: 0.3rem;
  width:5.3rem;
  height: 4.5rem;

}
.RecommendWrapImg{
  width: 4.5rem;
  height: 4.5rem;
}
.RecommendWrapImg Img{
  width: 100%;
  height: 100%;
  background-size: 100%;
}
  .RecommendTxt{
   font-size: 0.4rem;
   display: flex;
   line-height: 0.8rem;
   margin-top: 1.2rem;
    margin-bottom: 0.2rem;
  }
.RecommendAvatar{
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-left: 0.4rem;
  margin-right: 0.2rem;
}
.RecommendAvatarName{
  display: block;
}

.RecommendGoods{
  font-size: 0.45rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  margin-left: 0.4rem;
}
.RecommendGoodsPrice{
  font-size: 0.38rem;
  margin-left: 0.4rem;
}
/*   这个圆角矩形没写出来*/
/*.tuijian{
  display: block;
  width: 2rem;
  height: 0.5rem;
  font-size: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  vertical-align: ;
  background-color: #c697cc;
  !*border-radius: 50% 25% 50% 25%;*!
}*/

  .GIqContainer{
    width: 100%;
    background-color: #ffffff;
  }
  .GIqInner{

    width:100%;
    padding: 0.4rem;
  }
  .GIqInnerImg{
    position: relative;
  }
  .GIqInnerImg img{
    width: 10rem;
    height:5rem;
    display: inline-block;
    margin-left: 0.1rem;
  }
  .TuijanTxt{
    margin-top: 0.2rem;
  }
  .Ttxt1, .Ttxt2{
    font-size: 0.5rem;
    line-height: 0.5rem;
  }
  .Ttxt2{
    float: right;
  }
  .Ttxt3{
    font-size: 0.4rem;
    line-height: 0.4rem;
    color: #414141;
  }
  .tuijian{
    position: absolute;
    display:block;
    width: 2rem;
    height: 0.6rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
    text-align: center;
    vertical-align: middle;
    background-color: #007aff;
    border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
  }

</style>
