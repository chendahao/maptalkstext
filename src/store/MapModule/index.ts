/*
 * @Author: chenhao
 * @Date: 2022-11-02 11:48:41
 * @LastEditTime: 2022-11-02 14:37:25
 * @FilePath: \maptalkstext\src\store\MapModule\index.ts
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default {
  namespaced: true,
  // 变量定义
  state,
  // 变量操作
  getters,
  // 函数
  mutations,
  // 异步的数据操作
  actions
}
