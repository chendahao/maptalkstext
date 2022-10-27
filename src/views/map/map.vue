<!--
 * @Author: chenhao
 * @Date: 2022-10-11 16:13:58
 * @LastEditTime: 2022-10-27 17:54:28
 * @FilePath: \maptalkstext\src\views\map\map.vue
 * @Description: 
-->
<template>
  <div style="width:100vw;height:100%">
    <div class="compass" @click="returnNorth" title="回到正北方向">
      <img id="compass" src="../../assets/指北针.png" />
    </div>
    <shipInfoCard
      v-on:close="closeShipInfo"
      v-on:lockBearing="lockBearing"
      :shipInfo="shipInfo"
      v-show="showShipInfoCard"
      class="shipInfoCard"
    >
    </shipInfoCard>
    <div ref="map" class="map-container">

    </div>
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
import * as THREE from 'three';
import * as maptalks from 'maptalks'
import { ThreeLayer } from 'maptalks.three';
import coordinates from './coordiantes.json'
import shipInfoCard from './components/shipInfoCard.vue'
import ship from '@/assets/ship.png'
import compass from '@/assets/compass.png'
import ships from './shipMock.json'
export default {
  components: {
    shipInfoCard
  },
  data() {
    return {
      isDebug: true,
      show: false,
      showShipInfoCard: false,
      shipInfo: {},
      name: '',
      map: {}
    }
  },
  mounted() {
      //--0--//地图对象的初始化
      let that = this
      this.map = new maptalks.Map(that.$refs.map, {
        center: [117.65178174165794,39.01023457806687],
        //中心点标记红十字，用于开发debug
        centerCross : false,
        zoom: 16,
        layerSwitcherControl: {
          'position'  : 'top-right',
          // title of base layers
          'baseTitle' : '地图切换',
          // title of layers
          'overlayTitle' : '图层',
          // layers you don't want to manage with layer switcher
          'excludeLayers' : [],
          // css class of container element, maptalks-layer-switcher by default
          'containerClass' : 'maptalks-layer-switcher'
        },
        minZoom: 6,
        maxZoom: 22,
        // pitch: 45, // 倾角
        spatialReference:{
          projection:'EPSG:3857'
        },
        //缩放级别控件
        zoomControl : {
          'position'  : {'top': 60, 'right': 17},
          
        }, // add zoom control
        scaleControl: {
          'position'  : 'bottom-left',
          'maxWidth': 100,
          'metric': true,
          'imperial': false
        },
        //鹰眼控件
        overviewControl : false, // add overview control
        baseLayer: new maptalks.GroupTileLayer("base-map", [
          new maptalks.TileLayer('天地图', {
            visible : true ,
            // https://t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={z}&TILEROW={y}&TILEMATRIX={x}&tk=d18d774d914601719b0a06362ddfa797
            urlTemplate: 'http://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d18d774d914601719b0a06362ddfa797',
            subdomains: ['0','1','2','3','4','5','6','7'],
            spatialReference:{
              projection:'EPSG:3857'
            },
            attribution : '&copy; <a target="_blank" href="http://www.tianditu.cn">天地图</a>'
          }),
          new maptalks.TileLayer('light', {
            visible : false,
            urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            subdomains: ['a','b','c','d'],
            spatialReference:{
              projection:'EPSG:3857'
            },
            //renderer : 'canvas', // set TileLayer's renderer to canvas
            //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
            // tileSystem : [1, 1, -20037508.3427890,-20037508.3427890], // tile system
            attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
          }),
          new maptalks.TileLayer('dark', {
            visible : false,
            urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            subdomains: ['a','b','c','d'],
            spatialReference:{
              projection:'EPSG:3857'
            },
            //renderer : 'canvas', // set TileLayer's renderer to canvas
            //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
            // tileSystem : [1, 1, -20037508.3427890,-20037508.3427890], // tile system
            attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
          }),
          new maptalks.TileLayer('osm', {
            visible : false,
            urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            subdomains: ['a','b','c','d'],
            spatialReference:{
              projection:'EPSG:3857'
            },
            //renderer : 'canvas', // set TileLayer's renderer to canvas
            //tileSystem 控制瓦片的x,y以及行列，后两个是origin原点位置（很重要）
            // tileSystem : [1, 1, -20037508.3427890,-20037508.3427890], // tile system
            attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
          }),
          new maptalks.TileLayer('船讯网海图', {
            visible : false,
            urlTemplate: 'http://m12.shipxy.com/tile.c?l=Na&m=o&x={x}&y={y}&z={z}',
            spatialReference: {
              projection: 'EPSG:3395'
            },
            crs: 'EPSG:3395',
            attribution : '&copy; 船讯网海图'
          }),
        ])
      })
    // that.map.addOnLoadHook()
    // {
    // }
    that.init()
  },
  created() {
  },
  methods: {
    init() {
      const that = this
      that.map.on('mousemove', function (param) {
        document.getElementById('mouse-position1').innerHTML = param.coordinate.toFixed(5).toArray().join()
      });
      that.map.on('rotate', function (param) {
        that.addDragrotatingListener(param)
      });
      that.addArea()
      that.mapRotate()
      that.animation()
      if (that.$route.meta.showPanel) {
        // that.addPanel()
      }
      that.getShips()
      that.addBridge()
    },
    mapRotate() {
      // 指北针 实现
      // 监听地图旋转，拿到度数
      const that = this
      that.map.on("rotate", function (param) {
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
        ele.style.transform = "rotate(" + angle + "deg)";
      });
      // 将地图实例存储到全局
      // state.mapObj = map;
      // 返回地图实例
      // return map;
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
    addArea() {
      var rect = new maptalks.Rectangle(
        [117.63918174165794,39.0133457806687], 2250, 800,
        {
          symbol:{
            'polygonFill' : '#1bbc9b22',
            'polygonOpacity' : 1,
            'lineColor' : '#1bbc9b44',
            'lineWidth' : 6,
            'lineJoin'  : 'round', //miter, round, bevel
            'lineCap'   : 'round', //butt, round, square
            'lineDasharray' : null,//dasharray, e.g. [10, 5, 5]
            'lineOpacity ' : 1
          }
        }
      )
      var safe = new maptalks.Polygon(
        [
          [
            [
              117.64538884162903,
              39.00791304679197
            ],
            [
              117.65717983245848,
              39.01179795369458
            ],
            [
              117.66023755073546,
              39.011973019581845
            ],
            [
              117.66008734703063,
              39.01263159689522
            ],
            [
              117.65722274780272,
              39.01241485060835
            ],
            [
              117.6450777053833,
              39.008504966987324
            ],
            [
              117.64538884162903,
              39.00791304679197
            ]
          ]
        ],
        {
          symbol:{
            'lineColor': '#0bfF0b66',
            'lineWidth': 2,
            'polygonFill': '#0bfF0b',
            'polygonOpacity': 0.6
          }
        }
      )
      var warning1 = new maptalks.Polygon(
        [
          [
            [
              117.6514720916748,
              39.009913883862794
            ],
            [
              117.6518154144287,
              39.00918025017526
            ],
            [
              117.65794157981871,
              39.01109768581222
            ],
            [
              117.65755534172058,
              39.0118146266549
            ],
            [
              117.65715837478638,
              39.01178128073035
            ],
            [
              117.6514720916748,
              39.009913883862794
            ]
          ]
        ],
        {
          symbol:[
            {
              'lineColor': '#FFfF0b36',
              'lineWidth': 2,
              'polygonFill': '#fffF0bD4',
              'polygonOpacity': 0.6
            },
            {
              'textName' : '危险区',
              'textSize' : 12
            }
          ]
        }
      )
      var warning2 = new maptalks.Polygon(
        [
          [
            [
              117.65125215053557,
              39.00983468513791
            ],
            [
              117.64700889587402,
              39.008446608878295
            ],
            [
              117.64752388000488,
              39.00747952463328
            ],
            [
              117.65156865119934,
              39.009063535023365
            ],
            [
              117.65125215053557,
              39.00983468513791
            ]
          ]
        ],
        {
          symbol:[
            {
              'lineColor': '#FFfF0b36',
              'lineWidth': 2,
              'polygonFill': '#fffF0bD4',
              'polygonOpacity': 0.6
            },
            {
              'textName' : '危险区',
              'textSize' : 12
            }
          ]
        }
      )
      var warning3 = new maptalks.Polygon(
        [
        [
            [
              117.64677286148071,
              39.009063535023365
            ],
            [
              117.65100002288818,
              39.010422420930645
            ],
            [
              117.6506781578064,
              39.01120189278148
            ],
            [
              117.6462686061859,
              39.009838853494074
            ],
            [
              117.64677286148071,
              39.009063535023365
            ]
          ]
        ],
        {
          symbol:[
            {
              'lineColor': '#FFfF0b36',
              'lineWidth': 2,
              'polygonFill': '#fffF0bD4',
              'polygonOpacity': 0.6
            },
            {
              'textName' : '危险区',
              'textSize' : 12
            }
          ]
        }
      )
      var warning4 = new maptalks.Polygon(
        [
          [
            [
              117.65093564987181,
              39.0113144361358
            ],
            [
              117.6512575149536,
              39.01048911404537
            ],
            [
              117.65709400177,
              39.01240651419945
            ],
            [
              117.65639662742615,
              39.01322347760249
            ],
            [
              117.65093564987181,
              39.0113144361358
            ]
          ]
        ],
        {
          symbol:[
            {
              'lineColor': '#FFfF0b36',
              'lineWidth': 2,
              'polygonFill': '#fffF0bD4',
              'polygonOpacity': 0.6
            },
            {
              'textName' : '危险区',
              'textSize' : 12
            }
          ]
        }
      )
      var danger1 = new maptalks.Polygon(
        [
          [
            [
              117.65066206455232,
              39.01120189278148
            ],
            [
              117.65100002288818,
              39.01041825260885
            ],
            [
              117.6512575149536,
              39.01050578731423
            ],
            [
              117.65094101428984,
              39.01130609959715
            ],
            [
              117.65066206455232,
              39.01120189278148
            ]
          ]
        ],
        {
          symbol:[
            {
              'lineColor': '#FF330b36',
              'lineWidth': 2,
              'polygonFill': '#FF330b',
              'polygonOpacity': 0.6
            },
            {
              'textName' : '禁行区',
              'textSize' : 10
            }
          ]
        }
      )
      var danger2 = new maptalks.Polygon(
        [
          [
            [
              117.6518154144287,
              39.00918025017526
            ],
            [
              117.65146136283873,
              39.009905547159086
            ],
            [
              117.6512575149536,
              39.00984719020561
            ],
            [
              117.65156865119934,
              39.009063535023365
            ],
            [
              117.6518154144287,
              39.00918025017526
            ]
          ]
        ],
        {
          symbol:[
            {
              'lineColor': '#FF330b36',
              'lineWidth': 2,
              'polygonFill': '#FF330b',
              'polygonOpacity': 0.6
            },
            {
              'textName' : '禁行区',
              'textSize' : 10
            }
          ]
        }
      )
      var layer = new maptalks.VectorLayer('监控区', { enableAltitude : true })
      .addGeometry([rect, safe, warning1, warning2, warning3, warning4, danger1, danger2])
      .addTo(this.map);
      // layer.on('click', this.showShipInfo())
    },
    addBridge() {
      // var threeLayer = new ThreeLayer('t');
      // threeLayer.prepareToDraw = function (gl, scene, camera) {
      //   var light = new THREE.DirectionalLight(0xffffff);
      //   light.position.set(0, -10, -10).normalize();
      //   scene.add(light);

      //     var material = new THREE.MeshPhongMaterial();
      //     countries.features.forEach(function (g) {
      //         //g is geojson Feature
      //         var num = g.properties.population;

      //         var extrudePolygon = threeLayer.toExtrudePolygon(g, { height: num }, material);
      //         threeLayer.addMesh(extrudePolygon)
      //     });
      // };

      // this.map.addLayer(threeLayer);

      var threeLayer = new ThreeLayer('桥示意图', {
            identifyCountOnEvent: 1,
            // forceRenderOnMoving: true,
            // forceRenderOnRotating: true
        });
        threeLayer.prepareToDraw = function (gl, scene, camera) {
            var light = new THREE.DirectionalLight(0xFF330b);
            light.position.set(0, -10, 10).normalize();
            scene.add(light);
            scene.add(new THREE.AmbientLight('#FF330b36', 0.5));
            animate();
            addPolygon();
            addPolygon2();
            addPolygon3();

        };
        threeLayer.addTo(this.map);

        function addPolygon() {
            const material = new THREE.MeshLambertMaterial({ color: '#FF330b36', transparent: true });
            const extrudePolygons = [];
            const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[
              [
                117.6518154144287,
                39.00918025017526
              ],
              [
                117.65146136283873,
                39.009905547159086
              ],
              [
                117.6512575149536,
                39.00984719020561
              ],
              [
                117.65156865119934,
                39.009063535023365
              ],
              [
                117.6518154144287,
                39.00918025017526
              ]
          ]] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [117.6518154144287, 39.00918025017526] } };

            const building = threeLayer.toExtrudePolygon(f, { height: 10 }, material);

            threeLayer.addMesh(building);
        }
        function addPolygon2() {
            const material = new THREE.MeshLambertMaterial({ color: '#FF330b36', transparent: true });
            const extrudePolygons = [];
            const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [
              [
                [
                  117.65066206455232,
                  39.01120189278148
                ],
                [
                  117.65100002288818,
                  39.01041825260885
                ],
                [
                  117.6512575149536,
                  39.01050578731423
                ],
                [
                  117.65094101428984,
                  39.01130609959715
                ],
                [
                  117.65066206455232,
                  39.01120189278148
                ]
              ]
            ] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [117.6518154144287, 39.00918025017526] } };

            const building = threeLayer.toExtrudePolygon(f, { height: 10 }, material);

            threeLayer.addMesh(building);
        }
        function addPolygon3() {
            const material = new THREE.MeshLambertMaterial({ color: '#33330b36', transparent: false });
            const extrudePolygons = [];
            const f = { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [
              [
                [
                  117.65100002288818,
                  39.01041825260885
                ],
                [
                  117.6512575149536,
                  39.01050578731423
                ],
                [
                  117.65146136283873,
                  39.009905547159086
                ],
                [
                  117.6512575149536,
                  39.00984719020561
                ],
                [
                  117.65100002288818,
                  39.01041825260885
                ]
              ]
            ] }, "properties": { "name": "1-3cf0006e", "_color": "#4b3aff", "center": [117.6518154144287, 39.00918025017526] } };

            const building = threeLayer.toExtrudePolygon(f, { height: 30 }, material);

            threeLayer.addMesh(building);
        }
        function animate() {
            requestAnimationFrame(animate);
            threeLayer._needsUpdate = !threeLayer._needsUpdate;
            if (threeLayer._needsUpdate && !threeLayer.isRendering()) {
                threeLayer.redraw();
            }

        }
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
    },
    getShips() {
      const list =  ships
      const that = this
      var layer = new maptalks.VectorLayer('船舶', {
        hitDetect: true,
        geometryEvents: true
      }).addTo(this.map);
      list.forEach(element => {
        var marker = new maptalks.ui.UIMarker(element.geometry.coordinates, {
          pitchWithMap: true,
          rotateWithMap: true,
          content: `<div class="shipItem" title="${element.properties.mmsi}" style="transform:rotate(${element.properties.heading}deg)">
            <img src='/src/assets/ship.png' style="width:100%;height:100%" >
            </div>`
        })
        .addTo(layer);
        // var marker = new maptalks.Marker(element.geometry.coordinates, {
        //   pitchWithMap: true,
        //   rotateWithMap: true,
        //   symbol: [
        //     {
        //       'markerFile': ship,
        //       'markerType' : 'square',
        //       'markerFill' : 'red',
        //       'markerLineColor': 'black',
        //       'markerWidth' : 15,
        //       'markerHeight' : 30,
        //       'markerRotation': element.properties.heading
        //     },
        //     {
        //       'textPlacement': 'line',
        //       'textName' : element.properties.mmsi,
        //       'textFill' : 'green',
        //       'textDy': -12,
        //       'textHaloFill': 'red',
        //       'textSize' : { stops: [[7, 2], [0, 14]] }
        //     }
        //   ]
        // })
        // .addTo(layer);
        // marker.setInfoWindow({
        //   'title'     : 'Marker\'s InfoWindow',
        //   'content'   : 'Click on marker to open.',
        //   'autoPan': true,
        //   'width': 300,
        //   'minHeight': 120,
        //   'custom': false,
        //   'autoOpenOn' : 'click',  //set to null if not to open when clicking on marker
        //   'autoCloseOn' : 'click'
        // })
        // 出发dbclick 前会触发click
        // marker.on('click', function (param){
        //   that.showShipInfo('click', param, element)
        // });
        marker.on('click', function (param){
          that.showShipInfo('click', param, element)
        });
      });
    },
    // 获取船舶静态信息
    getShipInfo(element) {
      return element
    },
    showShipInfo(type, param, element) {
      // console.log(param.coordinate)
      // console.log(element)
      // console.log(this.map)
      this.shipInfo = this.getShipInfo(element)
      // this.map.setCenter(param.coordinate)
      this.showShipInfoCard = true
    },
    closeShipInfo() {
      this.showShipInfoCard = false
    },
    lockBearing(info) {
      this.map.setPitch(30)
      this.map.setBearing(info.properties.heading)
      this.map.setCenter(info.geometry.coordinates)
    },
    // 地图回到正北方向
    returnNorth() {
      if (this.map) {
        this.map.setBearing(0)
        this.map.setPitch(0)
        let ele = document.getElementById("compass");
        // 设置度数
        ele.style.transform = "rotate(" + 0 + "deg)";
      }
    }
  },
}
</script>

<style>
  @import 'maptalks/dist/maptalks.css';
  html,body{margin:0px;height:100%;width:100%}
  .map-container{width:100%;height:100%}
  #coordinate{position:fixed;left:0px;top:0px;width:100%;height:95px;overflow:hidden}
  #coordinate div{background-color:rgba(13, 13, 13, 0.5);width:100%;height:100%;padding:10px 10px 10px 10px;font:13px bold sans-serif;color:#fff}

  #mouse-position {
    position: absolute;
    bottom: 40px;
    left: 10px;
    color: #000;
  }
  .compass {
    position: absolute;
    bottom: 1%;
    right: 1%;
    width: 90px;
    height: 88px;
    z-index: 1;
  }
  .shipInfoCard {
    position: absolute;
    top: 2%;
    left: 1%;
    width: 300px;
    height: 300px;
    z-index: 1;
  }
  .compass img {
    width: 100%;
    height: 100%;
  }
  .shipItem {
    /* border: 1px solid #3a3; */
    width:15px;
    height: 30px;
  }
</style>