/*
 * @Author: chenhao
 * @Date: 2022-10-11 15:33:42
 * @LastEditTime: 2022-11-17 10:37:10
 * @FilePath: \maptalkstext\src\router.ts
 * @Description: 
 */
/** Vue Router Configure */
import { nextTick } from 'vue';
import type { NavigationGuardNext, Route } from 'vue-router';
import type { Position, PositionResult } from 'vue-router/types/router';
import Layout from '@/components/layout/Layout.vue'
import Layout_null from '@/components/layout/Layout_null.vue'
import { hasOneOf, setTitle } from '@/utils/tool';
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
    name: 'main',
    component: Layout,
    meta: {
      needLogin: true,
      layout: true,
    },
    children: [
      {
        path: '/',
        redirect: '/map',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
        meta: {
          needLogin: true,
          layout: true,
        }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutPage.vue'),
        meta: {
          needLogin: true,
          layout: true,
        }
      },
      {
        path: '/map',
        name: 'Map',
        component: () => import('@/views/map/map.vue'),
        meta: {
          layout: true,
          needLogin: true,
          showPanel: true,
        }
      },
      {
        path: '/bigScreen',
        name: 'bigScreen',
        component: () => import('@/views/bigScreen/index.vue'),
        meta: {
          needLogin: true,
          layout: false
        }
      },
      {
        path: '/area',
        name: 'areaIndex',
        component: () => import('@/views/warnArea/index.vue'),
        meta: {
          needLogin: true,
          layout: true
        }
      },
      {
        path: '/area/edit',
        name: 'areaEdit',
        component: () => import('@/views/warnArea/edit.vue'),
        meta: {
          needLogin: true,
          layout: false
        }
      },
      {
        path: '/profile',
        name: 'profileIndex',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          needLogin: true,
          layout: true
        }
      },
      {
        path: '/profile/edit',
        name: 'profileEdit',
        component: () => import('@/views/profile/edit.vue'),
        meta: {
          needLogin: true,
          layout: false
        }
      },
      {
        path: '/alarmPolicy',
        name: 'alarmPolicyIndex',
        component: () => import('@/views/alarmPolicy/index.vue'),
        meta: {
          needLogin: true,
          layout: true
        }
      },
      {
        path: '/alarmPolicy/edit',
        name: 'alarmPolicyEdit',
        component: () => import('@/views/alarmPolicy/edit.vue'),
        meta: {
          needLogin: true,
          layout: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      needLogin: false,
      layout: true,
    }
  },
  {
    path: '/bigScreen',
    name: 'bigScreen',
    component: () => import('@/views/bigScreen/index.vue'),
    meta: {
      needLogin: true,
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
  async (to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
    if (to.name === from.name) return
    // Show Loading
    store.dispatch('setLoading', true);
    await nextTick();

    if (to.meta && to.meta.needLogin) {
      // 检查用户的角色 是否有相应的访问角色
      if (to.meta.access) {
      //   const info = store.dispatch('db/get', {
      //     dbName: 'sys',
      //     path: '',
      //     defaultValue: {},
      //     user: true
      //   }, { root: true })
      //   info.then(res => {
      //     let access = res.roles
      //     // 用户角色
      //     if (to.meta && !hasOneOf(to.meta.access, access)) {
      //       console.log('没有该功能角色')
      //       next({ replace: true, name: '401' })
      //     } else {
      //       next()
      //     }
      //   })
      } else {
        // 检查用户token是否超时
        // if (storagedata.getUserdata()) {
        //   let datenow = (new Date()).valueOf()
        //   let login = (new Date(storagedata.getlocalStorage('tokentime'))).valueOf()
        //   if (datenow - login > 7200000) {
        //     // 登录时间与上次获取token时间超过2小时时 重新登录
        //     console.log('token超时')
        //     next({ path: '/login' })
        //   } else {
        //     next()
        //   }
        // } else {
        //   console.log('需要登录')
        //   next({ path: '/login' })
        // }
        next()
      }
    } else {
      if (to.name === 'login') {
        next({ query: to.query })
      } else {
        next()
      }
    }

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
