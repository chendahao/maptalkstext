<!--
 * @Author: chenhao
 * @Date: 2022-10-11 16:13:58
 * @LastEditTime: 2022-11-07 16:43:26
 * @FilePath: \maptalkstext\src\views\map\map.vue
 * @Description: 
-->
<template>
  <div style="width:100vw;height:100%">
    <map-main></map-main>
    <map-Comapss></map-Comapss>
    <map-Ships></map-Ships>
    <map-area></map-area>
    <map-bridge></map-bridge>
    <map-Animation></map-Animation>
    <!-- <ship-Info-Card
      v-on:close="closeShipInfo"
      v-on:lockBearing="lockBearing"
      :shipInfo="shipInfo"
      v-show="showShipInfoCard"
      class="shipInfoCard"
    >
    </ship-Info-Card> -->
    <!-- <div ref="map" class="map-container">
    </div> -->
    <div id="mouse-position" class="mouse-position">
      <div id="mouse-position1"></div>
    </div>
    <div v-show="show">
        <div ref="infowindow_content">
            <h2>{{name}}</h2>
        </div>
    </div>
  </div>
</template>

<script>
// import * as maptalks from 'maptalks'
import MapMain from '@/components/map/map-main.vue'
import ShipInfoCard from '@/components/map/shipInfoCard.vue'
import MapComapss from '@/components/map/map-compass.vue'
import MapShips from '@/components/map/map-ships.vue'
import MapArea from '@/components/map/map-area.vue'
import MapBridge from '@/components/map/map-bridge.vue'
import MapAnimation from '@/components/map/map-animation.vue'
// import ships from './components/shipMock.json'
export default {
  components: {
    MapMain,
    MapShips,
    // ShipInfoCard,
    MapComapss,
    MapArea,
    MapBridge,
    MapAnimation
  },
  data() {
    return {
      isDebug: true,
      show: false,
      showShipInfoCard: false,
      shipInfo: {},
      name: '',
      activeShip: '',
      map: {}
    }
  },
  mounted() {
    //--0--//地图对象的初始化
    let that = this
    // that.$nextTick(() => {
    //   this.map = new maptalks.Map(that.$refs.map, {
    //     center: [117.652,39.01],
    //     //中心点标记红十字，用于开发debug
    //     centerCross : false,
    //     attribution: false,
    //     zoom: 16,
    //     layerSwitcherControl: {
    //       position: {
    //         top: 100,
    //         right: 15
    //       },
    //       // title of base layers
    //       'baseTitle' : '地图切换',
    //       // title of layers
    //       'overlayTitle' : '图层',
    //       // layers you don't want to manage with layer switcher
    //       'excludeLayers' : [],
    //       // css class of container element, maptalks-layer-switcher by default
    //       'containerClass' : 'maptalks-layer-switcher'
    //     },
    //     minZoom: 6,
    //     maxZoom: 22,
    //     // pitch: 45, // 倾角
    //     spatialReference:{
    //       projection:'EPSG:3857'
    //     },
    //     //缩放级别控件
    //     zoomControl: {
    //       position: {
    //         top: 10,
    //         right: 10
    //       },
    //       slider: false,
    //       zoomLevel: true,
    //       containerClass: ''
    //     },
    //     scaleControl: {
    //       'position'  : 'bottom-left',
    //       'maxWidth': 100,
    //       'metric': true,
    //       'imperial': false
    //     },
    //     //鹰眼控件
    //     overviewControl : false, // add overview control
    //     baseLayer: new maptalks.GroupTileLayer("base-map", [
    //       new maptalks.TileLayer('天地图', {
    //         visible : true ,
    //         // https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={z}&TILEROW={y}&TILEMATRIX={x}&tk=d18d774d914601719b0a06362ddfa797
    //         urlTemplate: 'http://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d18d774d914601719b0a06362ddfa797',
    //         subdomains: ['0','1','2','3','4','5','6','7'],
    //         spatialReference:{
    //           projection:'EPSG:3857'
    //         }
    //       }),
    //       new maptalks.TileLayer('light', {
    //         visible : false,
    //         urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    //         subdomains: ['a','b','c','d'],
    //         spatialReference:{
    //           projection:'EPSG:3857'
    //         },
    //         //renderer : 'canvas', // set TileLayer's renderer to canvas
    //         //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
    //         // tileSystem : [1, 1, -20037508.3427890,-20037508.3427890], // tile system
    //       }),
    //       new maptalks.TileLayer('dark', {
    //         visible : false,
    //         urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
    //         subdomains: ['a','b','c','d'],
    //         spatialReference:{
    //           projection:'EPSG:3857'
    //         },
    //         //renderer : 'canvas', // set TileLayer's renderer to canvas
    //         //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
    //         // tileSystem : [1, 1, -20037508.3427890,-20037508.3427890], // tile system
    //         attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    //       }),
    //       new maptalks.TileLayer('osm', {
    //         visible : false,
    //         urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //         subdomains: ['a','b','c','d'],
    //         spatialReference:{
    //           projection:'EPSG:3857'
    //         },
    //         //renderer : 'canvas', // set TileLayer's renderer to canvas
    //         //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
    //         // tileSystem : [1, 1, -20037508.3427890,-20037508.3427890], // tile system
    //         attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
    //       }),
    //       new maptalks.TileLayer('船讯网海图', {
    //         visible : false,
    //         urlTemplate: 'http://m12.shipxy.com/tile.c?l=Na&m=o&x={x}&y={y}&z={z}',
    //         spatialReference: {
    //           projection: 'EPSG:3395'
    //         },
    //         crs: 'EPSG:3395',
    //         attribution : '&copy; 船讯网海图'
    //       }),
    //     ])
    //   })
    //   that.init()
    // })
  },
  created() {
  },
  methods: {
    init() {
      const that = this
      // that.addArea()
      // 轨迹
      // that.animation()
      if (that.$route.meta.showPanel) {
        // that.addPanel()
      }
      // that.getShips()
    },
    update(e) {
      console.log(e.coordinate.toFixed(5).toArray().join())
    },
    addPanel() {
      var textPanel = new maptalks.control.Panel({
        'position'      : {'top':'220', 'left': '50'},
        'draggable'     : true,
        'custom'        : false,
        'content'       : '通航公告',
        'closeButton'   : true
      });
      this.map.addControl(textPanel);

      var textPanel2 = new maptalks.control.Panel({
        'position'      : {'top':'120', 'left': '50'},
        'draggable'     : true,
        'custom'        : false,
        'content'       : '气象信息',
        'closeButton'   : true
      });
      this.map.addControl(textPanel2);
      
    },
    animation() {
      var layer = new maptalks.VectorLayer('轨迹', {
        hitDetect: true,
        geometryEvents: true
      }).addTo(this.map);
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
      // for (let index = 1; index < coordiantes.length - 1; index++) {
      //   var point = new maptalks.Marker(coordiantes[index], {
      //     symbol: {
      //       markerFile: markerFile,
      //       markerWidth: 20,
      //       markerHeight: 20,
      //       markerDy: 10
      //     },
      //   })
      //   point.addTo(layer);
      // }
    },
    // 
    addDragrotatingListener(e) {
      // console.log(e)
    }
  },
}
</script>

<style>
@import './map.css';
</style>