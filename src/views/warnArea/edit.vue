<!--
 * @Author: chenhao
 * @Date: 2022-11-11 16:45:23
 * @LastEditTime: 2022-11-14 17:35:07
 * @FilePath: \maptalkstext\src\views\warnArea\edit.vue
 * @Description: 
-->
<template>
  <div>
    <!-- <div class="area-btns">
      <v-btn color="success" dark @click="startDraw">add</v-btn>
      <v-btn color="success" dark @click="stopDraw">stop</v-btn>
      <v-btn color="success" dark @click="saveArea">save</v-btn>
      <v-btn color="success" dark @click="redraw">redraw</v-btn>
    </div> -->
    
    <map-main style="width:100vw;height:100vh"></map-main>
    <map-area></map-area>
    <map-plot-edit ref="plotEdit"></map-plot-edit>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import * as maptalks from 'maptalks'
import Vue from 'vue'
import MapMain from '@/components/map/map-main.vue'
import MapArea from '@/components/map/map-area.vue'
import MapPlotEdit from '@/components/map/map-plot-edit.vue'

let drawTool, AreaLayer, toolbar
export default {
  components: {
    MapMain,
    MapArea,
    MapPlotEdit
  },
  computed: {
    ...mapGetters({
      map: 'MapModule/map'
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
    initTool () {
      let that = this
      let mapObj = this.map
      AreaLayer = mapObj.getOrCreateLayerById('监控区', {})
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
              drawTool.enable();
            }
          },
          {
            item: '保存',
            click: function () {
              that.saveArea()
            }
          },{
            item: 'text',
            click: function () { 
              that.test()
            }
          },
          {
            item: '停止绘制',
            click: function () {
              drawTool.disable();
            }
          },
          // {
          //   item: 'Clear',
          //   click: function () {
          //     AreaLayer.clear()
          //   }
          // }
        ]
      }).addTo(mapObj.getInstance());
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
        // console.log(item.getSymbol().name)
        return {
          item: item.getSymbol().name,
          click: function () {
            console.log(that.editItem)
            if (that.editItem) {
              that.editItem.endEdit()
            }
            // 弹出样式框
            that.editItem = item
            item.startEdit();
            that.$refs.plotEdit.open({type: 'polygon', xy: {x: 20, y: 20 }, geo: item})
          }
        };
      });
      return items
    },
    test () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message('setMessage', '删除成功')
        }).catch(() => {
          this.$message('setError', '已取消删除')     
        });
    },
    startDraw () {
      // https://maptalks.org/examples/cn/interaction/draw-tool/#interaction_draw-tool
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
      console.log(this.editItem)
      if (this.editItem) {
        this.editItem.endEdit()
        console.log(this.editItem)
        console.log(this.editItem.getSymbol())
        this.$refs.plotEdit.close()
      }
    },
    redraw () {
      // AreaLayer.clear()
    }
  },
}
</script>
<style>
.area-btns {
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 999;
}
</style>