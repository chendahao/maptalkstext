<!--
 * @Author: chenhao
 * @Date: 2022-10-11 15:33:42
 * @LastEditTime: 2022-11-07 17:48:59
 * @FilePath: \maptalkstext\src\App.vue
 * @Description: 
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import 'node_modules/vuetify/src/styles/styles';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get($grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get($grey, 'base');
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

/*
// Color scheme of scroll bar according to the theme
.theme-- {
  &light {
    scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'lighten-2');
    }
  }
  &dark {
    scrollbar-color: map-get($grey, 'darken-2') map-get($grey, 'base');

    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'darken-2');
    }
  }
}
*/
</style>
