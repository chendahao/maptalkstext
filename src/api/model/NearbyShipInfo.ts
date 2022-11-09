/**
* model define NearbyShipInfo 
**/

export default interface NearbyShipInfo{
/**
* 船舶唯一标识号
* @member {string} shipId 
*/
  shipId:string;
/**
* MMSI号码
* @member {string} mmsi 
*/
  mmsi:string;
/**
* 船名 (英文船名)
* @member {string} name 
*/
  name:string;
/**
* 呼号
* @member {string} callsign 
*/
  callsign:string;
/**
* IMO number
* @member {string} imo 
*/
  imo:string;
/**
* 中文&#x2F;本地船名
* @member {string} cnName 
*/
  cnName:string;
/**
* 经度(Longitude)
范围为-180°&amp;lt;经度 &amp;lt;&#x3D;180°
1&#x2F;10000分表示的经度（东&#x3D; +，西&#x3D; －）
* @member {number} lng 
*/
  lng:number;
/**
* 纬度(Latitude)
范围为-90°&amp;lt;纬度 &amp;lt;&#x3D;90°
用1&#x2F;10000分表示的纬度（北&#x3D; +，南&#x3D; －）
* @member {number} lat 
*/
  lat:number;
/**
* 距离
* @member {number} distance 
*/
  distance:number;
/**
* 距离单位
* @member {"Meters" | "Kilometers" | "Miles" | "Feet"} unit 
*/
  unit:"Meters" | "Kilometers" | "Miles" | "Feet";
}
