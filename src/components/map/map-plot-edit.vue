<!-- 标绘编辑面板 -->
<template>
	<map-drag :fixed="false" class="detail-position" :style="styleP" v-show="isShow">
		<div class="detail-dialog">
			<header class="title clip">
				编辑面板
				<span class="close" @click="close">x</span>
			</header>
			<main>
        <div class="l-h">
					<label>名称：</label>
					<el-input v-model="symbol.name" @change="callback('name', name)" style="width:220px" size="small"></el-input>
				</div>
        <div class="l-h">
					<label>描述：</label>
					<el-input v-model="symbol.description" @change="callback('description', description)" style="width:220px" size="small"></el-input>
				</div>
        <div class="l-h">
					<label>标签：</label>
          <el-select
            v-model="symbol.tags"
            multiple
            collapse-tags
            style="width:220px"
            size="small"
            filterable
            allow-create
            @change="callback('tag', tag)"
            placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
					<!-- <el-input v-model="symbol.tag" @change="callback('tag', tag)" style="width:220px" size="small"></el-input> -->
				</div>
        <div class="l-h">
					<label>显示名称：</label>
					<el-input v-model="symbol.textName" @change="callback('textName', textName)" style="width:188px" size="small"></el-input>
				</div>
        <div class="l-h">
					<label>字体大小：</label>
					<el-input-number v-model="symbol.textSize" @change="callback('textSize', textSize)" :min="1" :max="40" size="small"></el-input-number>
				</div>
				<div class="l-h" v-show="item.type=='polygon'">
					<label>边框宽：</label>
					<el-input-number v-model="symbol.lineWidth" @change="callback('lineWidth', lineWidth)" :min="1" :max="10" size="small"></el-input-number>
				</div>
				<div class="l-h" v-show="item.type=='polygon'">
					<label>边框颜色：</label>
					<el-color-picker v-model="symbol.lineColor" @change="callback('lineColor', lineColor)" ></el-color-picker>
				</div>
        <div class="l-h" v-show="item.type==='polygon'">
					<label>边框透明度：</label>
					<el-input-number v-model="symbol.lineOpacity" @change="callback('lineOpacity', lineOpacity)" :min="0.1" :max="1.0" :precision="1" :step="0.1" size="small"></el-input-number>
				</div>
				<div class="l-h" v-show="item.type==='polygon'">
					<label>填充颜色：</label>
					<el-color-picker v-model="symbol.polygonFill" @change="callback('polygonFill', polygonFill)" ></el-color-picker>
				</div>
				<div class="l-h" v-show="item.type==='polygon'">
					<label>填充透明度：</label>
					<el-input-number v-model="symbol.polygonOpacity" @change="callback('polygonOpacity', polygonOpacity)" :min="0.1" :max="1.0" :precision="1" :step="0.1" size="small"></el-input-number>
				</div>
			</main>
		</div>
	</map-drag>
</template>

<script>
import MapDrag from '@/components/map/map-drag.vue'

export default {
  components: {
    MapDrag
  },
  data () {
    return {
      options: [
        {
          value: '进港',
          label: '进港'
        },
        {
          value: '出港',
          label: '出港'
        }
      ],
      symbol: {
        name: '',
        description: '',
        tags: '',
        textName: '',
        textSize: 12,
        lineWidth: 1,
        lineColor: '#409EFF',
        lineOpacity: 1,
        polygonOpacity: 0.1,
        polygonFill: '#409EFF',
      },
      name: '',
      description: '',
      tags: '',
      textName: '',
      textSize: 12,
      lineWidth: 1,
      lineColor: '#409EFF',
      lineOpacity: 1,
      polygonOpacity: 0.1,
      polygonFill: '#409EFF',
      item: {},
      isShow: false,
      styleP: {
        top: '130px',
        left: '450px'
      }
    }
  },
  methods: {
    open (item) {
      this.item = item
      this.symbol = item.geo.getSymbol()
      this.isShow = true
      let xy = item.xy
      this.styleP = {
        top: `${xy.y}px`,
        left: `${xy.x}px`
      }
    },
    close () {
      this.isShow = false
    },
    setSymbol (geo, symbol) {
      let oldSymbol = geo.getSymbol()
      let newSymbol = { ...oldSymbol, ...symbol }
      geo.setSymbol(newSymbol)
    },
    callback (type, value) {
      let symbol = this.symbol
      this.setSymbol(this.item.geo, symbol)
    },
    // 线宽
    handleWidthChange (value) {
      this.callback('lineWidth', value)
    },
    handletextSizeChange (value) {
      this.callback('textSize', value)
    },
    // 线颜色：
    handlelineColorChange (value) {
      this.callback('lineColor', value)
    },
    // 线的透明度
    handleLineAlphaChange (value) {
      this.callback('lineOpacity', value)
    },
    // 透明度
    handlePolygonOpacity (value) {
      this.callback('polygonOpacity', value)
    },
    // 填充颜色
    handlePolygonFillChange (value) {
      this.callback('polygonFill', value)
    },
  }
}
</script>
<style scoped>
.detail-position {
	z-index: 8;
}
.detail-dialog {
	width: 300px;
	height: 550px;
	color: #000;
	background: #fff;
	box-shadow: 0 2px 12px 0 rgba(173, 113, 113, 0.4);
	border: 1px solid #d7d9de;
	border-radius: 0 0 4px 4px;
}
.title {
	height: 32px;
	line-height: 32px;
	border-bottom: 1px solid #d6d5d5;
	padding: 0 7px 0 12px;
	font-weight: bold;
	background: #1d7bdb;
	color: #fff;
	padding-right: 40px;
	position: relative;
  cursor: move;
}
.close {
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	padding: 0 12px;
}
main {
	padding: 10px;
}
.l-h {
	height: 50px;
	line-height: 50px;
}
.l-h > label,
.l-h > div {
	vertical-align: middle;
}
.btn {
	margin-top: 5px;
	text-align: center;
}
</style>
