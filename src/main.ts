/*
 * @Author: chenhao
 * @Date: 2022-10-11 15:33:42
 * @LastEditTime: 2022-11-12 22:29:17
 * @FilePath: \maptalkstext\src\main.ts
 * @Description: 
 */
/** Vue main script */
import Vue from 'vue';

import router from '@/router';
import store from '@/store';
import axios from './plugins/axios'
import vuetify from './plugins/vuetify';
import teleport from 'vue2-teleport';
import storagedata from '@/utils/storagedata'
import './plugins/eventBus'

import './plugins/elementui' // 引入elementUI message
import 'maptalks/dist/maptalks.css';

import App from '@/App.vue';

/**
 * @description 全局注册axios
 */
 Vue.prototype.$axios = axios

Vue.config.productionTip = false;
Vue.component('Teleport', teleport);

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted () {
    this.$store.dispatch('shipList/getList').then(() => {}) // 加载船舶基本信息和动态信息  并进行合并
    if (storagedata.getUserdata()) {
    }
    // 获取用户信息
    // this.$store.dispatch('userinfo/load').then(() => {})
  }
});

app.$mount('#app');
