<!--
 * @Author: chenhao
 * @Date: 2022-11-07 15:58:22
 * @LastEditTime: 2022-11-07 16:09:06
 * @FilePath: \maptalkstext\src\views\bigScreen\map\index.vue
 * @Description: 
-->
<template>
  <div style="width:100vh;height: 100%;">
    <mapmain></mapmain> 
  </div>
</template>
<script>
import mapmain from '@/components/map/map-main.vue'
export default {
  components: {
    mapmain
  }
}
</script>