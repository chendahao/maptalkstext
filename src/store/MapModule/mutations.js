/*
 * @Description: 变量操作
 * @version: 0.1.0
 * @Author: wsw
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-24 15:30:54
 * @LastEditTime: 2022-11-15 17:32:37
 */
export default {
  setConfigLoaded (state, data) {
    state.configLoaded = data
  },
  setMapLoaded (state, data) {
    state.mapLoaded = data
  },
  setAreaLoaded (state, data) {
    state.areaLoaded = data
  },
  setMap (state, data) {
    state.map = data
  },
  setMapConfig (state, data) {
    state.mapConfig = data
  },
  setLayerTreeConfig (state, data) {
    state.layerTreeConfig = data
  },
  setPanel (state, data) {
    state.panel = data
  },
  setBaseServiceUrl (state, data) {
    state.baseServiceUrl = data
  }
}
