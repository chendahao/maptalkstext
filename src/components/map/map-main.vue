<!--
 * @Author: chenhao
 * @Date: 2022-11-02 11:40:23
 * @LastEditTime: 2022-11-14 15:12:26
 * @FilePath: \maptalkstext\src\components\map\map-main.vue
 * @Description: 
-->
<template>
  <div id="map" class="map-container">
  </div>
</template>
<script>
import Vue from 'vue'
import * as maptalks from 'maptalks'
import common from '@/utils/common.es'
import { mapGetters } from 'vuex'

export default {
  prop: {
    showMousePosition: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapGetters({
      configLoaded: 'MapModule/configLoaded',
      mapConfig: 'MapModule/mapConfig',
      map: 'MapModule/map'
    })
  },
  watch: {
    /**
     * @name: 监听配置文件加载
     */
    configLoaded () {
      this.configLoaded && this.initMap()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.configLoaded && this.initMap()
    })
  },
  beforeDestroy() {
    // if (this.map) {
    //   this.map.getInstance().remove()
    // }
  },
  methods: {
    initMap () {
      if (this.map) {
        this.map.getInstance().remove()
      }
      console.log('initMpa')
      // this.$store.dispatch('setError', '请求出错')
      this.mapConfig.showMousePosition = this.showMousePosition
      const initConfig = this.mapConfig
      let baseLayers = []
      let layers = []
      let maplist = []
      // 加载配置的图层
      initConfig.baseLayers.forEach(element => {
        maplist.push(
          new maptalks.TileLayer(element.name, element)
        )
      })
      baseLayers = new maptalks.GroupTileLayer('base-map', maplist)
      // if (initConfig.layers instanceof Array) {
      //   let lyrs = initConfig.layers
      //   if (initConfig.baseLayers instanceof Array) {
      //     lyrs = initConfig.baseLayers.concat(initConfig.layers)
      //   }
      //   lyrs.forEach(element => {
      //     let lyr = new maptalks[element.layerType](element.id, element)
      //     if (element.layerType === 'TileLayer') {
      //       baseLayers.push(lyr)
      //     }
      //     lyr.config('cursor', 'default')
      //     layers.push(lyr)
      //   })
      // } else {
      //   throw new Error('Layer config error')
      // }
      const ops = {
        center: [0, 0],
        zoom: 5,
        minZoom: 1,
        maxZoom: 19,
        zoomInCenter: true,
        attribution: false,
        spatialReference: null,
        zoomControl: false, // 设置倾斜于旋转
        scaleControl: false
      }
      const {
        center,
        zoom,
        minZoom,
        maxZoom,
        zoomInCenter,
        attribution,
        spatialReference,
        zoomControl,
        layerSwitcherControl,
        scaleControl
      } = { ...ops, ...initConfig.mapOptions }
      let myMap = new maptalks.Map('map', {
        center: center,
        zoom: zoom,
        minZoom: minZoom,
        maxZoom: maxZoom,
        zoomInCenter: zoomInCenter,
        attribution: attribution,
        spatialReference: spatialReference,
        zoomControl: { ...zoomControl },
        layerSwitcherControl: { ...layerSwitcherControl },
        scaleControl: { ...scaleControl },
        baseLayer: baseLayers,
        // layers: layers
      })
      let infoWindow = addInfoWindow(myMap)
      _map = {
        // 地图实例
        getInstance () {
          return myMap
        },
        // 获取底图
        getBaseLayers () {
          return baseLayers
        },
        // 清除图层
        clearLayerById (layerId) {
          let lyr = myMap.getLayer(layerId)
          lyr && lyr.clear()
        },
        // 删除图层
        removeLayerById (layerId) {
          let lyr = myMap.getLayer(layerId)
          lyr && lyr.remove()
        },
        // 获取图层，没有则创建
        getOrCreateLayerById (layerId, options = {}) {
          let lyr = myMap.getLayer(layerId)
          !lyr && (lyr = new maptalks.VectorLayer(layerId, options).addTo(myMap))
          return lyr
        },
        // 设置图层是否可见
        setLayerVisuableById (layerId, visible) {
          let lyr = myMap.getLayer(layerId)
          lyr && lyr.config('visible', visible)
        },
        // 加点
        addPoints (layerId, dataArr, options) {
          const { id, x, y, symbol, cursor, fitExtent } = {
            ...{
              id: 'id',
              x: 'x',
              y: 'y',
              cursor: 'pointer',
              fitExtent: false
            },
            ...options
          }
          let lyr = this.getOrCreateLayerById(layerId)
          let eles = creatElements(dataArr, { id, x, y, symbol, cursor })
          lyr.addGeometry(eles, fitExtent)
          lyr.config('cursor', 'default')
        },
        // 加线
        addLines (layerId, dataArr, { id, x, y, symbol, cursor, fitExtent }) {
          let lyr = this.getOrCreateLayerById(layerId)
          let eles = creatLines(dataArr, { id, x, y, symbol, cursor })
          lyr.addGeometry(eles, !!fitExtent)
          lyr.config('cursor', 'default')
        },
        // 获取弹窗
        // @deprecated
        getInfoWindow () {
          return infoWindow
        },
        // 关闭弹窗
        hideInfoWindow () {
          infoWindow.hide()
        },
        // 设置地图监听事件
        setMapLinstener (linstener) {
          if (typeof linstener === 'function') {
            let _linstener = {
              id: common.uuid(),
              type: 'click',
              run: linstener
            }
            mapMapLinstener.push(_linstener)
          } else if (linstener instanceof Object && typeof linstener.run === 'function') {
            linstener.type = linstener.type || 'click'
            mapMapLinstener.push(linstener)
          } else {
            alert('not support event linstener')
          }
        },
        // 获取地图监听事件
        getMapLinstener (linstener) {
          return mapMapLinstener
        },
        // 移除地图监听事件
        removeMapLinstener (id) {
          mapMapLinstener.forEach((v, i) => {
            if (typeof id === 'function' && v.run === id) {
              mapMapLinstener.splice(i, 1)
            } else if (typeof id === 'string' && v.id === id) {
              mapMapLinstener.splice(i, 1)
            } else if (typeof id === 'object' && ((!id.type && v.id === id.id && v.run === id.run) ||
                (v.id === id.id && v.type === id.type && v.run === id.run))) {
              mapMapLinstener.splice(i, 1)
            }
          })
        },
        // 通过坐标点识取图层
        forEachFeatureAtCoordinate (coordinate, layers) {
          if (!(layers instanceof Array)) {
            layers = [layers]
          }
          return new Promise(resolve => {
            myMap.identify(
              {
                coordinate: coordinate,
                layers: layers
              },
              function (geos) {
                resolve(geos)
              }
            )
          })
        },
        // 展示信息弹窗
        showInfoWindow ({ x, y, dx, dy, title, content, lnglat, offset, data, methods }) {
          infoWindow.config('dy', dy || 0)
          infoWindow.config('dx', dx || 0)
          infoWindow.setTitle(title)
          const uid = `pop_${common.uuid(8)}`
          infoWindow.setContent(`<div id="${uid}"></div>`)
          this._renderTemplate(uid, content, data, methods)
          infoWindow.show({ x, y })
        },
        // 清除图层
        clear () {
          this.hideInfoWindow()
          this.getInstance().getLayers(layer => {
            if (layer.getJSONType() !== 'TileLayer' && layer.getId() !== 'boundary_layer' && layer.getId() !== 'label_area') {
              // layer.clear()
              layer.remove()
            }
            return layer.getJSONType() !== 'TileLayer'
          })
        },
        // 飞行定位
        flyTo (coordinate) {
          myMap.panTo(coordinate)
        },
        // 弹窗 html 渲染
        // @private
        _renderTemplate (domId, content = '', data = {}, methods = {}) {
          // 类型检查
          if (!domId || !common.isType(domId, 'String')) return
          if (!common.isType(content, 'String')) return
          if (!common.isType(data, 'Object')) return
          if (!common.isType(methods, 'Object')) return
          setTimeout(() => {
            let wrapper = document.getElementById(domId)
            if (!wrapper) {
              this._renderTemplate(domId, content, data, methods)
              return
            }
            try {
              new Vue({
                template: `<div class="maptalks-vue-render">${content}</div>`,
                data () {
                  return { ...data }
                },
                methods: {
                  ...methods
                }
              }).$mount(`#${domId}`)
            } catch (error) {
              alert('模板渲染失败，请检查模板是否含有非html元素。')
            }
          }, 100)
        }
      }
      this.$store.commit('MapModule/setMap', _map)
      this.$store.commit('MapModule/setMapLoaded', true)
      addMapLinstener(initConfig)
    }
  }
}

