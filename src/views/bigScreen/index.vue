<!--
 * @Author: chenhao
 * @Date: 2022-10-17 11:57:57
 * @LastEditTime: 2022-11-07 15:58:52
 * @FilePath: \maptalkstext\src\views\bigScreen\index.vue
 * @Description: 
-->
<template>
  <div class="main">
		<div class="header">
			<h1 class="header-title">{{title}}监控平台</h1>
		</div>
		<div class="content-main">
			<div class="content">
				<div class="col col-l">
					<div class="xpanel-wrapper xpanel-wrapper-40">
						<div class="xpanel xpanel-l-t">
							<div class="title">航行通告</div>
							<div>
								<div class="text text-left" style="margin:1rem 0.7rem">
									<span style="background-color: darkcyan;"><b>【港口通航状况】</b></span>目前天津港西北风7级，能见度良好，主航道单向通航，小船航道正常通航。
								</div>
								<div class="text text-left" style="margin:1rem 0.7rem">
									<span style="background-color: darkcyan;"><b>【邮轮客轮动态】</b></span>10月18日无客邮轮计划。
								</div>
								<div class="text text-left" style="margin:1rem 0.7rem">
									<span style="background-color: darkcyan;"><b>【过桥船舶动态】</b></span>10月18日1330时起，1艘船舶计划通过海门大桥和新建开启桥水域，约需时间45分钟。
								</div>
							</div>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-60">
						<div class="xpanel xpanel-l-b">
							<div class="title">通行记录</div>
							<div class="text" style="padding:1rem 0.8rem">
								<table style="width: 100%; display: table;">
									<tr>
										<th>
											船舶名称
										</th>
										<th>
											类型
										</th>
										<th>
											过桥日期
										</th>
									</tr>
									<tr v-for="item in shiplist" style="line-height: 2;">
										<td>
											{{item.name}}
										</td>
										<td>
											{{item.type}}
										</td>
										<td>
											{{item.time}}
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div class="col col-c">
					<div class="xpanel-wrapper xpanel-wrapper-75">
						<div class="xpanel no-bg">
							<map-page style="width:100%"/>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-25">
						<div class="xpanel xpanel-c-b">
							<div class="title title-long">净空高度</div>
							<div>
								<div id="waterheight" style="width:50vw;height: 25vh;"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="col col-r">
					<div class="xpanel-wrapper xpanel-wrapper-25">
						<div class="xpanel xpanel-r-t">
							<div class="title">水文气象</div>
							<div>
								<div class="mx-2 my-3">11</div>
								<div class="mx-2 my-3">11</div>
								<div class="mx-2 my-3">11</div>
								<div class="mx-2 my-3">11</div>
							</div>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-30">
						<div class="xpanel xpanel-r-m">
							<div class="title">2</div>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-45">
						<div class="xpanel xpanel-r-b">
							<div class="title">3</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import mapPage from './map/index.vue'
var wchart = ''
export default {
	components:{
		mapPage
	},
	data() {
		return {
			shiplist: [
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				},
				{
					name: '船舶1',
					type: '货船',
					time: '10-16 07:30'
				}
			]
		}
	},
	mounted () {
    this.$nextTick(function () {
      wchart = echarts.init(document.getElementById('waterheight'), 'ligth')
			this.getWChart()
    })
  },
	computed: {
		title() {
			return import.meta.env.VITE_APP_TITLE || 'Vite APP'
		}
	},
	created() {
		
	},
	methods: {
		getWChart() {
			var option = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)'
						}
					}
				]
			};
			wchart.setOption(option)
		}
	}
}
</script>
<style scoped>
@import './css/app.css';
</style>