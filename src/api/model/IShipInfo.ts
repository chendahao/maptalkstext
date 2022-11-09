/**
* model define IShipInfo 
**/

declare const PosFixingDevices: "Default" | "Gps" | "Glonass" | "GpsAndGlonass" | "LoranC" | "Chayka" | "Integrated" | "Surveyed" | "Galileo" | "NotUsed" | "InternalGnss";

export default interface IShipInfo {
  /**
    * 船舶唯一标识号
    * @type {string}
    * @memberof IShipInfo
    */
  shipId?: string;
  /**
   * MMSI号码
   * @type {string}
   * @memberof IShipInfo
   */
  mmsi: string;
  /**
   * 海事识别数字 (Maritime Identification Digits)  2~7 开头的3位数字, 0 表示未知
   * @type {number}
   * @memberof IShipInfo
   */
  mid?: number;
  /**
   * 国籍/地区代码
   * @type {string}
   * @memberof IShipInfo
   */
  country?: string;
  /**
   * 船舶类型
   * @type {number}
   * @memberof IShipInfo
   */
  shipType: number;
  /**
   * 载重 (吨)
   * @type {number}
   * @memberof IShipInfo
   */
  dwt?: number;
  /**
   * 吃水深度 (米) - 0.1 to 25.5 metres
   * @type {number}
   * @memberof IShipInfo
   */
  draught?: number;
  /**
   * 预计航行时间
   * @type {string}
   * @memberof IShipInfo
   */
  eta?: string;
  /**
   * 目的港
   * @type {string}
   * @memberof IShipInfo
   */
  dest?: string;
  /**
   * 船长 (米)
   * @type {number}
   * @memberof IShipInfo
   */
  length?: number;
  /**
   * 船宽 (米)
   * @type {number}
   * @memberof IShipInfo
   */
  width?: number;
  /**
   * 定位参考位置 [a,b,c,d]
   * @type {Array<number>}
   * @memberof IShipInfo
   */
  gpsRefPos?: Array<number>;
  /**
   * 
   * @type {number}
   * @memberof IShipInfo
   */
  posDevice?: typeof PosFixingDevices;
  /**
   * 船名 (英文船名)
   * @type {string}
   * @memberof IShipInfo
   */
  name: string;
  /**
   * 呼号
   * @type {string}
   * @memberof IShipInfo
   */
  callsign?: string;
  /**
   * IMO number
   * @type {string}
   * @memberof IShipInfo
   */
  imo?: string;
  /**
   * 中文/本地船名
   * @type {string}
   * @memberof IShipInfo
   */
  cnName?: string;

  /**
   * 短名称,用于 搜素船名
   * @type {string}
   * @memberof IShipInfo
   */
  shortName?: string;
}
