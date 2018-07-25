import Vue  from "vue";
/*路由引入npm install  vue-router --save*/
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
      redirect: '/Personal'
    },

    {
      path: '/Msite',
      component: Msite,
    },
    {
      path: '/Shiwu',
      component: Shiwu,
    },
    {
      path: '/Types',
      component: Types,
    },
    {
      path: '/Shopcart',
      component: Shopcart,
    },

    {
      path: '/Personal',
      component: Personal,
    },

]
})
