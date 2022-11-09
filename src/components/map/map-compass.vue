<!--
 * @Author: chenhao
 * @Date: 2022-11-02 10:14:11
 * @LastEditTime: 2022-11-07 15:32:38
 * @FilePath: \maptalkstext\src\components\map\map-compass.vue
 * @Description: 
-->
<template>
  <div class="compass" @click="returnNorth" title="回到正北方向">
    <img id="compass" src="../../assets/指北针.png" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      map: 'MapModule/map'
    })
  }, 
  methods: {
    // 地图回到正北方向
    returnNorth() {
      let mapObj = this.map.getInstance()
      if (mapObj) {
        mapObj.setBearing(0)
        mapObj.setPitch(0)
        // 同时把指北针图标回正
        let ele = document.getElementById("compass");
        // 设置度数
        ele.style.transform = "rotate(" + 0 + "deg)";
      }
    }
  }
}
</script>