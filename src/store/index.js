/*
* vuex核心的管理对象是store*/

import  Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutaions'
import actions from './actions'
import getters from './getters'

Vue.vue(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

