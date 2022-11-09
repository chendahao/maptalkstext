/*
 * @Author: chenhao
 * @Date: 2022-11-08 13:45:57
 * @LastEditTime: 2022-11-09 09:19:28
 * @FilePath: \maptalkstext\src\api\seachart\ShipInfoApi.js
 * @Description: 
 */
/**
* class ShipInfo Api
* @description
*/

import pages from '../pages'
import request from '@/plugins/axios'

/**
* Find 模糊查询船舶摘要信息
* @param {object}  pagination @description
* @returns request.get Promission
*/
const Find = function (pagination) {
  let path = `/api/seachart/ShipInfo`
  let params = pages.toParams(pagination)

  return request.get(path, { params })
}

/**
* Find 模糊查询船舶摘要信息
* @param {object}  pagination @description
* @returns request.get Promission
*/
const FindAsync = async function (pagination) {
  let path = `/api/seachart/ShipInfo`
  let params = pages.toParams(pagination)
  let res = await request.get(path, { params })
  if (res.page) {
    pages.mergePageination(pagination, res)
  }
  return res
}

/**
* GetById 根据船舶 shipId 查找船舶信息
* @param {string}  shipId @description
* @returns request.get Promission
*/
const GetById = function (shipId) {
  let path = `/api/seachart/ShipInfo/id/${shipId}`
  let params = {}

  return request.get(path, { params })
}

/**
* GetByMMSI 根据船舶MMSI 查找船舶信息
* @param {string}  mmsi @description
* @returns request.get Promission
*/
const GetByMMSI = function (mmsi) {
  let path = `/api/seachart/ShipInfo/mmsi/${mmsi}`
  let params = {}

  return request.get(path, { params })
}

/**
* GetAllShipInfo 获取全部 船舶信息
* @returns request.get Promission
*/
const GetAllShipInfo = function () {
  let path = `/api/seachart/ShipInfo/all`
  return request.get(path)
}

/**
* GetByArea 根据区域获取 船舶数据
* @param {number}  SW_X @description 左下角X
* @param {number}  SW_Y @description 左下角Y
* @param {number}  NE_X @description 右上角X
* @param {number}  NE_Y @description 右上角Y
* @returns request.get Promission
*/
const GetByArea = function (SW_X, SW_Y, NE_X, NE_Y) {
  let path = `/api/seachart/ShipInfo/bound`
  let params = {}
  params['SW_X'] = SW_X
  params['SW_Y'] = SW_Y
  params['NE_X'] = NE_X
  params['NE_Y'] = NE_Y

  return request.get(path, { params })
}
export default {
  Find, FindAsync, GetById, GetByMMSI, GetAllShipInfo, GetByArea
}