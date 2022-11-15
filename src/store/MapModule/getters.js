/*
 * @Author: chenhao
 * @Date: 2022-11-02 11:52:29
 * @LastEditTime: 2022-11-15 17:33:15
 * @FilePath: \maptalkstext\src\store\MapModule\getters.js
 * @Description: 
 */
export default {
  mapLoaded: state => state.mapLoaded,
  areaLoaded: state => state.areaLoaded,
  configLoaded: state => state.configLoaded,
  map: state => state.map,
  mapConfig: state => state.mapConfig,
  symbols: state => state.mapConfig.symbols,
  panel: state => state.panel,
  layerTreeConfig: state => state.layerTreeConfig,
  baseServiceUrl: state => state.baseServiceUrl
}
