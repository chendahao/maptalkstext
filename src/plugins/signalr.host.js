/*
 * @Author: chenhao
 * @Date: 2022-11-10 15:09:12
 * @LastEditTime: 2022-11-10 17:48:27
 * @FilePath: \maptalkstext\src\plugins\signalr.host.js
 * @Description: 
 */
import shipTrackWorker from './shipTrack.worker?worker'
import Vue from 'vue'

const worker = new shipTrackWorker()
worker.onerror = function (error) {
  console.log(error, error.message)
  worker.terminate()
}

export const shipTrackHub = function (store) {
  worker.onmessage = e => {
    let msg = e.data.data
    switch (e.data.type) {
      case 'shipTrack':
        console.log('shipTrack msg')
        console.log(msg)
        Vue.eventBus.$emit('shipTrack', e.data.data);
        // store.dispatch('tugList/updateState', { mmsi: msg.data.mmsi, status: msg.data.status, time: msg.data.time })
        break
      case 'ShipInfo':
        console.log('ShipInfo msg')
        console.log(msg)
        Vue.eventBus.$emit('ShipInfo', e.data.data);
        // store.dispatch('tugSchedule/updateTugInfo', { planId: msg.data.planId, jobId: msg.data.jobId, newItem: msg.data })
        break
      case 'TrackEvent':
        console.log('TrackEvent msg')
        Vue.eventBus.$emit('TrackEvent', e.data.data);
        // store.dispatch('tugSchedule/getList')
        // store.dispatch('tugSchedule/updatePlan', { planId: msg.data.planId, newItem: msg.data })
        console.log(msg)
        break
      case 'SignalLost':
        Vue.eventBus.$emit('SignalLost', e.data.data);
        console.log('ais 信号灭失 SignalLost')
        console.log(msg)
        break
    }
  }
}
