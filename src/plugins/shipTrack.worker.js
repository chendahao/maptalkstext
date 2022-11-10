/*
 * @Author: chenhao
 * @Date: 2022-11-08 10:42:44
 * @LastEditTime: 2022-11-10 15:05:31
 * @FilePath: \maptalkstext\src\plugins\shipTrack.worker.js
 * @Description: 
 */
import './browserworker';
import { HubConnectionBuilder, HttpTransportType } from '@microsoft/signalr';

/**
 * Convert to geojson feature
 * @param {Object} track  ShipTrack Object
 */
const toFeature = function (track) {
    // console.log("webworker toFeature " + JSON.stringify(track))
    return {
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [track.lng, track.lat]
        },
        properties: track
    }
}

/**
 * 创建 Signal Hub
 * @param {string} url 
 * @returns 
 */
const createShipTrackHub = function (url) {
    let hub = new HubConnectionBuilder()
        .configureLogging(2)
        .withUrl(url, {
            skipNegotiation: false,
            transport: HttpTransportType.WebSockets,
            WebSocket: WebSocket
        })
        .build();

    hub.on('shipTrack', async feature => {
        console.log('shipTrack', feature)
        self.postMessage({ type: 'shipTrack', data: feature });
    });

    hub.on("ShipInfo", e => {
        console.log('ShipInfo', e)
        //不需要处理 shipInfo
        self.postMessage({ type: 'shipInfo', data: e });
    })

    hub.on('TrackEvent', async e => {
        switch (e.event) {
            case 1:// 进入辖区 EnterPopedom = 0x1,
                console.log('TrackEvent', 1, e)
                self.postMessage({ type: 'EnterPopedom', data: toFeature(e.body) });
                break;
            case 2: // 离开辖区 LeavePopedom = 0x2,
                console.log('TrackEvent', 2, e)
                self.postMessage({ type: 'LeavePopedom', data: toFeature(e.body) });
                break;
            case 3: // AIS 信号灭失  SignalLost = -1
                console.log('TrackEvent', 3, e)
                self.postMessage({ type: 'SignalLost', data: toFeature(e.body) });
                break;
        }
    });

    hub.start().then(() => {
        console.log("start SignalR /ws/shiptrack")
    }).catch(err => {
        console.warn(err);
    });
    return hub;
}

createShipTrackHub(self.location.origin + "/ws/shipTrack")

self.addEventListener('message', function (e) {
    let data = e.data;
    switch (data.cmd) {
        case 'start':
            self.postMessage('WORKER STARTED: ' + data.msg);
            break;
        case 'stop':
            self.postMessage('WORKER STOPPED: ' + data.msg);
            self.close(); // Terminates the worker.
            break;
        case 'connect':
            createShipTrackHub(data.url);
            break;
        default:
            self.postMessage('Unknown command: ' + data.msg);
    };
}, false);