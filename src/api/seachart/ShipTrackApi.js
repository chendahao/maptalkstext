/*
 * @Author: chenhao
 * @Date: 2022-11-08 13:45:57
 * @LastEditTime: 2022-11-08 17:28:54
 * @FilePath: \maptalkstext\src\api\seachart\ShipTrackApi.js
 * @Description: 
 */
/**
* class ShipTrack Api
* @description
*/

import request from '@/plugins/axios'

/**
* GetAll 获取 全部 shipTrack GeoJson
* @returns request.get Promission
*/
const GetAll = function () {
  let path = `/api/seachart/ShipTrack/all`
  return request.get(path)
}

/**
* GetByArea 根据区域获取 船舶数据
* @param {number}  SW_X @description 左上角X
* @param {number}  SW_Y @description 左上角Y
* @param {number}  NE_X @description 右下角X
* @param {number}  NE_Y @description 右下角Y
* @returns request.get Promission
*/
const GetShipTrackByArea = function (SW_X, SW_Y, NE_X, NE_Y) {
  let path = `/api/seachart/ShipTrack`
  let params = {}
  params['SW_X'] = SW_X
  params['SW_Y'] = SW_Y
  params['NE_X'] = NE_X
  params['NE_Y'] = NE_Y

  return request.get(path, { params })
}

/**
* GetById 根据 shipId 获取 ShipTrack GeoJson
* @param {string}  shipId @description
* @returns request.get Promission
*/
const GetById = function (shipId) {
  let path = `/api/seachart/ShipTrack/${shipId}`
  let params = {}

  return request.get(path, { params })
}
export default {
  GetAll, GetShipTrackByArea, GetById
}
