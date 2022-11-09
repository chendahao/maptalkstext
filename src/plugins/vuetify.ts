/*
 * @Author: chenhao
 * @Date: 2022-10-11 15:33:42
 * @LastEditTime: 2022-11-07 11:36:42
 * @FilePath: \maptalkstext\src\plugins\vuetify.ts
 * @Description: 
 */
/** Vuetify Plugin */
import 'vuetify/dist/vuetify.min.css'
import type { UserVuetifyPreset } from 'vuetify';
import type { VuetifyParsedTheme } from 'vuetify/types/services/theme';
import Vuetify from 'vuetify/lib/framework';
import Vue from 'vue';

import '@mdi/font/css/materialdesignicons.css';
import { loadFonts } from './webfontloader';

// loadFonts();

export default createVuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    options: {
      themeCache: {
        // https://vuetifyjs.com/features/theme/#section-30ad30e330c330b730e5
        get: (key: VuetifyParsedTheme) => {
          return localStorage.getItem(JSON.stringify(key));
        },
        set: (key: VuetifyParsedTheme, value: string) => {
          localStorage.setItem(JSON.stringify(key), value);
        },
      },
      customProperties: true,
    },
  },
});

/** Create Vuetify */
export function createVuetify(options: UserVuetifyPreset): Vuetify {
  Vue.use(Vuetify);
  return new Vuetify(options);
}
