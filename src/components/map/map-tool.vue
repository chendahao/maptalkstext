<!--
 * @Author: chenhao
 * @Date: 2022-11-11 10:20:19
 * @LastEditTime: 2022-11-11 14:40:35
 * @FilePath: \maptalkstext\src\components\map\map-tool.vue
 * @Description: 
-->
<template>
  <div class="map-tool">
    <!-- tool -->
    <div :style="{'background': !distanceToolEnable ? '#172029' : '#1bbc9b'}" class="map-tool-btn" @click="GetDistance" title="测量距离">
      <img class="tool-img" src="../../assets/map-tool/line.png" />
    </div>
    <div :style="{'background': !areaToolEnable ? '#172029' : '#1bbc9b'}" class="map-tool-btn" @click="GetArea" title="测量面积">
      <img class="tool-img" src="../../assets/map-tool/area.png" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as maptalks from 'maptalks'

let distanceTool, areaTool
export default {
  computed: {
    ...mapGetters({
      map: 'MapModule/map',
    })
  },
  data () {
    return {
      isInit: false,
      distanceToolEnable: false, // 用于控制按钮的状态
      areaToolEnable: false,
    }
  },
  methods: {
    GetDistance () {
      !this.isInit && this.init()
      this.distanceToolEnable = true
      distanceTool.enable()
    },
    GetArea () {
      !this.isInit && this.init()
      this.areaToolEnable = true
      areaTool.enable()
    },
    init () {
      this.isInit = true
      let _map = this.map.getInstance()
      distanceTool = new maptalks.DistanceTool({
        symbol: {
          lineColor: '#34495e',
          lineWidth: 2
        },
        vertexSymbol: {
          markerType: 'ellipse',
          markerFill: '#1bbc9b',
          markerLineColor: '#000',
          markerLineWidth: 3,
          markerWidth: 10,
          markerHeight: 10
        },

        labelOptions: {
          textSymbol: {
            textFaceName: 'monospace',
            textFill: '#fff',
            textLineSpacing: 1,
            textHorizontalAlignment: 'right',
            textDx: 15,
            markerLineColor: '#b4b3b3',
            markerFill: '#000'
          },
          boxStyle: {
            padding: [6, 2],
            symbol: {
              markerType: 'square',
              markerFill: '#000',
              markerFillOpacity: 0.9,
              markerLineColor: '#b4b3b3'
            }
          }
        },
        clearButtonSymbol: [
          {
            markerType: 'square',
            markerFill: '#000',
            markerLineColor: '#b4b3b3',
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 20
          },
          {
            markerType: 'x',
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: '#fff',
            markerDx: 20
          }
        ],
        language: 'zh-CN'
      }).addTo(_map).disable()

      areaTool = new maptalks.AreaTool({
        symbol: {
          lineColor: '#1bbc9b',
          lineWidth: 2,
          polygonFill: '#fff',
          polygonOpacity: 0.3
        },
        vertexSymbol: {
          markerType: 'ellipse',
          markerFill: '#34495e',
          markerLineColor: '#1bbc9b',
          markerLineWidth: 3,
          markerWidth: 10,
          markerHeight: 10
        },
        labelOptions: {
          textSymbol: {
            textFaceName: 'monospace',
            textFill: '#fff',
            textLineSpacing: 1,
            textHorizontalAlignment: 'right',
            textDx: 15
          },
          boxStyle: {
            padding: [6, 2],
            symbol: {
              markerType: 'square',
              markerFill: '#000',
              markerFillOpacity: 0.9,
              markerLineColor: '#b4b3b3'
            }
          }
        },
        clearButtonSymbol: [
          {
            markerType: 'square',
            markerFill: '#000',
            markerLineColor: '#b4b3b3',
            markerLineWidth: 2,
            markerWidth: 15,
            markerHeight: 15,
            markerDx: 22
          },
          {
            markerType: 'x',
            markerWidth: 10,
            markerHeight: 10,
            markerLineColor: '#fff',
            markerDx: 22
          }
        ],
        language: 'zh-CN'
      }).addTo(_map).disable()
      distanceTool.on('drawend', _ => {
        this.distanceToolEnable = false
        distanceTool.disable()
      })
      areaTool.on('drawend', _ => {
        this.areaToolEnable = false
        areaTool.disable()
      })
    }
  }
}
</script>
<style scoped>
.map-tool-btn{
  display: block;
  width: 29px;
  border-radius: 3px;
  height: 29px;
  background: #172029;
  color: #fff;
  line-height: 29px;
  font-size: 12px;
  transform: scale(.8);
}
.tool-img{
  padding: 2px;
  width:27px;
  height: 27px;
}

</style>