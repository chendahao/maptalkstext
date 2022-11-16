<!--
 * @Author: chenhao
 * @Date: 2022-11-11 16:45:23
 * @LastEditTime: 2022-11-16 09:12:31
 * @FilePath: \maptalkstext\src\views\warnArea\edit.vue
 * @Description: 
-->
<template>
  <div>
    <div class="area-title">
      监控区域维护
    </div>
    <map-main style="width:100vw;height:100vh"></map-main>
    <map-area @areaLoaded="areaLoaded"></map-area>
    <map-plot-edit ref="plotEdit"></map-plot-edit>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as maptalks from 'maptalks'
import MapMain from '@/components/map/map-main.vue'
import MapArea from '@/components/map/map-area.vue'
import { BACMEdgeApi as api } from '@/api/api'
import { isEqual } from 'lodash'
import MapPlotEdit from '@/components/map/map-plot-edit.vue'
// import { forEachCoord } from '@/components/utils/tool'

let drawTool, AreaLayer, toolbar
export default {
  components: {
    MapMain,
    MapArea,
    MapPlotEdit
  },
  computed: {
    ...mapGetters({
      map: 'MapModule/map',
      // areaLoaded: 'MapModule/areaLoaded'
    }),
  },
  data() {
    return {
      editItem: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initTool()
    })
  },
  methods: {
    areaLoaded (val) {
      console.log(val)
      this.getToolBar()
    },
    initTool () {
      let that = this
      let mapObj = this.map
      AreaLayer = mapObj.getOrCreateLayerById('监控区', {})
      console.log(AreaLayer)
      console.log(AreaLayer.getGeometries())
      drawTool = new maptalks.DrawTool({
        mode: 'Polygon',
        once : true
      }).addTo(mapObj.getInstance()).disable();

      drawTool.on('drawend', function (param) {
        // 只有手动添加的时候触发 此方法,编辑不触发
        that.addGeometry(param)
        // 添加一个图形后 禁用工具,防止连续添加
        // drawTool.disable();
      });

      // let geos =  AreaLayer.getGeometries()
      // var items = geos.map(function (item) {
      //   return {
      //     item: item.getId(),
      //     click: function () {
      //       item.startEdit();
      //     }
      //   };
      // });

      this.getToolBar()
    },
    // note  先绘制,绘制完成后在编辑样式和名称
    // todo  需要给图形一个默认的样式和名称
    getToolBar() {
      let that = this
      let mapObj = this.map
      toolbar = new maptalks.control.Toolbar({
        position: {
          top: 15,
          right: 50
        },
        items: [
          {
            item: '区域列表',
            children: that.getGeometries()
          },
          {
            item: '新增',
            click: function () {
              that.endEdit()
              drawTool.enable();
            }
          },
          {
            item: '保存',
            click: function () {
              that.saveArea()
            }
          },
          {
            item: '返回',
            click: function () { 
              that.toMain()
            }
          },
          // {
          //   item: 'test',
          //   click: function () {
          //     that.test()
          //   }
          // },
          // {
          //   item: 'Clear',
          //   click: function () {
          //     AreaLayer.clear()
          //   }
          // }
        ]
      }).addTo(mapObj.getInstance());
    },
    toMain () {
      this.$router.push({name: 'areaIndex'})
    }, 
    addGeometry (param) {
      console.log(param.geometry._coordinates);
      console.log(param.geometry.getSymbol())
      let Polygon = new maptalks.Polygon(param.geometry._coordinates, {
        id: 'newSymbol',
        symbol: {
          name: '新增区域',
          description: '',
          tag: '',
          textName: '新增区域',
          textSize: 12,
          lineColor: '#000',
          lineWidth: 2,
          lineOpacity: 1,
          polygonFill: '#fff',
          polygonOpacity: 0.3
        }
      })
      AreaLayer.addGeometry(Polygon);
      this.getToolBar()
    },
    getGeometries () {
      let that = this
      let geos =  AreaLayer.getGeometries()
      var items = geos.map(function (item) {
        return {
          item: item.getSymbol().name,
          click: function () {
            if (that.editItem) {
              that.checkSave(item)
            } else {
              that.editItem = item
              item.startEdit();
              that.$refs.plotEdit.open({type: 'polygon', xy: {x: 20, y: 60 }, geo: item})
            }
          }
        };
      });
      return items
    },
    checkSave (item) {
      this.$confirm('还未保持数据变更, 是否保存?', '提示', {
          confirmButtonText: '保存',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 弹出样式框
          this.saveArea()
          this.editItem = item
          item.startEdit();
          this.$refs.plotEdit.open({type: 'polygon', xy: {x: 20, y: 20 }, geo: item})
        }).catch(() => {
          this.editItem.undoEdit()
          this.editItem.endEdit()
          this.$refs.plotEdit.close()
          this.editItem = null
          this.$message('已取消')
        });
    },
    startDraw () {
      drawTool.setMode('Polygon').enable();
    },
    stopDraw () {
      if (this.editItem) {
        this.editItem.endEdit()
        console.log(this.editItem)
        console.log(this.editItem.getSymbol())
      }
      this.editItem.endEdit()
      drawTool.disable();
    },
    saveArea () {
      // 这里提交editItem
      console.log(this.editItem)
      console.log(this.editItem.getCoordinates())
      if (this.editItem) {
        const symbol = this.editItem.getSymbol()
        const client = new api.AreaClient('', this.$axios)
        const id = this.editItem.getId()
        let coord0 = [...this.editItem.getCoordinates()[0]]
        if (isEqual(coord0[0], coord0[coord0.length - 1])) {  
        } else {
          coord0.push(coord0[0])
        }
        // 把maptalk 的{x: , y:}坐标转换为 [[x,y]]
        let coords = this.toNumberArrays(coord0)
        const area = {
          name: symbol.name,
          tags: symbol.tags,
          description: symbol.description,
          coords: coords,
          enableAlarm: false,
          styles: symbol
        }
        if (id == 'newSymbol') {
          client.areaPOST(area)
            .then(res => {
              console.log(res)
              this.getToolBar()
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          // update
          client.areaPUT(id ,area)
            .then(res => {
              console.log(res)
              this.getToolBar()
            })
            .catch(err => {
              console.log(err)
            })
        }
        // client.
        console.log(this.editItem)
        const name = this.editItem.getSymbol().name
        this.$message({message: `${name}-保存成功`, type: 'success'})
        this.endEdit()
      } else {
        this.$message('还没有选择或创建图形')
      }
    },
    endEdit() {
      if (this.editItem) {
        this.editItem.endEdit()
        this.$refs.plotEdit.close()
        this.editItem = null
      }
    },
    // 清空
    redraw () {
      // AreaLayer.clear()
    },
    test() {
      this.getToolBar()
    },
    toNumberArrays(coordinates) {
      console.log(coordinates)
      return coordinates.map(coordinate => {
        return [coordinate.x, coordinate.y];
      })

      // return forEachCoord(coordinates, function (coord) {
      //   return [coord.x, coord.y];
      // })
    }
  },
}
</script>
<style scoped>
.area-title {
  background-color: #f5f5f5;
  font-size: 1.25rem;
  padding: 5px 10px;
  position: absolute;
  top: 5px;
  left: 20px;
  z-index: 999;
}
</style>