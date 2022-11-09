/**
* model define ShipInfo 
**/

export default interface ShipInfo{
/**
* 
* @member {string} shipId 
*/
  shipId:string;
/**
* 
* @member {string} mmsi 
*/
  mmsi:string;
/**
* 
* @member {number} mid 
*/
  mid:number;
/**
* 
* @member {string} name 
*/
  name:string;
/**
* 
* @member {string} callsign 
*/
  callsign:string;
/**
* 
* @member {string} imo 
*/
  imo:string;
/**
* 
* @member {string} cnName 
*/
  cnName:string;
/**
* 
* @member {string} country 
*/
  country:string;
/**
* 
* @member {number} shipType 
*/
  shipType:number;
/**
* 
* @member {number} dwt 
*/
  dwt:number;
/**
* 
* @member {number} draught 
*/
  draught:number;
/**
* 
* @member {string} eta 
*/
  eta:string;
/**
* 
* @member {string} dest 
*/
  dest:string;
/**
* 
* @member {number} length 
*/
  length:number;
/**
* 
* @member {number} width 
*/
  width:number;
/**
* 
* @member {array} gpsRefPos 
*/
  gpsRefPos:[];
/**
* 
* @member {"Default" | "Gps" | "Glonass" | "GpsAndGlonass" | "LoranC" | "Chayka" | "Integrated" | "Surveyed" | "Galileo" | "NotUsed" | "InternalGnss"} posDevice 
*/
  posDevice:"Default" | "Gps" | "Glonass" | "GpsAndGlonass" | "LoranC" | "Chayka" | "Integrated" | "Surveyed" | "Galileo" | "NotUsed" | "InternalGnss";
}
