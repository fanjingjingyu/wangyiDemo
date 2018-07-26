import {RECEIVE_HEADCATES,

} from './mutation-types'



import {reqHeadCateList,



} from './../api'

export default {
  async getHeadCateList({commit},cb){
    const headCates =await reqHeadCateList()
    if(result.code===0){
      commit(RECEIVE_HEADCATES,{headCates})
    }
    cb()
  },







}
