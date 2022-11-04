<!--
 * @Author: chenhao
 * @Date: 2022-11-04 09:50:37
 * @LastEditTime: 2022-11-04 17:22:54
 * @FilePath: \maptalkstext\src\views\map\components\map-ships.vue
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
      map: 'MapModule/map'
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.getShips()
    })
  },
  methods: {
    getShips() {
      let mapObj = this.map
      const list =  ships
      const that = this
      console.log(mapObj)
      var layer = mapObj.getOrCreateLayerById('船舶', {})
      list.forEach(element => {
        const mmsi = element.properties.mmsi
        let shipStyle = 'shipItem'
        if (that.activeShip && thta.activeShip === mmsi) shipStyle = 'activeShip'
        var marker = new maptalks.ui.UIMarker(element.geometry.coordinates, {
          pitchWithMap: true,
          rotateWithMap: true,
          content: `<div id="${mmsi}" class="${shipStyle}" title="${mmsi}" style="transform:rotate(${element.properties.heading}deg)">
            <img src='/src/assets/ship.png' style="width:100%;height:100%" >
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
    // 船舶的点击事件
    showShipInfo(type, param, element) {
      if (this.activeShip) document.getElementById(this.activeShip).className = 'shipItem'
      this.shipInfo = this.getShipInfo(element)
      this.activeShip = element.properties.mmsi
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