<!--
 * @Author: chenhao
 * @Date: 2022-11-11 16:45:23
 * @LastEditTime: 2022-11-12 17:06:38
 * @FilePath: \maptalkstext\src\views\warnArea\add.vue
 * @Description: 
-->
<template>
  <div style="width:100vw;height:100%">
    <!-- <div>
      <v-btn color="success" @click="startDraw">start</v-btn>
      <v-btn color="success" @click="saveArea">save</v-btn>
      <v-btn color="success" @click="redraw">redraw</v-btn>
    </div> -->
    <div>
      <map-main></map-main>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as maptalks from 'maptalks'
// import MapMain from '@/components/map/map-main.vue'

let drawTool, AreaLayer
export default {
  components: {
    // MapMain
  },
  computed: {
    // ...mapGetters({
    //   map: 'MapModule/map'
    // }),
  },
  mounted: {

  },
  methods: {
    // initTool () {
    //   let mapObj = this.map
    //   AreaLayer = mapObj.getOrCreateLayerById('区域', {})
    //   drawTool = new maptalks.DrawTool({
    //     mode: 'Point'
    //   }).addTo(map).disable();

    //   drawTool.on('drawend', function (param) {
    //     console.log(param.geometry);
    //     layer.addGeometry(param.geometry);
    //   });
    // },
    // startDraw () {
    //   // https://maptalks.org/examples/cn/interaction/draw-tool/#interaction_draw-tool
    //   drawTool.setMode(value).enable();
    // },
    // saveArea () {

    // },
    // redraw () {
    //   AreaLayer.clear()
    // }
  },
}
</script>