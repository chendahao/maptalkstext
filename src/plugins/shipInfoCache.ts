import type IShipInfo from "@/api/model/IShipInfo";

const _cacheName = "ShipInfoCache_v1";
const baseUrl = "/api/seachart/ShipInfo/";

// if (typeof self !== 'undefined' && typeof window === 'undefined') {
//     self.window = {};
// };

const _shipInfoCache: Map<string, IShipInfo> = new Map()

/**
 * Cache 是否可用
 * @returns true 支持 Cache,
 */
const cacheAvaliable = function () {
    return typeof caches !== 'undefined';
}

/**
 * add response to cache and return json Premison
 * @param {Cache} cache 
 * @param {string} url 
 */
const addtoCache = function (cache: Cache, url: string): Promise<any> {
    return cache.add(url).then(() => {
        cache.match(url).then(res => {
            if (res !== undefined) {
                return res.json();
            }
        })
    }).catch(e => {
        console.log(e)
    })
}

const fetchByMmsi = async function (mmsi: string): Promise<any> {
    let url = `${baseUrl}${mmsi}`;
    if (cacheAvaliable()) {
        //仅在 https 环境下可用,see https://developer.mozilla.org/en-US/docs/Web/API/Cache
        return globalThis.caches.open(_cacheName).then(cache => {
            return cache.match(url).then(res => {
                if (res) {
                    return res.json();
                } else {
                    return addtoCache(cache, url);
                }
            });
        });
    } else {
        //不支持 caches
        return fetch(url).then(res => {
            if (res.ok) {
                return res.json();
            }
        });
    }
}

/**
 * return a Symbol for cache key
 * @param {String} mmsi 
 */
const _getKey = function (mmsi: string): string {
    // return Symbol.for(mmsi)
    return mmsi.toString();
}

/**
 * 根据 mmsi 获取 船舶信息
 * @param {string} mmsi 
 */
const resolveShipInfo = function (mmsi: string): Promise<IShipInfo | null> {
    let key = _getKey(mmsi);
    var info = _shipInfoCache.get(key);
    if (info) {
        return Promise.resolve(info);
    }
    return fetchByMmsi(mmsi).then(res => {
        if (res) {
            let data = res;
            if (data.code) {
                //reject('fetch shipinfo fail ' + mmsi);
                console.warn('fetch shipinfo fail ' + mmsi)
                return null
            }
            updateShipInfo(data);
            return data;
        } else {
            // return { shipId: mmsi, mmsi: mmsi, name: `未知(${mmsi})`,callsign:'-' };
            return null;
        }
    });
}

const addShortName = function (shipInfo: IShipInfo) {
    if (shipInfo && shipInfo.name) {
        shipInfo.shortName = shipInfo.name.replace(/\s/g, '').toLowerCase();
    }
}

const updateShipInfo = function (shipInfo: IShipInfo) {
    if (shipInfo && shipInfo.mmsi) {
        let key = _getKey(shipInfo.mmsi);
        let origin = _shipInfoCache.get(key);
        if (origin !== undefined) {
            //最小更新内容
            Object.assign(origin, { dest: shipInfo.dest, eta: shipInfo.eta });
        } else {
            _shipInfoCache.set(key, shipInfo);
            addShortName(shipInfo);
        }
    }
}

const getById = function (mmsi: string) {
    let key = _getKey(mmsi);
    return _shipInfoCache.get(key);
}

const loadAll = function () {
    return caches.open(_cacheName).then(cache => {
        cache.matchAll().then(reses => {
            console.log("match cache ", reses.length);
            return Promise.all(reses.map(res => res.json().then(updateShipInfo)))
                .then(() => {
                    return _shipInfoCache;
                });
        })
    });
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 */
const filter = function (predicate: (value: IShipInfo) => Boolean): IShipInfo[] {
    return [..._shipInfoCache.values()].filter(predicate);
}


/**
 * 根据 mmsi 删除 船舶信息缓存
 * @param {string} mmsi 
 */
const remove = function (mmsi: string) {
    let key = _getKey(mmsi);
    _shipInfoCache.delete(key);

    if (cacheAvaliable()) {
        //todo delete cache
    }
}

export default {
    resolve: resolveShipInfo,
    update: updateShipInfo,
    getById: getById,
    loadAll: loadAll,
    filter: filter,
    remove: remove
}