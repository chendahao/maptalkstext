/*
 * @Author: chenhao
 * @Date: 2022-10-11 15:33:42
 * @LastEditTime: 2022-10-17 14:58:24
 * @FilePath: \maptalkstext\src\router.ts
 * @Description: 
 */
/** Vue Router Configure */
import { nextTick } from 'vue';
import type { NavigationGuardNext, Route } from 'vue-router';
import type { Position, PositionResult } from 'vue-router/types/router';
import {
  createRouter,
  type Router,
  type RouteRecordRaw,
} from '@logue/vue2-helpers/vue-router';

import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';
import goTo from 'vuetify/lib/services/goto';
import store from '@/store';

/** Router Config */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/map',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    meta: {
      layout: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
    meta: {
      layout: true,
    }
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('@/views/map/map.vue'),
    meta: {
      layout: true,
      showPanel: true,
    }
  },
  {
    path: '/bigScreen',
    name: 'bigScreen',
    component: () => import('@/views/bigScreen/index.vue'),
    meta: {
      layout: false
    }
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('@/views/ErrorPage.vue'),
  },
];

const router: Router = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    _from: Route,
    savedPosition: void | Position
  ): Promise<PositionResult> => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (_to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
    // Show Loading
    store.dispatch('setLoading', true);
    await nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  store.dispatch('setLoading', false);
});

export default router;
