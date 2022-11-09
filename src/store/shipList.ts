import type { Commit, Dispatch } from 'vuex'
import dayjs from 'dayjs'
import request from '@/plugins/axios'
import shipInfoApi from '@/api/seachart/ShipInfoApi'
import shipTrackApi from '@/api/seachart/ShipTrackApi'
import { orderBy, groupBy, merge } from 'lodash'
import type IShipInfo from "@/api/model/IShipInfo"

const state = {
  list: Array<IShipInfo>
}

// interface tugsGroup {
//   jobKind: string
//   tugs: Array<job>
// }

// interface job extends api.TugJob {
//   tug: tug
// }

// interface tug extends api.TugNamePart {
//   sort?: Number
// }

export default {
  namespaced: true,
  state: state,
  getters: {
    shipList (state) {
      console.log(state.list)
      return state.list
    }
  },
  mutations: {
    init (state, list) {
      state.list = list
    },
    // updateTug (state: TugScheduleState, item: {planId: number | undefined, jobId: number, newItem: any}) {
    //   const index0 = state.list.items.findIndex(o => o.planId === item.planId)
    //   if (state.list.items[index0] && state.list.items[index0].tugs) {
    //     const index1 = state.list.items[index0].tugs?.findIndex(o => o.jobId === item.jobId)
    //     // const index2 = state.list.items[index0].tugsGroup?.jobKind === item.newItem.jobKind .findIndex(o => o.jobId === item.jobId)
    //     const groupIndex = state.list.items[index0].tugsGroup.findIndex((o: { jobKind: any }) => o.jobKind === item.newItem.jobKind)
    //     const groupTugIndex = state.list.items[index0].tugsGroup[groupIndex].tugs.findIndex((o: { jobId: any }) => o.jobId === item.jobId)

    //     if (index1 !== undefined && index1 >= 0) {
    //       state.list.items[index0].tugs!.splice(index1, 1, item.newItem)
    //       state.list.items[index0].tugsGroup[groupIndex].tugs.splice(groupTugIndex, 1, item.newItem)
    //       state.list.tiemstamp = dayjs().valueOf()
    //     }
    //   }
    // },
    // // 通给WS的更新大船中一条拖轮的信息
    // updateTugWS (state: TugScheduleState, newItem: any) {
    //   const index0 = state.list.items.findIndex(o => o.planId === newItem.planId)
    //   if (state.list.items[index0] && state.list.items[index0].tugs) {
    //     const index1 = state.list.items[index0].tugs?.findIndex(o => o.jobId === newItem.jobId)
    //     if (index1 !== undefined && index1 >= 0) {
    //       state.list.items[index0].tugs!.splice(index1, 1, newItem)
    //       state.list.tiemstamp = dayjs().valueOf()
    //     }
    //   }
    // },
    // updatePlan (state: TugScheduleState, item: {planId: number | undefined, newItem: newTugSchedile}) {
    //   const index0 = state.list.items.findIndex(o => o.planId === item.planId)
    //   if (state.list.items[index0]) {
    //     // state.list.items[index0] = item.newItem
    //     state.list.items.splice(index0, 1, item.newItem)
    //     state.list.tiemstamp = dayjs().valueOf()
    //   } else {
    //     // 增加计划外船舶计划
    //     state.list.items.push(item.newItem)
    //     state.list.tiemstamp = dayjs().valueOf()
    //   }
    // },
    // updateSortType (state: TugScheduleState, type: Boolean) {
    //   state.sortType = type
    // }
  },
  actions: {
    // initData ({ commit }: { commit:Commit }, list: {list: newTugSchedile[]}) {
    //   commit('init', list)
    // },
    // updateTugInfo ({ commit }: { commit:Commit }, item: {planId: number, jobId: number, newItem: any }) {
    //   commit('updateTug', item)
    // },
    // updateTugInfoWS ({ commit }: { commit:Commit }, newItem: any) {
    //   commit('updateTugWS', newItem)
    // },
    // updatePlan ({ commit }: { commit:Commit }, item: {planId: number, newItem: newTugSchedile }) {
      
    // },
    // 初始化加载作业计划
    async getList ({ commit }: { commit:Commit }) {
      let p1 = new Promise((resolve, reject) => {
        shipInfoApi.GetByArea(117.62, 38.97, 117.76, 39)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject([]))
      })
      let p2 = new Promise((resolve, reject) => {
        shipTrackApi.GetShipTrackByArea(117.62, 38.97, 117.76, 39)
          .then(res => {
            let list = res.data
            list.forEach(item => {
              item.mmsi = item.properties.mmsi
            })
            resolve(list)
          })
          .catch(err => reject([]))
      })
      Promise.all([p1, p2])
        .then((result) => {
          let a = merge(result[0], result[1])
          commit('init', a)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    // setSortType ({ commit }: { commit:Commit }, type: Boolean) {
    //   commit('updateSortType', type)
    // }
  }
}
