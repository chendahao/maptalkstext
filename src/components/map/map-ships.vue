<!--
 * @Author: chenhao
 * @Date: 2022-11-04 09:50:37
 * @LastEditTime: 2022-11-12 16:50:35
 * @FilePath: \maptalkstext\src\components\map\map-ships.vue
 * @Description: 
-->
<template>
  <ship-Info-Card
    v-on:close="closeShipInfo"
    v-on:lockBearing="lockBearing"
    :shipInfo="shipInfo"
    v-show="showShipInfoCard"
    class="shipInfoCard"
  >
    <v-btn color="success" @click="cleaarGeom">移动位置测试</v-btn>
    <v-btn color="success" @click="cleaarItem">清除测试</v-btn>
    <v-btn color="success" @click="cleaarGeom">移动位置测试</v-btn>
  </ship-Info-Card>
</template>
<script>
import { mapGetters } from 'vuex'
import * as maptalks from 'maptalks'
import ShipInfoCard from './shipInfoCard.vue'
export default {
  components: {
    ShipInfoCard
  },
  data() {
    return {
      showShipInfoCard: false,
      shipInfo: {},
      index: 0,
      ready: false,
      locked: false,
      activeShip: '',
      markerList: [] // 存储marker
    }
  },
  computed: {
    ...mapGetters({
      map: 'MapModule/map',
      shipList: 'shipList/shipList'
    }),
  },
  mounted() {
    this.$nextTick(() => {
      this.initShips()
      this.$eventBus.$on('shipTrack', this.onShipTrack);
      this.$eventBus.$on('ShipInfo', this.onShipInfo);
      this.$eventBus.$on('TrackEvent', this.onTrackEvent);
    })
  },
  watch: {
    shipList(val) {
      this.initShips()
    }
  },
  methods: {
    // 初次加载船舶
    initShips: async function () {
      let mapObj = this.map
      const list =  this.shipList
      console.log(typeof list)
      if (typeof list !== 'object') return
      if (list.length <= 0) return
      const that = this
      const arr1 = list
      const arr2 = that.markerList
      // // 差集 新增
      // const addList = arr1.filter(function (val) { return arr2.indexOf(val.mmsi) === -1 })
      // // 差集 删除
      // const removeList = arr2.filter(function (val) { return arr1.indexOf(val) === -1 })
      // // 并集 更新
      // const updateList = arr1.concat(arr2.filter(function (val) { return !(arr1.indexOf(val) > -1) }))
      // var layer = mapObj.getOrCreateLayerById('船舶', {})
      list.forEach(element => {
        const mmsi = element.properties.mmsi
        const name = element.name || element.properties.mmsi
        const fontWidth = name.length
        let shipStyle = 'shipItem'
        if (that.activeShip && thta.activeShip === mmsi) shipStyle = 'activeShip'
        const color = '#5BF709'
        // ui marker 直接加载到map中,从layer中添加操作无效
        var marker = new maptalks.ui.UIMarker(element.geometry.coordinates, {
          id: mmsi,
          pitchWithMap: true,
          rotateWithMap: true,
          // dx: -80,
          content: `<div style="margin-top:-80px" title="${name}">
            <div style="background-color: #f0f0f0; margin-top:-30px; height: 17px; width:${fontWidth * 8 + 10}px; position:absolute;font-size: 13px;">
              ${name}
            </div>
            <div style="width: 25px;height:5px;margin-top:96px; border-bottom:1px solid #000;transform: rotate( 105deg);"></div>
            <div id="${mmsi}" class="${shipStyle}">
              <svg width="15" height="30" style="transform:rotate(${element.properties.heading}deg)">
                <g>
                  <path xmlns="http://www.w3.org/2000/svg" d="m0.782406,29.604881l6.709559,-29.044118l6.709559,29.044118l-13.419118,0z" style="fill:#5BF709;stroke: #000000;stroke-width:1" />
                </g>
              </svg>
            <div/>
          </div>`
        })
        .addTo(mapObj.getInstance());
        that.markerList.push(marker)
        marker.on('click', function (param){
          that.showShipInfo('click', param, element)
        });
      });
      this.ready = true
    },
    cleaarItem() {
      this.markerList[1].remove()
    },
    // 测试用方法
    cleaarGeom() {
      console.log(this.map.getInstance())
      this.markerList[0].setCoordinates({x:117.706,y:38.993})
      // let index = this.index
      // const pos = this.markerList[index + 1].getCoordinates()
      // this.markerList[index].setCoordinates(pos)
      // console.log(this.markerList[index].getCoordinates())
      // index = index + 1
      // console.log(index)
      // if (index === 20) index = 0
    },
    // 移除时需要判断是否为active ship
    onShipTrack(item) {
      if (!this.ready) return
      console.log(item)
    },
    onShipInfo(item) {
      if (!this.ready) return
      console.log(item)
    },
    onTrackEvent(item) {
      if (!this.ready) return
      console.log(item)
    },
    // 获取船舶静态信息
    getShipInfo(element) {
      console.log(this.markerList)
      console.log(element)
      return element
    },
    getShipColor() {

    },
    // 船舶的点击事件
    showShipInfo(type, param, element) {
      if (this.activeShip) document.getElementById(this.activeShip).className = 'shipItem'
      this.shipInfo = this.getShipInfo(element)
      this.activeShip = element.mmsi
      document.getElementById(this.activeShip).className = 'activeShip'
      // this.map.setCenter(param.coordinate)
      this.showShipInfoCard = true
    },
    closeShipInfo() {
      if (this.activeShip) document.getElementById(this.activeShip).className = 'shipItem'
      this.showShipInfoCard = false
      this.locked = false
    },
    lockBearing(info) {
      this.locked = true
      let mapObj = this.map.getInstance()
      mapObj.setPitch(30)
      // mapObj.setZoom(16)
      mapObj.setBearing(info.properties.heading)
      mapObj.panTo(info.geometry.coordinates)
      // 这里需要关联指北针
      let ele = document.getElementById("compass");
      // 设置度数
      ele.style.transform = "rotate(" + info.geometry.coordinates + "deg)";
    }
  }
}
  
</script>