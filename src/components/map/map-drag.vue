<!--
 * @Author: chenhao
 * @Date: 2022-11-12 20:46:59
 * @LastEditTime: 2022-11-12 20:47:12
 * @FilePath: \maptalkstext\src\components\map\map-drag.vue
 * @Description: 面板拖动控件
-->
<template>
  <div v-drag class="drag" :class="{ 'position': fixed}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  directives: {
    drag (el, bindings) {
      el.onmousedown = function (e) {
        e.stopPropagation()
        let disx = e.pageX - el.offsetLeft
        let disy = e.pageY - el.offsetTop
        document.body.onselectstart = function () {
          return false
        }
        document.onmousemove = function (e) {
          if (disy > 60) return
          el.style.left = e.pageX - disx + 'px'
          el.style.top = e.pageY - disy + 'px'
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null
          document.body.onselectstart = null
        }
      }
    }
  },
  props: {
    fixed: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style scoped>
.drag {
  position: absolute;
  z-index: 9;
}
.position {
  top: 10px;
  left: 10px;
}
</style>
