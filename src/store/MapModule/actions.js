/*
 * @Description: vuex 方法
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-24 15:30:54
 * @LastEditTime: 2022-11-02 14:58:52
 */
// import { Commit, Dispatch } from 'vuex'
import request from './request'
import mapConfig from '@/static/config/map.config'
// import common from '../utils/common.es'

export default {
  // 获取配置文件
  async loadConfig ({ commit }) {
    commit('setMapConfig', mapConfig)
    commit('setConfigLoaded', true)
  },
  // 获取显示模板
  async getTemplate ({ state }, templateName) {
    let url = `./popwindow/${templateName}.html`
    let data = await request.request(url)
    return data
  },
  // 通用数据获取方法
  async queryParamTable ({ state }, { tag, param }) {
    let methodName = tag // 'QueryTable'
    let url = `${state.config.services.baseServiceUrl}/DataService.svc/` + methodName
    // 拼接URL
    let data = await request.request(url, {
      data: param,
      method: 'post',
      withCredentials: false
    })
    // let res = common.convertTable2objects(data[methodName + 'Result'])
    return data || []
  }
}
