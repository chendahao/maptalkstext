/**
* model define IPrecisionModel 
**/

export default interface IPrecisionModel{
/**
* 
* @member {"Floating" | "FloatingSingle" | "Fixed"} precisionModelType 
*/
  precisionModelType:"Floating" | "FloatingSingle" | "Fixed";
/**
* 
* @member {boolean} isFloating 
*/
  isFloating:boolean;
/**
* 
* @member {number} maximumSignificantDigits 
*/
  maximumSignificantDigits:number;
/**
* 
* @member {number} scale 
*/
  scale:number;
}
