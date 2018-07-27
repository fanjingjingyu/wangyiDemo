import Vue  from "vue";
/*路由引入npm install  vue-router --save*/
import FirstPage from '../pages/FirstPage/FirstPage.vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Shiwu from '../pages/Shiwu/Shiwu.vue'
import Types from '../pages/Types/Types.vue'
import Shopcart from '../pages/Shopcart/Shopcart.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use (VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Msite',
      meta:{
        isShow:true
      }
    },


    {
      path: '/Msite',
      component: Msite,
      meta:{
        isShow: true
      }
    },
    {
      path: '/Shiwu',
      component: Shiwu,
      meta:{
        isShow: true
      }
    },
    {
      path: '/Types',
      component: Types,
      meta:{
        isShow: true
      }
    },
    {
      path: '/Shopcart',
      component: Shopcart,
      meta:{
        isShow: true
      }
    },

    {
      path: '/Personal',
      component: Personal,

    },
    {
      path: '/FirstPage',
      component: FirstPage,

    },

]
})
