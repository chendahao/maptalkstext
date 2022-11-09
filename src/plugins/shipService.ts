// 船舶静态信息
import Vue from 'vue'
import axios from 'axios'
import shipInfoCache from './shipInfoCache'
import type IShipInfo from "@/api/model/IShipInfo"
// import { LatLng, Marker } from 'leaflet'

import * as geojson from 'geojson';

/**
 * 获取全部船舶信息,更新缓存
 */
const fetchAll = async function () {
    return axios.get('/api/seachart/ShipInfo/online')
        .then(res => {
            res.data.forEach((shipInfo: IShipInfo) => {
                shipInfoCache.update(shipInfo)
            });
        }).catch(e => {
            console.warn(`load shipinfos error,${e}`)
        });
}

/**
 * 从缓存中获取船舶信息
 * @param {string} id/mmsi 
 */
const getShipInfo = function (id: string): IShipInfo | undefined {
    return shipInfoCache.getById(id);
}

const resolve = function (id: string): Promise<any> {
    return shipInfoCache.resolve(id);
}

/**
 * 获取船舶名称
 * @param {string} mmsi 
 */
const getShipName = function (mmsi: string): string {
    let info = shipInfoCache.getById(mmsi);
    if (info !== undefined) {
        return info.name;
    }
    return ''
}

/**
 * 根据船舶类型获取 船舶信息列表
 * @param {Number} shipType 
 */
const getShipsByType = function (shipType: Number): Array<any> {
    return shipInfoCache.filter(s => s.shipType === shipType);
}

/**
 * 根据 MMSI 获取船舶位置
 */
// const getShipLatLng = function (mmsi: string): LatLng | undefined {
//     let layer = getShipLayer(mmsi);
//     if (layer) {
//         return layer.getLatLng()
//     } else {
//         console.warn(`getShipLatLng not found realtime layer ${mmsi}`)
//         return undefined
//     }
// }

/**
 * 根据 MMSI 获取船舶 geojson feature
 * @param {String} mmsi 
 */
// const getShipFeature = function (mmsi: string): geojson.Feature<geojson.Point, any> | undefined {
//     let layer = getShipLayer(mmsi);
//     if (layer) {
//         return layer.feature;
//     } else {
//         console.warn(`getShipLatLng not found realtime layer ${mmsi}`)
//         return undefined;
//     }
// }

/**
 * 根据 MMSI 获取船舶 ship layer
 * @param {String} mmsi 
 */
// const getShipLayer = function (mmsi: string): Marker | undefined {
//     if (mmsi === undefined) {
//         return undefined;
//     }
//     let _map: any = (globalThis as any).map;
//     return _map._realtime.getLayer(mmsi);
// }

const removeShipInfo = function (mmsi: string) {
    shipInfoCache.remove(mmsi);
}

/**
 * 
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. 
 */
const filter = function (predicate: (value: IShipInfo) => Boolean) {
    return shipInfoCache.filter(predicate);
}

/**
 * 船舶服务
 */
const _shipService = {
    /**
     * 获取全部船舶信息
     */
    fetchAll: fetchAll,
    /**
     * 根据Id 查找船舶信息,从缓存中查找
     */
    resolve: resolve,
    /**
     * 获取船舶信息 @type shipInfo
     */
    getShipInfo: getShipInfo,
    /**
     * 获取船舶名称
     */
    getShipName: getShipName,
    /**
     * 获取船舶 经纬度
     */
    // getShipLatLng,

    /**
     * 根据 MMSI 获取船舶 geojson feature
     */
    // getShipFeature,

    /**
     * 根据 MMSI 获取船舶 ship layer
     */
    // getShipLayer,

    /**
     * 根据船舶类型获取 船舶信息列表
     * @param {Number} shipType 
     */
    getShipsByType: getShipsByType,

    /**
     * 过滤缓存中的船舶信息
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. 
     */
    filter: filter

}

const plugin = {
    install: async function (Vue: any) {
        Vue.shipService = _shipService;
        (globalThis as any).shipService = _shipService;

        Object.defineProperties(Vue.prototype, {
            shipService: {
                get() {
                    return _shipService;
                }
            }
        });
        //船舶离开辖区,删除船舶信息
        Vue.eventBus.$on('LeavePopedom', (e: { properties: { mmsi: any } }) => {
            let mmsi = e.properties.mmsi;
            console.log(`ship ${mmsi} leave popedom`);
            removeShipInfo(mmsi);
        });

        //船舶进入辖区,获取 船舶信息
        Vue.eventBus.$on('EnterPopedom', async (e: { properties: { mmsi: any } }) => {
            let mmsi = e.properties.mmsi;
            console.log(`ship ${mmsi} enter popedom`);
            await resolve(mmsi)
        });

        Vue.eventBus.$on('shipInfo', (info: IShipInfo) => {
            shipInfoCache.update(info);
        })

    }
}

Vue.use(plugin)

export default plugin