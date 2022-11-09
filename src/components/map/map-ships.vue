<!--
 * @Author: chenhao
 * @Date: 2022-11-04 09:50:37
 * @LastEditTime: 2022-11-09 17:55:43
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
  </ship-Info-Card>
</template>
<script>
import { mapGetters } from 'vuex'
import ships from './shipMock.json'
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
      activeShip: '',
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
      this.getShips()
    })
  },
  watch: {
    shipList(val) {
      this.getShips()
    }
  },
  methods: {
    getShips() {
      let mapObj = this.map
      const list =  this.shipList
      
      console.log(list)
      if (list.length <= 0) return
      const that = this
      var layer = mapObj.getOrCreateLayerById('船舶', {})
      list.forEach(element => {
        const mmsi = element.properties.mmsi
        const name = element.name || element.properties.mmsi
        const fontWidth = name.length
        let shipStyle = 'shipItem'
        if (that.activeShip && thta.activeShip === mmsi) shipStyle = 'activeShip'
        const color = '#5BF709'
        var marker = new maptalks.ui.UIMarker(element.geometry.coordinates, {
          pitchWithMap: true,
          rotateWithMap: true,
          //            // <img src='/src/assets/ship.png' style="width:100%;height:100%" >
          content: `<div id="${mmsi}" class="${shipStyle}" title="${name}">
            <div style="background-color: #f0f0f0; margin-top:-30px; height: 17px; width:${fontWidth * 8 + 10}px; position:absolute;font-size: 13px;">
              ${name}
            </div>
            <div style="width: 25px;height:5px;margin-top:96px; border-bottom:1px solid #000;transform: rotate( 105deg);"></div>
            <svg width="15" height="30" style="transform:rotate(${element.properties.heading}deg)">
              <g>
                <path xmlns="http://www.w3.org/2000/svg" d="m0.782406,29.604881l6.709559,-29.044118l6.709559,29.044118l-13.419118,0z" style="fill:#5BF709;stroke: #000000;stroke-width:1" />
              </g>
            </svg>
          </div>`
        })
        .addTo(layer);
        marker.on('click', function (param){
          that.showShipInfo('click', param, element)
        });
      });
    },
    // 获取船舶静态信息
    getShipInfo(element) {
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
    },
    lockBearing(info) {
      let mapObj = this.map.getInstance()
      mapObj.setPitch(30)
      // mapObj.setZoom(16)
      mapObj.setBearing(info.properties.heading)
      mapObj.panTo(info.geometry.coordinates)
    }
  }
}
  
</script>