/*
 * @Author: chenhao
 * @Date: 2022-10-11 15:33:42
 * @LastEditTime: 2022-10-28 17:06:49
 * @FilePath: \maptalkstext\src\main.ts
 * @Description: 
 */
/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import vuetify from './plugins/vuetify';
import teleport from 'vue2-teleport';

import 'maptalks/dist/maptalks.css';

import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
});

app.$mount('#app');
