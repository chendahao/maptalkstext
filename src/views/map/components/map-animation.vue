<!--
 * @Author: chenhao
 * @Date: 2022-11-04 17:13:11
 * @LastEditTime: 2022-11-04 17:22:49
 * @FilePath: \maptalkstext\src\views\map\components\map-animation.vue
 * @Description: 
-->
<template>
</template>

<script>
import coordinates from './coordiantes.json'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      map: 'MapModule/map'
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.animation()
    })
  },
  methods: {
    animation() {
      let mapObj = this.map
      var layer = mapObj.getOrCreateLayerById('轨迹', {
        hitDetect: true,
        geometryEvents: true
      })
      
      var layer = new maptalks.VectorLayer('轨迹', ).addTo(this.map);
      var coordiantes = coordinates
      // var markerFile = arrow
      var line = new maptalks.LineString(coordiantes, {
          id : 'arrow',
          arrowStyle : 'classic',
          arrowPlacement : 'point',
          symbol: {
            lineWidth: 2,
            lineColor: 'yellow'
          }
        });
      line.addTo(layer);
    },
  }
}
</script>