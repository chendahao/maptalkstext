<!--
 * @Author: chenhao
 * @Date: 2022-10-17 11:57:57
 * @LastEditTime: 2022-10-17 15:05:08
 * @FilePath: \maptalkstext\src\components\bigScreen\index.vue
 * @Description: 
-->
<template>
  <div>
		<div class="header">
			<h1 class="header-title">{{title}}监控平台</h1>
		</div>
		<div class="wrapper">
			<div class="content">
				<div class="col col-l">
					<div class="xpanel-wrapper xpanel-wrapper-40">
						<div class="xpanel xpanel-l-t">
							<div class="title">辖区情况</div>
							<div class="text flex">
								<div style="flex: 1">船只总计</div>
								<div style="flex: 1">航行</div>
								<div style="flex: 1">停泊</div>
							</div>
							<div class="text flex">
								<div style="flex: 1">300</div>
								<div style="flex: 1">100</div>
								<div style="flex: 1">50</div>
							</div>
							<div class="flex xpanel-wrapper-75">
								<div style="flex: 1">
									<div class="fill-h" id="main1"></div>
								</div>
								<div style="flex: 2">
									<div class="fill-h">
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-60">
						<div class="xpanel xpanel-l-b">
							<div class="title">title60</div>
						</div>
					</div>
				</div>
				<div class="col col-c">
					<div class="xpanel-wrapper xpanel-wrapper-75">
						<div class="xpanel no-bg">
						</div>
					</div>
					<div class="xpanel-wrapper xpanel-wrapper-25">
						<div class="xpanel xpanel-c-b">
							<div class="title title-long">title-long</div>
						</div>
					</div>
				</div>
				<div class="col col-r">
					<div class="xpanel-wrapper xpanel-wrapper-25">
						<div class="xpanel xpanel-r-t">
							<div class="title">1</div>
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
	export default {
    data() {
      return {
        
      }
    },
    computed: {
      title() {
        return import.meta.env.VITE_APP_TITLE || 'Vite APP'
      }
    }
  }
</script>
<style scoped>
@import './app.css';
</style>