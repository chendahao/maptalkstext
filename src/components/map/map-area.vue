<!--
 * @Author: chenhao
 * @Date: 2022-11-04 11:38:42
 * @LastEditTime: 2022-11-15 17:43:03
 * @FilePath: \maptalkstext\src\components\map\map-area.vue
 * @Description: 监控区域
-->
<template>
</template>

<script>
import * as maptalks from 'maptalks'
import { mapGetters } from 'vuex'
import { BACMEdgeApi as api } from '@/api/api'
export default {
  computed: {
    ...mapGetters({
      map: 'MapModule/map'
    })
  },
  mounted() {
    this.$nextTick(() => {
      this.getArea()
    })
  },
  methods: {
    getArea() {
      let list = []
      let mapObj = this.map
      const client = new api.AreaClient('', this.$axios)
      client.areaAll()
        .then(res => {
          res.forEach(element => {
            var polygon = new maptalks.Polygon(
              element.coords,
              {
                id: element.id,
                symbol: element.styles
              }
            )
            list.push(polygon)
          });
          var layer = mapObj.getOrCreateLayerById('监控区', {})
          .addGeometry(list)
          .addTo(mapObj.getInstance());
        })
        .finally(() => {
          // 加载完后 更新菜单
          this.$emit('areaLoaded', true)
        })
    },
    getArea1() {
      let mapObj = this.map
      var rect = new maptalks.Polygon(
        [
          [
            117.63903956604008,
            39.0134797786512
          ],
          [
            117.63903956604008,
            39.00605615959742
          ],
          [
            117.66528229904179,
            39.00602279325861
          ],
          [
            117.66526084136967,
            39.01349646006375
          ],
          [
            117.63903956604008,
            39.0134797786512
          ],
          [
            117.63903956604008,
            39.0134797786512
          ]
        ],
        {
          id: '感知区',
          symbol:{
            'name': '感知区',
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
        ],
        {
          id: 'safe',
          symbol:{
            'name': 'safe',
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
          
        ],
        {
          id: 'warning1',
          symbol: {
            'name': 'warning1',
            'lineColor': '#FFfF0b36',
            'lineWidth': 2,
            'polygonFill': '#fffF0bD4',
            'polygonOpacity': 0.6,
            'textName' : '危险区',
            'textSize' : 12
          }
        }
      )
      var warning2 = new maptalks.Polygon(
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
          
        ],
        {
          id: 'warning2',
          symbol: {
            'name': "warning2",
            'lineColor': '#FFfF0b36',
            'lineWidth': 2,
            'polygonFill': '#fffF0bD4',
            'polygonOpacity': 0.6,
            'textName' : '危险区',
            'textSize' : 12
          }
        }
      )
      var warning3 = new maptalks.Polygon(
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
          
        ],
        {
          id: 'warning3',
          symbol: {
            'name': 'warning3',
            'lineColor': '#FFfF0b36',
            'lineWidth': 2,
            'polygonFill': '#fffF0bD4',
            'polygonOpacity': 0.6,
            'textName' : '危险区',
            'textSize' : 12
          }
        }
      )
      var warning4 = new maptalks.Polygon(
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
          
        ],
        {
          id: 'warning4',
          symbol: {
            'name': 'warning4',
            'lineColor': '#FFfF0b36',
            'lineWidth': 2,
            'polygonFill': '#fffF0bD4',
            'polygonOpacity': 0.6,
            'textName' : '危险区',
            'textSize' : 12
          }
        }
      )
      var danger1 = new maptalks.Polygon(
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
          
        ],
        {
          id: 'danger1',
          symbol: {
            'name': 'danger1',
            'lineColor': '#FF330b36',
            'lineWidth': 2,
            'polygonFill': '#FF330b',
            'polygonOpacity': 0.6,
            'textName' : '禁行区',
            'textSize' : 10
          }
        }
      )
      var danger2 = new maptalks.Polygon(
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
          
        ],
        {
          id: 'danger2',
          symbol: {
            'name': 'danger2',
            'lineColor': '#FF330b36',
            'lineWidth': 2,
            'polygonFill': '#FF330b',
            'polygonOpacity': 0.6,
            'textName' : '禁行区',
            'textSize' : 10
          }
        }
      )
      var layer = mapObj.getOrCreateLayerById('监控区', {})
      .addGeometry([rect, safe, warning1, warning2, warning3, warning4, danger1, danger2])
      .addTo(mapObj.getInstance());
      // layer.on('click', this.showShipInfo())
    },
  },
}
</script>