let _map = null
let mapMapLinstener = []
// 初始化点击详情框
function addInfoWindow (map) {
  let options = {
    'dy': -38,
    'autoPan': false,
    'autoOpenOn': null,
    'title': '详情',
    'content': '<div class="msgBox-content"></div>'
  }
  let infoWindow = new maptalks.ui.InfoWindow(options)
  infoWindow.addTo(map)
  return infoWindow
}

// 注册地图事件
function addMapLinstener (config) {
  let map = _map.getInstance()
  map.on('click zoomend mousemove rotate', param => {
    switch (param.type) {
      case 'click':
        processClick(param)
        break
      case 'zoomend':
        // 取消控制矢量与影像的显隐
        // if (param.from >= config.zoomToImg && param.to < config.zoomToImg) {
        //   changeLayerVisuable(['vec_c', 'cva_c'], true)
        //   _map.setLayerVisuableById('label_area', false)
        // } else if (param.from < config.zoomToImg && param.to >= config.zoomToImg) {
        //   changeLayerVisuable(['img_c', 'cia_c'], true)
        //   _map.setLayerVisuableById('label_area', true)
        // }
        break
      case 'mousemove':
        let c = document.getElementById('mouse-position1')
        if (c) {
          c.innerHTML = param.coordinate.toFixed(5).toArray()[0] + '<br/>' + param.coordinate.toFixed(5).toArray()[1]
        }
        processClick(param)
        break
      case 'rotate':
        let angle = 0;
        if (param.from === 0) {
          angle = 0;
        }
        if (param.from < 0) {
          angle = -param.from;
        } else if (param.from <= 179.9999999999999 && param.from > 0) {
          angle = 360 - param.from;
        }
        // 获取元素 ———— 指北针图标的ID
        let ele = document.getElementById("compass");
        // 设置度数
        if (ele) {
          ele.style.transform = "rotate(" + angle + "deg)";
        }
        break
    }
  })
}
// 处理点击事件
function processClick (e) {
  if (e.type === 'click') {
    _map.hideInfoWindow()
  }
  mapMapLinstener.forEach(linstener => {
    if (linstener.type.split(',').indexOf(e.type) >= 0) {
      let layerIds = linstener.layerIds
      let lyrs = []
      if (layerIds instanceof Array && layerIds.length > 0) {
        layerIds.forEach(lyrId => {
          lyrs.push(_map.getOrCreateLayerById(lyrId))
        })
        _map.forEachFeatureAtCoordinate(e.coordinate, lyrs).then(geos => {
          geos.length && linstener.run({ ...e, geos })
        })
      } else {
        linstener.run(e)
      }
    }
  })
}
// 坐标转换
function parseLngLat (x, y) {
  let lng = parseFloat(x)
  let lat = parseFloat(y)
  return [lng, lat]
}
// 创建点元素
function creatElements (data, options) {
  if (!data || !(data instanceof Array)) {
    return []
  }
  const { id, x, y, symbol, cursor } = {
    ...{ id: 'id', x: 'x', y: 'y', cursor: 'pointer' },
    ...options
  }
  let eles = []
  let _symbol = symbol
  if (typeof symbol !== 'function') {
    _symbol = function () {
      return symbol
    }
  }
  data.forEach(element => {
    if (!element) return
    let [lng, lat] = parseLngLat(element[x], element[y])
    if (isNaN(lng) || isNaN(lat)) {
      return
    }
    element._uuid = element[id] || common.uuid()
    let profile = {
      feature: {
        type: 'Feature',
        id: element._uuid,
        geometry: { type: 'Point', coordinates: [lng, lat] },
        properties: element
      },
      options: {
        draggable: false
      },
      symbol: _symbol(element)
    }
    let ele = maptalks.Geometry.fromJSON(profile)
    ele.config('cursor', cursor)
    eles.push(ele)
  })
  return eles
}
// 创建线元素
function creatLines (data, options) {
  const { id, x, y, symbol, cursor } = {
    ...{ id: 'id', x: 'x', y: 'y', cursor: 'pointer' },
    ...options
  }
  if (!(data instanceof Array) || data.length < 2) return
  let pnts = []
  let _symbol = symbol
  if (typeof symbol !== 'function') {
    _symbol = function () {
      return symbol
    }
  }
  let uuid = data[0][id] || common.uuid()
  data.forEach(element => {
    if (!element) return
    let [lng, lat] = parseLngLat(element[x], element[y])
    if (isNaN(lng) || isNaN(lat)) return
    pnts.push([lng, lat])
  })
  let profile = {
    feature: {
      type: 'Feature',
      id: uuid,
      geometry: { type: 'LineString', coordinates: pnts },
      properties: data
    },
    options: {
      visible: true,
      arrowStyle: null,
      draggable: false,
      editable: false
    },
    symbol: _symbol(data[0])
  }
  let ele = maptalks.Geometry.fromJSON(profile)
  ele.config('cursor', cursor)
  return ele
}
</script>