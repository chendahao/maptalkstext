/*
 * @Author: chenhao
 * @Date: 2022-11-08 14:18:52
 * @LastEditTime: 2022-11-08 17:00:24
 * @FilePath: \maptalkstext\src\store\userinfo.ts
 * @Description: 
 */
import type { Commit, Dispatch } from 'vuex'
interface info {
  fullName: string,
  gh: string,
  roles: string[],
  userName: string
}
const state: info = {
  fullName: '',
  gh: '',
  roles: [],
  userName: ''
}
export default {
  namespaced: true,
  state: state,
  mutations: {
    setinfo (state: info, info: info) {
      state.fullName = info.fullName
      state.roles = info.roles
      state.userName = info.userName
    }
  },
  getters: {
    getUserRoles (state: info) {
      return state.roles
    },
    getUserName (state: info) {
      return state.userName
    },
    getFullName (state: info) {
      return state.fullName
    }
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param context
     * @param dispatch
     * @param info
     * @returns {Promise<any>}
     */
    set ({ commit, state, dispatch }: { commit:Commit, state: any, dispatch: Dispatch }, info: {info: object}) {
      return new Promise(() => {
        // store 赋值
        commit('setinfo', info)
        // 持久化
        // dispatch('db/set', {
        //   dbName: 'sys',
        //   path: '',
        //   value: info,
        //   user: true
        // }, { root: true })
      })
    },
    clearInfo ({ commit, state }: {commit: Commit, state: any}) {
      return new Promise<void>((resolve, reject) => {
        commit('setinfo', {
          fullName: '',
          gh: '',
          roles: [],
          userName: ''
        })
        resolve()
      })
    },
    /**
     * @description 从数据库取用户数据
     * @param context
     * @param dispatch
     * @returns {Promise<any>}
     */
    load ({ commit, state, dispatch }: { commit:Commit, state: any, dispatch: Dispatch }) {
      return new Promise(async () => {
        // const info = await dispatch('db/get', {
        //   dbName: 'sys',
        //   path: '',
        //   defaultValue: {},
        //   user: true
        // }, { root: true })
        const info = []
        commit('setinfo', info)
      })
    }
  }
}
