import{m as xr}from"./vue.200a03fd.js";import{D as yu,A as bu,L as ir,E as Mu,i as lt,C as Zt,a as Bo,b as wu,M as gs,P as Ms,c as Su,w as Uo,T as Au,d as Tu,e as ko,f as Eu,g as Cu,B as Lu,h as Pu,j as ks,r as Gs,_ as Fc}from"./map-main.a168dc3a.js";import{n as Qn}from"./index.ddbb152d.js";import{_ as zc}from"./map-area.d2623651.js";import{d as Ru,J as Du,p as Fa,K as Iu,o as Ou,b as Ki}from"./vuetify.d08ecdbf.js";/* empty css                            */import"./api.0ba0e65a.js";const Fu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAw1JREFUeF7t29eqFTEUBuA/iIgIIiIqchARRLwQFRERRPQl9Nan8CH0IXwAe++6LcfeFQu2Y+8Ve/tlyRLihZDsmcmsjJnrDHu+P3WS2Q4dukiuBrA8gtRzEYXNFyV5AMDimAftagBLAkKQsNDZAJxzvX+FQFJaSQmgtIDSBcoYUAbBMgsEzJfZFCF5GMBCAP/fOoDkDACnAIyKqbFOdAGS0wGsATATwAcA5wB8DwhiKPsASE5T/CwAlwEsc85dCcD/LpJ1ACSnAlgLYA6AS4q/GorPOgCSUxQ/F8BFxV+LwWcbAMnJip8H4ILir8fiswyA5IDi5wM4D2Cpc+5GP/jsAiA5SfELdKQX/M1+8VkFQHKijvay0DmrNX+rCj6bAEiOV/wiAGcUf7sqPosASI5TvOzinFb8nTrw5gMgORbAOt3olGWu9PmhuvCmAyA5BsAGxZ9U/N068WYDIDkawCbFn1D8vbrxJgMgKW9zWxV/XPH3m8CbC4DkSADbFX9M8Q+awpsKgOQIADsVf1TxD5vEmwmA5HAAuxU/qPhHTeNNBEByGIC9ij+i+Mcp8K0HQFL2I/Yr/pC+1T1JhbcQwJ/T3IOKf5oS32oA3lG2HGLKNtaz1PjWAvDw0gIE/7wNfCsBeHjp+4J/0RY+eQAefp/iX7aJTxqAh5cpT2r+Vdv4ZAF4+D2Kf20BnyQADy8rPan5N1bwjQfg4Xcp/q0lfKMBeHh5wZGaf2cN31gAHn6Hru3fW8Q3EoCHl/d62cOT01qzV62Hox5+m+I/mpXrg9UWgIeX7Syp+U/W8bV1AQ+/RfGfc8DXEoCH36z4L7ngKwfg4WULW5r915zwlQLw8BsV/y03fN8BePj1usgJ+SDJZD7Rs4CHlzM7WeH9MCkLfChHciUA+dQk5JoNQM7s5MMkwf8MuclyGQmAkQ8o21cTnHOx90X+TJrifgChn5f2nHMhZdMIKv7KXwEE/s2kBFBaQOkCZQwog2DFwdfM7WUW8BZCIc1azvI6Ow2GNsvOBRD7j+tVzrkVoWlZL/cLAhKpfEMMP0AAAAAASUVORK5CYII=",zu="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAArZJREFUeF7tm72KFEEUhc/3HJsYGJrpA+gDaGaiCIogKIIgiAvCuiIo/oAgCIIgCoIgRmZG7j7AhmuqifsCPsCVBgd6h+m6NdXVM9XT1WnXFOd8daq6qvsOmvjFxP2rAqgJmDiBOgW6AmBmZyVdlnTSCclPSd+Bb6sMUy59nQkws21JTyNNHQBnIttmaZZLXwjAD0lNCqIuYKXTycyy6IsFsNdBoQ3oXBSpfI0etgbI1dc1QNEAgGMGzWxXUiOihGvP01cBdEzRmoDAY7C9yLgRk9Q1D4ecIrM1yNXXewp4i+CanwKDL4LuKK4ZQLK+XBuhD8A1V0XGBqvYCM1vhec3RbPYNVvhF8DvjP7crhZshUP6Orfq0bs3M7O2qlVH3iOSqq8C8MjO7qcSju2/b7tUfTUBseRTCcf237ddqr4iE2BmFyXdl/RX0j7QHLyC18YA+G/+S8vtIXBqEgAWmG98TwNAh/kGwC7waKMTEDC/Azz2zDf3R7sGBMw/AJ7EmB8tgID5beBZrPlRAgiYvwe8XMb86AAEzN8FXi1rflQAAubvAK9TzI8GQMD8beBNqvlRAAiYvwm87WO+eAAB8zeAd33NFw0gYP468D6H+WIBBMxfBT7mMl8ygKZm4Pyc0SvAp5zmSwbwS9KJltlLwOfc5ksGMPuCfCDpOdA+52flUOxhyMy2gD9Z3S7orFgAQxuf9V8BJH64KfKlaEpqagJyJ8DMLkjakXTaGZFDSV9jXl2njGzXb3LpC30eb05ntyJFHwFbkW2zNDOzLPpia4Rc0av+WryOOsH9BRTaZXLrrhMM6utdI+TV4bkRGbbB8EVSFUCtFHVLZWud4LDT/Hjvc0+BWifowU95Cizzh4lJ1Al2QS6lTjCkr3+doBexsd6PPg6P1aCnuwLwCG36/ZqATR9hz98/YaRQX7f3HkgAAAAASUVORK5CYII=";let Er,Cr;const Nu={computed:{...xr({map:"MapModule/map"})},data(){return{isInit:!1,distanceToolEnable:!1,areaToolEnable:!1}},methods:{GetDistance(){!this.isInit&&this.init(),this.distanceToolEnable=!0,Er.enable()},GetArea(){!this.isInit&&this.init(),this.areaToolEnable=!0,Cr.enable()},init(){this.isInit=!0;let r=this.map.getInstance();Er=new yu({symbol:{lineColor:"#34495e",lineWidth:2},vertexSymbol:{markerType:"ellipse",markerFill:"#1bbc9b",markerLineColor:"#000",markerLineWidth:3,markerWidth:10,markerHeight:10},labelOptions:{textSymbol:{textFaceName:"monospace",textFill:"#fff",textLineSpacing:1,textHorizontalAlignment:"right",textDx:15,markerLineColor:"#b4b3b3",markerFill:"#000"},boxStyle:{padding:[6,2],symbol:{markerType:"square",markerFill:"#000",markerFillOpacity:.9,markerLineColor:"#b4b3b3"}}},clearButtonSymbol:[{markerType:"square",markerFill:"#000",markerLineColor:"#b4b3b3",markerLineWidth:2,markerWidth:15,markerHeight:15,markerDx:20},{markerType:"x",markerWidth:10,markerHeight:10,markerLineColor:"#fff",markerDx:20}],language:"zh-CN"}).addTo(r).disable(),Cr=new bu({symbol:{lineColor:"#1bbc9b",lineWidth:2,polygonFill:"#fff",polygonOpacity:.3},vertexSymbol:{markerType:"ellipse",markerFill:"#34495e",markerLineColor:"#1bbc9b",markerLineWidth:3,markerWidth:10,markerHeight:10},labelOptions:{textSymbol:{textFaceName:"monospace",textFill:"#fff",textLineSpacing:1,textHorizontalAlignment:"right",textDx:15},boxStyle:{padding:[6,2],symbol:{markerType:"square",markerFill:"#000",markerFillOpacity:.9,markerLineColor:"#b4b3b3"}}},clearButtonSymbol:[{markerType:"square",markerFill:"#000",markerLineColor:"#b4b3b3",markerLineWidth:2,markerWidth:15,markerHeight:15,markerDx:22},{markerType:"x",markerWidth:10,markerHeight:10,markerLineColor:"#fff",markerDx:22}],language:"zh-CN"}).addTo(r).disable(),Er.on("drawend",t=>{this.distanceToolEnable=!1,Er.disable()}),Cr.on("drawend",t=>{this.areaToolEnable=!1,Cr.disable()})}}};var Bu=function(){var t=this,e=t._self._c;return e("div",{staticClass:"map-tool"},[e("div",{staticClass:"map-tool-btn",style:{background:t.distanceToolEnable?"#1bbc9b":"#172029"},attrs:{title:"\u6D4B\u91CF\u8DDD\u79BB"},on:{click:t.GetDistance}},[e("img",{staticClass:"tool-img",attrs:{src:Fu}})]),e("div",{staticClass:"map-tool-btn",style:{background:t.areaToolEnable?"#1bbc9b":"#172029"},attrs:{title:"\u6D4B\u91CF\u9762\u79EF"},on:{click:t.GetArea}},[e("img",{staticClass:"tool-img",attrs:{src:zu}})])])},Uu=[],ku=Qn(Nu,Bu,Uu,!1,null,"8df3591a",null,null);const Nc=ku.exports,Gu=[[117.66382098197936,39.011039329842404],[117.66319870948792,39.01127275343283],[117.66260862350464,39.01155619532838],[117.66203999519348,39.011706252342634],[117.66135334968567,39.01188131845685],[117.66064524650572,39.01221477652321],[117.65978693962097,39.012181430787315],[117.65876770019531,39.01204804768656],[117.6579523086548,39.01198135604184],[117.65713691711424,39.01184797256374],[117.65640735626219,39.011714588834074],[117.65559196472168,39.01158120485287],[117.65481948852539,39.0113144361358],[117.65434741973877,39.0111810513999],[117.65366077423096,39.01104766641247],[117.65318870544432,39.01088093482442],[117.65231162309645,39.01063708916913],[117.65192002058029,39.01047452493188],[117.65150964260103,39.01029737117098],[117.65108853578568,39.01013897449137],[117.6508042216301,39.01001600840341],[117.64984130859374,39.00961376191034],[117.64906883239746,39.0093803328447],[117.64806032180786,39.00900517737521],[117.64716982841492,39.00881343047796],[117.646644115448,39.00861334620488],[117.64597892761229,39.008454945753975],[117.64487385749817,39.00823818666736],[117.64358639717102,39.00798807920357],[117.64195561408995,39.00810479613006]],Vu={computed:{...xr({map:"MapModule/map"})},mounted(){this.$nextTick(()=>{this.animation()})},methods:{animation(){var t=this.map.getOrCreateLayerById("\u8F68\u8FF9\u6D4B\u8BD5",{hitDetect:!0,geometryEvents:!0,visible:!1}),e=Gu,n=new ir(e,{id:"arrow",arrowStyle:"classic",arrowPlacement:"point",symbol:{lineWidth:2,lineColor:"yellow"}});n.addTo(t)}}};var Hu=function(){var t=this,e=t._self._c;return e("div")},Wu=[],ju=Qn(Vu,Hu,Wu,!1,null,null,null,null);const Bc=ju.exports;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vr="145",Xu=0,za=1,Zu=2,Uc=1,$u=2,Ji=3,Di=0,Re=1,xn=2,bn=0,Ci=1,Na=2,Ba=3,Ua=4,qu=5,bi=100,Yu=101,Ju=102,ka=103,Ga=104,Qu=200,Ku=201,tf=202,ef=203,kc=204,Gc=205,nf=206,rf=207,sf=208,of=209,af=210,lf=0,cf=1,hf=2,Go=3,uf=4,ff=5,df=6,pf=7,fa=0,mf=1,gf=2,nn=0,xf=1,vf=2,_f=3,yf=4,bf=5,Vc=300,Ii=301,Oi=302,Vo=303,Ho=304,ws=306,Wo=1e3,Ne=1001,jo=1002,be=1003,Va=1004,Ha=1005,Ce=1006,Mf=1007,Ss=1008,Xn=1009,wf=1010,Sf=1011,Hc=1012,Af=1013,kn=1014,Gn=1015,rr=1016,Tf=1017,Ef=1018,Li=1020,Cf=1021,Lf=1022,Ve=1023,Pf=1024,Rf=1025,Wn=1026,Fi=1027,Df=1028,If=1029,Of=1030,Ff=1031,zf=1033,Vs=33776,Hs=33777,Ws=33778,js=33779,Wa=35840,ja=35841,Xa=35842,Za=35843,Nf=36196,$a=37492,qa=37496,Ya=37808,Ja=37809,Qa=37810,Ka=37811,tl=37812,el=37813,nl=37814,il=37815,rl=37816,sl=37817,ol=37818,al=37819,ll=37820,cl=37821,hl=36492,Zn=3e3,ie=3001,Bf=3200,Uf=3201,Wc=0,kf=1,tn="srgb",Vn="srgb-linear",Xs=7680,Gf=519,Xo=35044,ul="300 es",Zo=1035;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zs=Math.PI/180,fl=180/Math.PI;function rn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[r&255]+me[r>>8&255]+me[r>>16&255]+me[r>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function _e(r,t,e){return Math.max(t,Math.min(e,r))}function Vf(r,t){return(r%t+t)%t}function $s(r,t,e){return(1-e)*r+e*t}function dl(r){return(r&r-1)===0&&r!==0}function $o(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xt(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],v=i[6],y=i[1],_=i[4],x=i[7],M=i[2],w=i[5],C=i[8];return s[0]=o*m+a*y+l*M,s[3]=o*p+a*_+l*w,s[6]=o*v+a*x+l*C,s[1]=c*m+h*y+u*M,s[4]=c*p+h*_+u*w,s[7]=c*v+h*x+u*C,s[2]=f*m+d*y+g*M,s[5]=f*p+d*_+g*w,s[8]=f*v+d*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*h,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function jc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const qs={[tn]:{[Vn]:jn},[Vn]:{[tn]:ds}},Ie={legacyMode:!0,get workingColorSpace(){return Vn},set workingColorSpace(r){},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(qs[t]&&qs[t][e]!==void 0){const n=qs[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ce={r:0,g:0,b:0},Oe={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Ys(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Pr(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Vn){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Vn){if(t=Vf(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ys(o,s,t+1/3),this.g=Ys(o,s,t),this.b=Ys(o,s,t-1/3)}return Ie.toWorkingColorSpace(this,i),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ie.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ie.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ie.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ie.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=tn){const n=Xc[t.toLowerCase()];return n!==void 0&&this.setHex(n,e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Ie.fromWorkingColorSpace(Pr(this,ce),t),_e(ce.r*255,0,255)<<16^_e(ce.g*255,0,255)<<8^_e(ce.b*255,0,255)<<0}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vn){Ie.fromWorkingColorSpace(Pr(this,ce),e);const n=ce.r,i=ce.g,s=ce.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Vn){return Ie.fromWorkingColorSpace(Pr(this,ce),e),t.r=ce.r,t.g=ce.g,t.b=ce.b,t}getStyle(t=tn){return Ie.fromWorkingColorSpace(Pr(this,ce),t),t!==tn?`color(${t} ${ce.r} ${ce.g} ${ce.b})`:`rgb(${ce.r*255|0},${ce.g*255|0},${ce.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Oe),Oe.h+=t,Oe.s+=e,Oe.l+=n,this.setHSL(Oe.h,Oe.s,Oe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oe),t.getHSL(Lr);const n=$s(Oe.h,Lr.h,e),i=$s(Oe.s,Lr.s,e),s=$s(Oe.l,Lr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ot.NAMES=Xc;let oi;class Zc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=sr("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?e.toDataURL("image/jpeg",.6):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return t}}class $c{constructor(t=null){this.isSource=!0,this.uuid=rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Js(i[o].image)):s.push(Js(i[o]))}else s=Js(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Js(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let Hf=0;class De extends Bi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Ne,i=Ne,s=Ce,o=Ss,a=Ve,l=Xn,c=1,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=rn(),this.name="",this.source=new $c(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Vc;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,x=(d+1)/2,M=(v+1)/2,w=(h+f)/4,C=(u+m)/4,b=(g+p)/4;return _>x&&_>M?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=C/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=b/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=C/s,i=b/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-m)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sn extends Bi{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ce,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new $c(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qc extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wf extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=be,this.minFilter=be,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==f||c!==d||h!==g){let p=1-a;const v=l*f+c*d+h*g+u*m,y=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const M=Math.sqrt(_),w=Math.atan2(M,v*y);p=Math.sin(p*w)/M,a=Math.sin(a*w)/M}const x=a*y;if(l=l*p+f*x,c=c*p+d*x,h=h*p+g*x,u=u*p+m*x,p===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-s*i,u=l*i+s*n-o*e,f=-s*e-o*n-a*i;return this.x=c*l+f*-s+h*-a-u*-o,this.y=h*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new L,pl=new _r;class $n{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],f=t[l+2];h<e&&(e=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),f=t.getZ(l);h<e&&(e=h),u<n&&(n=u),f<i&&(i=f),h>s&&(s=h),u>o&&(o=u),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Rn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Rn)}else n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox),Ks.applyMatrix4(t.matrixWorld),this.union(Ks);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Rr.subVectors(this.max,ji),ai.subVectors(t.a,ji),li.subVectors(t.b,ji),ci.subVectors(t.c,ji),cn.subVectors(li,ai),hn.subVectors(ci,li),Dn.subVectors(ai,ci);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-Dn.z,Dn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,Dn.z,0,-Dn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-Dn.y,Dn.x,0];return!to(e,ai,li,ci,Rr)||(e=[1,0,0,0,1,0,0,0,1],!to(e,ai,li,ci,Rr))?!1:(Dr.crossVectors(cn,hn),e=[Dr.x,Dr.y,Dr.z],to(e,ai,li,ci,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Rn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ze),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ze=[new L,new L,new L,new L,new L,new L,new L,new L],Rn=new L,Ks=new $n,ai=new L,li=new L,ci=new L,cn=new L,hn=new L,Dn=new L,ji=new L,Rr=new L,Dr=new L,In=new L;function to(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){In.fromArray(r,s);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const jf=new $n,ml=new L,Ir=new L,eo=new L;class Ui{constructor(t=new L,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(eo.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?Ir.set(0,0,1).multiplyScalar(t.radius):Ir.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(ml.copy(t.center).add(Ir)),this.expandByPoint(ml.copy(t.center).sub(Ir)),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $e=new L,no=new L,Or=new L,un=new L,io=new L,Fr=new L,ro=new L;class As{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.direction).multiplyScalar(e).add(this.origin),$e.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){no.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),un.copy(this.origin).sub(no);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Or),a=un.dot(this.direction),l=-un.dot(Or),c=un.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Or).multiplyScalar(f).add(no),d}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const n=$e.dot(this.direction),i=$e.dot($e)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,n,i,s){io.subVectors(e,t),Fr.subVectors(n,t),ro.crossVectors(io,Fr);let o=this.direction.dot(ro),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,t);const l=a*this.direction.dot(Fr.crossVectors(un,Fr));if(l<0)return null;const c=a*this.direction.dot(io.cross(un));if(c<0||l+c>o)return null;const h=-a*un.dot(ro);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,m,p){const v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/hi.setFromMatrixColumn(t,0).length(),s=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,m=c*u;e[0]=f+m*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,m=c*u;e[0]=f-m*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-m*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,Zf)}lookAt(t,e,n){const i=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),fn.crossVectors(n,we),fn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),fn.crossVectors(n,we)),fn.normalize(),zr.crossVectors(we,fn),i[0]=fn.x,i[4]=zr.x,i[8]=we.x,i[1]=fn.y,i[5]=zr.y,i[9]=we.y,i[2]=fn.z,i[6]=zr.z,i[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],v=n[14],y=n[3],_=n[7],x=n[11],M=n[15],w=i[0],C=i[4],b=i[8],T=i[12],P=i[1],F=i[5],Z=i[9],z=i[13],R=i[2],U=i[6],G=i[10],j=i[14],k=i[3],I=i[7],D=i[11],Y=i[15];return s[0]=o*w+a*P+l*R+c*k,s[4]=o*C+a*F+l*U+c*I,s[8]=o*b+a*Z+l*G+c*D,s[12]=o*T+a*z+l*j+c*Y,s[1]=h*w+u*P+f*R+d*k,s[5]=h*C+u*F+f*U+d*I,s[9]=h*b+u*Z+f*G+d*D,s[13]=h*T+u*z+f*j+d*Y,s[2]=g*w+m*P+p*R+v*k,s[6]=g*C+m*F+p*U+v*I,s[10]=g*b+m*Z+p*G+v*D,s[14]=g*T+m*z+p*j+v*Y,s[3]=y*w+_*P+x*R+M*k,s[7]=y*C+_*F+x*U+M*I,s[11]=y*b+_*Z+x*G+M*D,s[15]=y*T+_*z+x*j+M*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],m=t[7],p=t[11],v=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+m*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+p*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+v*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],m=t[13],p=t[14],v=t[15],y=u*p*c-m*f*c+m*l*d-a*p*d-u*l*v+a*f*v,_=g*f*c-h*p*c-g*l*d+o*p*d+h*l*v-o*f*v,x=h*m*c-g*u*c+g*a*d-o*m*d-h*a*v+o*u*v,M=g*u*l-h*m*l-g*a*f+o*m*f+h*a*p-o*u*p,w=e*y+n*_+i*x+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=y*C,t[1]=(m*f*s-u*p*s-m*i*d+n*p*d+u*i*v-n*f*v)*C,t[2]=(a*p*s-m*l*s+m*i*c-n*p*c-a*i*v+n*l*v)*C,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*C,t[4]=_*C,t[5]=(h*p*s-g*f*s+g*i*d-e*p*d-h*i*v+e*f*v)*C,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*v-e*l*v)*C,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*C,t[8]=x*C,t[9]=(g*u*s-h*m*s-g*n*d+e*m*d+h*n*v-e*u*v)*C,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*v+e*a*v)*C,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=M*C,t[13]=(h*m*i-g*u*i+g*n*f-e*m*f-h*n*p+e*u*p)*C,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*p-e*a*p)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,m=o*h,p=o*u,v=a*u,y=l*c,_=l*h,x=l*u,M=n.x,w=n.y,C=n.z;return i[0]=(1-(m+v))*M,i[1]=(d+x)*M,i[2]=(g-_)*M,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+v))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(g+_)*C,i[9]=(p-y)*C,i[10]=(1-(f+m))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=hi.set(i[0],i[1],i[2]).length();const o=hi.set(i[4],i[5],i[6]).length(),a=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Fe.copy(this);const c=1/s,h=1/o,u=1/a;return Fe.elements[0]*=c,Fe.elements[1]*=c,Fe.elements[2]*=c,Fe.elements[4]*=h,Fe.elements[5]*=h,Fe.elements[6]*=h,Fe.elements[8]*=u,Fe.elements[9]*=u,Fe.elements[10]*=u,e.setFromRotationMatrix(Fe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),u=(e+t)*l,f=(n+i)*c,d=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new L,Fe=new Jt,Xf=new L(0,0,0),Zf=new L(1,1,1),fn=new L,zr=new L,we=new L,gl=new Jt,xl=new _r;class yr{constructor(t=0,e=0,n=0,i=yr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){}}yr.DefaultOrder="XYZ";yr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class da{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $f=0;const vl=new L,ui=new _r,qe=new Jt,Nr=new L,Xi=new L,qf=new L,Yf=new _r,_l=new L(1,0,0),yl=new L(0,1,0),bl=new L(0,0,1),Jf={type:"added"},Ml={type:"removed"};class re extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DefaultUp.clone();const t=new L,e=new yr,n=new _r,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Pe}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=re.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=re.DefaultMatrixWorldAutoUpdate,this.layers=new da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,e){return vl.copy(t).applyQuaternion(this.quaternion),this.position.add(vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qe.lookAt(Xi,Nr,this.up):qe.lookAt(Nr,Xi,this.up),this.quaternion.setFromRotationMatrix(qe),i&&(qe.extractRotation(i.matrixWorld),ui.setFromRotationMatrix(qe),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?this:(t&&t.isObject3D&&(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Jf)),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ml)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ml)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}re.DefaultUp=new L(0,1,0);re.DefaultMatrixAutoUpdate=!0;re.DefaultMatrixWorldAutoUpdate=!0;const ze=new L,Ye=new L,so=new L,Je=new L,fi=new L,di=new L,wl=new L,oo=new L,ao=new L,lo=new L;class en{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ze.subVectors(t,e),i.cross(ze);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ze.subVectors(i,e),Ye.subVectors(n,e),so.subVectors(t,e);const o=ze.dot(ze),a=ze.dot(Ye),l=ze.dot(so),c=Ye.dot(Ye),h=Ye.dot(so),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Je),Je.x>=0&&Je.y>=0&&Je.x+Je.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Je),l.set(0,0),l.addScaledVector(s,Je.x),l.addScaledVector(o,Je.y),l.addScaledVector(a,Je.z),l}static isFrontFacing(t,e,n,i){return ze.subVectors(n,e),Ye.subVectors(t,e),ze.cross(Ye).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),ze.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return en.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;fi.subVectors(i,n),di.subVectors(s,n),oo.subVectors(t,n);const l=fi.dot(oo),c=di.dot(oo);if(l<=0&&c<=0)return e.copy(n);ao.subVectors(t,i);const h=fi.dot(ao),u=di.dot(ao);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(fi,o);lo.subVectors(t,s);const d=fi.dot(lo),g=di.dot(lo);if(g>=0&&d<=g)return e.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(di,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return wl.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(wl,a);const v=1/(p+m+f);return o=m*v,a=f*v,e.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Qf=0;class He extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=Ci,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=kc,this.blendDst=Gc,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0)continue;const i=this[e];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n)}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pa extends He{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const le=new L,Br=new ct;class _t{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Xo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(t),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(t),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)le.fromBufferAttribute(this,e),le.transformDirection(t),this.setXYZ(e,le.x,le.y,le.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){}copyVector2sArray(){}copyVector3sArray(){}copyVector4sArray(){}}class Yc extends _t{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jc extends _t{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class he extends _t{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kf=0;const Ee=new Jt,co=new re,pi=new L,Se=new $n,Zi=new $n,de=new L;class Vt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?Jc:Yc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ee.makeRotationFromQuaternion(t),this.applyMatrix4(Ee),this}rotateX(t){return Ee.makeRotationX(t),this.applyMatrix4(Ee),this}rotateY(t){return Ee.makeRotationY(t),this.applyMatrix4(Ee),this}rotateZ(t){return Ee.makeRotationZ(t),this.applyMatrix4(Ee),this}translate(t,e,n){return Ee.makeTranslation(t,e,n),this.applyMatrix4(Ee),this}scale(t,e,n){return Ee.makeScale(t,e,n),this.applyMatrix4(Ee),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new he(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Se.setFromBufferAttribute(s),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Se.min,Zi.min),Se.expandByPoint(de),de.addVectors(Se.max,Zi.max),Se.expandByPoint(de)):(Se.expandByPoint(Zi.min),Se.expandByPoint(Zi.max))}Se.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)de.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(de));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)de.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),de.add(pi)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0)return;const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new L,h[P]=new L;const u=new L,f=new L,d=new L,g=new ct,m=new ct,p=new ct,v=new L,y=new L;function _(P,F,Z){u.fromArray(i,P*3),f.fromArray(i,F*3),d.fromArray(i,Z*3),g.fromArray(o,P*2),m.fromArray(o,F*2),p.fromArray(o,Z*2),f.sub(u),d.sub(u),m.sub(g),p.sub(g);const z=1/(m.x*p.y-p.x*m.y);!isFinite(z)||(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(z),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(z),c[P].add(v),c[F].add(v),c[Z].add(v),h[P].add(y),h[F].add(y),h[Z].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let P=0,F=x.length;P<F;++P){const Z=x[P],z=Z.start,R=Z.count;for(let U=z,G=z+R;U<G;U+=3)_(n[U+0],n[U+1],n[U+2])}const M=new L,w=new L,C=new L,b=new L;function T(P){C.fromArray(s,P*3),b.copy(C);const F=c[P];M.copy(F),M.sub(C.multiplyScalar(C.dot(F))).normalize(),w.crossVectors(b,F);const z=w.dot(h[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,F=x.length;P<F;++P){const Z=x[P],z=Z.start,R=Z.count;for(let U=z,G=z+R;U<G;U+=3)T(n[U+0]),T(n[U+1]),T(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let v=0;v<h;v++)f[g++]=c[d++]}return new _t(f,h,u)}if(this.index===null)return this;const e=new Vt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sl=new Jt,mi=new As,ho=new Ui,dn=new L,pn=new L,mn=new L,uo=new L,fo=new L,po=new L,Ur=new L,kr=new L,Gr=new L,Vr=new ct,Hr=new ct,Wr=new ct,mo=new L,jr=new L;class ye extends re{constructor(t=new Vt,e=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),t.ray.intersectsSphere(ho)===!1)||(Sl.copy(s).invert(),mi.copy(t.ray).applyMatrix4(Sl),n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const v=d[m],y=i[v.materialIndex],_=Math.max(v.start,g.start),x=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=_,w=x;M<w;M+=3){const C=a.getX(M),b=a.getX(M+1),T=a.getX(M+2);o=Xr(this,y,t,mi,l,c,h,u,f,C,b,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let v=m,y=p;v<y;v+=3){const _=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);o=Xr(this,i,t,mi,l,c,h,u,f,_,x,M),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const v=d[m],y=i[v.materialIndex],_=Math.max(v.start,g.start),x=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=_,w=x;M<w;M+=3){const C=M,b=M+1,T=M+2;o=Xr(this,y,t,mi,l,c,h,u,f,C,b,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=v.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,y=p;v<y;v+=3){const _=v,x=v+1,M=v+2;o=Xr(this,i,t,mi,l,c,h,u,f,_,x,M),o&&(o.faceIndex=Math.floor(v/3),e.push(o))}}}}function td(r,t,e,n,i,s,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==xn,a),l===null)return null;jr.copy(a),jr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:r}}function Xr(r,t,e,n,i,s,o,a,l,c,h,u){dn.fromBufferAttribute(i,c),pn.fromBufferAttribute(i,h),mn.fromBufferAttribute(i,u);const f=r.morphTargetInfluences;if(s&&f){Ur.set(0,0,0),kr.set(0,0,0),Gr.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(uo.fromBufferAttribute(v,c),fo.fromBufferAttribute(v,h),po.fromBufferAttribute(v,u),o?(Ur.addScaledVector(uo,p),kr.addScaledVector(fo,p),Gr.addScaledVector(po,p)):(Ur.addScaledVector(uo.sub(dn),p),kr.addScaledVector(fo.sub(pn),p),Gr.addScaledVector(po.sub(mn),p)))}dn.add(Ur),pn.add(kr),mn.add(Gr)}r.isSkinnedMesh&&(r.boneTransform(c,dn),r.boneTransform(h,pn),r.boneTransform(u,mn));const d=td(r,t,e,n,dn,pn,mn,mo);if(d){a&&(Vr.fromBufferAttribute(a,c),Hr.fromBufferAttribute(a,h),Wr.fromBufferAttribute(a,u),d.uv=en.getUV(mo,dn,pn,mn,Vr,Hr,Wr,new ct)),l&&(Vr.fromBufferAttribute(l,c),Hr.fromBufferAttribute(l,h),Wr.fromBufferAttribute(l,u),d.uv2=en.getUV(mo,dn,pn,mn,Vr,Hr,Wr,new ct));const g={a:c,b:h,c:u,normal:new L,materialIndex:0};en.getNormal(dn,pn,mn,g.normal),d.face=g}return d}class ki extends Vt{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2));function g(m,p,v,y,_,x,M,w,C,b,T){const P=x/C,F=M/b,Z=x/2,z=M/2,R=w/2,U=C+1,G=b+1;let j=0,k=0;const I=new L;for(let D=0;D<G;D++){const Y=D*F-z;for(let V=0;V<U;V++){const tt=V*P-Z;I[m]=tt*y,I[p]=Y*_,I[v]=R,c.push(I.x,I.y,I.z),I[m]=0,I[p]=0,I[v]=w>0?1:-1,h.push(I.x,I.y,I.z),u.push(V/C),u.push(1-D/b),j+=1}}for(let D=0;D<b;D++)for(let Y=0;Y<C;Y++){const V=f+Y+U*D,tt=f+Y+U*(D+1),nt=f+(Y+1)+U*(D+1),pt=f+(Y+1)+U*D;l.push(V,tt,pt),l.push(tt,nt,pt),k+=6}a.addGroup(d,k,T),d+=k,f+=j}}static fromJSON(t){return new ki(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ge(r){const t={};for(let e=0;e<r.length;e++){const n=zi(r[e]);for(const i in n)t[i]=n[i]}return t}function ed(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}const ma={clone:zi,merge:ge};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends He{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xs extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends xs{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fl*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=90,xi=1;class rd extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Le(gi,xi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);const s=new Le(gi,xi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);const o=new Le(gi,xi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new L(0,1,0)),this.add(o);const a=new Le(gi,xi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new L(0,-1,0)),this.add(a);const l=new Le(gi,xi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,1)),this.add(l);const c=new Le(gi,xi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.toneMapping,f=t.xr.enabled;t.toneMapping=nn,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=u,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Qc extends De{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ii,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sd extends sn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Qc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ki(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:bn});s.uniforms.tEquirect.value=e;const o=new ye(i,s),a=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Ce),new rd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const go=new L,od=new L,ad=new Pe;class Bn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=go.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),i=this.coplanarPoint(go).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Ui,Zr=new L;class ga{constructor(t=new Bn,e=new Bn,n=new Bn,i=new Bn,s=new Bn,o=new Bn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],v=n[13],y=n[14],_=n[15];return e[0].setComponents(a-i,u-l,m-f,_-p).normalize(),e[1].setComponents(a+i,u+l,m+f,_+p).normalize(),e[2].setComponents(a+s,u+c,m+d,_+v).normalize(),e[3].setComponents(a-s,u-c,m-d,_-v).normalize(),e[4].setComponents(a-o,u-h,m-g,_-y).normalize(),e[5].setComponents(a+o,u+h,m+g,_+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ld(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(h,d),r.bufferData(h,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const f=h.array,d=h.updateRange;r.bindBuffer(u,c),d.count===-1?r.bufferSubData(u,0,f):(e?r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class xa extends Vt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],m=[],p=[];for(let v=0;v<h;v++){const y=v*f-o;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-y,0),m.push(0,0,1),p.push(_/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const _=y+c*v,x=y+c*(v+1),M=y+1+c*(v+1),w=y+1+c*v;d.push(_,x,w),d.push(x,M,w)}this.setIndex(d),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(m,3)),this.setAttribute("uv",new he(p,2))}static fromJSON(t){return new xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md="vec3 transformed = vec3( position );",gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,vd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Kd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ep=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,em=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,nm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,im=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,um=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_m=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Nt={alphamap_fragment:cd,alphamap_pars_fragment:hd,alphatest_fragment:ud,alphatest_pars_fragment:fd,aomap_fragment:dd,aomap_pars_fragment:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:xd,iridescence_fragment:vd,bumpmap_pars_fragment:_d,clipping_planes_fragment:yd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Md,clipping_planes_vertex:wd,color_fragment:Sd,color_pars_fragment:Ad,color_pars_vertex:Td,color_vertex:Ed,common:Cd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Rd,displacementmap_vertex:Dd,emissivemap_fragment:Id,emissivemap_pars_fragment:Od,encodings_fragment:Fd,encodings_pars_fragment:zd,envmap_fragment:Nd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:Ud,envmap_pars_vertex:kd,envmap_physical_pars_fragment:Qd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Hd,fog_fragment:Wd,fog_pars_fragment:jd,gradientmap_pars_fragment:Xd,lightmap_fragment:Zd,lightmap_pars_fragment:$d,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:Jd,lights_toon_fragment:Kd,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:rp,lights_fragment_begin:sp,lights_fragment_maps:op,lights_fragment_end:ap,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:fp,map_pars_fragment:dp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:xp,morphcolor_vertex:vp,morphnormal_vertex:_p,morphtarget_pars_vertex:yp,morphtarget_vertex:bp,normal_fragment_begin:Mp,normal_fragment_maps:wp,normal_pars_fragment:Sp,normal_pars_vertex:Ap,normal_vertex:Tp,normalmap_pars_fragment:Ep,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Rp,output_fragment:Dp,packing:Ip,premultiplied_alpha_fragment:Op,project_vertex:Fp,dithering_fragment:zp,dithering_pars_fragment:Np,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Hp,skinbase_vertex:Wp,skinning_pars_vertex:jp,skinning_vertex:Xp,skinnormal_vertex:Zp,specularmap_fragment:$p,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:Jp,transmission_fragment:Qp,transmission_pars_fragment:Kp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,uv2_pars_fragment:im,uv2_pars_vertex:rm,uv2_vertex:sm,worldpos_vertex:om,background_vert:am,background_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:vm,meshbasic_vert:_m,meshbasic_frag:ym,meshlambert_vert:bm,meshlambert_frag:Mm,meshmatcap_vert:wm,meshmatcap_frag:Sm,meshnormal_vert:Am,meshnormal_frag:Tm,meshphong_vert:Em,meshphong_frag:Cm,meshphysical_vert:Lm,meshphysical_frag:Pm,meshtoon_vert:Rm,meshtoon_frag:Dm,points_vert:Im,points_frag:Om,shadow_vert:Fm,shadow_frag:zm,sprite_vert:Nm,sprite_frag:Bm},rt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pe},uv2Transform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}}},Ge={basic:{uniforms:ge([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ge([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ge([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ge([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ge([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ge([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ge([rt.points,rt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ge([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ge([rt.common,rt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ge([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ge([rt.sprite,rt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},cube:{uniforms:ge([rt.envmap,{opacity:{value:1}}]),vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ge([rt.common,rt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ge([rt.lights,rt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Ge.physical={uniforms:ge([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ct(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};function Um(r,t,e,n,i,s){const o=new Ot(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(m,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=t.get(y));const _=r.xr,x=_.getSession&&_.getSession();x&&x.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),v=!0),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ws)?(c===void 0&&(c=new ye(new ki(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:zi(Ge.cube.uniforms),vertexShader:Ge.cube.vertexShader,fragmentShader:Ge.cube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||u!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ye(new xa(2,2),new Mn({name:"BackgroundMaterial",uniforms:zi(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){e.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:d}}function km(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(R,U,G,j,k){let I=!1;if(o){const D=m(j,G,U);c!==D&&(c=D,d(c.object)),I=v(R,j,G,k),I&&y(R,j,G,k)}else{const D=U.wireframe===!0;(c.geometry!==j.id||c.program!==G.id||c.wireframe!==D)&&(c.geometry=j.id,c.program=G.id,c.wireframe=D,I=!0)}k!==null&&e.update(k,34963),(I||h)&&(h=!1,b(R,U,G,j),k!==null&&r.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function m(R,U,G){const j=G.wireframe===!0;let k=a[R.id];k===void 0&&(k={},a[R.id]=k);let I=k[U.id];I===void 0&&(I={},k[U.id]=I);let D=I[j];return D===void 0&&(D=p(f()),I[j]=D),D}function p(R){const U=[],G=[],j=[];for(let k=0;k<i;k++)U[k]=0,G[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:j,object:R,attributes:{},index:null}}function v(R,U,G,j){const k=c.attributes,I=U.attributes;let D=0;const Y=G.getAttributes();for(const V in Y)if(Y[V].location>=0){const nt=k[V];let pt=I[V];if(pt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor)),nt===void 0||nt.attribute!==pt||pt&&nt.data!==pt.data)return!0;D++}return c.attributesNum!==D||c.index!==j}function y(R,U,G,j){const k={},I=U.attributes;let D=0;const Y=G.getAttributes();for(const V in Y)if(Y[V].location>=0){let nt=I[V];nt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));const pt={};pt.attribute=nt,nt&&nt.data&&(pt.data=nt.data),k[V]=pt,D++}c.attributes=k,c.attributesNum=D,c.index=j}function _(){const R=c.newAttributes;for(let U=0,G=R.length;U<G;U++)R[U]=0}function x(R){M(R,0)}function M(R,U){const G=c.newAttributes,j=c.enabledAttributes,k=c.attributeDivisors;G[R]=1,j[R]===0&&(r.enableVertexAttribArray(R),j[R]=1),k[R]!==U&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),k[R]=U)}function w(){const R=c.newAttributes,U=c.enabledAttributes;for(let G=0,j=U.length;G<j;G++)U[G]!==R[G]&&(r.disableVertexAttribArray(G),U[G]=0)}function C(R,U,G,j,k,I){n.isWebGL2===!0&&(G===5124||G===5125)?r.vertexAttribIPointer(R,U,G,k,I):r.vertexAttribPointer(R,U,G,j,k,I)}function b(R,U,G,j){if(n.isWebGL2===!1&&(R.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const k=j.attributes,I=G.getAttributes(),D=U.defaultAttributeValues;for(const Y in I){const V=I[Y];if(V.location>=0){let tt=k[Y];if(tt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),tt!==void 0){const nt=tt.normalized,pt=tt.itemSize,W=e.get(tt);if(W===void 0)continue;const wt=W.buffer,xt=W.type,St=W.bytesPerElement;if(tt.isInterleavedBufferAttribute){const ht=tt.data,Bt=ht.stride,Q=tt.offset;if(ht.isInstancedInterleavedBuffer){for(let q=0;q<V.locationSize;q++)M(V.location+q,ht.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let q=0;q<V.locationSize;q++)x(V.location+q);r.bindBuffer(34962,wt);for(let q=0;q<V.locationSize;q++)C(V.location+q,pt/V.locationSize,xt,nt,Bt*St,(Q+pt/V.locationSize*q)*St)}else{if(tt.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)M(V.location+ht,tt.meshPerAttribute);R.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ht=0;ht<V.locationSize;ht++)x(V.location+ht);r.bindBuffer(34962,wt);for(let ht=0;ht<V.locationSize;ht++)C(V.location+ht,pt/V.locationSize,xt,nt,pt*St,pt/V.locationSize*ht*St)}}else if(D!==void 0){const nt=D[Y];if(nt!==void 0)switch(nt.length){case 2:r.vertexAttrib2fv(V.location,nt);break;case 3:r.vertexAttrib3fv(V.location,nt);break;case 4:r.vertexAttrib4fv(V.location,nt);break;default:r.vertexAttrib1fv(V.location,nt)}}}}w()}function T(){Z();for(const R in a){const U=a[R];for(const G in U){const j=U[G];for(const k in j)g(j[k].object),delete j[k];delete U[G]}delete a[R]}}function P(R){if(a[R.id]===void 0)return;const U=a[R.id];for(const G in U){const j=U[G];for(const k in j)g(j[k].object),delete j[k];delete U[G]}delete a[R.id]}function F(R){for(const U in a){const G=a[U];if(G[R.id]===void 0)continue;const j=G[R.id];for(const k in j)g(j[k].object),delete j[k];delete G[R.id]}}function Z(){z(),h=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:x,disableUnusedAttributes:w}}function Gm(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null)return;f[d](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Vm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),v=r.getParameter(36348),y=r.getParameter(36349),_=f>0,x=o||t.has("OES_texture_float"),M=_&&x,w=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:w}}function Hm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Bn,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,d){const g=u.length!==0||f||n!==0||i;return i=f,e=h(u,d,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,d){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,v=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,_=y*4;let x=v.clippingState||null;l.value=x,x=h(g,f,_,d);for(let M=0;M!==_;++M)x[M]=e[M];v.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,x=d;_!==m;++_,x+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function Wm(r){let t=new WeakMap;function e(o,a){return a===Vo?o.mapping=Ii:a===Ho&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Vo||a===Ho)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sd(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class th extends xs{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Al=[.125,.215,.35,.446,.526,.582],wi=20,xo=new th,Tl=new Ot;let vo=null;const Un=(1+Math.sqrt(5))/2,_i=1/Un,El=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Un,_i),new L(0,Un,-_i),new L(_i,0,Un),new L(-_i,0,Un),new L(Un,_i,0),new L(-Un,_i,0)];class Cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vo),t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vo=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:rr,format:Ve,encoding:Zn,depthBuffer:!1},i=Ll(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(s)),this._blurMaterial=Xm(s,t,e)}return i}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Tl),h.toneMapping=nn,h.autoClear=!1;const d=new pa({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new ye(new ki,d);let m=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,m=!0):(d.color.copy(Tl),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;$r(i,y*_,v>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ii||t.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=El[(i-1)%El.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial,h=3,u=new ye(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*wi-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):wi;p>wi;const v=[];let y=0;for(let C=0;C<wi;++C){const b=C/m,T=Math.exp(-b*b/2);v.push(T),C===0?y+=T:C<p&&(y+=2*T)}for(let C=0;C<v.length;C++)v[C]=v[C]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const x=this._sizeLods[i],M=3*x*(i>_-Mi?i-_+Mi:0),w=4*(this._cubeSize-x);$r(e,M,w,3*x,2*x),l.setRenderTarget(e),l.render(u,xo)}}function jm(r){const t=[],e=[],n=[];let i=r;const s=r-Mi+1+Al.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Mi?l=Al[o-r+Mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,p=2,v=1,y=new Float32Array(m*g*d),_=new Float32Array(p*g*d),x=new Float32Array(v*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,b=w>2?0:-1,T=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];y.set(T,m*g*w),_.set(f,p*g*w);const P=[w,w,w,w,w,w];x.set(P,v*g*w)}const M=new Vt;M.setAttribute("position",new _t(y,m)),M.setAttribute("uv",new _t(_,p)),M.setAttribute("faceIndex",new _t(x,v)),t.push(M),i>Mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ll(r,t,e){const n=new sn(r,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Xm(r,t,e){const n=new Float32Array(wi),i=new L(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Pl(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Rl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vo||l===Ho,h=l===Ii||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Cl(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Cl(r));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $m(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i}}}function qm(r,t,e,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],34962);const d=u.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)t.update(m[p],34962)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let _=0,x=y.length;_<x;_+=3){const M=y[_+0],w=y[_+1],C=y[_+2];f.push(M,w,w,C,C,M)}}else{const y=g.array;m=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const M=_+0,w=_+1,C=_+2;f.push(M,w,w,C,C,M)}}const p=new(jc(f)?Jc:Yc)(f,1);p.version=m;const v=s.get(u);v&&t.remove(v),s.set(u,p)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ym(r,t,e,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function h(f,d){r.drawElements(s,d,a,f*l),e.update(d,s,1)}function u(f,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null)return;m[p](s,d,a,f*l,g),e.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Jm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qm(r,t){return r[0]-t[0]}function Km(r,t){return Math.abs(t[1])-Math.abs(r[1])}function tg(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new pe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,f){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==m){let U=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),M===!0&&(T=3);let P=h.attributes.position.count*T,F=1;P>t.maxTextureSize&&(F=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const Z=new Float32Array(P*F*4*m),z=new qc(Z,P,F,m);z.type=Gn,z.needsUpdate=!0;const R=T*4;for(let G=0;G<m;G++){const j=w[G],k=C[G],I=b[G],D=P*F*4*G;for(let Y=0;Y<j.count;Y++){const V=Y*R;_===!0&&(o.fromBufferAttribute(j,Y),Z[D+V+0]=o.x,Z[D+V+1]=o.y,Z[D+V+2]=o.z,Z[D+V+3]=0),x===!0&&(o.fromBufferAttribute(k,Y),Z[D+V+4]=o.x,Z[D+V+5]=o.y,Z[D+V+6]=o.z,Z[D+V+7]=0),M===!0&&(o.fromBufferAttribute(I,Y),Z[D+V+8]=o.x,Z[D+V+9]=o.y,Z[D+V+10]=o.z,Z[D+V+11]=I.itemSize===4?o.w:1)}}p={count:m,texture:z,size:new ct(P,F)},s.set(h,p),h.addEventListener("dispose",U)}let v=0;for(let _=0;_<d.length;_++)v+=d[_];const y=h.morphTargetsRelative?1:1-v;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[h.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<g;x++){const M=m[x];M[0]=x,M[1]=d[x]}m.sort(Km);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Qm);const p=h.morphAttributes.position,v=h.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const M=a[x],w=M[0],C=M[1];w!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+x)!==p[w]&&h.setAttribute("morphTarget"+x,p[w]),v&&h.getAttribute("morphNormal"+x)!==v[w]&&h.setAttribute("morphNormal"+x,v[w]),i[x]=C,y+=C):(p&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-y;f.getUniforms().setValue(r,"morphTargetBaseInfluence",_),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function eg(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const eh=new De,nh=new qc,ih=new Wf,rh=new Qc,Dl=[],Il=[],Ol=new Float32Array(16),Fl=new Float32Array(9),zl=new Float32Array(4);function Gi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Dl[i];if(s===void 0&&(s=new Float32Array(i),Dl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ue(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ts(r,t){let e=Il[t];e===void 0&&(e=new Int32Array(t),Il[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ng(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ig(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;r.uniform2fv(this.addr,t),fe(e,t)}}function rg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;r.uniform3fv(this.addr,t),fe(e,t)}}function sg(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;r.uniform4fv(this.addr,t),fe(e,t)}}function og(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;zl.set(n),r.uniformMatrix2fv(this.addr,!1,zl),fe(e,n)}}function ag(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;Fl.set(n),r.uniformMatrix3fv(this.addr,!1,Fl),fe(e,n)}}function lg(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ue(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(ue(e,n))return;Ol.set(n),r.uniformMatrix4fv(this.addr,!1,Ol),fe(e,n)}}function cg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hg(r,t){const e=this.cache;ue(e,t)||(r.uniform2iv(this.addr,t),fe(e,t))}function ug(r,t){const e=this.cache;ue(e,t)||(r.uniform3iv(this.addr,t),fe(e,t))}function fg(r,t){const e=this.cache;ue(e,t)||(r.uniform4iv(this.addr,t),fe(e,t))}function dg(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pg(r,t){const e=this.cache;ue(e,t)||(r.uniform2uiv(this.addr,t),fe(e,t))}function mg(r,t){const e=this.cache;ue(e,t)||(r.uniform3uiv(this.addr,t),fe(e,t))}function gg(r,t){const e=this.cache;ue(e,t)||(r.uniform4uiv(this.addr,t),fe(e,t))}function xg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||eh,i)}function vg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ih,i)}function _g(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||rh,i)}function yg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||nh,i)}function bg(r){switch(r){case 5126:return ng;case 35664:return ig;case 35665:return rg;case 35666:return sg;case 35674:return og;case 35675:return ag;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return yg}}function Mg(r,t){r.uniform1fv(this.addr,t)}function wg(r,t){const e=Gi(t,this.size,2);r.uniform2fv(this.addr,e)}function Sg(r,t){const e=Gi(t,this.size,3);r.uniform3fv(this.addr,e)}function Ag(r,t){const e=Gi(t,this.size,4);r.uniform4fv(this.addr,e)}function Tg(r,t){const e=Gi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Eg(r,t){const e=Gi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Cg(r,t){const e=Gi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Lg(r,t){r.uniform1iv(this.addr,t)}function Pg(r,t){r.uniform2iv(this.addr,t)}function Rg(r,t){r.uniform3iv(this.addr,t)}function Dg(r,t){r.uniform4iv(this.addr,t)}function Ig(r,t){r.uniform1uiv(this.addr,t)}function Og(r,t){r.uniform2uiv(this.addr,t)}function Fg(r,t){r.uniform3uiv(this.addr,t)}function zg(r,t){r.uniform4uiv(this.addr,t)}function Ng(r,t,e){const n=this.cache,i=t.length,s=Ts(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||eh,s[o])}function Bg(r,t,e){const n=this.cache,i=t.length,s=Ts(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ih,s[o])}function Ug(r,t,e){const n=this.cache,i=t.length,s=Ts(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||rh,s[o])}function kg(r,t,e){const n=this.cache,i=t.length,s=Ts(e,i);ue(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||nh,s[o])}function Gg(r){switch(r){case 5126:return Mg;case 35664:return wg;case 35665:return Sg;case 35666:return Ag;case 35674:return Tg;case 35675:return Eg;case 35676:return Cg;case 5124:case 35670:return Lg;case 35667:case 35671:return Pg;case 35668:case 35672:return Rg;case 35669:case 35673:return Dg;case 5125:return Ig;case 36294:return Og;case 36295:return Fg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return kg}}class Vg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=bg(e.type)}}class Hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Gg(e.type)}}class Wg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Nl(r,t){r.seq.push(t),r.map[t.id]=t}function jg(r,t,e){const n=r.name,i=n.length;for(_o.lastIndex=0;;){const s=_o.exec(n),o=_o.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nl(e,c===void 0?new Vg(a,r,t):new Hg(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Wg(a),Nl(e,u)),e=u}}}class ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);jg(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Bl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Xg=0;function Zg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function $g(r){switch(r){case Zn:return["Linear","( value )"];case ie:return["sRGB","( value )"];default:return["Linear","( value )"]}}function Ul(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Zg(r.getShaderSource(t),o)}else return i}function qg(r,t){const e=$g(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Yg(r,t){let e;switch(t){case xf:e="Linear";break;case vf:e="Reinhard";break;case _f:e="OptimizedCineon";break;case yf:e="ACESFilmic";break;case bf:e="Custom";break;default:e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Jg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function Qg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Qi(r){return r!==""}function kl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(r){return r.replace(t0,e0)}function e0(r,t){const e=Nt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return qo(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(r){return r.replace(n0,i0)}function i0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hl(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$u?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ii:case Oi:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case fa:t="ENVMAP_BLENDING_MULTIPLY";break;case mf:t="ENVMAP_BLENDING_MIX";break;case gf:t="ENVMAP_BLENDING_ADD";break}return t}function l0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function c0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=r0(e),c=s0(e),h=o0(e),u=a0(e),f=l0(e),d=e.isWebGL2?"":Jg(e),g=Qg(s),m=i.createProgram();let p,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Qi).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(Qi).join(`
`),v.length>0&&(v+=`
`)):(p=[Hl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),v=[d,Hl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==nn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.encodings_pars_fragment,qg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),o=qo(o),o=kl(o,e),o=Gl(o,e),a=qo(a),a=kl(a,e),a=Gl(a,e),o=Vl(o),a=Vl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=y+p+o,x=y+v+a,M=Bl(i,35633,_),w=Bl(i,35632,x);if(i.attachShader(m,M),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(M).trim(),F=i.getShaderInfoLog(w).trim();let Z=!0,z=!0;if(i.getProgramParameter(m,35714)===!1){Z=!1;const R=Ul(i,M,"vertex"),U=Ul(i,w,"fragment")}else T!==""||(P===""||F==="")&&(z=!1);z&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:P,prefix:p},fragmentShader:{log:F,prefix:v}})}i.deleteShader(M),i.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new ps(i,m)),C};let b;return this.getAttributes=function(){return b===void 0&&(b=Kg(i,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=w,this}let h0=0;class u0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f0(t),e.set(t,n)),n}}class f0{constructor(t){this.id=h0++,this.code=t,this.usedTimes=0}}function d0(r,t,e,n,i,s,o){const a=new da,l=new u0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,T,P,F,Z){const z=F.fog,R=Z.geometry,U=b.isMeshStandardMaterial?F.environment:null,G=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),j=!!G&&G.mapping===ws?G.image.height:null,k=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),b.precision);const I=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,D=I!==void 0?I.length:0;let Y=0;R.morphAttributes.position!==void 0&&(Y=1),R.morphAttributes.normal!==void 0&&(Y=2),R.morphAttributes.color!==void 0&&(Y=3);let V,tt,nt,pt;if(k){const Bt=Ge[k];V=Bt.vertexShader,tt=Bt.fragmentShader}else V=b.vertexShader,tt=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),pt=l.getFragmentShaderID(b);const W=r.getRenderTarget(),wt=b.alphaTest>0,xt=b.clearcoat>0,St=b.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:b.type,vertexShader:V,fragmentShader:tt,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:pt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?r.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Zn,map:!!b.map,matcap:!!b.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:j,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===kf,tangentSpaceNormalMap:b.normalMapType===Wc,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ie,clearcoat:xt,clearcoatMap:xt&&!!b.clearcoatMap,clearcoatRoughnessMap:xt&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!b.clearcoatNormalMap,iridescence:St,iridescenceMap:St&&!!b.iridescenceMap,iridescenceThicknessMap:St&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Ci,alphaMap:!!b.alphaMap,alphaTest:wt,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!R.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!z,useFog:b.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Y,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:nn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Re,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)T.push(P),T.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(T,b),y(T,b),T.push(r.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function _(b){const T=g[b.type];let P;if(T){const F=Ge[T];P=ma.clone(F.uniforms)}else P=b.uniforms;return P}function x(b,T){let P;for(let F=0,Z=c.length;F<Z;F++){const z=c[F];if(z.cacheKey===T){P=z,++P.usedTimes;break}}return P===void 0&&(P=new c0(r,T,b,s),c.push(P)),P}function M(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:x,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:C}}function p0(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function m0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Wl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function jl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,m,p){let v=r[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},r[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function a(u,f,d,g,m,p){const v=o(u,f,d,g,m,p);d.transmission>0?n.push(v):d.transparent===!0?i.push(v):e.push(v)}function l(u,f,d,g,m,p){const v=o(u,f,d,g,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?i.unshift(v):e.unshift(v)}function c(u,f){e.length>1&&e.sort(u||m0),n.length>1&&n.sort(f||Wl),i.length>1&&i.sort(f||Wl)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function g0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new jl,r.set(n,[o])):i>=s.length?(o=new jl,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function x0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ot};break;case"SpotLight":e={position:new L,direction:new L,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function v0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let _0=0;function y0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function b0(r,t){const e=new x0,n=v0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,o=new Jt,a=new Jt;function l(h,u){let f=0,d=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let m=0,p=0,v=0,y=0,_=0,x=0,M=0,w=0,C=0,b=0;h.sort(y0);const T=u!==!0?Math.PI:1;for(let F=0,Z=h.length;F<Z;F++){const z=h[F],R=z.color,U=z.intensity,G=z.distance,j=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=R.r*U*T,d+=R.g*U*T,g+=R.b*U*T;else if(z.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(z.sh.coefficients[k],U);else if(z.isDirectionalLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const I=z.shadow,D=n.get(z);D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=z.shadow.matrix,x++}i.directional[m]=k,m++}else if(z.isSpotLight){const k=e.get(z);k.position.setFromMatrixPosition(z.matrixWorld),k.color.copy(R).multiplyScalar(U*T),k.distance=G,k.coneCos=Math.cos(z.angle),k.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),k.decay=z.decay,i.spot[v]=k;const I=z.shadow;if(z.map&&(i.spotLightMap[C]=z.map,C++,I.updateMatrices(z),z.castShadow&&b++),i.spotLightMatrix[v]=I.matrix,z.castShadow){const D=n.get(z);D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=j,w++}v++}else if(z.isRectAreaLight){const k=e.get(z);k.color.copy(R).multiplyScalar(U),k.halfWidth.set(z.width*.5,0,0),k.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=k,y++}else if(z.isPointLight){const k=e.get(z);if(k.color.copy(z.color).multiplyScalar(z.intensity*T),k.distance=z.distance,k.decay=z.decay,z.castShadow){const I=z.shadow,D=n.get(z);D.shadowBias=I.bias,D.shadowNormalBias=I.normalBias,D.shadowRadius=I.radius,D.shadowMapSize=I.mapSize,D.shadowCameraNear=I.camera.near,D.shadowCameraFar=I.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=z.shadow.matrix,M++}i.point[p]=k,p++}else if(z.isHemisphereLight){const k=e.get(z);k.skyColor.copy(z.color).multiplyScalar(U*T),k.groundColor.copy(z.groundColor).multiplyScalar(U*T),i.hemi[_]=k,_++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0&&(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==m||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==y||P.hemiLength!==_||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==w||P.numSpotMaps!==C)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=y,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=w+C-b,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=b,P.directionalLength=m,P.pointLength=p,P.spotLength=v,P.rectAreaLength=y,P.hemiLength=_,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=w,P.numSpotMaps=C,i.version=_0++)}function c(h,u){let f=0,d=0,g=0,m=0,p=0;const v=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const x=h[y];if(x.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const M=i.rectArea[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(x.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),d++}else if(x.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function Xl(r,t){const e=new b0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function M0(r,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new Xl(r,t),e.set(s,[l])):o>=a.length?(l=new Xl(r,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class w0 extends He{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S0 extends He{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E0(r,t,e){let n=new ga;const i=new ct,s=new ct,o=new pe,a=new w0({depthPacking:Uf}),l=new S0,c={},h=e.maxTextureSize,u={0:Re,1:Di,2:xn},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:A0,fragmentShader:T0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ye(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc,this.render=function(x,M,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const C=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),P=r.state;P.setBlending(bn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let F=0,Z=x.length;F<Z;F++){const z=x[F],R=z.shadow;if(R===void 0||R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/U.x),i.x=s.x*U.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/U.y),i.y=s.y*U.y,R.mapSize.y=s.y)),R.map===null){const j=this.type!==Ji?{minFilter:be,magFilter:be}:{};R.map=new sn(i.x,i.y,j),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const G=R.getViewportCount();for(let j=0;j<G;j++){const k=R.getViewport(j);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),P.viewport(o),R.updateMatrices(z,j),n=R.getFrustum(),_(M,w,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===Ji&&v(R,w),R.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(C,b,T)};function v(x,M){const w=t.update(m);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new sn(i.x,i.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(M,null,w,f,m,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(M,null,w,d,m,null)}function y(x,M,w,C,b,T){let P=null;const F=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(F!==void 0?P=F:P=w.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const Z=P.uuid,z=M.uuid;let R=c[Z];R===void 0&&(R={},c[Z]=R);let U=R[z];U===void 0&&(U=P.clone(),R[z]=U),P=U}return P.visible=M.visible,P.wireframe=M.wireframe,T===Ji?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:u[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(w.matrixWorld),P.nearDistance=C,P.farDistance=b),P}function _(x,M,w,C,b){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===Ji)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const F=t.update(x),Z=x.material;if(Array.isArray(Z)){const z=F.groups;for(let R=0,U=z.length;R<U;R++){const G=z[R],j=Z[G.materialIndex];if(j&&j.visible){const k=y(x,j,C,w.near,w.far,b);r.renderBufferDirect(w,null,F,k,x,G)}}}else if(Z.visible){const z=y(x,Z,C,w.near,w.far,b);r.renderBufferDirect(w,null,F,z,x,null)}}const P=x.children;for(let F=0,Z=P.length;F<Z;F++)_(P[F],M,w,C,b)}}function C0(r,t,e){const n=e.isWebGL2;function i(){let O=!1;const mt=new pe;let ot=null;const J=new pe(0,0,0,0);return{setMask:function(at){ot!==at&&!O&&(r.colorMask(at,at,at,at),ot=at)},setLocked:function(at){O=at},setClear:function(at,Ct,Yt,se,an){an===!0&&(at*=se,Ct*=se,Yt*=se),mt.set(at,Ct,Yt,se),J.equals(mt)===!1&&(r.clearColor(at,Ct,Yt,se),J.copy(mt))},reset:function(){O=!1,ot=null,J.set(-1,0,0,0)}}}function s(){let O=!1,mt=null,ot=null,J=null;return{setTest:function(at){at?wt(2929):xt(2929)},setMask:function(at){mt!==at&&!O&&(r.depthMask(at),mt=at)},setFunc:function(at){if(ot!==at){switch(at){case lf:r.depthFunc(512);break;case cf:r.depthFunc(519);break;case hf:r.depthFunc(513);break;case Go:r.depthFunc(515);break;case uf:r.depthFunc(514);break;case ff:r.depthFunc(518);break;case df:r.depthFunc(516);break;case pf:r.depthFunc(517);break;default:r.depthFunc(515)}ot=at}},setLocked:function(at){O=at},setClear:function(at){J!==at&&(r.clearDepth(at),J=at)},reset:function(){O=!1,mt=null,ot=null,J=null}}}function o(){let O=!1,mt=null,ot=null,J=null,at=null,Ct=null,Yt=null,se=null,an=null;return{setTest:function(ee){O||(ee?wt(2960):xt(2960))},setMask:function(ee){mt!==ee&&!O&&(r.stencilMask(ee),mt=ee)},setFunc:function(ee,Xe,Ae){(ot!==ee||J!==Xe||at!==Ae)&&(r.stencilFunc(ee,Xe,Ae),ot=ee,J=Xe,at=Ae)},setOp:function(ee,Xe,Ae){(Ct!==ee||Yt!==Xe||se!==Ae)&&(r.stencilOp(ee,Xe,Ae),Ct=ee,Yt=Xe,se=Ae)},setLocked:function(ee){O=ee},setClear:function(ee){an!==ee&&(r.clearStencil(ee),an=ee)},reset:function(){O=!1,mt=null,ot=null,J=null,at=null,Ct=null,Yt=null,se=null,an=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,v=!1,y=null,_=null,x=null,M=null,w=null,C=null,b=null,T=!1,P=null,F=null,Z=null,z=null,R=null;const U=r.getParameter(35661);let G=!1,j=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=j>=2);let I=null,D={};const Y=r.getParameter(3088),V=r.getParameter(2978),tt=new pe().fromArray(Y),nt=new pe().fromArray(V);function pt(O,mt,ot){const J=new Uint8Array(4),at=r.createTexture();r.bindTexture(O,at),r.texParameteri(O,10241,9728),r.texParameteri(O,10240,9728);for(let Ct=0;Ct<ot;Ct++)r.texImage2D(mt+Ct,0,6408,1,1,0,6408,5121,J);return at}const W={};W[3553]=pt(3553,3553,1),W[34067]=pt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),wt(2929),l.setFunc(Go),ut(!1),It(za),wt(2884),it(bn);function wt(O){f[O]!==!0&&(r.enable(O),f[O]=!0)}function xt(O){f[O]!==!1&&(r.disable(O),f[O]=!1)}function St(O,mt){return d[O]!==mt?(r.bindFramebuffer(O,mt),d[O]=mt,n&&(O===36009&&(d[36160]=mt),O===36160&&(d[36009]=mt)),!0):!1}function ht(O,mt){let ot=m,J=!1;if(O)if(ot=g.get(mt),ot===void 0&&(ot=[],g.set(mt,ot)),O.isWebGLMultipleRenderTargets){const at=O.texture;if(ot.length!==at.length||ot[0]!==36064){for(let Ct=0,Yt=at.length;Ct<Yt;Ct++)ot[Ct]=36064+Ct;ot.length=at.length,J=!0}}else ot[0]!==36064&&(ot[0]=36064,J=!0);else ot[0]!==1029&&(ot[0]=1029,J=!0);J&&(e.isWebGL2?r.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Bt(O){return p!==O?(r.useProgram(O),p=O,!0):!1}const Q={[bi]:32774,[Yu]:32778,[Ju]:32779};if(n)Q[ka]=32775,Q[Ga]=32776;else{const O=t.get("EXT_blend_minmax");O!==null&&(Q[ka]=O.MIN_EXT,Q[Ga]=O.MAX_EXT)}const q={[Qu]:0,[Ku]:1,[tf]:768,[kc]:770,[af]:776,[sf]:774,[nf]:772,[ef]:769,[Gc]:771,[of]:775,[rf]:773};function it(O,mt,ot,J,at,Ct,Yt,se){if(O===bn){v===!0&&(xt(3042),v=!1);return}if(v===!1&&(wt(3042),v=!0),O!==qu){if(O!==y||se!==T){if((_!==bi||w!==bi)&&(r.blendEquation(32774),_=bi,w=bi),se)switch(O){case Ci:r.blendFuncSeparate(1,771,1,771);break;case Na:r.blendFunc(1,1);break;case Ba:r.blendFuncSeparate(0,769,0,1);break;case Ua:r.blendFuncSeparate(0,768,0,770);break;default:break}else switch(O){case Ci:r.blendFuncSeparate(770,771,1,771);break;case Na:r.blendFunc(770,1);break;case Ba:r.blendFuncSeparate(0,769,0,1);break;case Ua:r.blendFunc(0,768);break;default:break}x=null,M=null,C=null,b=null,y=O,T=se}return}at=at||mt,Ct=Ct||ot,Yt=Yt||J,(mt!==_||at!==w)&&(r.blendEquationSeparate(Q[mt],Q[at]),_=mt,w=at),(ot!==x||J!==M||Ct!==C||Yt!==b)&&(r.blendFuncSeparate(q[ot],q[J],q[Ct],q[Yt]),x=ot,M=J,C=Ct,b=Yt),y=O,T=null}function gt(O,mt){O.side===xn?xt(2884):wt(2884);let ot=O.side===Re;mt&&(ot=!ot),ut(ot),O.blending===Ci&&O.transparent===!1?it(bn):it(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const J=O.stencilWrite;c.setTest(J),J&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Mt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?wt(32926):xt(32926)}function ut(O){P!==O&&(O?r.frontFace(2304):r.frontFace(2305),P=O)}function It(O){O!==Xu?(wt(2884),O!==F&&(O===za?r.cullFace(1029):O===Zu?r.cullFace(1028):r.cullFace(1032))):xt(2884),F=O}function Tt(O){O!==Z&&(G&&r.lineWidth(O),Z=O)}function Mt(O,mt,ot){O?(wt(32823),(z!==mt||R!==ot)&&(r.polygonOffset(mt,ot),z=mt,R=ot)):xt(32823)}function qt(O){O?wt(3089):xt(3089)}function jt(O){O===void 0&&(O=33984+U-1),I!==O&&(r.activeTexture(O),I=O)}function E(O,mt,ot){ot===void 0&&(I===null?ot=33984+U-1:ot=I);let J=D[ot];J===void 0&&(J={type:void 0,texture:void 0},D[ot]=J),(J.type!==O||J.texture!==mt)&&(I!==ot&&(r.activeTexture(ot),I=ot),r.bindTexture(O,mt||W[O]),J.type=O,J.texture=mt)}function S(){const O=D[I];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{r.compressedTexImage2D.apply(r,arguments)}catch{}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch{}}function st(){try{r.texSubImage3D.apply(r,arguments)}catch{}}function ft(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch{}}function Lt(){try{r.texStorage2D.apply(r,arguments)}catch{}}function dt(){try{r.texStorage3D.apply(r,arguments)}catch{}}function K(){try{r.texImage2D.apply(r,arguments)}catch{}}function yt(){try{r.texImage3D.apply(r,arguments)}catch{}}function Pt(O){tt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function vt(O){nt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function Et(O,mt){let ot=u.get(mt);ot===void 0&&(ot=new WeakMap,u.set(mt,ot));let J=ot.get(O);J===void 0&&(J=r.getUniformBlockIndex(mt,O.name),ot.set(O,J))}function Ft(O,mt){const J=u.get(mt).get(O);h.get(O)!==J&&(r.uniformBlockBinding(mt,J,O.__bindingPointIndex),h.set(O,J))}function Wt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},I=null,D={},d={},g=new WeakMap,m=[],p=null,v=!1,y=null,_=null,x=null,M=null,w=null,C=null,b=null,T=!1,P=null,F=null,Z=null,z=null,R=null,tt.set(0,0,r.canvas.width,r.canvas.height),nt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:wt,disable:xt,bindFramebuffer:St,drawBuffers:ht,useProgram:Bt,setBlending:it,setMaterial:gt,setFlipSided:ut,setCullFace:It,setLineWidth:Tt,setPolygonOffset:Mt,setScissorTest:qt,activeTexture:jt,bindTexture:E,unbindTexture:S,compressedTexImage2D:H,texImage2D:K,texImage3D:yt,updateUBOMapping:Et,uniformBlockBinding:Ft,texStorage2D:Lt,texStorage3D:dt,texSubImage2D:et,texSubImage3D:st,compressedTexSubImage2D:ft,scissor:Pt,viewport:vt,reset:Wt}}function L0(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,S){return v?new OffscreenCanvas(E,S):sr("canvas")}function _(E,S,H,et){let st=1;if((E.width>et||E.height>et)&&(st=et/Math.max(E.width,E.height)),st<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ft=S?$o:Math.floor,Lt=ft(st*E.width),dt=ft(st*E.height);m===void 0&&(m=y(Lt,dt));const K=H?y(Lt,dt):m;return K.width=Lt,K.height=dt,K.getContext("2d").drawImage(E,0,0,Lt,dt),K}else return"data"in E,E;return E}function x(E){return dl(E.width)&&dl(E.height)}function M(E){return a?!1:E.wrapS!==Ne||E.wrapT!==Ne||E.minFilter!==be&&E.minFilter!==Ce}function w(E,S){return E.generateMipmaps&&S&&E.minFilter!==be&&E.minFilter!==Ce}function C(E){r.generateMipmap(E)}function b(E,S,H,et,st=!1){if(a===!1)return S;if(E!==null&&r[E]!==void 0)return r[E];let ft=S;return S===6403&&(H===5126&&(ft=33326),H===5131&&(ft=33325),H===5121&&(ft=33321)),S===33319&&(H===5126&&(ft=33328),H===5131&&(ft=33327),H===5121&&(ft=33323)),S===6408&&(H===5126&&(ft=34836),H===5131&&(ft=34842),H===5121&&(ft=et===ie&&st===!1?35907:32856),H===32819&&(ft=32854),H===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function T(E,S,H){return w(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==be&&E.minFilter!==Ce?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function P(E){return E===be||E===Va||E===Ha?9728:9729}function F(E){const S=E.target;S.removeEventListener("dispose",F),z(S),S.isVideoTexture&&g.delete(S)}function Z(E){const S=E.target;S.removeEventListener("dispose",Z),U(S)}function z(E){const S=n.get(E);if(S.__webglInit===void 0)return;const H=E.source,et=p.get(H);if(et){const st=et[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(E),Object.keys(et).length===0&&p.delete(H)}n.remove(E)}function R(E){const S=n.get(E);r.deleteTexture(S.__webglTexture);const H=E.source,et=p.get(H);delete et[S.__cacheKey],o.memory.textures--}function U(E){const S=E.texture,H=n.get(E),et=n.get(S);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)r.deleteFramebuffer(H.__webglFramebuffer[st]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[st]);else{if(r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let st=0;st<H.__webglColorRenderbuffer.length;st++)H.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(H.__webglColorRenderbuffer[st]);H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let st=0,ft=S.length;st<ft;st++){const Lt=n.get(S[st]);Lt.__webglTexture&&(r.deleteTexture(Lt.__webglTexture),o.memory.textures--),n.remove(S[st])}n.remove(S),n.remove(E)}let G=0;function j(){G=0}function k(){const E=G;return E>=l,G+=1,E}function I(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function D(E,S){const H=n.get(E);if(E.isVideoTexture&&qt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){const et=E.image;if(et!==null){if(et.complete!==!1){xt(H,E,S);return}}}e.bindTexture(3553,H.__webglTexture,33984+S)}function Y(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){xt(H,E,S);return}e.bindTexture(35866,H.__webglTexture,33984+S)}function V(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){xt(H,E,S);return}e.bindTexture(32879,H.__webglTexture,33984+S)}function tt(E,S){const H=n.get(E);if(E.version>0&&H.__version!==E.version){St(H,E,S);return}e.bindTexture(34067,H.__webglTexture,33984+S)}const nt={[Wo]:10497,[Ne]:33071,[jo]:33648},pt={[be]:9728,[Va]:9984,[Ha]:9986,[Ce]:9729,[Mf]:9985,[Ss]:9987};function W(E,S,H){if(H?(r.texParameteri(E,10242,nt[S.wrapS]),r.texParameteri(E,10243,nt[S.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,nt[S.wrapR]),r.texParameteri(E,10240,pt[S.magFilter]),r.texParameteri(E,10241,pt[S.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),S.wrapS!==Ne||S.wrapT,r.texParameteri(E,10240,P(S.magFilter)),r.texParameteri(E,10241,P(S.minFilter)),S.minFilter!==be&&S.minFilter),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(S.type===Gn&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===rr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(E,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function wt(E,S){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",F));const et=S.source;let st=p.get(et);st===void 0&&(st={},p.set(et,st));const ft=I(S);if(ft!==E.__cacheKey){st[ft]===void 0&&(st[ft]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),st[ft].usedTimes++;const Lt=st[E.__cacheKey];Lt!==void 0&&(st[E.__cacheKey].usedTimes--,Lt.usedTimes===0&&R(S)),E.__cacheKey=ft,E.__webglTexture=st[ft].texture}return H}function xt(E,S,H){let et=3553;S.isDataArrayTexture&&(et=35866),S.isData3DTexture&&(et=32879);const st=wt(E,S),ft=S.source;e.bindTexture(et,E.__webglTexture,33984+H);const Lt=n.get(ft);if(ft.version!==Lt.__version||st===!0){e.activeTexture(33984+H),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const dt=M(S)&&x(S.image)===!1;let K=_(S.image,dt,!1,h);K=jt(S,K);const yt=x(K)||a,Pt=s.convert(S.format,S.encoding);let vt=s.convert(S.type),Et=b(S.internalFormat,Pt,vt,S.encoding,S.isVideoTexture);W(et,S,yt);let Ft;const Wt=S.mipmaps,O=a&&S.isVideoTexture!==!0,mt=Lt.__version===void 0||st===!0,ot=T(S,K,yt);if(S.isDepthTexture)Et=6402,a?S.type===Gn?Et=36012:S.type===kn?Et=33190:S.type===Li?Et=35056:Et=33189:S.type,S.format===Wn&&Et===6402&&S.type!==Hc&&S.type!==kn&&(S.type=kn,vt=s.convert(S.type)),S.format===Fi&&Et===6402&&(Et=34041,S.type!==Li&&(S.type=Li,vt=s.convert(S.type))),mt&&(O?e.texStorage2D(3553,1,Et,K.width,K.height):e.texImage2D(3553,0,Et,K.width,K.height,0,Pt,vt,null));else if(S.isDataTexture)if(Wt.length>0&&yt){O&&mt&&e.texStorage2D(3553,ot,Et,Wt[0].width,Wt[0].height);for(let J=0,at=Wt.length;J<at;J++)Ft=Wt[J],O?e.texSubImage2D(3553,J,0,0,Ft.width,Ft.height,Pt,vt,Ft.data):e.texImage2D(3553,J,Et,Ft.width,Ft.height,0,Pt,vt,Ft.data);S.generateMipmaps=!1}else O?(mt&&e.texStorage2D(3553,ot,Et,K.width,K.height),e.texSubImage2D(3553,0,0,0,K.width,K.height,Pt,vt,K.data)):e.texImage2D(3553,0,Et,K.width,K.height,0,Pt,vt,K.data);else if(S.isCompressedTexture){O&&mt&&e.texStorage2D(3553,ot,Et,Wt[0].width,Wt[0].height);for(let J=0,at=Wt.length;J<at;J++)Ft=Wt[J],S.format!==Ve?Pt!==null&&(O?e.compressedTexSubImage2D(3553,J,0,0,Ft.width,Ft.height,Pt,Ft.data):e.compressedTexImage2D(3553,J,Et,Ft.width,Ft.height,0,Ft.data)):O?e.texSubImage2D(3553,J,0,0,Ft.width,Ft.height,Pt,vt,Ft.data):e.texImage2D(3553,J,Et,Ft.width,Ft.height,0,Pt,vt,Ft.data)}else if(S.isDataArrayTexture)O?(mt&&e.texStorage3D(35866,ot,Et,K.width,K.height,K.depth),e.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,Pt,vt,K.data)):e.texImage3D(35866,0,Et,K.width,K.height,K.depth,0,Pt,vt,K.data);else if(S.isData3DTexture)O?(mt&&e.texStorage3D(32879,ot,Et,K.width,K.height,K.depth),e.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,Pt,vt,K.data)):e.texImage3D(32879,0,Et,K.width,K.height,K.depth,0,Pt,vt,K.data);else if(S.isFramebufferTexture){if(mt)if(O)e.texStorage2D(3553,ot,Et,K.width,K.height);else{let J=K.width,at=K.height;for(let Ct=0;Ct<ot;Ct++)e.texImage2D(3553,Ct,Et,J,at,0,Pt,vt,null),J>>=1,at>>=1}}else if(Wt.length>0&&yt){O&&mt&&e.texStorage2D(3553,ot,Et,Wt[0].width,Wt[0].height);for(let J=0,at=Wt.length;J<at;J++)Ft=Wt[J],O?e.texSubImage2D(3553,J,0,0,Pt,vt,Ft):e.texImage2D(3553,J,Et,Pt,vt,Ft);S.generateMipmaps=!1}else O?(mt&&e.texStorage2D(3553,ot,Et,K.width,K.height),e.texSubImage2D(3553,0,0,0,Pt,vt,K)):e.texImage2D(3553,0,Et,Pt,vt,K);w(S,yt)&&C(et),Lt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function St(E,S,H){if(S.image.length!==6)return;const et=wt(E,S),st=S.source;e.bindTexture(34067,E.__webglTexture,33984+H);const ft=n.get(st);if(st.version!==ft.__version||et===!0){e.activeTexture(33984+H),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const Lt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,K=[];for(let J=0;J<6;J++)!Lt&&!dt?K[J]=_(S.image[J],!1,!0,c):K[J]=dt?S.image[J].image:S.image[J],K[J]=jt(S,K[J]);const yt=K[0],Pt=x(yt)||a,vt=s.convert(S.format,S.encoding),Et=s.convert(S.type),Ft=b(S.internalFormat,vt,Et,S.encoding),Wt=a&&S.isVideoTexture!==!0,O=ft.__version===void 0||et===!0;let mt=T(S,yt,Pt);W(34067,S,Pt);let ot;if(Lt){Wt&&O&&e.texStorage2D(34067,mt,Ft,yt.width,yt.height);for(let J=0;J<6;J++){ot=K[J].mipmaps;for(let at=0;at<ot.length;at++){const Ct=ot[at];S.format!==Ve?vt!==null&&(Wt?e.compressedTexSubImage2D(34069+J,at,0,0,Ct.width,Ct.height,vt,Ct.data):e.compressedTexImage2D(34069+J,at,Ft,Ct.width,Ct.height,0,Ct.data)):Wt?e.texSubImage2D(34069+J,at,0,0,Ct.width,Ct.height,vt,Et,Ct.data):e.texImage2D(34069+J,at,Ft,Ct.width,Ct.height,0,vt,Et,Ct.data)}}}else{ot=S.mipmaps,Wt&&O&&(ot.length>0&&mt++,e.texStorage2D(34067,mt,Ft,K[0].width,K[0].height));for(let J=0;J<6;J++)if(dt){Wt?e.texSubImage2D(34069+J,0,0,0,K[J].width,K[J].height,vt,Et,K[J].data):e.texImage2D(34069+J,0,Ft,K[J].width,K[J].height,0,vt,Et,K[J].data);for(let at=0;at<ot.length;at++){const Yt=ot[at].image[J].image;Wt?e.texSubImage2D(34069+J,at+1,0,0,Yt.width,Yt.height,vt,Et,Yt.data):e.texImage2D(34069+J,at+1,Ft,Yt.width,Yt.height,0,vt,Et,Yt.data)}}else{Wt?e.texSubImage2D(34069+J,0,0,0,vt,Et,K[J]):e.texImage2D(34069+J,0,Ft,vt,Et,K[J]);for(let at=0;at<ot.length;at++){const Ct=ot[at];Wt?e.texSubImage2D(34069+J,at+1,0,0,vt,Et,Ct.image[J]):e.texImage2D(34069+J,at+1,Ft,vt,Et,Ct.image[J])}}}w(S,Pt)&&C(34067),ft.__version=st.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ht(E,S,H,et,st){const ft=s.convert(H.format,H.encoding),Lt=s.convert(H.type),dt=b(H.internalFormat,ft,Lt,H.encoding);n.get(S).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,dt,S.width,S.height,S.depth,0,ft,Lt,null):e.texImage2D(st,0,dt,S.width,S.height,0,ft,Lt,null)),e.bindFramebuffer(36160,E),Mt(S)?f.framebufferTexture2DMultisampleEXT(36160,et,st,n.get(H).__webglTexture,0,Tt(S)):r.framebufferTexture2D(36160,et,st,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function Bt(E,S,H){if(r.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let et=33189;if(H||Mt(S)){const st=S.depthTexture;st&&st.isDepthTexture&&(st.type===Gn?et=36012:st.type===kn&&(et=33190));const ft=Tt(S);Mt(S)?f.renderbufferStorageMultisampleEXT(36161,ft,et,S.width,S.height):r.renderbufferStorageMultisample(36161,ft,et,S.width,S.height)}else r.renderbufferStorage(36161,et,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){const et=Tt(S);H&&Mt(S)===!1?r.renderbufferStorageMultisample(36161,et,35056,S.width,S.height):Mt(S)?f.renderbufferStorageMultisampleEXT(36161,et,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const et=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0;st<et.length;st++){const ft=et[st],Lt=s.convert(ft.format,ft.encoding),dt=s.convert(ft.type),K=b(ft.internalFormat,Lt,dt,ft.encoding),yt=Tt(S);H&&Mt(S)===!1?r.renderbufferStorageMultisample(36161,yt,K,S.width,S.height):Mt(S)?f.renderbufferStorageMultisampleEXT(36161,yt,K,S.width,S.height):r.renderbufferStorage(36161,K,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function Q(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const et=n.get(S.depthTexture).__webglTexture,st=Tt(S);if(S.depthTexture.format===Wn)Mt(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,st):r.framebufferTexture2D(36160,36096,3553,et,0);else if(S.depthTexture.format===Fi)Mt(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,st):r.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function q(E){const S=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Q(S.__webglFramebuffer,E)}else if(H){S.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,S.__webglFramebuffer[et]),S.__webglDepthbuffer[et]=r.createRenderbuffer(),Bt(S.__webglDepthbuffer[et],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Bt(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function it(E,S,H){const et=n.get(E);S!==void 0&&ht(et.__webglFramebuffer,E,E.texture,36064,3553),H!==void 0&&q(E)}function gt(E){const S=E.texture,H=n.get(E),et=n.get(S);E.addEventListener("dispose",Z),E.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=S.version,o.memory.textures++);const st=E.isWebGLCubeRenderTarget===!0,ft=E.isWebGLMultipleRenderTargets===!0,Lt=x(E)||a;if(st){H.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)H.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(H.__webglFramebuffer=r.createFramebuffer(),ft&&i.drawBuffers){const dt=E.texture;for(let K=0,yt=dt.length;K<yt;K++){const Pt=n.get(dt[K]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=r.createTexture(),o.memory.textures++)}}if(a&&E.samples>0&&Mt(E)===!1){const dt=ft?S:[S];H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let K=0;K<dt.length;K++){const yt=dt[K];H.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer[K]);const Pt=s.convert(yt.format,yt.encoding),vt=s.convert(yt.type),Et=b(yt.internalFormat,Pt,vt,yt.encoding,E.isXRRenderTarget===!0),Ft=Tt(E);r.renderbufferStorageMultisample(36161,Ft,Et,E.width,E.height),r.framebufferRenderbuffer(36160,36064+K,36161,H.__webglColorRenderbuffer[K])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Bt(H.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,et.__webglTexture),W(34067,S,Lt);for(let dt=0;dt<6;dt++)ht(H.__webglFramebuffer[dt],E,S,36064,34069+dt);w(S,Lt)&&C(34067),e.unbindTexture()}else if(ft){const dt=E.texture;for(let K=0,yt=dt.length;K<yt;K++){const Pt=dt[K],vt=n.get(Pt);e.bindTexture(3553,vt.__webglTexture),W(3553,Pt,Lt),ht(H.__webglFramebuffer,E,Pt,36064+K,3553),w(Pt,Lt)&&C(3553)}e.unbindTexture()}else{let dt=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&a&&(dt=E.isWebGL3DRenderTarget?32879:35866),e.bindTexture(dt,et.__webglTexture),W(dt,S,Lt),ht(H.__webglFramebuffer,E,S,36064,dt),w(S,Lt)&&C(dt),e.unbindTexture()}E.depthBuffer&&q(E)}function ut(E){const S=x(E)||a,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let et=0,st=H.length;et<st;et++){const ft=H[et];if(w(ft,S)){const Lt=E.isWebGLCubeRenderTarget?34067:3553,dt=n.get(ft).__webglTexture;e.bindTexture(Lt,dt),C(Lt),e.unbindTexture()}}}function It(E){if(a&&E.samples>0&&Mt(E)===!1){const S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,et=E.height;let st=16384;const ft=[],Lt=E.stencilBuffer?33306:36096,dt=n.get(E),K=E.isWebGLMultipleRenderTargets===!0;if(K)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(36160,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+yt,36161,null),e.bindFramebuffer(36160,dt.__webglFramebuffer),r.framebufferTexture2D(36009,36064+yt,3553,null,0);e.bindFramebuffer(36008,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,dt.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){ft.push(36064+yt),E.depthBuffer&&ft.push(Lt);const Pt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Pt===!1&&(E.depthBuffer&&(st|=256),E.stencilBuffer&&(st|=1024)),K&&r.framebufferRenderbuffer(36008,36064,36161,dt.__webglColorRenderbuffer[yt]),Pt===!0&&(r.invalidateFramebuffer(36008,[Lt]),r.invalidateFramebuffer(36009,[Lt])),K){const vt=n.get(S[yt]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,vt,0)}r.blitFramebuffer(0,0,H,et,0,0,H,et,st,9728),d&&r.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),K)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(36160,dt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+yt,36161,dt.__webglColorRenderbuffer[yt]);const Pt=n.get(S[yt]).__webglTexture;e.bindFramebuffer(36160,dt.__webglFramebuffer),r.framebufferTexture2D(36009,36064+yt,3553,Pt,0)}e.bindFramebuffer(36009,dt.__webglMultisampledFramebuffer)}}function Tt(E){return Math.min(u,E.samples)}function Mt(E){const S=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function qt(E){const S=o.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function jt(E,S){const H=E.encoding,et=E.format,st=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Zo||H!==Zn&&H===ie&&a===!1&&(t.has("EXT_sRGB")===!0&&et===Ve?(E.format=Zo,E.minFilter=Ce,E.generateMipmaps=!1):S=Zc.sRGBToLinear(S)),S}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=tt,this.rebindTextures=it,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Mt}function P0(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===Xn)return 5121;if(s===Tf)return 32819;if(s===Ef)return 32820;if(s===wf)return 5120;if(s===Sf)return 5122;if(s===Hc)return 5123;if(s===Af)return 5124;if(s===kn)return 5125;if(s===Gn)return 5126;if(s===rr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Cf)return 6406;if(s===Ve)return 6408;if(s===Pf)return 6409;if(s===Rf)return 6410;if(s===Wn)return 6402;if(s===Fi)return 34041;if(s===Df)return 6403;if(s===Lf)return 6408;if(s===Zo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===If)return 36244;if(s===Of)return 33319;if(s===Ff)return 33320;if(s===zf)return 36249;if(s===Vs||s===Hs||s===Ws||s===js)if(o===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===js)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wa||s===ja||s===Xa||s===Za)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$a||s===qa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$a)return o===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qa)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ya||s===Ja||s===Qa||s===Ka||s===tl||s===el||s===nl||s===il||s===rl||s===sl||s===ol||s===al||s===ll||s===cl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ya)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ja)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qa)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ka)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tl)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===el)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nl)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===il)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rl)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sl)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ol)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===al)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ll)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cl)return o===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===hl)return o===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Li?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class R0 extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Si extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D0={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const y=new Si;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class I0 extends De{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:Wn,h!==Wn&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wn&&(n=kn),n===void 0&&h===Fi&&(n=Li),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1}}class O0 extends Bi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,f=null,d=null;const g=e.getContextAttributes();let m=null,p=null;const v=[],y=[],_=new Le;_.layers.enable(1),_.viewport=new pe;const x=new Le;x.layers.enable(2),x.viewport=new pe;const M=[_,x],w=new R0;w.layers.enable(1),w.layers.enable(2);let C=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let D=v[I];return D===void 0&&(D=new yo,v[I]=D),D.getTargetRaySpace()},this.getControllerGrip=function(I){let D=v[I];return D===void 0&&(D=new yo,v[I]=D),D.getGripSpace()},this.getHand=function(I){let D=v[I];return D===void 0&&(D=new yo,v[I]=D),D.getHandSpace()};function T(I){const D=y.indexOf(I.inputSource);if(D===-1)return;const Y=v[D];Y!==void 0&&Y.dispatchEvent({type:I.type,data:I.inputSource})}function P(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",F);for(let I=0;I<v.length;I++){const D=y[I];D!==null&&(y[I]=null,v[I].disconnect(D))}C=null,b=null,t.setRenderTarget(m),f=null,u=null,h=null,i=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting},this.setReferenceSpaceType=function(I){a=I,n.isPresenting},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",P),i.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,D),i.updateRenderState({baseLayer:f}),p=new sn(f.framebufferWidth,f.framebufferHeight,{format:Ve,type:Xn,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let D=null,Y=null,V=null;g.depth&&(V=g.stencil?35056:33190,D=g.stencil?Fi:Wn,Y=g.stencil?Li:kn);const tt={colorFormat:32856,depthFormat:V,scaleFactor:s};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(tt),i.updateRenderState({layers:[u]}),p=new sn(u.textureWidth,u.textureHeight,{format:Ve,type:Xn,depthTexture:new I0(u.textureWidth,u.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const nt=t.properties.get(p);nt.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(I){for(let D=0;D<I.removed.length;D++){const Y=I.removed[D],V=y.indexOf(Y);V>=0&&(y[V]=null,v[V].dispatchEvent({type:"disconnected",data:Y}))}for(let D=0;D<I.added.length;D++){const Y=I.added[D];let V=y.indexOf(Y);if(V===-1){for(let nt=0;nt<v.length;nt++)if(nt>=y.length){y.push(Y),V=nt;break}else if(y[nt]===null){y[nt]=Y,V=nt;break}if(V===-1)break}const tt=v[V];tt&&tt.dispatchEvent({type:"connected",data:Y})}}const Z=new L,z=new L;function R(I,D,Y){Z.setFromMatrixPosition(D.matrixWorld),z.setFromMatrixPosition(Y.matrixWorld);const V=Z.distanceTo(z),tt=D.projectionMatrix.elements,nt=Y.projectionMatrix.elements,pt=tt[14]/(tt[10]-1),W=tt[14]/(tt[10]+1),wt=(tt[9]+1)/tt[5],xt=(tt[9]-1)/tt[5],St=(tt[8]-1)/tt[0],ht=(nt[8]+1)/nt[0],Bt=pt*St,Q=pt*ht,q=V/(-St+ht),it=q*-St;D.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(it),I.translateZ(q),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const gt=pt+q,ut=W+q,It=Bt-it,Tt=Q+(V-it),Mt=wt*W/ut*gt,qt=xt*W/ut*gt;I.projectionMatrix.makePerspective(It,Tt,Mt,qt,gt,ut)}function U(I,D){D===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(D.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;w.near=x.near=_.near=I.near,w.far=x.far=_.far=I.far,(C!==w.near||b!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,b=w.far);const D=I.parent,Y=w.cameras;U(w,D);for(let tt=0;tt<Y.length;tt++)U(Y[tt],D);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),I.matrix.copy(w.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale);const V=I.children;for(let tt=0,nt=V.length;tt<nt;tt++)V[tt].updateMatrixWorld(!0);Y.length===2?R(w,_,x):w.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(I){u!==null&&(u.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)};let G=null;function j(I,D){if(c=D.getViewerPose(l||o),d=D,c!==null){const Y=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let V=!1;Y.length!==w.cameras.length&&(w.cameras.length=0,V=!0);for(let tt=0;tt<Y.length;tt++){const nt=Y[tt];let pt=null;if(f!==null)pt=f.getViewport(nt);else{const wt=h.getViewSubImage(u,nt);pt=wt.viewport,tt===0&&(t.setRenderTargetTextures(p,wt.colorTexture,u.ignoreDepthValues?void 0:wt.depthStencilTexture),t.setRenderTarget(p))}let W=M[tt];W===void 0&&(W=new Le,W.layers.enable(tt),W.viewport=new pe,M[tt]=W),W.matrix.fromArray(nt.transform.matrix),W.projectionMatrix.fromArray(nt.projectionMatrix),W.viewport.set(pt.x,pt.y,pt.width,pt.height),tt===0&&w.matrix.copy(W.matrix),V===!0&&w.cameras.push(W)}}for(let Y=0;Y<v.length;Y++){const V=y[Y],tt=v[Y];V!==null&&tt!==void 0&&tt.update(V,D,l||o)}G&&G(I,D),d=null}const k=new Kc;k.setAnimationLoop(j),this.setAnimationLoop=function(I){G=I},this.dispose=function(){}}}function F0(r,t){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Re&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function z0(r,t,e,n){let i={},s={},o=[];const a=e.isWebGL2?r.getParameter(35375):0;function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",p));const M=_.program;n.updateUBOMapping(y,M);const w=t.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function h(y){const _=u();y.__bindingPointIndex=_;const x=r.createBuffer(),M=y.__size,w=y.usage;return r.bindBuffer(35345,x),r.bufferData(35345,M,w),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return 0}function f(y){const _=i[y.id],x=y.uniforms,M=y.__cache;r.bindBuffer(35345,_);for(let w=0,C=x.length;w<C;w++){const b=x[w];if(d(b,w,M)===!0){const T=b.value,P=b.__offset;typeof T=="number"?(b.__data[0]=T,r.bufferSubData(35345,P,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):T.toArray(b.__data),r.bufferSubData(35345,P,b.__data))}}r.bindBuffer(35345,null)}function d(y,_,x){const M=y.value;if(x[_]===void 0)return typeof M=="number"?x[_]=M:x[_]=M.clone(),!0;if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const w=x[_];if(w.equals(M)===!1)return w.copy(M),!0}return!1}function g(y){const _=y.uniforms;let x=0;const M=16;let w=0;for(let C=0,b=_.length;C<b;C++){const T=_[C],P=m(T);if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,C>0){w=x%M;const F=M-w;w!==0&&F-P.boundary<0&&(x+=M-w,T.__offset=x)}x+=P.storage}return w=x%M,w>0&&(x+=M-w),y.__size=x,y.__cache={},this}function m(y){const _=y.value,x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture,x}function p(y){const _=y.target;_.removeEventListener("dispose",p);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}function N0(){const r=sr("canvas");return r.style.display="block",r}function sh(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:N0(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,f=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zn,this.physicallyCorrectLights=!1,this.toneMapping=nn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return 2},set:function(){}}});const m=this;let p=!1,v=0,y=0,_=null,x=-1,M=null;const w=new pe,C=new pe;let b=null,T=t.width,P=t.height,F=1,Z=null,z=null;const R=new pe(0,0,T,P),U=new pe(0,0,T,P);let G=!1;const j=new ga;let k=!1,I=!1,D=null;const Y=new Jt,V=new ct,tt=new L,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return _===null?F:1}let W=e;function wt(A,B){for(let X=0;X<A.length;X++){const N=A[X],$=t.getContext(N,B);if($!==null)return $}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vr}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",Ft,!1),t.addEventListener("webglcontextcreationerror",Wt,!1),W===null){const B=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&B.shift(),W=wt(B,A),W===null)throw wt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw A}let xt,St,ht,Bt,Q,q,it,gt,ut,It,Tt,Mt,qt,jt,E,S,H,et,st,ft,Lt,dt,K,yt;function Pt(){xt=new $m(W),St=new Vm(W,xt,r),xt.init(St),dt=new P0(W,xt,St),ht=new C0(W,xt,St),Bt=new Jm,Q=new p0,q=new L0(W,xt,ht,Q,St,dt,Bt),it=new Wm(m),gt=new Zm(m),ut=new ld(W,St),K=new km(W,xt,ut,St),It=new qm(W,ut,Bt,K),Tt=new eg(W,It,ut,Bt),st=new tg(W,St,q),S=new Hm(Q),Mt=new d0(m,it,gt,xt,St,K,S),qt=new F0(m,Q),jt=new g0,E=new M0(xt,St),et=new Um(m,it,ht,Tt,h,o),H=new E0(m,Tt,St),yt=new z0(W,Bt,St,ht),ft=new Gm(W,xt,Bt,St),Lt=new Ym(W,xt,Bt,St),Bt.programs=Mt.programs,m.capabilities=St,m.extensions=xt,m.properties=Q,m.renderLists=jt,m.shadowMap=H,m.state=ht,m.info=Bt}Pt();const vt=new O0(m,W);this.xr=vt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(T,P,!1))},this.getSize=function(A){return A.set(T,P)},this.setSize=function(A,B,X){vt.isPresenting||(T=A,P=B,t.width=Math.floor(A*F),t.height=Math.floor(B*F),X!==!1&&(t.style.width=A+"px",t.style.height=B+"px"),this.setViewport(0,0,A,B))},this.getDrawingBufferSize=function(A){return A.set(T*F,P*F).floor()},this.setDrawingBufferSize=function(A,B,X){T=A,P=B,F=X,t.width=Math.floor(A*X),t.height=Math.floor(B*X),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,B,X,N){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,B,X,N),ht.viewport(w.copy(R).multiplyScalar(F).floor())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,B,X,N){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,B,X,N),ht.scissor(C.copy(U).multiplyScalar(F).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(A){ht.setScissorTest(G=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(A=!0,B=!0,X=!0){let N=0;A&&(N|=16384),B&&(N|=256),X&&(N|=1024),W.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",Ft,!1),t.removeEventListener("webglcontextcreationerror",Wt,!1),jt.dispose(),E.dispose(),Q.dispose(),it.dispose(),gt.dispose(),Tt.dispose(),K.dispose(),yt.dispose(),Mt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Ct),vt.removeEventListener("sessionend",Yt),D&&(D.dispose(),D=null),se.stop()};function Et(A){A.preventDefault(),p=!0}function Ft(){p=!1;const A=Bt.autoReset,B=H.enabled,X=H.autoUpdate,N=H.needsUpdate,$=H.type;Pt(),Bt.autoReset=A,H.enabled=B,H.autoUpdate=X,H.needsUpdate=N,H.type=$}function Wt(A){}function O(A){const B=A.target;B.removeEventListener("dispose",O),mt(B)}function mt(A){ot(A),Q.remove(A)}function ot(A){const B=Q.get(A).programs;B!==void 0&&(B.forEach(function(X){Mt.releaseProgram(X)}),A.isShaderMaterial&&Mt.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,X,N,$,bt){B===null&&(B=nt);const Rt=$.isMesh&&$.matrixWorld.determinant()<0,zt=gu(A,B,X,N,$);ht.setMaterial(N,Rt);let Dt=X.index;const Ht=X.attributes.position;if(Dt===null){if(Ht===void 0||Ht.count===0)return}else if(Dt.count===0)return;let Ut=1;N.wireframe===!0&&(Dt=It.getWireframeAttribute(X),Ut=2),K.setup($,N,zt,X,Dt);let kt,ne=ft;Dt!==null&&(kt=ut.get(Dt),ne=Lt,ne.setIndex(kt));const Ln=Dt!==null?Dt.count:Ht.count,ii=X.drawRange.start*Ut,ri=X.drawRange.count*Ut,ke=bt!==null?bt.start*Ut:0,Gt=bt!==null?bt.count*Ut:1/0,si=Math.max(ii,ke),ae=Math.min(Ln,ii+ri,ke+Gt)-1,Te=Math.max(0,ae-si+1);if(Te!==0){if($.isMesh)N.wireframe===!0?(ht.setLineWidth(N.wireframeLinewidth*pt()),ne.setMode(1)):ne.setMode(4);else if($.isLine){let ln=N.linewidth;ln===void 0&&(ln=1),ht.setLineWidth(ln*pt()),$.isLineSegments?ne.setMode(1):$.isLineLoop?ne.setMode(2):ne.setMode(3)}else $.isPoints?ne.setMode(0):$.isSprite&&ne.setMode(4);if($.isInstancedMesh)ne.renderInstances(si,Te,$.count);else if(X.isInstancedBufferGeometry){const ln=Math.min(X.instanceCount,X._maxInstanceCount);ne.renderInstances(si,Te,ln)}else ne.render(si,Te)}},this.compile=function(A,B){function X(N,$,bt){N.transparent===!0&&N.side===xn?(N.side=Re,N.needsUpdate=!0,Tr(N,$,bt),N.side=Di,N.needsUpdate=!0,Tr(N,$,bt),N.side=xn):Tr(N,$,bt)}f=E.get(A),f.init(),g.push(f),A.traverseVisible(function(N){N.isLight&&N.layers.test(B.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(m.physicallyCorrectLights),A.traverse(function(N){const $=N.material;if($)if(Array.isArray($))for(let bt=0;bt<$.length;bt++){const Rt=$[bt];X(Rt,A,N)}else X($,A,N)}),g.pop(),f=null};let J=null;function at(A){J&&J(A)}function Ct(){se.stop()}function Yt(){se.start()}const se=new Kc;se.setAnimationLoop(at),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(A){J=A,vt.setAnimationLoop(A),A===null?se.stop():se.start()},vt.addEventListener("sessionstart",Ct),vt.addEventListener("sessionend",Yt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0||p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(B),B=vt.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,B,_),f=E.get(A,g.length),f.init(),g.push(f),Y.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Y),I=this.localClippingEnabled,k=S.init(this.clippingPlanes,I,B),u=jt.get(A,d.length),u.init(),d.push(u),an(A,B,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(Z,z),k===!0&&S.beginShadows();const X=f.state.shadowsArray;if(H.render(X,A,B),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(u,A),f.setupLights(m.physicallyCorrectLights),B.isArrayCamera){const N=B.cameras;for(let $=0,bt=N.length;$<bt;$++){const Rt=N[$];ee(u,A,Rt,Rt.viewport)}}else ee(u,A,B);_!==null&&(q.updateMultisampleRenderTarget(_),q.updateRenderTargetMipmap(_)),A.isScene===!0&&A.onAfterRender(m,A,B),K.resetDefaultState(),x=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function an(A,B,X,N){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){N&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Y);const Rt=Tt.update(A),zt=A.material;zt.visible&&u.push(A,Rt,zt,X,tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Bt.render.frame&&(A.skeleton.update(),A.skeleton.frame=Bt.render.frame),!A.frustumCulled||j.intersectsObject(A))){N&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Y);const Rt=Tt.update(A),zt=A.material;if(Array.isArray(zt)){const Dt=Rt.groups;for(let Ht=0,Ut=Dt.length;Ht<Ut;Ht++){const kt=Dt[Ht],ne=zt[kt.materialIndex];ne&&ne.visible&&u.push(A,Rt,ne,X,tt.z,kt)}}else zt.visible&&u.push(A,Rt,zt,X,tt.z,null)}}const bt=A.children;for(let Rt=0,zt=bt.length;Rt<zt;Rt++)an(bt[Rt],B,X,N)}function ee(A,B,X,N){const $=A.opaque,bt=A.transmissive,Rt=A.transparent;f.setupLightsView(X),bt.length>0&&Xe($,B,X),N&&ht.viewport(w.copy(N)),$.length>0&&Ae($,B,X),bt.length>0&&Ae(bt,B,X),Rt.length>0&&Ae(Rt,B,X),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Xe(A,B,X){const N=St.isWebGL2;D===null&&(D=new sn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?rr:Xn,minFilter:Ss,samples:N&&s===!0?4:0})),m.getDrawingBufferSize(V),N?D.setSize(V.x,V.y):D.setSize($o(V.x),$o(V.y));const $=m.getRenderTarget();m.setRenderTarget(D),m.clear();const bt=m.toneMapping;m.toneMapping=nn,Ae(A,B,X),m.toneMapping=bt,q.updateMultisampleRenderTarget(D),q.updateRenderTargetMipmap(D),m.setRenderTarget($)}function Ae(A,B,X){const N=B.isScene===!0?B.overrideMaterial:null;for(let $=0,bt=A.length;$<bt;$++){const Rt=A[$],zt=Rt.object,Dt=Rt.geometry,Ht=N===null?Rt.material:N,Ut=Rt.group;zt.layers.test(X.layers)&&mu(zt,B,X,Dt,Ht,Ut)}}function mu(A,B,X,N,$,bt){A.onBeforeRender(m,B,X,N,$,bt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(m,B,X,N,A,bt),$.transparent===!0&&$.side===xn?($.side=Re,$.needsUpdate=!0,m.renderBufferDirect(X,B,N,$,A,bt),$.side=Di,$.needsUpdate=!0,m.renderBufferDirect(X,B,N,$,A,bt),$.side=xn):m.renderBufferDirect(X,B,N,$,A,bt),A.onAfterRender(m,B,X,N,$,bt)}function Tr(A,B,X){B.isScene!==!0&&(B=nt);const N=Q.get(A),$=f.state.lights,bt=f.state.shadowsArray,Rt=$.state.version,zt=Mt.getParameters(A,$.state,bt,B,X),Dt=Mt.getProgramCacheKey(zt);let Ht=N.programs;N.environment=A.isMeshStandardMaterial?B.environment:null,N.fog=B.fog,N.envMap=(A.isMeshStandardMaterial?gt:it).get(A.envMap||N.environment),Ht===void 0&&(A.addEventListener("dispose",O),Ht=new Map,N.programs=Ht);let Ut=Ht.get(Dt);if(Ut!==void 0){if(N.currentProgram===Ut&&N.lightsStateVersion===Rt)return Ia(A,zt),Ut}else zt.uniforms=Mt.getUniforms(A),A.onBuild(X,zt,m),A.onBeforeCompile(zt,m),Ut=Mt.acquireProgram(zt,Dt),Ht.set(Dt,Ut),N.uniforms=zt.uniforms;const kt=N.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=S.uniform),Ia(A,zt),N.needsLights=vu(A),N.lightsStateVersion=Rt,N.needsLights&&(kt.ambientLightColor.value=$.state.ambient,kt.lightProbe.value=$.state.probe,kt.directionalLights.value=$.state.directional,kt.directionalLightShadows.value=$.state.directionalShadow,kt.spotLights.value=$.state.spot,kt.spotLightShadows.value=$.state.spotShadow,kt.rectAreaLights.value=$.state.rectArea,kt.ltc_1.value=$.state.rectAreaLTC1,kt.ltc_2.value=$.state.rectAreaLTC2,kt.pointLights.value=$.state.point,kt.pointLightShadows.value=$.state.pointShadow,kt.hemisphereLights.value=$.state.hemi,kt.directionalShadowMap.value=$.state.directionalShadowMap,kt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,kt.spotShadowMap.value=$.state.spotShadowMap,kt.spotLightMatrix.value=$.state.spotLightMatrix,kt.spotLightMap.value=$.state.spotLightMap,kt.pointShadowMap.value=$.state.pointShadowMap,kt.pointShadowMatrix.value=$.state.pointShadowMatrix);const ne=Ut.getUniforms(),Ln=ps.seqWithValue(ne.seq,kt);return N.currentProgram=Ut,N.uniformsList=Ln,Ut}function Ia(A,B){const X=Q.get(A);X.outputEncoding=B.outputEncoding,X.instancing=B.instancing,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function gu(A,B,X,N,$){B.isScene!==!0&&(B=nt),q.resetTextureUnits();const bt=B.fog,Rt=N.isMeshStandardMaterial?B.environment:null,zt=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Zn,Dt=(N.isMeshStandardMaterial?gt:it).get(N.envMap||Rt),Ht=N.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ut=!!N.normalMap&&!!X.attributes.tangent,kt=!!X.morphAttributes.position,ne=!!X.morphAttributes.normal,Ln=!!X.morphAttributes.color,ii=N.toneMapped?m.toneMapping:nn,ri=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ke=ri!==void 0?ri.length:0,Gt=Q.get(N),si=f.state.lights;if(k===!0&&(I===!0||A!==M)){const Me=A===M&&N.id===x;S.setState(N,A,Me)}let ae=!1;N.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==si.state.version||Gt.outputEncoding!==zt||$.isInstancedMesh&&Gt.instancing===!1||!$.isInstancedMesh&&Gt.instancing===!0||$.isSkinnedMesh&&Gt.skinning===!1||!$.isSkinnedMesh&&Gt.skinning===!0||Gt.envMap!==Dt||N.fog===!0&&Gt.fog!==bt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==S.numPlanes||Gt.numIntersection!==S.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Ut||Gt.morphTargets!==kt||Gt.morphNormals!==ne||Gt.morphColors!==Ln||Gt.toneMapping!==ii||St.isWebGL2===!0&&Gt.morphTargetsCount!==ke)&&(ae=!0):(ae=!0,Gt.__version=N.version);let Te=Gt.currentProgram;ae===!0&&(Te=Tr(N,B,$));let ln=!1,Wi=!1,Ns=!1;const xe=Te.getUniforms(),Pn=Gt.uniforms;if(ht.useProgram(Te.program)&&(ln=!0,Wi=!0,Ns=!0),N.id!==x&&(x=N.id,Wi=!0),ln||M!==A){if(xe.setValue(W,"projectionMatrix",A.projectionMatrix),St.logarithmicDepthBuffer&&xe.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Wi=!0,Ns=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Me=xe.map.cameraPosition;Me!==void 0&&Me.setValue(W,tt.setFromMatrixPosition(A.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&xe.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||$.isSkinnedMesh)&&xe.setValue(W,"viewMatrix",A.matrixWorldInverse)}if($.isSkinnedMesh){xe.setOptional(W,$,"bindMatrix"),xe.setOptional(W,$,"bindMatrixInverse");const Me=$.skeleton;Me&&St.floatVertexTextures&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(W,"boneTexture",Me.boneTexture,q),xe.setValue(W,"boneTextureSize",Me.boneTextureSize))}const Bs=X.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&St.isWebGL2===!0)&&st.update($,X,N,Te),(Wi||Gt.receiveShadow!==$.receiveShadow)&&(Gt.receiveShadow=$.receiveShadow,xe.setValue(W,"receiveShadow",$.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Pn.envMap.value=Dt,Pn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Wi&&(xe.setValue(W,"toneMappingExposure",m.toneMappingExposure),Gt.needsLights&&xu(Pn,Ns),bt&&N.fog===!0&&qt.refreshFogUniforms(Pn,bt),qt.refreshMaterialUniforms(Pn,N,F,P,D),ps.upload(W,Gt.uniformsList,Pn,q)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ps.upload(W,Gt.uniformsList,Pn,q),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&xe.setValue(W,"center",$.center),xe.setValue(W,"modelViewMatrix",$.modelViewMatrix),xe.setValue(W,"normalMatrix",$.normalMatrix),xe.setValue(W,"modelMatrix",$.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Me=N.uniformsGroups;for(let Us=0,_u=Me.length;Us<_u;Us++)if(St.isWebGL2){const Oa=Me[Us];yt.update(Oa,Te),yt.bind(Oa,Te)}}return Te}function xu(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function vu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(A,B,X){Q.get(A.texture).__webglTexture=B,Q.get(A.depthTexture).__webglTexture=X;const N=Q.get(A);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=X===void 0,N.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,B){const X=Q.get(A);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,X=0){_=A,v=B,y=X;let N=!0;if(A){const Dt=Q.get(A);Dt.__useDefaultFramebuffer!==void 0?(ht.bindFramebuffer(36160,null),N=!1):Dt.__webglFramebuffer===void 0?q.setupRenderTarget(A):Dt.__hasExternalTextures&&q.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture)}let $=null,bt=!1,Rt=!1;if(A){const Dt=A.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture)&&(Rt=!0);const Ht=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?($=Ht[B],bt=!0):St.isWebGL2&&A.samples>0&&q.useMultisampledRTT(A)===!1?$=Q.get(A).__webglMultisampledFramebuffer:$=Ht,w.copy(A.viewport),C.copy(A.scissor),b=A.scissorTest}else w.copy(R).multiplyScalar(F).floor(),C.copy(U).multiplyScalar(F).floor(),b=G;if(ht.bindFramebuffer(36160,$)&&St.drawBuffers&&N&&ht.drawBuffers(A,$),ht.viewport(w),ht.scissor(C),ht.setScissorTest(b),bt){const Dt=Q.get(A.texture);W.framebufferTexture2D(36160,36064,34069+B,Dt.__webglTexture,X)}else if(Rt){const Dt=Q.get(A.texture),Ht=B||0;W.framebufferTextureLayer(36160,36064,Dt.__webglTexture,X||0,Ht)}x=-1},this.readRenderTargetPixels=function(A,B,X,N,$,bt,Rt){if(!(A&&A.isWebGLRenderTarget))return;let zt=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){ht.bindFramebuffer(36160,zt);try{const Dt=A.texture,Ht=Dt.format,Ut=Dt.type;if(Ht!==Ve&&dt.convert(Ht)!==W.getParameter(35739))return;const kt=Ut===rr&&(xt.has("EXT_color_buffer_half_float")||St.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ut!==Xn&&dt.convert(Ut)!==W.getParameter(35738)&&!(Ut===Gn&&(St.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!kt)return;B>=0&&B<=A.width-N&&X>=0&&X<=A.height-$&&W.readPixels(B,X,N,$,dt.convert(Ht),dt.convert(Ut),bt)}finally{const Dt=_!==null?Q.get(_).__webglFramebuffer:null;ht.bindFramebuffer(36160,Dt)}}},this.copyFramebufferToTexture=function(A,B,X=0){const N=Math.pow(2,-X),$=Math.floor(B.image.width*N),bt=Math.floor(B.image.height*N);q.setTexture2D(B,0),W.copyTexSubImage2D(3553,X,0,0,A.x,A.y,$,bt),ht.unbindTexture()},this.copyTextureToTexture=function(A,B,X,N=0){const $=B.image.width,bt=B.image.height,Rt=dt.convert(X.format),zt=dt.convert(X.type);q.setTexture2D(X,0),W.pixelStorei(37440,X.flipY),W.pixelStorei(37441,X.premultiplyAlpha),W.pixelStorei(3317,X.unpackAlignment),B.isDataTexture?W.texSubImage2D(3553,N,A.x,A.y,$,bt,Rt,zt,B.image.data):B.isCompressedTexture?W.compressedTexSubImage2D(3553,N,A.x,A.y,B.mipmaps[0].width,B.mipmaps[0].height,Rt,B.mipmaps[0].data):W.texSubImage2D(3553,N,A.x,A.y,Rt,zt,B.image),N===0&&X.generateMipmaps&&W.generateMipmap(3553),ht.unbindTexture()},this.copyTextureToTexture3D=function(A,B,X,N,$=0){if(m.isWebGL1Renderer)return;const bt=A.max.x-A.min.x+1,Rt=A.max.y-A.min.y+1,zt=A.max.z-A.min.z+1,Dt=dt.convert(N.format),Ht=dt.convert(N.type);let Ut;if(N.isData3DTexture)q.setTexture3D(N,0),Ut=32879;else if(N.isDataArrayTexture)q.setTexture2DArray(N,0),Ut=35866;else return;W.pixelStorei(37440,N.flipY),W.pixelStorei(37441,N.premultiplyAlpha),W.pixelStorei(3317,N.unpackAlignment);const kt=W.getParameter(3314),ne=W.getParameter(32878),Ln=W.getParameter(3316),ii=W.getParameter(3315),ri=W.getParameter(32877),ke=X.isCompressedTexture?X.mipmaps[0]:X.image;W.pixelStorei(3314,ke.width),W.pixelStorei(32878,ke.height),W.pixelStorei(3316,A.min.x),W.pixelStorei(3315,A.min.y),W.pixelStorei(32877,A.min.z),X.isDataTexture||X.isData3DTexture?W.texSubImage3D(Ut,$,B.x,B.y,B.z,bt,Rt,zt,Dt,Ht,ke.data):X.isCompressedTexture?W.compressedTexSubImage3D(Ut,$,B.x,B.y,B.z,bt,Rt,zt,Dt,ke.data):W.texSubImage3D(Ut,$,B.x,B.y,B.z,bt,Rt,zt,Dt,Ht,ke),W.pixelStorei(3314,kt),W.pixelStorei(32878,ne),W.pixelStorei(3316,Ln),W.pixelStorei(3315,ii),W.pixelStorei(32877,ri),$===0&&N.generateMipmaps&&W.generateMipmap(Ut),ht.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),ht.unbindTexture()},this.resetState=function(){v=0,y=0,_=null,ht.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class B0 extends sh{}B0.prototype.isWebGL1Renderer=!0;class oh extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return this.matrixWorldAutoUpdate}set autoUpdate(t){this.matrixWorldAutoUpdate=t}}class U0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ve=new L;class _n{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}setX(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xt(e,this.array),n=Xt(n,this.array),i=Xt(i,this.array),s=Xt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new _t(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Zl extends _t{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $l=new Jt,ql=new Jt,qr=[],$i=new ye;class k0 extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if($i.geometry=this.geometry,$i.material=this.material,$i.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,$l),ql.multiplyMatrices(n,$l),$i.matrixWorld=ql,$i.raycast(t,qr);for(let o=0,a=qr.length;o<a;o++){const l=qr[o];l.instanceId=s,l.object=this,e.push(l)}qr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class _a extends He{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yl=new L,Jl=new L,Ql=new Jt,bo=new As,Yr=new Ui;class ah extends re{constructor(t=new Vt,e=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Yl.fromBufferAttribute(e,i-1),Jl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Yl.distanceTo(Jl);t.setAttribute("lineDistance",new he(n,1))}return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;Ql.copy(i).invert(),bo.copy(t.ray).applyMatrix4(Ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,f=new L,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=v,x=y-1;_<x;_+=d){const M=g.getX(_),w=g.getX(_+1);if(c.fromBufferAttribute(p,M),h.fromBufferAttribute(p,w),bo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let _=v,x=y-1;_<x;_+=d){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),bo.distanceSqToSegment(c,h,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(f);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Kl=new L,tc=new L;class ya extends ah{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Kl.fromBufferAttribute(e,i),tc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Kl.distanceTo(tc);t.setAttribute("lineDistance",new he(n,1))}return this}}class lh extends He{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ec=new Jt,Yo=new As,Jr=new Ui,Qr=new L;class G0 extends re{constructor(t=new Vt,e=new lh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,t.ray.intersectsSphere(Jr)===!1)return;ec.copy(i).invert(),Yo.copy(t.ray).applyMatrix4(ec);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);Qr.fromBufferAttribute(u,p),nc(Qr,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Qr.fromBufferAttribute(u,g),nc(Qr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nc(r,t,e,n,i,s,o){const a=Yo.distanceSqToPoint(r);if(a<e){const l=new L;Yo.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class We{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ct:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,i=[],s=[],o=[],a=new L,l=new Jt;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(_e(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(_e(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ba extends We{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new ct,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class V0 extends ba{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ma(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const Kr=new L,Mo=new Ma,wo=new Ma,So=new Ma;class H0 extends We{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Kr.subVectors(i[0],i[1]).add(i[0]),c=Kr);const u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Kr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Kr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),Mo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,m,p),wo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,m,p),So.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(Mo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),So.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Mo.calc(l),wo.calc(l),So.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function W0(r,t){const e=1-r;return e*e*t}function j0(r,t){return 2*(1-r)*r*t}function X0(r,t){return r*r*t}function tr(r,t,e,n){return W0(r,t)+j0(r,e)+X0(r,n)}function Z0(r,t){const e=1-r;return e*e*e*t}function $0(r,t){const e=1-r;return 3*e*e*r*t}function q0(r,t){return 3*(1-r)*r*r*t}function Y0(r,t){return r*r*r*t}function er(r,t,e,n,i){return Z0(r,t)+$0(r,e)+q0(r,n)+Y0(r,i)}class ch extends We{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(er(t,i.x,s.x,o.x,a.x),er(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J0 extends We{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(er(t,i.x,s.x,o.x,a.x),er(t,i.y,s.y,o.y,a.y),er(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wa extends We{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new ct;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q0 extends We{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends We{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(tr(t,i.x,s.x,o.x),tr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K0 extends We{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(tr(t,i.x,s.x,o.x),tr(t,i.y,s.y,o.y),tr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends We{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ic(a,l.x,c.x,h.x,u.x),ic(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var fh=Object.freeze({__proto__:null,ArcCurve:V0,CatmullRomCurve3:H0,CubicBezierCurve:ch,CubicBezierCurve3:J0,EllipseCurve:ba,LineCurve:wa,LineCurve3:Q0,QuadraticBezierCurve:hh,QuadraticBezierCurve3:K0,SplineCurve:uh});class tx extends We{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new wa(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new fh[i.type]().fromJSON(i))}return this}}class rc extends tx{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wa(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new hh(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new ch(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new ba(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jo extends rc{constructor(t){super(t),this.uuid=rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new rc().fromJSON(i))}return this}}const ex={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=dh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=ox(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?1/d:0}return or(s,o,e,a,l,d),o}};function dh(r,t,e,n,i){let s,o;if(i===xx(r,t,e,n)>0)for(s=t;s<e;s+=n)o=sc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=sc(s,r[s],r[s+1],o);return o&&Es(o,o.next)&&(lr(o),o=o.next),o}function wn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Es(e,e.next)||Qt(e.prev,e,e.next)===0)){if(lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function or(r,t,e,n,i,s,o){if(!r)return;!o&&s&&ux(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ix(r,n,i,s):nx(r)){t.push(l.i/e),t.push(r.i/e),t.push(c.i/e),lr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=rx(wn(r),t,e),or(r,t,e,n,i,s,2)):o===2&&sx(r,t,e,n,i,s):or(wn(r),t,e,n,i,s,1);break}}}function nx(r){const t=r.prev,e=r,n=r.next;if(Qt(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Ai(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&Qt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ix(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Qt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=Qo(a,l,t,e,n),f=Qo(c,h,t,e,n);let d=r.prevZ,g=r.nextZ;for(;d&&d.z>=u&&g&&g.z<=f;){if(d!==r.prev&&d!==r.next&&Ai(i.x,i.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Qt(d.prev,d,d.next)>=0||(d=d.prevZ,g!==r.prev&&g!==r.next&&Ai(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Qt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=u;){if(d!==r.prev&&d!==r.next&&Ai(i.x,i.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Qt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==r.prev&&g!==r.next&&Ai(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Qt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function rx(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Es(i,s)&&ph(i,n,n.next,s)&&ar(i,s)&&ar(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),lr(n),lr(n.next),n=r=s),n=n.next}while(n!==r);return wn(n)}function sx(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&px(o,a)){let l=mh(o,a);o=wn(o,o.next),l=wn(l,l.next),or(o,t,e,n,i,s),or(l,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function ox(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=dh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(dx(c));for(i.sort(ax),s=0;s<i.length;s++)lx(i[s],e),e=wn(e,e.next);return e}function ax(r,t){return r.x-t.x}function lx(r,t){if(t=cx(r,t),t){const e=mh(t,r);wn(t,t.next),wn(e,e.next)}}function cx(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s){if(s=f,f===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Ai(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),ar(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&hx(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function hx(r,t){return Qt(r.prev,r,t.prev)<0&&Qt(t.next,r,r.next)<0}function ux(r,t,e,n){let i=r;do i.z===null&&(i.z=Qo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,fx(i)}function fx(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Qo(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function dx(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ai(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function px(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!mx(r,t)&&(ar(r,t)&&ar(t,r)&&gx(r,t)&&(Qt(r.prev,r,t.prev)||Qt(r,t.prev,t))||Es(r,t)&&Qt(r.prev,r,r.next)>0&&Qt(t.prev,t,t.next)>0)}function Qt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Es(r,t){return r.x===t.x&&r.y===t.y}function ph(r,t,e,n){const i=es(Qt(r,t,e)),s=es(Qt(r,t,n)),o=es(Qt(e,n,r)),a=es(Qt(e,n,t));return!!(i!==s&&o!==a||i===0&&ts(r,e,t)||s===0&&ts(r,n,t)||o===0&&ts(e,r,n)||a===0&&ts(e,t,n))}function ts(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function es(r){return r>0?1:r<0?-1:0}function mx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&ph(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ar(r,t){return Qt(r.prev,r,r.next)<0?Qt(r,t,r.next)>=0&&Qt(r,r.prev,t)>=0:Qt(r,t,r.prev)<0||Qt(r,r.next,t)<0}function gx(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function mh(r,t){const e=new Ko(r.i,r.x,r.y),n=new Ko(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function sc(r,t,e,n){const i=new Ko(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function lr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ko(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xx(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class nr{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return nr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];oc(t),ac(n,t);let o=t.length;e.forEach(oc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ac(n,e[l]);const a=ex.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function oc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ac(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Sa extends Vt{constructor(t=new Jo([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new he(i,3)),this.setAttribute("uv",new he(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const v=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:vx;let _,x=!1,M,w,C,b;v&&(_=v.getSpacedPoints(h),x=!0,f=!1,M=v.computeFrenetFrames(h,!1),w=new L,C=new L,b=new L),f||(p=0,d=0,g=0,m=0);const T=a.extractPoints(c);let P=T.shape;const F=T.holes;if(!nr.isClockWise(P)){P=P.reverse();for(let Q=0,q=F.length;Q<q;Q++){const it=F[Q];nr.isClockWise(it)&&(F[Q]=it.reverse())}}const z=nr.triangulateShape(P,F),R=P;for(let Q=0,q=F.length;Q<q;Q++){const it=F[Q];P=P.concat(it)}function U(Q,q,it){return q.clone().multiplyScalar(it).add(Q)}const G=P.length,j=z.length;function k(Q,q,it){let gt,ut,It;const Tt=Q.x-q.x,Mt=Q.y-q.y,qt=it.x-Q.x,jt=it.y-Q.y,E=Tt*Tt+Mt*Mt,S=Tt*jt-Mt*qt;if(Math.abs(S)>Number.EPSILON){const H=Math.sqrt(E),et=Math.sqrt(qt*qt+jt*jt),st=q.x-Mt/H,ft=q.y+Tt/H,Lt=it.x-jt/et,dt=it.y+qt/et,K=((Lt-st)*jt-(dt-ft)*qt)/(Tt*jt-Mt*qt);gt=st+Tt*K-Q.x,ut=ft+Mt*K-Q.y;const yt=gt*gt+ut*ut;if(yt<=2)return new ct(gt,ut);It=Math.sqrt(yt/2)}else{let H=!1;Tt>Number.EPSILON?qt>Number.EPSILON&&(H=!0):Tt<-Number.EPSILON?qt<-Number.EPSILON&&(H=!0):Math.sign(Mt)===Math.sign(jt)&&(H=!0),H?(gt=-Mt,ut=Tt,It=Math.sqrt(E)):(gt=Tt,ut=Mt,It=Math.sqrt(E/2))}return new ct(gt/It,ut/It)}const I=[];for(let Q=0,q=R.length,it=q-1,gt=Q+1;Q<q;Q++,it++,gt++)it===q&&(it=0),gt===q&&(gt=0),I[Q]=k(R[Q],R[it],R[gt]);const D=[];let Y,V=I.concat();for(let Q=0,q=F.length;Q<q;Q++){const it=F[Q];Y=[];for(let gt=0,ut=it.length,It=ut-1,Tt=gt+1;gt<ut;gt++,It++,Tt++)It===ut&&(It=0),Tt===ut&&(Tt=0),Y[gt]=k(it[gt],it[It],it[Tt]);D.push(Y),V=V.concat(Y)}for(let Q=0;Q<p;Q++){const q=Q/p,it=d*Math.cos(q*Math.PI/2),gt=g*Math.sin(q*Math.PI/2)+m;for(let ut=0,It=R.length;ut<It;ut++){const Tt=U(R[ut],I[ut],gt);wt(Tt.x,Tt.y,-it)}for(let ut=0,It=F.length;ut<It;ut++){const Tt=F[ut];Y=D[ut];for(let Mt=0,qt=Tt.length;Mt<qt;Mt++){const jt=U(Tt[Mt],Y[Mt],gt);wt(jt.x,jt.y,-it)}}}const tt=g+m;for(let Q=0;Q<G;Q++){const q=f?U(P[Q],V[Q],tt):P[Q];x?(C.copy(M.normals[0]).multiplyScalar(q.x),w.copy(M.binormals[0]).multiplyScalar(q.y),b.copy(_[0]).add(C).add(w),wt(b.x,b.y,b.z)):wt(q.x,q.y,0)}for(let Q=1;Q<=h;Q++)for(let q=0;q<G;q++){const it=f?U(P[q],V[q],tt):P[q];x?(C.copy(M.normals[Q]).multiplyScalar(it.x),w.copy(M.binormals[Q]).multiplyScalar(it.y),b.copy(_[Q]).add(C).add(w),wt(b.x,b.y,b.z)):wt(it.x,it.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){const q=Q/p,it=d*Math.cos(q*Math.PI/2),gt=g*Math.sin(q*Math.PI/2)+m;for(let ut=0,It=R.length;ut<It;ut++){const Tt=U(R[ut],I[ut],gt);wt(Tt.x,Tt.y,u+it)}for(let ut=0,It=F.length;ut<It;ut++){const Tt=F[ut];Y=D[ut];for(let Mt=0,qt=Tt.length;Mt<qt;Mt++){const jt=U(Tt[Mt],Y[Mt],gt);x?wt(jt.x,jt.y+_[h-1].y,_[h-1].x+it):wt(jt.x,jt.y,u+it)}}}nt(),pt();function nt(){const Q=i.length/3;if(f){let q=0,it=G*q;for(let gt=0;gt<j;gt++){const ut=z[gt];xt(ut[2]+it,ut[1]+it,ut[0]+it)}q=h+p*2,it=G*q;for(let gt=0;gt<j;gt++){const ut=z[gt];xt(ut[0]+it,ut[1]+it,ut[2]+it)}}else{for(let q=0;q<j;q++){const it=z[q];xt(it[2],it[1],it[0])}for(let q=0;q<j;q++){const it=z[q];xt(it[0]+G*h,it[1]+G*h,it[2]+G*h)}}n.addGroup(Q,i.length/3-Q,0)}function pt(){const Q=i.length/3;let q=0;W(R,q),q+=R.length;for(let it=0,gt=F.length;it<gt;it++){const ut=F[it];W(ut,q),q+=ut.length}n.addGroup(Q,i.length/3-Q,1)}function W(Q,q){let it=Q.length;for(;--it>=0;){const gt=it;let ut=it-1;ut<0&&(ut=Q.length-1);for(let It=0,Tt=h+p*2;It<Tt;It++){const Mt=G*It,qt=G*(It+1),jt=q+gt+Mt,E=q+ut+Mt,S=q+ut+qt,H=q+gt+qt;St(jt,E,S,H)}}}function wt(Q,q,it){l.push(Q),l.push(q),l.push(it)}function xt(Q,q,it){ht(Q),ht(q),ht(it);const gt=i.length/3,ut=y.generateTopUV(n,i,gt-3,gt-2,gt-1);Bt(ut[0]),Bt(ut[1]),Bt(ut[2])}function St(Q,q,it,gt){ht(Q),ht(q),ht(gt),ht(q),ht(it),ht(gt);const ut=i.length/3,It=y.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);Bt(It[0]),Bt(It[1]),Bt(It[3]),Bt(It[1]),Bt(It[2]),Bt(It[3])}function ht(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Bt(Q){s.push(Q.x),s.push(Q.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _x(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new fh[i.type]().fromJSON(i)),new Sa(n,t.options)}}const vx={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ct(s,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],m=t[s*3],p=t[s*3+1],v=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(f,1-g),new ct(m,1-v)]:[new ct(a,1-l),new ct(h,1-u),new ct(d,1-g),new ct(p,1-v)]}};function _x(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class yx extends Vt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new L,s=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let g=f,m=f+d;g<m;g+=3)for(let p=0;p<3;p++){const v=a.getX(g+p),y=a.getX(g+(p+1)%3);i.fromBufferAttribute(o,v),s.fromBufferAttribute(o,y),lc(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),lc(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new he(e,3))}}}function lc(r,t,e){const n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class Ao extends He{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bx extends _a{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const cc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Mx{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const wx=new Mx;class gh{constructor(t){this.manager=t!==void 0?t:wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Sx extends gh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=cc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=sr("img");function l(){h(),cc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Ax extends gh{constructor(t){super(t)}load(t,e,n,i){const s=new De,o=new Sx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class xh extends re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const To=new Jt,hc=new L,uc=new L;class Tx{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(hc),uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uc),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ex extends Tx{constructor(){super(new th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cx extends xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DefaultUp),this.updateMatrix(),this.target=new re,this.shadow=new Ex}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Lx extends xh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Px extends Vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class ta extends U0{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Rx{constructor(t,e,n=0,i=1/0){this.ray=new As(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera&&(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e)}intersectObject(t,e=!0,n=[]){return ea(t,this,n,e),n.sort(fc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ea(t[i],this,n,e);return n.sort(fc),n}}function fc(r,t){return r.distance-t.distance}function ea(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)ea(i[s],t,e,!0)}}class vh extends ki{constructor(t,e,n,i,s,o){super(t,e,n,i,s,o)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vr}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=vr));const _h=parseInt(vr.replace("dev",""));function At(r,t,e){return _h>109?r.setAttribute(t,e):r.addAttribute(t,e),r}function Dx(r,t){_h>113?r.params.Line.threshold=t:r.linePrecision=t}function oe(){return!0}class yh extends Px{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";var t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),At(this,"position",new he(t,3)),At(this,"uv",new he(e,2))}applyMatrix(t){var e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(t.applyToBufferAttribute(e),t.applyToBufferAttribute(n),e.data.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){var e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));var n=new ta(e,6,1);return At(this,"instanceStart",new _n(n,3,0)),At(this,"instanceEnd",new _n(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){var e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));var n=new ta(e,6,1);return At(this,"instanceColorStart",new _n(n,3,0)),At(this,"instanceColorEnd",new _n(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new yx(t.geometry)),this}fromLineSegements(t){var e=t.geometry;return e.isGeometry?this.setPositions(e.vertices):e.isBufferGeometry&&this.setPositions(e.position.array),this}computeBoundingBox(){var t=new $n;this.boundingBox===null&&(this.boundingBox=new $n);var e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),t.setFromBufferAttribute(n),this.boundingBox.union(t))}computeBoundingSphere(){var t=new L;this.boundingSphere===null&&(this.boundingSphere=new Ui),this.boundingBox===null&&this.computeBoundingBox();var e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){var i=this.boundingSphere.center;this.boundingBox.getCenter(i);for(var s=0,o=0,a=e.count;o<a;o++)t.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(t)),t.fromBufferAttribute(n,o),s=Math.max(s,i.distanceToSquared(t));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)}}toJSON(){}copy(t){return this}}const bh={},ms={};bh.line={linewidth:{value:1},resolution:{value:new ct(1,1)},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ms.line={uniforms:ma.merge([rt.common,rt.fog,bh.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		varying vec2 vUv;

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			vUv = uv;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec2 ndcStart = clipStart.xy / clipStart.w;
			vec2 ndcEnd = clipEnd.xy / clipEnd.w;

			// direction
			vec2 dir = ndcEnd - ndcStart;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			// perpendicular to dir
			vec2 offset = vec2( dir.y, - dir.x );

			// undo aspect ratio adjustment
			dir.x /= aspect;
			offset.x /= aspect;

			// sign flip
			if ( position.x < 0.0 ) offset *= - 1.0;

			// endcaps
			if ( position.y < 0.0 ) {

				offset += - dir;

			} else if ( position.y > 1.0 ) {

				offset += dir;

			}

			// adjust for linewidth
			offset *= linewidth;

			// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
			offset /= resolution.y;

			// select end
			vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

			// back to clip space
			offset *= clip.w;

			clip.xy += offset;

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;

		#ifdef USE_DASH

			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		varying vec2 vUv;

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			if ( abs( vUv.y ) > 1.0 ) {

				float a = vUv.x;
				float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
				float len2 = a * a + b * b;

				if ( len2 > 1.0 ) discard;

			}

			vec4 diffuseColor = vec4( diffuse, opacity );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, diffuseColor.a );

			#include <premultiplied_alpha_fragment>
			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>

		}
		`};class Cs extends Mn{constructor(t){super({uniforms:ma.clone(ms.line.uniforms),vertexShader:ms.line.vertexShader,fragmentShader:ms.line.fragmentShader}),this.dashed=!0,this.isLineMaterial=!0,this.type="LineMaterial",Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}}}),this.setValues(t)}}class Ix extends ye{constructor(t,e){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2",this.geometry=t!==void 0?t:new yh,this.material=e!==void 0?e:new Cs({color:Math.random()*16777215})}computeLineDistances(){var t=new L,e=new L,n=this.geometry,i=n.attributes.instanceStart,s=n.attributes.instanceEnd;if(!i||!s)return this;for(var o=new Float32Array(2*i.data.count),a=0,l=0,c=i.data.count;a<c;a++,l+=2)t.fromBufferAttribute(i,a),e.fromBufferAttribute(s,a),o[l]=l===0?0:o[l-1],o[l+1]=o[l]+t.distanceTo(e);var h=new ta(o,2,1);return At(n,"instanceDistanceStart",new _n(h,1,0)),At(n,"instanceDistanceEnd",new _n(h,1,1)),this}}class Pi extends yh{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}fromLine(t){var e=t.geometry;return e.isGeometry?this.setPositions(e.vertices):e.isBufferGeometry&&this.setPositions(e.position.array),this}}class Aa extends Ix{constructor(t,e){super(t,e),this.isLine2=!0,this.type="Line2",this.geometry=t!==void 0?t:new Pi,this.material=e!==void 0?e:new Cs({color:Math.random()*16777215})}copy(t){return this}}const Ox={interactive:!0,altitude:0,minZoom:0,maxZoom:30,asynchronous:!1,bloom:!1};function Fx(){}class $t extends Mu(Fx){constructor(t){super(),this.isAdd=!1,this._mouseover=!1,this._visible=!0,this._zoomVisible=!0,this.picked=!1,this.isBaseObject=!0,t===void 0&&(t=lt.GUID()),this.id=t}addTo(t){return t&&t.type==="ThreeLayer"&&t.addMesh([this]),this}remove(){const t=this.getLayer();return t&&t.removeMesh([this]),this}getObject3d(){return this.object3d}getId(){return this.id}setId(t){const e=this.getId();return this.id=t,this._fire("idchange",{old:e,new:t,target:this}),this}getType(){return this.type}getOptions(){return this.options}getProperties(){return(this.options||{}).properties}setProperties(t){const e=Object.assign({},this.getProperties());return this.options.properties=t,this._fire("propertieschange",{old:e,new:t,target:this}),this}getLayer(){return this.options.layer}getMap(){const t=this.getLayer();if(t)return t.getMap()}getCenter(){const t=this.getOptions(),{coordinate:e,lineString:n,polygon:i}=t;if(e)return e instanceof Zt?e:new Zt(e);{const s=i||n;if(s&&s.getCenter)return s.getCenter()}}getAltitude(){return this.getOptions().altitude}setAltitude(t){if(lt.isNumber(t)){const e=this.getLayer().altitudeToVector3(t,t).x;if(this.getObject3d().position.z=e,this.options.altitude=t,this.pickObject3d&&(this.pickObject3d.position.z=e),this._baseObjects&&Array.isArray(this._baseObjects))for(let n=0,i=this._baseObjects.length;n<i;n++)this._baseObjects[n]&&(this._baseObjects[n].getObject3d().position.z=e)}return this}supportHeight(){return this.getOptions().heightEnable}getHeight(){const{height:t}=this.getOptions();return lt.isNumber(t)?t:0}setHeight(t){if(!lt.isNumber(t)||this._baseObjects||!this.supportHeight())return this;const e=this.getLayer();if(!e)return this;const{geometry:n}=this.getObject3d();if(n instanceof Vt){const{position:i}=n.attributes||{};if(!i)return this;const s=i.array;let o=1/0,a=-1/0;for(let h=0,u=s.length;h<u;h+=3){const f=s[h+2];o=Math.min(f,o),a=Math.max(f,a)}const l=(o+a)/2;let c=e.altitudeToVector3(t,t).x;c=Math.max(c,1e-6);for(let h=0,u=s.length;h<u;h+=3)s[h+2]>l&&(s[h+2]=c);n.attributes.position.needsUpdate=!0,n.computeBoundingBox(),n.computeBoundingSphere(),this.getOptions().height=t}return this}show(){return this._zoomVisible&&(this.getObject3d().visible=!0,this._fire("show")),this._visible=!0,this}hide(){return this.getObject3d().visible=!1,this._fire("hide"),this._visible=!1,this._hideUI(),this}isVisible(){return!!this.getObject3d().visible}getSymbol(){return this.getObject3d().material}setSymbol(t){if(t&&t instanceof He){t.needsUpdate=!0,t.vertexColors=this.getObject3d().material.vertexColors;const e=this.getObject3d().material.clone();this.getObject3d().material=t,this._fire("symbolchange",{old:e,new:t,target:this})}return this}setInfoWindow(t){return this.removeInfoWindow(),this.infoWindow=new Bo.InfoWindow(t),this.infoWindow.addTo(this),this}getInfoWindow(){return this.infoWindow}openInfoWindow(t){return t=t||this.getCenter(),t instanceof Zt||(t=new Zt(t)),t&&this.infoWindow&&this.infoWindow.show(t),this}closeInfoWindow(){return this.infoWindow&&this.infoWindow.hide(),this}removeInfoWindow(){return this.infoWindow&&(this.infoWindow.remove(),delete this.infoWindow),this}setToolTip(t,e){return this.removeToolTip(),this.toolTip=new Bo.ToolTip(t,e),this.toolTip.addTo(this),this}getToolTip(){return this.toolTip}openToolTip(t){return t=t||this.getCenter(),t instanceof Zt||(t=new Zt(t)),t&&this.toolTip&&this.toolTip.show(t),this}closeToolTip(){return this.toolTip&&this.toolTip.hide(),this}removeToolTip(){return this.toolTip&&(this.toolTip.remove(),delete this.toolTip),this}_hideUI(){return this.closeInfoWindow(),this.closeToolTip(),this}animateShow(t={},e){this._showPlayer&&this._showPlayer.cancel(),lt.isFunction(t)&&(t={},e=t);const n=t.duration||1e3,i=t.easing||"out",s=this._showPlayer=wu.Animation.animate({scale:1},{duration:n,easing:i},o=>{const a=o.styles.scale;a>0&&(this.getObject3d().scale.z=a),e&&e(o,a)});return s.play(),s}getMinZoom(){return this.getOptions().minZoom}getMaxZoom(){return this.getOptions().maxZoom}isAsynchronous(){return this.getOptions().asynchronous}get bloom(){return this.getOptions().bloom}fire(t,e){return this._fire(t,e),this._vt&&this._vt.onSelectMesh&&this._vt.onSelectMesh(t,e),this}config(){return this}setPickObject3d(t){return this.pickObject3d=t,this.pickObject3d.__parent=this,this}_initOptions(t){return this.options=lt.extend({},Ox,t),this}_createMesh(t,e){return this.object3d=new ye(t,e),this.object3d.__parent=this,this}_createInstancedMesh(t,e,n){return this.object3d=new k0(t,e,n),this.object3d.__parent=this,this}_createGroup(){return this.object3d=new Si,this.object3d.__parent=this,this}_createLine(t,e){return this.object3d=new ah(t,e),this._computeLineDistances(t),this.object3d.__parent=this,this}_createLine2(t,e){return this.object3d=new Aa(t,e),this.object3d.computeLineDistances(),this.object3d.__parent=this,this}_createPoints(t,e){return this.object3d=new G0(t,e),this.object3d.__parent=this,this}_createLineSegments(t,e){return this.object3d=new ya(t,e),this._computeLineDistances(t),this.object3d.__parent=this,this}_computeLineDistances(t){const e=t.attributes.position.array,n=t.attributes.position.count,i=new Float32Array(n);i[0]=0;const s=new L(0,0,0),o=new L(0,0,0);for(let a=1;a<n;a++){const l=(a-1)*3;s.x=e[l],s.y=e[l+1],s.z=e[l+2];const c=a*3;o.x=e[c],o.y=e[c+1],o.z=e[c+2];const h=o.distanceTo(s);i[a]=i[a-1]+h}At(t,"lineDistance",new _t(i,1))}}const Sn=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"];function Kn(r){return r.geometry?r.geometry.type:null}function Ls(r){const t=Kn(r);if(t){for(let e=0,n=Sn.length;e<n;e++)if(Sn[e]===t)return!0}return!1}function An(r){const t=Kn(r);return!!(t&&(t===Sn[4]||t===Sn[5]))}function on(r){const t=Kn(r);return!!(t&&(t===Sn[2]||t===Sn[3]))}function zx(r){const t=Kn(r);return!!(t&&(t===Sn[0]||t===Sn[1]))}function Ta(r){const t=Kn(r);return!!(t&&t.indexOf("Multi")>-1)}function br(r){return r.geometry?r.geometry.coordinates:[]}function Tn(r,t){const e=Kn(r);if(!e||!r.geometry)return null;const i=r.geometry.coordinates;if(!i)return null;let s=0,o=0,a=0;switch(e){case"Point":{s=i[0],o=i[1],a++;break}case"MultiPoint":case"LineString":{for(let h=0,u=i.length;h<u;h++)s+=i[h][0],o+=i[h][1],a++;break}case"MultiLineString":case"Polygon":{for(let h=0,u=i.length;h<u;h++)for(let f=0,d=i[h].length;f<d;f++)s+=i[h][f][0],o+=i[h][f][1],a++;break}case"MultiPolygon":{for(let h=0,u=i.length;h<u;h++)for(let f=0,d=i[h].length;f<d;f++)for(let g=0,m=i[h][f].length;g<m;g++)s+=i[h][f][g][0],o+=i[h][f][g][1],a++;break}}const l=s/a,c=o/a;return t?(t.x=l,t.y=c,t):new Zt(l,c)}function cr(r){const t=Kn(r);if(!t||!r.geometry)return null;const e=r.geometry,n=r.properties||{},i=e.coordinates;if(!i)return null;const s=[];let o;switch(t){case"MultiPoint":{o="Point";break}case"MultiLineString":{o="LineString";break}case"MultiPolygon":{o="Polygon";break}}if(o)for(let a=0,l=i.length;a<l;a++)s.push({type:"Feature",geometry:{type:o,coordinates:i[a]},properties:n});else s.push(r);return s}/*!
 * poly-extrude v0.2.0
  */var Ea={exports:{}};Ea.exports=Ps;Ea.exports.default=Ps;function Ps(r,t,e){e=e||2;var n=t&&t.length,i=n?t[0]*e:r.length,s=Mh(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,h,u,f,d;if(n&&(s=Gx(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(var g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return hr(s,o,e,a,l,d,0),o}function Mh(r,t,e,n,i){var s,o;if(i===ra(r,t,e,n)>0)for(s=t;s<e;s+=n)o=dc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=dc(s,r[s],r[s+1],o);return o&&Rs(o,o.next)&&(fr(o),o=o.next),o}function qn(r,t){if(!r)return r;t||(t=r);var e=r,n;do if(n=!1,!e.steiner&&(Rs(e,e.next)||Kt(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(r,t,e,n,i,s,o){if(!!r){!o&&s&&Xx(r,n,i,s);for(var a=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Bx(r,n,i,s):Nx(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),fr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ux(qn(r),t,e),hr(r,t,e,n,i,s,2)):o===2&&kx(r,t,e,n,i,s):hr(qn(r),t,e,n,i,s,1);break}}}}function Nx(r){var t=r.prev,e=r,n=r.next;if(Kt(t,e,n)>=0)return!1;for(var i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ti(i,a,s,l,o,c,g.x,g.y)&&Kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bx(r,t,e,n){var i=r.prev,s=r,o=r.next;if(Kt(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,m=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,v=na(d,g,t,e,n),y=na(m,p,t,e,n),_=r.prevZ,x=r.nextZ;_&&_.z>=v&&x&&x.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&Ti(a,h,l,u,c,f,_.x,_.y)&&Kt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Ti(a,h,l,u,c,f,x.x,x.y)&&Kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=v;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&Ti(a,h,l,u,c,f,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Ti(a,h,l,u,c,f,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ux(r,t,e){var n=r;do{var i=n.prev,s=n.next.next;!Rs(i,s)&&wh(i,n,n.next,s)&&ur(i,s)&&ur(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),fr(n),fr(n.next),n=r=s),n=n.next}while(n!==r);return qn(n)}function kx(r,t,e,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&qx(o,a)){var l=Sh(o,a);o=qn(o,o.next),l=qn(l,l.next),hr(o,t,e,n,i,s,0),hr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Gx(r,t,e,n){var i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Mh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push($x(c));for(i.sort(Vx),s=0;s<i.length;s++)e=Hx(i[s],e);return e}function Vx(r,t){return r.x-t.x}function Hx(r,t){var e=Wx(r,t);if(!e)return t;var n=Sh(e,r);return qn(n,n.next),qn(e,e.next)}function Wx(r,t){var e=t,n=r.x,i=r.y,s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,c=o.x,h=o.y,u=1/0,f;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&Ti(i<h?n:s,i,c,h,i<h?s:n,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(n-e.x),ur(e,r)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&jx(o,e)))&&(o=e,u=f)),e=e.next;while(e!==l);return o}function jx(r,t){return Kt(r.prev,r,t.prev)<0&&Kt(t.next,r,r.next)<0}function Xx(r,t,e,n){var i=r;do i.z===0&&(i.z=na(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Zx(i)}function Zx(r){var t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function na(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function $x(r){var t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ti(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function qx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Yx(r,t)&&(ur(r,t)&&ur(t,r)&&Jx(r,t)&&(Kt(r.prev,r,t.prev)||Kt(r,t.prev,t))||Rs(r,t)&&Kt(r.prev,r,r.next)>0&&Kt(t.prev,t,t.next)>0)}function Kt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Rs(r,t){return r.x===t.x&&r.y===t.y}function wh(r,t,e,n){var i=is(Kt(r,t,e)),s=is(Kt(r,t,n)),o=is(Kt(e,n,r)),a=is(Kt(e,n,t));return!!(i!==s&&o!==a||i===0&&ns(r,e,t)||s===0&&ns(r,n,t)||o===0&&ns(e,r,n)||a===0&&ns(e,t,n))}function ns(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function is(r){return r>0?1:r<0?-1:0}function Yx(r,t){var e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&wh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ur(r,t){return Kt(r.prev,r,r.next)<0?Kt(r,t,r.next)>=0&&Kt(r,r.prev,t)>=0:Kt(r,t,r.prev)<0||Kt(r,r.next,t)<0}function Jx(r,t){var e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Sh(r,t){var e=new ia(r.i,r.x,r.y),n=new ia(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function dc(r,t,e,n){var i=new ia(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ia(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Ps.deviation=function(r,t,e,n){var i=t&&t.length,s=i?t[0]*e:r.length,o=Math.abs(ra(r,0,s,e));if(i)for(var a=0,l=t.length;a<l;a++){var c=t[a]*e,h=a<l-1?t[a+1]*e:r.length;o-=Math.abs(ra(r,c,h,e))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*e,d=n[a+1]*e,g=n[a+2]*e;u+=Math.abs((r[f]-r[g])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[g+1]-r[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function ra(r,t,e,n){for(var i=0,s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Ps.flatten=function(r){for(var t=r[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<t;o++)e.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,e.holes.push(n))}return e};var Qx=Ea.exports;function pc(r){for(var t=0,e=1,n,i,s=r.length;e<s;)n=i||r[0],i=r[e],t+=(i[0]-n[0])*(i[1]+n[1]),e++;return t>0}function mc(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function Kx(r,t){var e=t[0],n=t[1],i=t[2],s=Math.sqrt(e*e+n*n+i*i)||1;return r[0]=e/s,r[1]=n/s,r[2]=i/s,r}function tv(r,t,e){var n=t[0],i=t[1],s=t[2],o=e[0],a=e[1],l=e[2];return r[0]=i*l-s*a,r[1]=s*o-n*l,r[2]=n*a-i*o,r}function Ca(r,t){function e(M,w,C,b){M[0]=w,M[1]=C,M[2]=b}for(var n=[],i=[],s=[],o=[],a=[],l=[],c=r.length,h=new Float32Array(t.length),u=0;u<c;){var f=r[u],d=r[u+1],g=r[u+2],m=f*3,p=d*3,v=g*3;e(n,t[m],t[m+1],t[m+2]),e(i,t[p],t[p+1],t[p+2]),e(s,t[v],t[v+1],t[v+2]),mc(a,s,i),mc(o,n,i),tv(l,a,o);for(var y=0;y<3;y++)h[m+y]+=l[y],h[p+y]+=l[y],h[v+y]+=l[y];u+=3}for(var _=0,x=h.length;_<x;)e(l,h[_],h[_+1],h[_+2]),Kx(l,l),h[_]=l[0]||0,h[_+1]=l[1]||0,h[_+2]=l[2]||0,_+=3;return h}function Ah(r){if(r.length===1){var t={position:r[0].position,normal:r[0].normal,uv:r[0].uv,indices:r[0].indices,results:r};return t}for(var e=0,n=0,i=0,s=r.length;i<s;i++){var o=r[i],a=o.position,l=o.indices;e+=a.length,n+=l.length}for(var c={position:new Float32Array(e),normal:new Float32Array(e),uv:new Float32Array(e/3*2),indices:new Uint32Array(n),results:r},h=0,u=0,f=0,d=0,g=0,m=r.length;g<m;g++){var p=r[g],v=p.position,y=p.indices,_=p.normal,x=p.uv;c.position.set(v,h),c.normal.set(_,h),c.uv.set(x,d);for(var M=0,w=y.length;M<w;){var C=y[M]+u;c.indices[f]=C,f++,M++}d+=x.length,h+=v.length,u+=v.length/3}return c}function ev(r){return r*180/Math.PI}function gc(r){return r/180*Math.PI}function Th(r,t,e,n,i,s){var o=e*3,a=n*3,l=i*3,c=s*3,h=t[o],u=t[o+1],f=t[o+2],d=t[a],g=t[a+1],m=t[a+2],p=t[l],v=t[l+1],y=t[l+2],_=t[c],x=t[c+1],M=t[c+2];Math.abs(u-g)<Math.abs(h-d)?(r.push(h,1-f),r.push(d,1-m),r.push(p,1-y),r.push(_,1-M)):(r.push(u,1-f),r.push(g,1-m),r.push(v,1-y),r.push(x,1-M))}function nv(r,t){t=Object.assign({},{depth:2},t);var e=r.map(function(i){for(var s=0,o=i.length;s<o;s++){var a=i[s];av(a),s===0?pc(a)||(i[s]=a.reverse()):pc(a)&&(i[s]=a.reverse()),Eh(a)&&a.splice(a.length-1,1)}var l=ov(i,t);l.polygon=i;var c=Qx(l.flatVertices,l.holes,2);return iv(l,c),rv(l,t),l.position=new Float32Array(l.points),l.indices=new Uint32Array(l.index),l.uv=new Float32Array(l.uvs),l.normal=Ca(l.indices,l.position),l}),n=Ah(e);return n.polygons=r,n}function iv(r,t){for(var e=[],n=r.count,i=0,s=t.length;i<s;i+=3){var o=t[i],a=t[i+1],l=t[i+2];e[i]=o,e[i+1]=a,e[i+2]=l;var c=s+i,h=n+o,u=n+a,f=n+l;e[c]=h,e[c+1]=u,e[c+2]=f}r.index=e}function rv(r,t){for(var e=r.points,n=r.index,i=r.polygon,s=r.uvs,o=t.depth,a=0,l=i.length;a<l;a++)for(var c=i[a],h=0,u=c.length;h<u;){var f=c[h],d=c[h+1];h===u-1&&(d=c[0]);var g=e.length/3,m=f[0],p=f[1],v=d[0],y=d[1];e.push(m,p,o,v,y,o,m,p,0,v,y,0);var _=g+2,x=g+3,M=g,w=g+1;n.push(_,M,x,M,w,x),Th(s,e,_,x,M,w),h++}}function sv(r){for(var t=0,e=0,n=r.length;e<n;)t+=r[e].length,e++;return t}function ov(r,t){for(var e=sv(r),n=r.length,i=[],s=new Float32Array(e*2),o=[],a=[],l=e*3,c=e*2,h=t.depth,u=0,f=0,d=0,g=0;g<n;g++){var m=r[g];g>0&&i.push(u/2);for(var p=0,v=m.length;p<v;){var y=m[p],_=y[0],x=y[1];s[u++]=_,s[u++]=x,o[f]=_,o[f+1]=x,o[f+2]=h,o[l+f]=_,o[l+f+1]=x,o[l+f+2]=0,a[d]=_,a[d+1]=x,a[c+d]=_,a[c+d+1]=x,f+=3,d+=2,p++}}return{flatVertices:s,holes:i,points:o,count:e,uvs:a}}function av(r){Eh(r)||r.push(r[0])}function Eh(r){var t=r.length,e=r[0],n=e[0],i=e[1],s=r[t-1],o=s[0],a=s[1];return n===o&&i===a}function lv(r,t){t=Object.assign({},{depth:2,lineWidth:1},t);var e=r.map(function(i){var s=uv(i,t);return s.line=i,cv(s,t),hv(s,t),s.position=new Float32Array(s.points),s.indices=new Uint32Array(s.index),s.uv=new Float32Array(s.uvs),s.normal=Ca(s.indices,s.position),s}),n=Ah(e);return n.lines=r,n}function cv(r,t){for(var e=t.depth,n=[],i=[],s=[],o=r.leftPoints,a=r.rightPoints,l=0,c=o.length;l<c;){var h=l*3,u=o[l],f=u[0],d=u[1],g=u[2];n[h]=f,n[h+1]=d,n[h+2]=e+g;var m=a[l],p=m[0],v=m[1],y=m[2],_=c*3+h;n[_]=p,n[_+1]=v,n[_+2]=e+y;var x=c*2*3+h;n[x]=f,n[x+1]=d,n[x+2]=g;var M=c*2*3+c*3+h;n[M]=p,n[M+1]=v,n[M+2]=y,l++}for(l=0,c=n.length;l<c;){var w=n[l],C=n[l+1];s.push(w,C),l+=3}for(l=0,c=o.length;l<c-1;){var b=l,T=l+1,P=b+c,F=T+c;i.push(b,P,T),i.push(P,F,T);var Z=c*2,z=l+Z,R=z+1,U=z+c,G=R+c;i.push(z,U,R),i.push(U,G,R),l++}r.index=i,r.points=n,r.uvs=s}function hv(r,t){var e=r.points,n=r.index,i=r.leftPoints,s=r.rightPoints,o=r.uvs,a=t.depth,l=[i,s];function c(w,C){var b=e.length/3;e.push(w[0],w[1],a+w[2],C[0],C[1],a+C[2],w[0],w[1],w[2],C[0],C[1],C[2]);var T=b+2,P=b+3,F=b,Z=b+1;n.push(T,F,P,F,Z,P),Th(o,e,T,P,F,Z)}for(var h=0,u=l.length;h<u;h++){var f=l[h];h>0&&(f=f.map(function(w){return w}),f=f.reverse());for(var d=0,g=f.length-1;d<g;){var m=f[d],p=f[d+1];c(m,p),d++}}for(var v=i.length,y=[s[0],i[0],i[v-1],s[v-1]],_=0;_<y.length;_+=2){var x=y[_],M=y[_+1];c(x,M)}}var Eo={x:0,y:0},Co={x:0,y:0};function uv(r,t){for(var e=0,n=t.lineWidth/2,i=[],s=[],o=[],a=r.length,l=0;l<a-1;){var c=r[l],h=r[l+1],u=h[1]-c[1],f=h[0]-c[0],d=0,g=Math.atan(u/f),m=ev(g);if(e=m,l===0)d=m,d-=90;else{var p=r[l-1];Eo.x=p[0]-c[0],Eo.y=p[1]-c[1],Co.x=h[0]-c[0],Co.y=h[1]-c[1];var v=fv(Eo,Co);d=m-v/2}var y=gc(d),_=xc(y,n,c),x=_[0],M=_[1];i.push(x,M),vc(x,c,h)?(s.push(x),o.push(M)):(s.push(M),o.push(x)),l++}var w=e;w-=90;var C=gc(w),b=r[a-2],T=r[a-1],P=xc(C,n,T),F=P[0],Z=P[1];return i.push(F,Z),vc(F,b,T)?(s.push(F),o.push(Z)):(s.push(Z),o.push(F)),{offsetPoints:i,leftPoints:s,rightPoints:o}}function xc(r,t,e){var n=e[0],i=e[1],s=e[2]||0,o=Math.cos(r)*t,a=Math.sin(r)*t,l=[n+o,i+a,s],c=r+=Math.PI,h=Math.cos(c)*t,u=Math.sin(c)*t,f=[n+h,i+u,s];return[l,f]}var fv=function(t,e){var n=t.x,i=t.y,s=e.x,o=e.y,a=n*s+i*o,l=n*o-i*s,c=Math.atan2(l,a)/Math.PI*180;return(c+360)%360};function vc(r,t,e){var n=t[0],i=t[1],s=e[0],o=e[1],a=r[0],l=r[1];return(i-o)*a+(s-n)*l+n*o-s*i>0}function dv(r,t){t===void 0&&(t={}),t=Object.assign({},{radius:1,height:2,radialSegments:6},t);for(var e=Math.round(Math.max(4,t.radialSegments)),n=t,i=n.radius,s=n.height,o=360/e/360*Math.PI*2,a=e+1,l=new Float32Array(a*3*2),c=r[0],h=r[1],u=0,f=0,d=a*3,g=a*2,m=[],p=[],v=-1;v<e;v++){var y=o*v,_=Math.cos(y)*i+c,x=Math.sin(y)*i+h;l[u]=_,l[u+1]=x,l[u+2]=0,l[u+d]=_,l[u+1+d]=x,l[u+2+d]=s;var M=0,w=0;M=.5+_/i/2,w=.5+x/i/2,p[f]=M,p[f+1]=w,p[f+g]=M,p[f+1+g]=w,u+=3,f+=2,v>1&&m.push(0,v-1,v)}u-=3,l[u]=l[0],l[u+1]=l[1],l[u+2]=l[2];var C=l.length;l[C-3]=l[0],l[C-2]=l[1],l[C-1]=s;for(var b=m.length,T=0;T<b;T++){var P=m[T];m.push(P+a)}var F=new Float32Array((a*3*2-6)*2),Z=-1;u=a*2,f=0;for(var z=0,R=l.length/2;z<R-3;z+=3){var U=l[z],G=l[z+1],j=l[z+3],k=l[z+4];F[++Z]=U,F[++Z]=G,F[++Z]=s,F[++Z]=j,F[++Z]=k,F[++Z]=s,F[++Z]=U,F[++Z]=G,F[++Z]=0,F[++Z]=j,F[++Z]=k,F[++Z]=0;var I=u+2,D=u+3,Y=u,V=u+1;m.push(Y,I,V,I,D,V),u+=4;var tt=f/a,nt=(f+1)/a;p.push(tt,s/i/2,nt,s/i/2,tt,0,nt,0),f++}var pt=new Float32Array(l.length+F.length);pt.set(l,0),pt.set(F,l.length);var W=Ca(m,pt);return{points:l,indices:new Uint32Array(m),position:pt,normal:W,uv:new Float32Array(p)}}function vs(r,t,e={}){return e[r]===void 0&&(e[r]=t.distanceToVector3(r,r).x),e[r]}function yn(r,t,e={}){return e[r]===void 0&&(e[r]=t.altitudeToVector3(r,r).x),e[r]}function Mr(r=[]){let t=0,e=0;const n=r.length;for(let i=0;i<n;i++){const{coordinate:s,lnglat:o,lnglats:a,xy:l,xys:c}=r[i],h=s||o||a||l||c||r[i];let u,f;Array.isArray(h)?(u=h[0],f=h[1]):h instanceof Zt&&(u=h.x,f=h.y),t+=u,e+=f}return new Zt(t/n,e/n)}function Cn(r,t,e,n){if(t===void 0||typeof t!="number"||t===0)return 0;let i;r instanceof Vt?i=r.attributes.position.array:Array.isArray(r)||r instanceof Float32Array?i=r:i=r.position;let s=0;if(i){n?(n[t]===void 0&&(n[t]=e.altitudeToVector3(t,t).x),s=n[t]):s=e.altitudeToVector3(t,t).x;const o=i.length;if(i[0]instanceof L)for(let a=0;a<o;a++)i[a].z+=s;else for(let a=0;a<o;a+=3)i[a+2]+=s}return s}function La(r){const t=r.length;let e=0;for(let n=0;n<t;n++){const{count:i}=r[n].position;e+=i}return new Float32Array(e*3)}function _s(r=[]){const t=r.length,e=new Float64Array(t*2);for(let n=0;n<t;n++){let i,s;const o=r[n];o.x?(i=o.x,s=o.y):(i=o[0],s=o[1]),e[n*2]=i,e[n*2+1]=s}return e.buffer}const On=new Ot("#fff"),Fn=new Ot("#fff");function pv(r,t,e,n){const{position:i,normal:s,uv:o,indices:a}=Ch(r,t,e,n),l=new Float32Array(i.length);l.fill(1,0,i.length);const c=new Vt;return At(c,"color",new _t(l,3)),At(c,"normal",new _t(s,3)),At(c,"position",new _t(i,3)),At(c,"uv",new _t(o,2)),c.setIndex(new _t(a,1)),c}function Ch(r,t,e,n,i,s){const a=Lh(r,e,n,i,!1);if(!a)return null;s?(s[t]==null&&(s[t]=e.altitudeToVector3(t,t).x),t=s[t]):t=e.altitudeToVector3(t,t).x;const{position:l,normal:c,uv:h,indices:u}=nv(a,{depth:t});return{position:l,normal:c,uv:h,indices:u}}function En(r,t,e,n){n===void 0&&(n=0);const i=r.attributes.position.array,s=i.length;Fn.setStyle(t),On.setStyle(e);let o;if(Array.isArray(n)){let a=0;for(let l=0,c=n.length;l<c;l++){const{count:h}=n[l].position;a+=h*3}o=new Float32Array(a)}else o=new Float32Array(i.length);if(Array.isArray(n))for(let a=0,l=n.length;a<l;a++){const{middleZ:c,start:h,end:u}=n[a].position;for(let f=h;f<u;f+=3)i[f+2]>c?(o[f]=On.r,o[f+1]=On.g,o[f+2]=On.b):(o[f]=Fn.r,o[f+1]=Fn.g,o[f+2]=Fn.b)}else for(let a=0;a<s;a+=3)i[a+2]>n?(o[a]=On.r,o[a+1]=On.g,o[a+2]=On.b):(o[a]=Fn.r,o[a+1]=Fn.g,o[a+2]=Fn.b);return At(r,"color",new _t(o,3,!0)),o}function Lh(r,t,e,n,i=!1){if(!r)return null;let s=[];if(r instanceof gs)s=r.getGeometries().map(o=>rs(o,t,e||r.getCenter(),n,i));else if(r instanceof Ms){const o=rs(r,t,e||r.getCenter(),n,i);s.push(o)}else if(An(r))if(Ta(r)){const o=cr(r);for(let a=0,l=o.length;a<l;a++)s.push(rs(o[a],t,e||Tn(r),n,i))}else{const o=rs(r,t,e||Tn(r),n,i);s.push(o)}return s}function rs(r,t,e,n,i=!1){let s,o;if(An(r)){const c=br(r);s=c[0],o=c.slice(1,c.length),e=e||Tn(r)}else r instanceof Ms&&(s=r.getShell(),o=r.getHoles(),e=e||r.getCenter());n=n||t.coordinateToVector3(e);let a;i?a=t.coordinatiesToGLFloatArray(s,n).positons2d:a=t.coordinatiesToGLArray(s,n);const l=[i?a.buffer:a];if(o&&o.length>0)for(let c=0,h=o.length;c<h;c++){let u;i?u=t.coordinatiesToGLFloatArray(o[c],n).positons2d:u=t.coordinatiesToGLArray(o[c],n),l.push(i?u.buffer:u)}return l}function mv(r){if(!r)return null;let t=[];if(r instanceof gs)t=r.getGeometries().map(e=>ss(e,!1));else if(r instanceof Ms){const e=ss(r,!1);t.push(e)}else if(An(r))if(Ta(r)){const e=cr(r);for(let n=0,i=e.length;n<i;n++)t.push(ss(e[n],!0))}else{const e=ss(r,!0);t.push(e)}return t}function ss(r,t){let e,n;if(t){const o=br(r);e=o[0],n=o.slice(1,o.length)}else r instanceof Ms&&(e=r.getShell(),n=r.getHoles());const s=[_s(e)];if(n&&n.length>0)for(let o=0,a=n.length;o<a;o++){const l=_s(n[o]);s.push(l)}return s}const Ph=",";function ti(r,t,e,n=!0){let i=[],s,o;if(Array.isArray(r)&&r[0]instanceof L)i=r;else{Array.isArray(r)&&(r=new ir(r));const a=0;let l,c;Ls(r)?(l=br(r),e||(c=Tn(r))):r instanceof ir&&(l=r.getCoordinates(),e||(c=r.getCenter()));const h=t.coordinateToVector3(e||c);if(n)for(let u=0,f=l.length;u<f;u++){const d=l[u],g=t.coordinateToVector3(d,a).sub(h);i.push(g)}else{const u=t.coordinatiesToGLFloatArray(l,h);s=u.positions,o=u.positons2d}}if(!n)return{positions:s,positionsV:i,positions2d:o,arrayBuffer:o.buffer};o=new Float32Array(i.length*2),s=new Float32Array(i.length*3);for(let a=0,l=i.length;a<l;a++){const c=a*3,h=i[a];s[c]=h.x,s[c+1]=h.y,s[c+2]=h.z;const u=a*2;o[u]=h.x,o[u+1]=h.y}return{positions:s,positionsV:i,positions2d:o,arrayBuffer:o.buffer}}function _c(r,t,e,n){const i=[],s=[],o=[];let a,l;for(let c=0,h=r.length;c<h;c++){const u=r[c];for(let f=0,d=u.length;f<d;f++){const g=u[f],m=g.join(Ph).toString();if(!a){o.push(g),a=m,l=t.coordinateToVector3(g,0).sub(n),i.push(l.x,l.y,l.z),s.push(l);continue}m!==a&&(l=t.coordinateToVector3(g,0).sub(n),i.push(l.x,l.y,l.z),s.push(l),o.push(g)),a=m}}return{positions:i,positionsV:s,lnglats:o}}function gv(r){let t;const e=[];for(let n=0,i=r.length;n<i;n++){const s=r[n];for(let o=0,a=s.length;o<a;o++){const l=s[o],c=l.join(Ph).toString();if(!t){e.push(l),t=c;continue}c!==t&&e.push(l),t=c}}return e}function ys(r,t=1,e=1,n,i){const s=ti(r,n,i).positionsV,o=[];for(let u=0,f=s.length;u<f;u++){const d=s[u];o.push([d.x,d.y])}const{indices:a,position:l,normal:c,uv:h}=lv([o],{lineWidth:t,depth:e});return{position:l,normal:c,indices:a,uv:h}}function Vi(r){let t=[],e;return r instanceof Su?(t=r.getGeometries(),e=r.getCenter()):r instanceof ir?(t.push(r),e=r.getCenter()):Ls(r)&&(e=Tn(r),Ta(r)?t=cr(r):t.push(r)),{lineStrings:t,center:e}}function Ds(r){const t=new Float32Array(r.length*2-6);let e=0;for(let n=0,i=r.length/3;n<i;n++){const s=r[n*3],o=r[n*3+1],a=r[n*3+2];if(n>0&&n<i-1){const c=e*3;t[c]=s,t[c+1]=o,t[c+2]=a,e++}const l=e*3;t[l]=s,t[l+1]=o,t[l+2]=a,e++}return t}function Is(r){let t=0;const e=r.length;if(e===1)return r[0];for(let s=0;s<e;s++)t+=r[s].length;const n=new Float32Array(t);let i=0;for(let s=0;s<e;s++)n.set(r[s],i),i+=r[s].length;return n}function Rh(r){if(r instanceof ir)return _s(r.getCoordinates());if(on(r))return _s(r.geometry.coordinates)}let os;function Dh(){return os||(os=new Vt,At(os,"position",new _t(new Float32Array(3),3))),os}const xv="__maptalks.three__";function vv(){return xv}let sa;Uo&&(sa=class extends Uo.Actor{test(r,t){this.send(r,null,t)}pushQueue(r={}){const{type:t,data:e,callback:n,layer:i,key:s,center:o,lineStrings:a,options:l,id:c}=r;let h;t.indexOf("ExtrudePolygon")>-1?h=yv(e,o,i,l):t==="ExtrudeLines"?h=yc(e,o,i,a):t==="Point"||(t==="Line"||t==="FatLine"?h=bc(e,o,i,a,l):t==="Lines"||t==="FatLines"?h=bc(e,o,i,a):t==="ExtrudeLine"?h=yc(e,o,i,a,l):(t==="Bar"||t==="Bars")&&(h=bv(e))),h&&this.send({type:t,datas:h.datas,glRes:h.glRes,matrix:h.matrix,center:h.center},h.transfer,function(u,f){f.key=s,f.id=c,n(f)})}});var Lo;function Be(){return!Lo&&sa&&(Lo=new sa(vv())),Lo}function _v(r,t,e={}){return r!==void 0&&typeof r=="number"&&r!==0?(e[r]===void 0&&(e[r]=t.distanceToVector3(r,r).x),e[r]):0}function dr(r,t,e={}){return r!==void 0&&typeof r=="number"&&r!==0?(e[r]===void 0&&(e[r]=t.altitudeToVector3(r,r).x),e[r]):0}function yv(r=[],t,e,n=[]){const i=e.isMercator();let s,o;if(i){const f=e.getMap();s=f.getGLRes(),o=f.getSpatialReference().getTransformation().matrix}let a;t&&(a=e.coordinateToVector3(t));const l=r.length,c=[],h=[],u={};for(let f=0;f<l;f++){const d=r[f],g=d,m=n[f]?n[f]:An(g)?g.properties:g.getProperties()||{};t||(a=e.coordinateToVector3(m.center));let p;i?p=mv(d):p=Lh(d,e,m.center||t,a,!0);for(let x=0,M=p.length;x<M;x++){const w=p[x];for(let C=0,b=w.length;C<b;C++)h.push(w[C])}let v=m.height||1,y=m.bottomHeight||0;v=dr(v,e,u),y=dr(y,e,u);const _={id:m.id,data:p,height:v,bottomHeight:y};i&&(_.center=[a.x,a.y]),c.push(_),g._properties&&delete g._properties}return{datas:c,transfer:h,glRes:s,matrix:o,center:i?[a.x,a.y]:null}}function yc(r,t,e,n,i=[]){const s=e.isMercator();let o,a;if(s){const g=e.getMap();o=g.getGLRes(),a=g.getSpatialReference().getTransformation().matrix}let l;t&&(l=e.coordinateToVector3(t));const c=[],h=[],u={},f={},d=r.length;for(let g=0;g<d;g++){const m=r[g],p=i[g]?i[g]:on(n[g])?n[g].properties:n[g].getProperties()||{};t||(l=e.coordinateToVector3(p.center));let v=p.width||1,y=p.height||1,_=p.bottomHeight||0;v=_v(v,e,u),y=dr(y,e,f),_=dr(_,e,f);const x=[];for(let w=0,C=m.length;w<C;w++){const b=m[w];let T;s?T=Rh(b):T=ti(b,e,t,!1).arrayBuffer,h.push(T),x.push(T)}const M={id:p.id,data:x,height:y,width:v,bottomHeight:_};s&&(M.center=[l.x,l.y]),c.push(M)}return{datas:c,transfer:h,glRes:o,matrix:a,center:s?[l.x,l.y]:null}}function bc(r,t,e,n,i=[]){const s=e.isMercator();let o,a;if(s){const d=e.getMap();o=d.getGLRes(),a=d.getSpatialReference().getTransformation().matrix}let l;t&&(l=e.coordinateToVector3(t));const c=[],h=[],u={},f=r.length;for(let d=0;d<f;d++){const g=r[d],m=i[d]?i[d]:on(n[d])?n[d].properties:n[d].getProperties()||{};t||(l=e.coordinateToVector3(m.center));let p=m.bottomHeight||0;p=dr(p,e,u);const v=[];for(let _=0,x=g.length;_<x;_++){const M=g[_];if(s){const w=Rh(M);v.push(w),v.push(w)}else{const w=ti(M,e,t,!1).arrayBuffer;h.push(w),v.push(w)}}const y={id:m.id,data:v,bottomHeight:p};s&&(y.center=[l.x,l.y]),c.push(y)}return{datas:c,transfer:h,glRes:o,matrix:a,center:s?[l.x,l.y]:null}}function bv(r){const t=r.length,e=new Float32Array(t*7);let n=0;for(let s=0;s<t;s++){let{center:o,radialSegments:a,radius:l,height:c,altitude:h,id:u}=r[s];o=o||[0,0],e[n]=o[0],e[n+1]=o[1],e[n+2]=a||6,e[n+3]=l||1,e[n+4]=c,e[n+5]=h||0,e[n+6]=u,n+=7}const i=e.buffer;return{datas:i,transfer:[i]}}function wr(r){return r.map(t=>t.data)}function Sr(r){return r.map(t=>t.option||t.baseObject.getOptions())}class je{constructor(){this.queueMap={},this.tempQueue=[],this.time=this.getCurrentTime(),this.deQueueCount=5,this.resultQueue=[]}getActor(){return Be()}getCurrentTime(){return lt.now()}loop(){this.deQueue()}push(t){return this.tempQueue.push(t),t.id&&(this.queueMap[t.id]=t),this}reset(){return this.time=this.getCurrentTime(),this.tempQueue=[],this}pushResult(t){if(!!t)return Array.isArray(t)||(t=[t]),t.forEach(e=>{this.resultQueue.push(e)}),this}deQueue(){if(!this.resultQueue.length)return this;const t=this.deQueueCount;return(this.resultQueue.slice(0,t)||[]).forEach(n=>{const{id:i}=n;if(this.queueMap[i]){const{baseObject:s}=this.queueMap[i];s&&s._workerLoad&&s._workerLoad(n),delete this.queueMap[i]}}),this.resultQueue.splice(0,t),this}}class Mv extends je{constructor(){super(),this.deQueueCount=100}loop(){(this.getCurrentTime()-this.time>=32||this.tempQueue.length>=1e3)&&this.tempQueue.length&&(Be().pushQueue({type:"ExtrudePolygon",layer:this.tempQueue[0].layer,data:wr(this.tempQueue),options:Sr(this.tempQueue),callback:n=>{this.pushResult(n)}}),this.reset()),super.loop()}}class wv extends je{loop(){if(this.tempQueue.length){const t=Be();this.tempQueue.forEach(e=>{t.pushQueue({id:e.id,type:"ExtrudePolygons",layer:e.layer,data:e.data,key:e.key,center:e.center,callback:n=>{this.pushResult(n)}})}),this.reset()}super.loop()}}class Sv extends je{constructor(){super(),this.deQueueCount=100}loop(){(this.getCurrentTime()-this.time>=32||this.tempQueue.length>=1e3)&&this.tempQueue.length&&(Be().pushQueue({type:"ExtrudeLine",layer:this.tempQueue[0].layer,data:wr(this.tempQueue),options:Sr(this.tempQueue),lineStrings:this.tempQueue.map(n=>n.lineString),callback:n=>{this.pushResult(n)}}),this.reset()),super.loop()}}class Av extends je{loop(){if(this.tempQueue.length){const t=Be();this.tempQueue.forEach(e=>{t.pushQueue({id:e.id,type:"ExtrudeLines",layer:e.layer,data:e.data,key:e.key,lineStrings:e.lineStrings,center:e.center,callback:n=>{this.pushResult(n)}})}),this.reset()}super.loop()}}class Tv extends je{constructor(){super(),this.deQueueCount=200}loop(){(this.getCurrentTime()-this.time>=32||this.tempQueue.length>=1e3)&&this.tempQueue.length&&(Be().pushQueue({type:"Line",layer:this.tempQueue[0].layer,data:wr(this.tempQueue),options:Sr(this.tempQueue),lineStrings:this.tempQueue.map(n=>n.lineString),callback:n=>{this.pushResult(n)}}),this.reset()),super.loop()}}class Ev extends je{loop(){if(this.tempQueue.length){const t=Be();this.tempQueue.forEach(e=>{t.pushQueue({id:e.id,type:"Lines",layer:e.layer,data:e.data,key:e.key,lineStrings:e.lineStrings,center:e.center,callback:n=>{this.pushResult(n)}})}),this.reset()}super.loop()}}class Cv extends je{constructor(){super(),this.deQueueCount=100}loop(){(this.getCurrentTime()-this.time>=32||this.tempQueue.length>=1e3)&&this.tempQueue.length&&(Be().pushQueue({type:"FatLine",layer:this.tempQueue[0].layer,data:wr(this.tempQueue),options:Sr(this.tempQueue),lineStrings:this.tempQueue.map(n=>n.lineString),callback:n=>{this.pushResult(n)}}),this.reset()),super.loop()}}class Lv extends je{loop(){if(this.tempQueue.length){const t=Be();this.tempQueue.forEach(e=>{t.pushQueue({id:e.id,type:"FatLines",layer:e.layer,data:e.data,key:e.key,lineStrings:e.lineStrings,center:e.center,callback:n=>{this.pushResult(n)}})}),this.reset()}super.loop()}}class Pv extends je{constructor(){super(),this.deQueueCount=100}loop(){(this.getCurrentTime()-this.time>=32||this.tempQueue.length>=1e3)&&this.tempQueue.length&&(Be().pushQueue({type:"Bar",layer:this.tempQueue[0].layer,data:wr(this.tempQueue),options:Sr(this.tempQueue),callback:n=>{this.pushResult(n)}}),this.reset()),super.loop()}}class Rv extends je{constructor(){super(),this.deQueueCount=1}loop(){if(this.tempQueue.length){const t=Be();this.tempQueue.forEach(e=>{t.pushQueue({id:e.id,type:"Bars",layer:e.layer,data:e.data,callback:n=>{this.pushResult(n)}})}),this.reset()}super.loop()}}const Ih=new Mv,Oh=new wv,Pa=new Sv,Fh=new Av,zh=new Tv,Nh=new Ev,Bh=new Cv,Uh=new Lv,kh=new Pv,Gh=new Rv,Ke={isRunning:!1,tasks:[],addTask:r=>{r&&Ke.tasks.push(r)},removeTask:r=>{Ke.tasks.splice(Ke.tasks.indexOf(r),1)},loop(){Ih.loop(),Oh.loop(),Pa.loop(),Fh.loop(),zh.loop(),Nh.loop(),Bh.loop(),Uh.loop(),kh.loop(),Gh.loop(),Ke.tasks.forEach(r=>{r&&r.loop&&r.loop()}),lt.requestAnimFrame(Ke.loop)},star(){Ke.isRunning||(Ke.isRunning=!0,Ke.loop())}};function Os(r){const{position:t,normal:e,uv:n,indices:i}=Vh(r),s=new Vt,o=new Float32Array(t.length);return o.fill(1,0,t.length),At(s,"color",new _t(o,3)),At(s,"normal",new _t(e,3)),At(s,"position",new _t(t,3)),n&&n.length&&At(s,"uv",new _t(n,2)),s.setIndex(new _t(i,1)),s}function Vh(r){const t={},e={};for(let o=0;o<r.length;++o){const a=r[o];for(const l in a)t[l]===void 0&&(t[l]=[],e[l]=0),t[l].push(a[l]),e[l]+=a[l].length}const n={};let i=0;const s=new Uint32Array(e.indices);for(const o in t)if(o==="indices"){const a=t[o];let l=0;for(let c=0,h=a.length;c<h;c++){const u=a[c];for(let f=0,d=u.length;f<d;f++)s[l]=u[f]+i,l++;i+=t.position[c].length/3}}else{const a=Dv(t[o],e[o]);if(!a)return null;n[o]=a}return n.indices=s,n}function Dv(r,t){const e=new Float32Array(t);let n=0;for(let i=0;i<r.length;++i)e.set(r[i],n),n+=r[i].length;return e}function Hi(r){const{position:t,normal:e,uv:n,indices:i}=r,s=new Vt;return At(s,"normal",new _t(new Float32Array(e),3)),At(s,"position",new _t(new Float32Array(t),3)),At(s,"uv",new _t(new Float32Array(n),2)),s.setIndex(new _t(new Uint32Array(i),1)),s}function Yn(r){const t=new Vt;return At(t,"normal",r.getAttribute("normal")),At(t,"position",r.getAttribute("position").clone()),t.setIndex(r.getIndex()),t}let Po;function ei(){return Po||(Po=new vh(1e-6,1e-6,1e-6)),Po}ei();const Hh=new vh(1,1,1);Hh.translate(0,0,.5);const zn=new Ot("#fff"),Nn=new Ot("#fff");function Iv(r){const{position:t,normal:e,uv:n,indices:i}=dv(r.center||[0,0],r),s=new Vt;return At(s,"normal",new _t(e,3)),At(s,"position",new _t(t,3)),At(s,"uv",new _t(n,2)),s.setIndex(new _t(i,1)),s}function Wh(r){const t=Object.assign({},r);return t._radius&&(t.radius=t._radius),Iv(t)}function Ni(r,t,e,n="y",i=0){let s=0;n==="y"?s=1:n==="z"&&(s=2);const o=r.attributes.position.array,a=o.length;Nn.setStyle(t),zn.setStyle(e);const l=new Float32Array(a);if(Array.isArray(i))for(let c=0,h=i.length;c<h;c++){const{middleZ:u,start:f,end:d}=i[c].position;for(let g=f;g<d;g+=3)o[g+2]>u?(l[g]=zn.r,l[g+1]=zn.g,l[g+2]=zn.b):(l[g]=Nn.r,l[g+1]=Nn.g,l[g+2]=Nn.b)}else for(let c=0;c<a;c+=3)o[c+s]>i?(l[c]=zn.r,l[c+1]=zn.g,l[c+2]=zn.b):(l[c]=Nn.r,l[c+1]=Nn.g,l[c+2]=Nn.b);return At(r,"color",new _t(l,3,!0)),l}function jh(r){const t=[],e=r.length;let n=0;for(let a=0;a<e;a++){const{color:l}=r[a].attributes;l&&(n+=l.array.length)}const i=new Float32Array(n);let s=0;for(let a=0,l=r.length;a<l;a++){const{color:c,normal:h,position:u,uv:f}=r[a].attributes,d=r[a].index;c&&(i.set(c.array,s),s+=c.array.length),t.push({normal:h.array,uv:f.array,position:u.array,indices:d.array})}const o=Os(t);i.length&&At(o,"color",new _t(i,3,!0));for(let a=0,l=r.length;a<l;a++)r[a].dispose();return o}function Xh(){return Hh}const Ov={radius:10,height:100,radialSegments:6,altitude:0,topColor:"",bottomColor:"#2d2f61",heightEnable:!0};class oa extends $t{constructor(t,e,n,i){e=lt.extend({},Ov,e,{layer:i,coordinate:t}),super(),this._initOptions(e);const{height:s,radius:o,topColor:a,bottomColor:l,altitude:c,asynchronous:h}=e;e.height=i.altitudeToVector3(s,s).x,e.radius=i.distanceToVector3(o,o).x;let u;if(h){u=ei();const g=lt.GUID();this.getOptions().id=g,kh.push({data:{radius:e.radius,height:e.height,radialSegments:e.radialSegments,id:g},layer:i,id:g,baseObject:this})}else u=Wh(e),a&&(Ni(u,l,a,"z",e.height/2),n.vertexColors=oe());this._createMesh(u,n);const f=i.altitudeToVector3(c,c).x,d=i.coordinateToVector3(t,f);this.getObject3d().position.copy(d),this.type="Bar"}_workerLoad(t){const e=Hi(t),{topColor:n,bottomColor:i,height:s}=this.getOptions(),o=this.getObject3d(),a=o.material;if(n){const c=this.getLayer().altitudeToVector3(s,s).x;Ni(e,i,n,"z",c/2),a.vertexColors=oe()}o.geometry=e,o.material.needsUpdate=!0,this._fire("workerload",{target:this})}}function Mc(r){const t=[];return r&&r.length&&r.forEach(e=>{e=e instanceof Ot?e:new Ot(e),t.push(e.r,e.g,e.b)}),t}const Fv={altitude:0,bottomHeight:0,colors:null};class Zh extends $t{constructor(t,e,n,i){e=lt.extend({},Fv,e,{layer:i,lineString:t}),super(),this._initOptions(e);const{lineStrings:s,center:o}=Vi(t),{asynchronous:a}=e;let l;if(a){l=Dh();const f=lt.GUID();this.getOptions().id=f,this.getOptions().center=o,zh.push({id:f,data:s,layer:i,key:e.key,lineString:t,baseObject:this})}else{const f=[];for(let m=0,p=s.length;m<p;m++){const v=s[m],{positions:y}=ti(v,i,o,!1);f.push(Ds(y))}const d=Is(f);l=new Vt,At(l,"position",new _t(d,3)),Cn(l,e.bottomHeight,i);const g=Mc(e.colors);g&&g.length&&(At(l,"color",new he(g,3)),n.vertexColors=oe())}this._createLineSegments(l,n);const{altitude:c}=e,h=i.altitudeToVector3(c,c).x,u=i.coordinateToVector3(o,h);this.getObject3d().position.copy(u),this.type="Line"}_workerLoad(t){const e=new Vt;At(e,"position",new _t(new Float32Array(t.position),3));const n=Mc(this.getOptions().colors),i=this.getObject3d(),s=i.material;n&&n.length&&(At(e,"color",new he(n,3)),s.vertexColors=oe()),this._computeLineDistances(e),i.geometry=e,i.material.needsUpdate=!0,this._fire("workerload",{target:this})}}const zv={bottomHeight:0,width:3,height:1,altitude:0,topColor:null,bottomColor:"#2d2f61",heightEnable:!0};class $h extends $t{constructor(t,e,n,i){e=lt.extend({},zv,e,{layer:i,lineString:t}),super(),this._initOptions(e);const{height:s,width:o,bottomColor:a,topColor:l,bottomHeight:c,altitude:h,asynchronous:u}=e,f=i.altitudeToVector3(s,s).x,d=i.distanceToVector3(o,o).x,{lineStrings:g,center:m}=Vi(t);let p;if(u){p=ei();const _=lt.GUID();this.getOptions().id=_,this.getOptions().center=m,Pa.push({id:_,data:g,layer:i,center:m,lineString:t,baseObject:this})}else{const _=[];let x=0;const M={};for(let w=0,C=g.length;w<C;w++){const b=ys(g[w],d,f,i,m);x=Cn(b,c,i,M),_.push(b)}p=Os(_),l&&(En(p,a,l,x+f/2),n.vertexColors=oe())}this._createMesh(p,n);const v=i.altitudeToVector3(h,h).x,y=i.coordinateToVector3(m,v);this.getObject3d().position.copy(y),this.type="ExtrudeLine"}_workerLoad(t){const e=Hi(t),{topColor:n,bottomColor:i,bottomHeight:s,height:o}=this.getOptions(),a=this.getObject3d(),l=a.material;if(n){const c=this.getLayer(),h=c.altitudeToVector3(s,s).x,u=c.altitudeToVector3(o,o).x;En(e,i,n,h+u/2),l.vertexColors=oe()}a.geometry=e,a.material.needsUpdate=!0,this._fire("workerload",{target:this})}}const Nv={altitude:0,height:1,bottomHeight:0,topColor:null,bottomColor:"#2d2f61",heightEnable:!0};class qh extends $t{constructor(t,e,n,i){e=lt.extend({},Nv,e,{layer:i,polygon:t}),super(),this._initOptions(e);const{height:s,topColor:o,bottomColor:a,altitude:l,bottomHeight:c,asynchronous:h}=e;let u;const f=An(t)?Tn(t):t.getCenter();if(h){u=ei();const m=lt.GUID();this.getOptions().id=m,this.getOptions().center=f,Ih.push({data:t,layer:i,id:m,baseObject:this})}else{u=pv(t,s,i);const m=Cn(u,c,i);if(o){const p=i.altitudeToVector3(s,s).x;En(u,a,o,m+p/2),n.vertexColors=oe()}}this._createMesh(u,n);const d=i.altitudeToVector3(l,l).x,g=i.coordinateToVector3(f,d);this.getObject3d().position.copy(g),this.type="ExtrudePolygon"}_workerLoad(t){const e=Hi(t),{topColor:n,bottomColor:i,bottomHeight:s,height:o}=this.getOptions(),a=this.getObject3d(),l=a.material;if(n){const c=this.getLayer(),h=c.altitudeToVector3(s,s).x,u=c.altitudeToVector3(o,o).x;En(e,i,n,h+u/2),l.vertexColors=oe()}a.geometry=e,a.material.needsUpdate=!0,this._fire("workerload",{target:this})}}const Bv={altitude:0,coordinate:null};class Uv extends $t{constructor(t,e={},n){e.coordinate||(e.coordinate=n.getMap().getCenter()),e=lt.extend({},Bv,e,{layer:n,model:t}),super(),this._initOptions(e),this._createGroup(),this.getObject3d().add(t);const{altitude:i,coordinate:s}=e,o=n.altitudeToVector3(i,i).x,a=n.coordinateToVector3(s,o);this.getObject3d().position.copy(a),this.type="Model"}}const kv=Math.PI/180,Gv=6378137,Vv=.1;function Hv(r){return r.getCoordinates().map(e=>e.toArray())}function as(r){return r*kv}function Wv(r,t){if(!r||!t)return 0;Array.isArray(r)||(r=r.toArray()),Array.isArray(t)||(t=t.toArray());let e=as(r[1]);const n=as(t[1]),i=e-n,s=as(r[0])-as(t[0]);return e=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(e)*Math.cos(n)*Math.pow(Math.sin(s/2),2))),e*=Gv,Math.round(e*1e5)/1e5}function jv(r,t){const{len:e,c1:n,c2:i}=r,s=i[0]-n[0],o=i[1]-n[1],a=t/e,l=n[0]+a*s,c=n[1]+a*o;return[l,c]}function Xv(r,t=10){t=Math.max(t,Vv),Array.isArray(r)||(r=Hv(r));const e=r.length;let n=[],i=0;for(let f=0;f<e-1;f++){const d=Wv(r[f],r[f+1]),g=Math.floor(d);n.push({c1:r[f],len:g,c2:r[f+1]}),i+=g}if(i<=t)return n.map(d=>[d.c1,d.c2]);if(n.length===1&&n[0].len<=t)return[[n[0].c1,n[0].c2]];const s=n.length,o=n[0];let a=0,l,c=0;const h=[];let u=[o.c1];for(;a<s;){const{len:f,c2:d}=n[a];if(c+=f,c<t&&(u.push(d),a===s-1&&h.push(u),a++),c===t&&(u.push(d),c=0,h.push(u),u=[d],a++),c>t){const g=f-c+t;l=jv(n[a],g),u.push(l),h.push(u),c=0,n[a].c1=l,n[a].len=f-g,u=[],u.push(l)}}return h}const Ro=1e3;function Zv(r,t,e,n){const i=t.length;r.attributes.normal.count=i,r.attributes.position.count=i;const s=r.attributes.position.array,o=r.attributes.normal.array;for(let a=0;a<i;a++)s[a]=t[a],o[a]=e[a];r.index.count=n.length;for(let a=0,l=n.length;a<l;a++)r.index.array[a]=n[a]}const $v={trail:5,chunkLength:50,width:2,height:1,speed:1,altitude:0,interactive:!1,heightEnable:!0};class qv extends $t{constructor(t,e,n,i){e=lt.extend({},$v,e,{layer:i,lineString:t}),super(),this._initOptions(e);const{width:s,height:o,altitude:a,speed:l,chunkLength:c,trail:h}=e;let u,f;Ls(t)?(u=Tn(t),f=br(t)):(u=t.getCenter(),f=t);const d=Xv(f,c),g=i.coordinateToVector3(u),m=new Vt,p=new Float32Array(Ro*3),v=new Float32Array(Ro*3),y=new Uint16Array(Ro);At(m,"position",new _t(p,3)),At(m,"normal",new _t(v,3)),m.setIndex(new _t(y,1));const _=i.distanceToVector3(s,s).x,x=i.altitudeToVector3(o,o).x;this._createMesh(m,n);const M=i.altitudeToVector3(a,a).x,w=i.coordinateToVector3(u,M);this.getObject3d().position.copy(w),this._params={index:0,chunkLines:d,geometries:[],layer:i,trail:Math.max(1,h),lineWidth:_,depth:x,speed:Math.min(1,l),idx:0,loaded:!0,center:u,centerPt:g,workerInitCount:0},this._init(this._params),this.type="ExtrudeLineTrail"}_init(t){const{layer:e,trail:n,lineWidth:i,depth:s,chunkLines:o,positionMap:a,centerPt:l,center:c}=t,h=o.length,u=[];if(this.options.asynchronous){t.loaded=!1;const f=lt.GUID();for(let d=0;d<h;d++){const g=o.slice(d,d+n),p={type:"Feature",geometry:{type:"LineString",coordinates:gv(g)}},v=`${f}-${d}`,y=lt.extend({},this.options);y.id=v,y.center=c,Pa.push({id:v,data:[p],layer:e,center:c,lineString:p,baseObject:this,option:y})}}else for(let f=0;f<h;f++){const d=o.slice(f,f+n),g=_c(d,e,a,l).positionsV;u.push(ys(g,i,s,e))}}_animation(){const{index:t,geometries:e,speed:n,idx:i,chunkLines:s,trail:o,lineWidth:a,depth:l,loaded:c,layer:h,positionMap:u,centerPt:f}=this._params;if(!c)return;const d=Math.round(t);if(d>i){this._params.idx++;let g=e[d];if(!g){const p=s.slice(d,d+o),v=_c(p,h,u,f).positionsV;g=ys(v,a,l,h),e[d]=g}const m=this.getObject3d();Zv(m.geometry,g.position,g.normal,g.indices),m.geometry.attributes.position.needsUpdate=!0,m.geometry.attributes.normal.needsUpdate=!0,m.geometry.index.needsUpdate=!0}t>=s.length-1&&(this._params.index=-1,this._params.idx=-1),this._params.index+=n}_workerLoad(t){if(!t)return this;const{id:e,indices:n,position:i,normal:s,uv:o}=t;if(!e||!n||!i||!s||!o)return;let a=e.split("-")[1];if(a=parseInt(a),lt.isNumber(a)){const l=this._params.geometries;l[a]={indices:new Uint32Array(n),position:new Float32Array(i),uv:new Float32Array(o),normal:new Float32Array(s)},this._params.workerInitCount++}this._params.workerInitCount===this._params.chunkLines.length&&(this._params.loaded=!0,this._fire("workerload",{target:this}))}}const Yv=["click","mousemove","mousedown","mouseup","dblclick","contextmenu"].join(" ").toString(),Yh=new pa;Yh.vertexColors=oe();const ni=r=>class extends r{_initBaseObjectsEvent(t){if(t&&Array.isArray(t)&&t.length)for(let e=0,n=t.length;e<n;e++){const i=t[e];this._proxyEvent(i)}return this}_proxyEvent(t){t.on("add",e=>{this._showGeometry(e.target,!0)}),t.on("remove",e=>{this._showGeometry(e.target,!1)}),t.on("mouseout",e=>{this._mouseover=!1,this.fire("mouseout",Object.assign({},e,{target:this,selectMesh:this.getSelectMesh?this.getSelectMesh():null}))}),t.on(Yv,e=>{this.fire(e.type,Object.assign({},e,{target:this,selectMesh:this.getSelectMesh?this.getSelectMesh():null}))})}_getHideGeometryIndex(t){const e=[];let n=0;for(let i=0,s=this._geometriesAttributes.length;i<s;i++)this._geometriesAttributes[i].hide===!0&&(e.push(i),n+=this._geometriesAttributes[i][t].count);return{indexs:e,count:n}}_updateAttribute(t,e){const{indexs:n}=this._getHideGeometryIndex(e),i=this._geometryCache.attributes[e].array,s=i.length;for(let a=0;a<s;a++)t.array[a]=i[a];let o=NaN;this.getObject3d()instanceof ya&&(o=0);for(let a=0;a<n.length;a++){const l=n[a],{start:c,end:h}=this._geometriesAttributes[l][e];for(let u=c;u<h;u++)t.array[u]=o}return this}_showGeometry(t,e){let n;if(t&&(n=t.getOptions().index),n!=null){const i=this._geometriesAttributes[n],{hide:s}=i;if(s===e)return this;i.hide=e;const o=this.getObject3d().geometry;this._updateAttribute(o.attributes.position,"position"),o.attributes.position.needsUpdate=!0,this.isHide=e}return this}getSelectMesh(){const t=this._getIndex();if(t!=null)return{data:this._datas[t],baseObject:this._baseObjects[t]}}_getIndex(t){return t==null&&(t=this.faceIndex||this.index),t}_init(){const t=this.getLayer().getPick();this.on("add",()=>{t.add(this.pickObject3d)}),this.on("remove",()=>{t.remove(this.pickObject3d)})}_setPickObject3d(){if(!this._colorMap)return;const t=this._geometryCache||this.getObject3d().geometry.clone(),e=this.getLayer().getPick(),{_geometriesAttributes:n}=this,i=n.length,s=La(n);let o=0;for(let h=0;h<i;h++){const u=e.getColor(),f=u.getHex();this._colorMap[f]=h;const{count:d}=n[h].position;this._datas[h].colorIndex=f;for(let g=0;g<d;g++)s[o]=u.r,s[o+1]=u.g,s[o+2]=u.b,o+=3}At(t,"color",new _t(s,3,!0));const l=e.getColor().getHex(),c=new ye(t,Yh);c.position.copy(this.getObject3d().position),c._colorIndex=l,this.setPickObject3d(c)}},Jv={altitude:0,height:1,bottomHeight:0,topColor:null,bottomColor:"#2d2f61"},Qv=new Zt(0,0);class Kv extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]);const s=t.length;let o=1/0,a=1/0,l=-1/0,c=-1/0;for(let x=0;x<s;x++){const M=t[x],w=M.getCenter?M.getCenter():Tn(M,Qv);let C,b;Array.isArray(w)?(C=w[0],b=w[1]):w instanceof Zt&&(C=w.x,b=w.y),o=Math.min(o,C),a=Math.min(a,b),l=Math.max(l,C),c=Math.max(c,b)}const h=new Zt((o+l)/2,(a+c)/2);e=lt.extend({},Jv,e,{layer:i,polygons:t,coordinate:h});const{topColor:u,bottomColor:f,altitude:d,asynchronous:g}=e;let m;const p=[],v=[];if(super(),g)m=ei(),Oh.push({id:lt.GUID(),layer:i,key:e.key,center:h,data:t,baseObject:this});else{const x=i.coordinateToVector3(h),M=[];let w=0;const C={};for(let b=0;b<s;b++){const T=t[b],P=An(T)?T.properties:T.getProperties()||{},F=P.height||1,Z=P.bottomHeight||0,z=Ch(T,F,i,h,x,C);M.push(z);const R=Cn(z,Z,i,C),{position:U,normal:G,uv:j,indices:k}=z;k.length/3;const I=U.length/3;G.length/3,j.length/2,v[b]={position:{middleZ:R+C[F]/2,count:I,start:w,end:w+I*3},hide:!1},w+=I*3}m=Os(M),u&&(En(m,f,u,v),n.vertexColors=oe())}this._initOptions(e),this._createMesh(m,n);const y=i.altitudeToVector3(d,d).x,_=i.coordinateToVector3(h,y);this.getObject3d().position.copy(_),this._baseObjects=p,this._datas=t,this._geometriesAttributes=v,this.faceIndex=null,this._geometryCache=Yn(m),this.isHide=!1,this._colorMap={},this._initBaseObjectsEvent(p),g||(this._setPickObject3d(),this._init()),this.type="ExtrudePolygons"}getSelectMesh(){const t=this._getIndex();if(t!=null){if(!this._baseObjects[t]){const e=this._datas[t],n=Object.assign({},this.options,An(e)?e.properties:e.getProperties(),{index:t});this._baseObjects[t]=new qh(e,n,this.getObject3d().material,this.getLayer()),this._proxyEvent(this._baseObjects[t])}return{data:this._datas[t],baseObject:this._baseObjects[t]}}}identify(t){return this.picked}_workerLoad(t){const{geometriesAttributes:e}=t;this._geometriesAttributes=e;const n=Hi(t);this._geometryCache=Yn(n);const{topColor:i,bottomColor:s}=this.getOptions(),o=this.getObject3d(),a=o.material;i&&(En(n,s,i,e),a.vertexColors=oe()),o.geometry=n,o.material.needsUpdate=!0,this._setPickObject3d(),this._init(),this.isAdd&&this.getLayer().getPick().add(this.pickObject3d),this._fire("workerload",{target:this})}}function Jh(r,t,e){const n=r.project(e),i=t.width/2,s=t.height/2;return{x:Math.round(n.x*i+i),y:Math.round(-n.y*s+s)}}const t_={altitude:0,height:0,color:null},ls=new L;class Qh extends $t{constructor(t,e,n,i){e=lt.extend({},t_,e,{layer:i,coordinate:t}),super();let{height:s,altitude:o,color:a,size:l}=e;const c=[],h=[];a&&(a=a instanceof Ot?a:new Ot(a),h.push(a.r,a.g,a.b));const u=i.altitudeToVector3(s,s).x,f=i.coordinateToVector3(t,u);c.push(0,0,f.z);const d=new Vt;At(d,"position",new he(c,3,!0)),h.length&&At(d,"color",new he(h,3,!0)),l!==void 0&&At(d,"size",new he([l],1,!0)),e.positions=f,this._initOptions(e),this._createPoints(d,n);const g=i.altitudeToVector3(o,o).x,m=new L(f.x,f.y,g);this.getObject3d().position.copy(m),this.type="Point"}identify(t){const e=this.getLayer(),n=this.getMap().getSize(),i=this.getLayer().getCamera(),s=this.getOptions().positions,o=this.getOptions().altitude;let a=this.getObject3d().material.size;a===void 0&&(a=this.options.size||1);const l=this.getMap().coordToContainerPoint(t),c=e.altitudeToVector3(o,o).x;ls.x=s.x,ls.y=s.y,ls.z=s.z+c;const h=Jh(ls,n,i);return Math.sqrt(Math.pow(l.x-h.x,2)+Math.pow(l.y-h.y,2))<=a/2}}const Do=30,Io=30;function gn(r,t){const{minx:e,miny:n,maxx:i,maxy:s}=r,[o,a]=t;return e<=o&&o<=i&&n<=a&&a<=s}class Ra{constructor(t,e,n,i){this.minlng=t,this.minlat=e,this.maxlng=n,this.maxlat=i,this.minx=1/0,this.miny=1/0,this.maxx=-1/0,this.maxy=-1/0,this.coordinates=[],this.positions=[],this.indexs=[],this.key=null}updateBBoxPixel(t){let e=1/0,n=1/0,i=-1/0,s=-1/0;const{minlng:o,minlat:a,maxlng:l,maxlat:c}=this;return[[o,a],[o,c],[l,a],[l,c]].map(h=>new Zt(h)).map(h=>t.coordToContainerPoint(h)).forEach(h=>{e=Math.min(e,h.x),n=Math.min(n,h.y),i=Math.max(i,h.x),s=Math.max(s,h.y)}),this.minx=e,this.miny=n,this.maxx=i,this.maxy=s,this}containsCoordinate(t){let e,n;Array.isArray(t)?(e=t[0],n=t[1]):t instanceof Zt&&(e=t.x,n=t.y);const{minlng:i,minlat:s,maxlng:o,maxlat:a}=this;return i<=e&&e<=o&&s<=n&&n<=a}isRecCross(t,e){const{x:n,y:i}=t,s={minx:n-e/2,miny:i-e/2,maxx:n+e/2,maxy:i+e/2},{minx:o,miny:a,maxx:l,maxy:c}=s;return!!(gn(this,[o,a])||gn(this,[o,c])||gn(this,[l,a])||gn(this,[l,c])||gn(s,[this.minx,this.miny])||gn(s,[this.minx,this.maxy])||gn(s,[this.maxx,this.miny])||gn(s,[this.maxx,this.maxy]))}static initGrids(t,e,n,i){const s=[],o=n-t,a=i-e,l=o/Io,c=a/Do;let h=t,u=e;for(let f=0;f<Io;f++){h=t+f*l;for(let d=0;d<Do;d++){u=e+d*c;const g=new Ra(h,u,h+l,u+c);g.key=d+"-"+f,s.push(g)}}return{grids:s,averageX:l,averageY:c,ROWS:Do,COLS:Io}}}const e_={altitude:0},cs=new L;function wc(r,t){const e=Math.pow(10,t);return Math.round(r*e)/e}class n_ extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]),e=lt.extend({},e_,e,{layer:i,points:t});let s=1/0,o=1/0,a=-1/0,l=-1/0;for(let R=0,U=t.length;R<U;R++){const{coordinate:G}=t[R];let j,k;Array.isArray(G)?(j=G[0],k=G[1]):G instanceof Zt&&(j=G.x,k=G.y),t[R].coords=[j,k],s=Math.min(s,j),o=Math.min(o,k),a=Math.max(a,j),l=Math.max(l,k)}const c=i.coordinateToVector3([(s+a)/2,(o+l)/2]),{grids:h,averageX:u,averageY:f,ROWS:d,COLS:g}=Ra.initGrids(s,o,a,l);h.length;const m=new Float32Array(t.length*3),p=[],v=new Float32Array(t.length*3),y=new Float32Array(t.length),_=[],x=[],M={};let w=0,C=!1,b=!1;const T=new L(0,0,0);for(let R=0,U=t.length;R<U;R++){let{coordinate:G,height:j,color:k,size:I,coords:D}=t[R];const Y=R*3;k&&(C=!0,k=k instanceof Ot?k:new Ot(k),v[Y]=k.r,v[Y+1]=k.g,v[Y+2]=k.b),I&&(b=!0,y[R]=I,w=Math.max(w,I));const V=yn(j,i,M),tt=i.coordinateToVector3(G,V);T.x=tt.x,T.y=tt.y,T.z=tt.z,T.sub(c),m[Y]=T.x,m[Y+1]=T.y,m[Y+2]=T.z,p.push(tt),x[R]={position:{count:1,start:R*3,end:R*3+3},hide:!1};let nt=wc((D[1]-o)/f,4),pt=wc((D[0]-s)/u,4);nt-=1,pt-=1,nt=Math.max(0,nt),pt=Math.max(0,pt),nt=Math.ceil(nt),pt=Math.ceil(pt);const W=pt*d+nt;h[W]&&(h[W].positions.push(tt),h[W].indexs.push(R))}const P=new Vt;At(P,"position",new _t(m,3,!0)),C&&At(P,"color",new _t(v,3,!0)),b&&At(P,"size",new _t(y,1,!0)),e.positions=p,super(),this._initOptions(e),this._createPoints(P,n);const F=e.altitude,Z=i.altitudeToVector3(F,F).x,z=c.clone();z.z=Z,this.getObject3d().position.copy(z),this._baseObjects=_,this._datas=t,this.faceIndex=null,this._geometriesAttributes=x,this._geometryCache=P.clone(),this.isHide=!1,this._initBaseObjectsEvent(_),this._grids=h,this._bindMapEvents(),this.type="Points",this.maxSize=w}_bindMapEvents(){const t=this.getMap(),e="zoomstart zooming zoomend movestart moving moveend pitch rotate";this.on("add",()=>{this._updateGrids(),t.on(e,this._updateGrids,this)}),this.on("remove",()=>{t.off(e,this._updateGrids,this)})}_updateGrids(){const t=this.getMap();this._grids.forEach(e=>{e.indexs.length&&e.updateBBoxPixel(t)})}getSelectMesh(){const t=this.faceIndex;if(t!=null){if(!this._baseObjects[t]){const e=this._datas[t],{coordinate:n,height:i,color:s,size:o}=e;this._baseObjects[t]=new Qh(n,{height:i,index:t,color:s,size:o},this.getObject3d().material,this.getLayer()),this._proxyEvent(this._baseObjects[t])}return{data:this._datas[t],baseObject:this._baseObjects[t]}}}identify(t){const e=this.getLayer(),n=this.getMap().getSize(),i=this.getLayer().getCamera(),s=this.getOptions().altitude,o=this.getMap(),a=e.altitudeToVector3(s,s).x;let l=this.getObject3d().material.size;const c=l===void 0,h=o.coordToContainerPoint(t),u=[];if(this._grids.forEach(f=>{f.indexs.length&&f.isRecCross(h,c?this.maxSize:l)&&u.push(f)}),u.length<1)return!1;for(let f=0,d=u.length;f<d;f++)for(let g=u[f].positions.length,m=g-1;m>=0;m--){c&&(l=this._datas[u[f].indexs[m]].size||1);const p=u[f].positions[m];cs.x=p.x,cs.y=p.y,cs.z=p.z+a;const v=Jh(cs,n,i);if(Math.sqrt(Math.pow(h.x-v.x,2)+Math.pow(h.y-v.y,2))<=l/2)return this.faceIndex=u[f].indexs[m],!0}return!1}}const Oo={coordinate:"",radius:10,height:100,radialSegments:6,altitude:0,topColor:"",bottomColor:"#2d2f61"};class i_ extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]);const s=t.length,o=Mr(t),a=i.coordinateToVector3(o),l=[],c=[],h=[];let u=0;const f={},d={};super(),e=lt.extend({},{altitude:0,layer:i,points:t},Oo,e),this._initOptions(e);let g;const m=new L;if(e.asynchronous){g=ei();const _=lt.GUID();this.getOptions().id=_;const x=[];for(let M=0;M<s;M++){const w=lt.extend({index:M},Oo,t[M]),{radius:C,radialSegments:b,altitude:T,height:P,coordinate:F}=w,Z=vs(C,i,f);t[M]._radius=Z;const z=yn(P,i,d),R=yn(T,i,d),U=i.coordinateToVector3(F,0,m).sub(a);x.push({radialSegments:b,radius:Z,height:z,center:[U.x,U.y],altitude:R})}Gh.push({id:_,data:x,layer:i,baseObject:this})}else{for(let _=0;_<s;_++){const x=lt.extend({index:_},Oo,t[_]),{radius:M,radialSegments:w,altitude:C,topColor:b,bottomColor:T,height:P,coordinate:F}=x,Z=vs(M,i,f),z=yn(P,i,d),R=yn(C,i,d),U=i.coordinateToVector3(F,0,m).sub(a),G=Wh({radius:Z,height:z,radialSegments:w,center:[U.x,U.y]});b&&(Ni(G,T,b,"z",z/2),n.vertexColors=oe());const j=G.attributes.position.array;for(let D=0,Y=j.length;D<Y;D+=3)j[D+2]+=R;l.push(G);const k=new oa(F,x,n,i);c.push(k),G.index.count/3;const I=G.attributes.position.count;G.attributes.normal.count,G.attributes.uv.count,h[_]={position:{count:I,start:u,end:u+I*3},hide:!1},u+=I*3}g=jh(l)}this._createMesh(g,n);const p=e.altitude,v=i.altitudeToVector3(p,p).x,y=a.clone();y.z=v,this.getObject3d().position.copy(y),this._baseObjects=c,this._datas=t,this._geometriesAttributes=h,this.faceIndex=null,this._geometryCache=Yn(g),this.isHide=!1,this._colorMap={},this._initBaseObjectsEvent(c),e.asynchronous||(this._setPickObject3d(),this._init()),this.type="Bars"}identify(){return this.picked}getSelectMesh(){const t=this._getIndex();if(t!=null){if(!this._baseObjects[t]){const e=this._datas[t],n=Object.assign({},this.options,e,{index:t,asynchronous:!1});this._baseObjects[t]=new oa(e.coordinate,n,this.getObject3d().material,this.getLayer()),this._proxyEvent(this._baseObjects[t])}return{data:this._datas[t],baseObject:this._baseObjects[t]}}}_workerLoad(t){const{geometriesAttributes:e}=t;this._geometriesAttributes=e;const n=Hi(t);this._geometryCache=Yn(n);const{topColor:i,bottomColor:s}=this.getOptions(),o=this.getObject3d(),a=o.material;i&&(Ni(n,s,i,"z",e),a.vertexColors=oe()),o.geometry=n,o.material.needsUpdate=!0,this._setPickObject3d(),this._init(),this.isAdd&&this.getLayer().getPick().add(this.pickObject3d),this._fire("workerload",{target:this})}}const Sc={width:3,height:1,altitude:0,topColor:null,bottomColor:"#2d2f61"};class r_ extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]);const s=[],o=[],a=t.length;for(let y=0;y<a;y++){const _=t[y],x=Vi(_);s.push(x.center),o.push(x.lineStrings)}const l=Mr(s);e=lt.extend({},Sc,e,{layer:i,lineStrings:t,coordinate:l});const{altitude:c,topColor:h,bottomColor:u,asynchronous:f}=e;let d;const g=[],m=[];if(super(),f)d=ei(),Fh.push({id:lt.GUID(),layer:i,key:e.key,center:l,data:o,lineStrings:t,baseObject:this});else{const y=[];let _=0;const x={},M={};for(let w=0;w<a;w++){const C=t[w],b=lt.extend({},Sc,Ls(C)?C.properties:C.getProperties(),{index:w}),{height:T,width:P,bottomHeight:F}=b,Z=vs(P,i,x),z=yn(T,i,M),R=o[w],U=[];let G=0;for(let V=0,tt=R.length;V<tt;V++){const nt=ys(R[V],Z,z,i,l);G=Cn(nt,F,i,x),U.push(nt)}const j=Vh(U);y.push(j);const{position:k,normal:I,indices:D}=j;D.length/3;const Y=k.length/3;I.length/3,m[w]={position:{middleZ:G+z/2,count:Y,start:_,end:_+Y*3},hide:!1},_+=Y*3}d=Os(y),h&&(En(d,u,h,m),n.vertexColors=oe())}this._initOptions(e),this._createMesh(d,n);const p=i.altitudeToVector3(c,c).x,v=i.coordinateToVector3(l,p);this.getObject3d().position.copy(v),this._baseObjects=g,this._datas=t,this._geometriesAttributes=m,this.faceIndex=null,this._geometryCache=Yn(d),this.isHide=!1,this._colorMap={},this._initBaseObjectsEvent(g),f||(this._setPickObject3d(),this._init()),this.type="ExtrudeLines"}getSelectMesh(){const t=this._getIndex();if(t!=null){if(!this._baseObjects[t]){const e=this._datas[t],n=Object.assign({},this.options,on(e)?e.properties:e.getProperties(),{index:t});this._baseObjects[t]=new $h(e,n,this.getObject3d().material,this.getLayer()),this._proxyEvent(this._baseObjects[t])}return{data:this._datas[t],baseObject:this._baseObjects[t]}}}identify(t){return this.picked}_workerLoad(t){const{geometriesAttributes:e}=t;this._geometriesAttributes=e;const n=Hi(t);this._geometryCache=Yn(n);const{topColor:i,bottomColor:s,bottomHeight:o,height:a}=this.getOptions(),c=this.getObject3d().material;i&&(En(n,s,i,e),c.vertexColors=oe()),this.getObject3d().geometry=n,this.getObject3d().material.needsUpdate=!0,this._setPickObject3d(),this._init(),this.isAdd&&this.getLayer().getPick().add(this.pickObject3d),this._fire("workerload",{target:this})}}const s_={altitude:0,colors:null};class o_ extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]);const s=[],o=[],a=t.length;for(let _=0;_<a;_++){const x=t[_],M=Vi(x);s.push(M.center),o.push(M.lineStrings)}const l=Mr(s);e=lt.extend({},s_,e,{layer:i,lineStrings:t,coordinate:l}),super(),this._initOptions(e);const{asynchronous:c}=e;let h;const u=[],f={};let d=[],g=0,m=[];if(c)h=Dh(),Nh.push({id:lt.GUID(),layer:i,key:e.key,center:l,data:o,lineStrings:t,baseObject:this});else{for(let x=0;x<a;x++){const M=o[x];let w=0;for(let C=0,b=M.length;C<b;C++){const T=on(M[C])?M[C].properties:M[C].getProperties()||{},{positions:P}=ti(M[C],i,l,!1);Cn(P,T.bottomHeight,i,f),w+=P.length/3*2-2,m.push(Ds(P))}d[x]={position:{count:w,start:g,end:g+w*3},hide:!1},g+=w*3}const _=Is(m);h=new Vt,At(h,"position",new _t(_,3))}this._createLineSegments(h,n);const{altitude:p}=e,v=i.altitudeToVector3(p,p).x,y=i.coordinateToVector3(l,v);this.getObject3d().position.copy(y),this._baseObjects=u,this._datas=t,this._geometriesAttributes=d,this.faceIndex=null,this.index=null,this._geometryCache=h.clone(),this.isHide=!1,this._colorMap={},this._initBaseObjectsEvent(u),c||(this._setPickObject3d(),this._init()),this.type="Lines"}getSelectMesh(){const t=this._getIndex();if(t!=null){if(!this._baseObjects[t]){const e=this._datas[t],n=lt.extend({},this.getOptions(),{index:t},on(e)?e.properties:e.getProperties());this._baseObjects[t]=new Zh(e,n,this.getObject3d().material,this.getLayer()),this._proxyEvent(this._baseObjects[t])}return{data:this._datas[t],baseObject:this._baseObjects[t]}}}_setPickObject3d(){if(!this._colorMap)return;const t=this._geometryCache||this.getObject3d().geometry.clone(),e=this.getLayer().getPick(),{_geometriesAttributes:n}=this,i=n.length,s=La(n);let o=0;for(let u=0;u<i;u++){const f=e.getColor(),d=f.getHex();this._colorMap[d]=u;const{count:g}=n[u].position;this._datas[u].colorIndex=d;for(let m=0;m<g;m++)s[o]=f.r,s[o+1]=f.g,s[o+2]=f.b,o+=3}At(t,"color",new _t(s,3,!0));const a=this.getObject3d().material.clone();a.color.set("#fff"),a.vertexColors=oe();const c=e.getColor().getHex(),h=new ya(t,a);h.position.copy(this.getObject3d().position),h._colorIndex=c,this.setPickObject3d(h)}identify(t){return this.picked}_workerLoad(t){const{position:e,geometriesAttributes:n}=t;this._geometriesAttributes=n;const i=new Vt;At(i,"position",new _t(new Float32Array(e),3)),this._computeLineDistances(i),this._geometryCache=i.clone(),this.getObject3d().geometry=i,this.getObject3d().material.needsUpdate=!0,this._setPickObject3d(),this._init(),this.isAdd&&this.getLayer().getPick().add(this.pickObject3d),this._fire("workerload",{target:this})}}const a_=10,Ri=[],Hn=[];function l_(){return{waitingQueue:Ri,currentQueue:Hn}}function c_(r,t,e,n,i){const s={key:r,url:t,callback:e,img:n,vt:i};Hn.length<a_?(Hn.push(s),i.loopMessage(s)):Ri.push(s)}function h_(r){const t=Kh(Ri,r);t&&t(r)}function Kh(r,t){for(let e=0,n=r.length;e<n;e++){const i=r[e];if(i){const{key:s,callback:o}=i;if(t===s)return r.splice(e,1),o}}return null}function u_(r,t){if(Kh(Hn,r),Ri.length){Hn.push(Ri[0]),Ri.splice(0,1);const e=Hn[Hn.length-1];t.loopMessage(e)}}const bs=document.createElement("canvas"),aa=256;bs.width=bs.height=aa;let hs;function yi(r,t=!1){if(hs)return hs;const e=bs.getContext("2d");return e.clearRect(0,0,aa,aa),e.save(),hs=bs.toDataURL(),hs}function Ar(r=1,t=1){let e;return typeof document>"u"||(e=document.createElement("canvas"),r&&(e.width=r),t&&(e.height=t)),e}class tu extends Au{constructor(t,e={}){super(lt.GUID(),lt.extend({urlTemplate:t},e)),this._opts=null,this._layer=null,this.material=null,this.getMaterial=null,this._baseObjectKeys={},this._loadTiles={},this._add=null,this._layerLaodTime=new Date().getTime()}isAsynchronous(){return this._opts.worker}getBaseObjects(){const t=this._loadTiles,e=[];for(let n in t){const i=this._baseObjectKeys[n];if(i&&Array.isArray(i)&&i.length)for(let s=0,o=i.length;s<o;s++)e.push(i[s])}return e}onSelectMesh(t,e){}formatBaseObjects(t,e){return[]}loopMessage(t){}getTileData(t){const{key:e,url:n,callback:i,img:s}=t;Tu.getJSON(n,{},function(o,a){o?i(e,null,s):i(e,a,s)})}_getCurentTileKeys(){const t=this.getTiles().tileGrids||[],e=[],n={};for(let i=0,s=t.length;i<s;i++){const a=t[i].tiles||[];for(let l=0,c=a.length;l<c;l++){const{id:h}=a[l];e.push(h),n[h]=!0}}return{keys:e,keysMap:n}}_isLoad(){const{keys:t}=this._getCurentTileKeys(),e=Object.keys(this._renderer.tilesInView);return t.length===e.length}_layerOnLoad(){const t=new Date().getTime();if(t-this._layerLaodTime<20)return;this._layerLaodTime=t;const n=this._renderer.tilesInView,i=this._loadTiles,s=this._layer,o=this._baseObjectKeys,a=Object.keys(n).length,l=Object.keys(i).length,c=[];if(a&&l)for(let h in i)n[h]||o[h]&&(o[h]||[]).forEach(u=>{c.push(u)});if(c.length&&s.removeMesh(c,!1),a&&l){for(let h in n)if(!i[h])if(o[h]){const u=o[h];s.addMesh(u)}else{const{x:u,y:f,z:d}=this._getXYZOfIndex(h);this.getTileUrl(u,f,d)}}this._loadTiles=Object.assign({},n),this._diffCache()}_init(){}_workerLoad(t){const n=t.target._img;n.currentCount++,n.currentCount===n.needCount&&(n.src=yi(n._key,this._opts.debug))}_generateBaseObjects(t,e,n){if(e&&n){const{keysMap:i}=this._getCurentTileKeys();if(!i[t]){n.src=yi(t,this._opts.debug);return}const s=this.formatBaseObjects(t,e);if(s.length){n.needCount=s.length,n.currentCount=0;for(let o=0,a=s.length;o<a;o++){const l=s[o];l._img=n,l._vt=this,this.isVisible()||l.hide(),this._cachetile(t,l),l.isAsynchronous()||n.currentCount++}this._layer.addMesh(s,!1),n.needCount===n.currentCount&&(n.src=yi(t,this._opts.debug)),this.isAsynchronous()?s.filter(o=>o.isAsynchronous()).forEach(o=>{o.on("workerload",this._workerLoad,this)}):n.src=yi(t,this._opts.debug)}else n.src=yi(t,this._opts.debug);this._loadTiles[t]=!0}else n&&(n.src=yi(t,this._opts.debug))}_diffCache(){if(Object.keys(this._baseObjectKeys).length>this._renderer.tileCache.max){const t=this._renderer.tileCache.data,e=this._renderer.tilesInView,n=[];for(let i in this._baseObjectKeys)!t[i]&&!e[i]&&((this._baseObjectKeys[i]||[]).forEach(s=>{s.isAdd&&n.push(s)}),this._diposeBaseObject(i),delete this._baseObjectKeys[i]);n.length&&this._layer.removeMesh(n,!1)}}_diposeBaseObject(t){const e=this._baseObjectKeys[t];e&&e.length&&e.forEach(n=>{n.getObject3d().geometry.dispose(),n._geometryCache&&n._geometryCache.dispose();const i=n._baseObjects;i&&i.length&&i.forEach(s=>{s.getObject3d().geometry.dispose(),s=null}),n._datas=null,n._geometriesAttributes=null,n._faceMap=null,n._colorMap=null,n.pickObject3d&&n.pickObject3d.geometry.dispose(),n=null})}_cachetile(t,e){this._baseObjectKeys[t]||(this._baseObjectKeys[t]=[]),this._baseObjectKeys[t].push(e)}_getXYZOfIndex(t){const e=t.indexOf("_")>-1?"_":"-";let[n,i,s]=t.split(e).slice(1,4);const o=parseInt(i),a=parseInt(n),l=parseInt(s);return{x:o,y:a,z:l}}_getTileExtent(t,e,n){const i=this.getMap(),s=i._getResolution(n);return this._getTileConfig().getTilePrjExtent(t,e,s)}_getTileLngLatExtent(t,e,n){const i=this._getTileExtent(t,e,n);let s=i.getMax(),o=i.getMin();const l=this.getMap().getProjection();return o=l.unproject(o),s=l.unproject(s),new ko(o,s)}}const f_={worker:!1};class d_ extends tu{constructor(t,e={},n,i){super(lt.GUID(),lt.extend({urlTemplate:t},f_,e)),this._opts=e,this._layer=i,this.getMaterial=n,this._baseObjectKeys={},this._loadTiles={},this._add=null,this._layerLaodTime=new Date().getTime(),this._init()}formatBaseObjects(t,e){const n=this._opts,i=[],s=this.isAsynchronous();for(let o in e){const a=e[o]||{};let l;if(Array.isArray(a)?l=a:a.type==="FeatureCollection"&&(l=a.features),l&&l.length){const c=[],h=[],u=[];for(let f=0,d=l.length;f<d;f++){const g=l[f];if(An(g))c.push(g);else if(on(g)){const m=cr(g);for(let p=0,v=m.length;p<v;p++)h.push(m[p])}else if(zx(g)){const m=cr(g);for(let p=0,v=m.length;p<v;p++)u.push(lt.extend({},m[p].properties,m[p],{coordinate:br(m[p])}))}}if(c.length){const f=this._getMaterial(o,c,t,a);if(f){const d=this._layer.toExtrudePolygons(c,lt.extend({},{topColor:"#fff",layerName:o,asynchronous:s,key:t},n),f);i.push(d)}}if(h.length){const f=this._getMaterial(o,h,t,a);if(f&&(f instanceof _a||f instanceof bx)){const d=this._layer.toLines(h,lt.extend({},{layerName:o,asynchronous:s},n),f);i.push(d)}}if(u.length){const f=this._getMaterial(o,u,t,a);if(f&&f instanceof lh){const d=this._layer.toPoints(u,lt.extend({},{layerName:o,asynchronous:s},n),f);i.push(d)}}}}return i}loopMessage(t){const{currentQueue:e}=l_();e.length>0&&this.getTileData(t)}_init(){this.on("layerload",this._layerOnLoad),this.on("add",()=>{if(this._add===!1){const t=this.getBaseObjects();this._layer.addMesh(t)}this._add=!0,this.intervalId=setInterval(()=>{this._isLoad()&&!this._layer.getMap().isInteracting()&&this.fire("layerload")},1e3)}),this.on("remove",()=>{this._add=!1;const t=this.getBaseObjects();this._layer.removeMesh(t),clearInterval(this.intervalId)}),this.on("show",()=>{this.getBaseObjects().forEach(e=>{e.show()});for(let e in this._baseObjectKeys)(this._baseObjectKeys[e]||[]).forEach(i=>{i.show()})}),this.on("hide",()=>{this.getBaseObjects().forEach(e=>{e.hide()});for(let e in this._baseObjectKeys)(this._baseObjectKeys[e]||[]).forEach(i=>{i.hide()})}),this.on("renderercreate",t=>{t.renderer.loadTile=function(n){var i=this.layer.getTileSize(),s=new Image;return s.width=i.width,s.height=i.height,s.onload=this.onTileLoad.bind(this,s,n),s.onerror=this.onTileError.bind(this,s,n),this.loadTileImage(s,n.url,n.id),s},t.renderer.deleteTile=function(e){if(!e||!e.image)return;e.image.onload=null,e.image.onerror=null;const n=e.info||{};h_(n.id)},t.renderer.loadTileImage=(e,n,i)=>{e._key=i,c_(i,n,(s,o,a)=>{this._generateBaseObjects(s,o,a),u_(s,this)},e,this)}})}_getMaterial(t,e,n,i){return this.getMaterial&&lt.isFunction(this.getMaterial)?this.getMaterial(t,e,n,i):null}}function p_(r,t,e,n){const i=r/e,s=t/n,o=-r/2,a=t/2,l=-t/2,c=(e+1)*(n+1),h=new Float32Array(c*3),u=new Float32Array(c*2),f=new Float32Array(c*3),d=new Uint32Array(c*10);let g=0,m=0,p=0;for(let y=0;y<=n;y++)for(let _=0;_<=e;_++){const x=o+i*_,M=a-s*y;h[g]=x,h[g+1]=M,h[g+2]=0,f[g]=0,f[g+1]=0,f[g+2]=1;const w=(x-o)/r,C=(M-l)/t;if(u[m]=w,u[m+1]=C,g+=3,m+=2,_<e&&y<n){const b=y*(e+1)+_,T=b+1,P=(e+1)*(y+1)+_,F=P+1;d[p]=b,d[p+1]=P,d[p+2]=T,d[p+3]=P,d[p+4]=F,d[p+5]=T,p+=6}}const v=new Uint32Array(p);for(let y=0,_=v.length;y<_;y++)v[y]=d[y];return{position:h,uv:u,normal:f,indexs:v}}function eu(r,t,e,n){const{position:i,uv:s,normal:o,indexs:a}=p_(r,t,e,n),l=new Vt;return At(l,"position",new _t(i,3)),At(l,"normal",new _t(o,3)),At(l,"uv",new _t(s,2)),l.setIndex(new _t(a,1)),l}const m_=new Ax,Fo=document.createElement("canvas"),Ac=256;function g_(r,t=Ac,e=Ac){Fo.width=t,Fo.height=e;const n=Fo.getContext("2d");return n.drawImage(r,0,0,t,e),n.getImageData(0,0,t,e).data}function Tc(r){if(!r)return null;let t;return typeof r=="string"?(t=new Image,t.src=r):r instanceof HTMLCanvasElement?(t=new Image,t.src=r.toDataURL()):r instanceof Image&&(t=new Image,t.src=r.src,t.crossOrigin=r.crossOrigin),t&&!t.crossOrigin&&(t.crossOrigin="Anonymous"),t}const x_=new Map;function Ec(r,t,e,n){if(!t||!e)return;const{imageWidth:i,imageHeight:s}=n;let o;if(r instanceof Uint32Array||r instanceof Uint8ClampedArray?o=r:o=g_(r,i,s),!o)return;let a=0,l=0,c=0;const h=()=>l===0||l+1===s||c===0||c+1===i,u=new L,f=x_;for(let d=0,g=o.length;d<g;d+=4){const m=o[d],p=o[d+1],v=o[d+2],y=-1e4+(m*256*256+p*256+v)*.1;let _=0;if(!h()){const x=f.get(y);x!==void 0?_=x:(_=e.altitudeToVector3(y,y,null,u).x,f.set(y,_))}t.attributes.position.array[a*3+2]=_,a++,c++,c===i&&(l++,c=0)}t.attributes.position.needsUpdate=!0}const v_={interactive:!1,altitude:0,image:null,imageWidth:256,imageHeight:256,texture:null};class nu extends $t{constructor(t,e,n,i){e=lt.extend({},v_,e,{layer:i,extent:t});const{texture:s,image:o,altitude:a,imageHeight:l,imageWidth:c}=e;t instanceof ko||(t=new ko(t));const{xmin:h,ymin:u,xmax:f,ymax:d}=t,g=[[h,u],[h,d],[f,d],[f,u]];let m=1/0,p=1/0,v=-1/0,y=-1/0;g.forEach(R=>{const U=i.coordinateToVector3(R),{x:G,y:j}=U;m=Math.min(G,m),p=Math.min(j,p),v=Math.max(G,v),y=Math.max(j,y)});const _=v-m,x=y-p,M=_/c,w=x/l;m-=M,v+=M,p-=w,y+=w;const C=Math.abs(v-m),b=Math.abs(y-p),T=Tc(o),P=Tc(s),F=eu(C,b,c-1,l-1);super(),this._initOptions(e),this._createMesh(F,n);const Z=i.altitudeToVector3(a,a).x,z=i.coordinateToVector3(t.getCenter(),Z);this.getObject3d().position.copy(z),n.transparent=!0,T&&(T.onload=()=>{Ec(T,F,i,{imageWidth:c,imageHeight:l})},T.onerror=function(){}),P?(n.opacity=0,m_.load(P.src,R=>{n.map=R,n.opacity=1,n.needsUpdate=!0})):n.opacity=1,this.type="Terrain"}updateData(t){const e=this.getObject3d().geometry,n=this.getLayer();return Ec(t,e,n,this.getOptions()),this}}const __={scale:1,tileDivisor:4};class y_ extends tu{constructor(t,e={},n,i){super(lt.GUID(),lt.extend({urlTemplate:t},__,e)),this._opts=e,this._layer=i,this.material=n,this._baseObjectKeys={},this._loadTiles={},this._add=null,this._imgQueue={},this._layerLaodTime=new Date().getTime(),this._init()}isAsynchronous(){return!1}formatBaseObjects(t,e){const n=this.options,i=[],{scale:s,tileDivisor:o}=n,{x:a,y:l,z:c}=this._getXYZOfIndex(t),h=this.getMap().getZoom(),u=this.getTileUrl(a,l,c),[f,d]=this.options.tileSize,g=this._getTileLngLatExtent(a,l,c),m=this.material.clone();if(c+1>=Math.round(h)){const p=new nu(g,{image:e,imageWidth:f/o,imageHeight:d/o,texture:u},m,this._layer);p.getObject3d().scale.set(s,s,1),i.push(p)}return i}loopMessage(t){this.getTileData(t)}_init(){this.on("layerload",this._layerOnLoad),this.on("add",()=>{if(this._add===!1){const t=this.getBaseObjects();this._layer.addMesh(t)}this._add=!0,this.intervalId=setInterval(()=>{this._isLoad()&&!this._layer.getMap().isInteracting()&&this.fire("layerload")},1e3)}),this.on("remove",()=>{this._add=!1;const t=this.getBaseObjects();this._layer.removeMesh(t),clearInterval(this.intervalId)}),this.on("show",()=>{this.getBaseObjects().forEach(e=>{e.show()});for(let e in this._baseObjectKeys)(this._baseObjectKeys[e]||[]).forEach(i=>{i.show()})}),this.on("hide",()=>{this.getBaseObjects().forEach(e=>{e.hide()});for(let e in this._baseObjectKeys)(this._baseObjectKeys[e]||[]).forEach(i=>{i.hide()})}),this.on("renderercreate",t=>{t.renderer.loadTile=function(n){var i=this.layer.getTileSize(),s=new Image;return s.width=i.width,s.height=i.height,s.onload=this.onTileLoad.bind(this,s,n),s.onerror=this.onTileError.bind(this,s,n),this.loadTileImage(s,n.url,n.id),s},t.renderer.deleteTile=e=>{if(!e||!e.image)return;e.image.onload=null,e.image.onerror=null;const n=e.info||{},i=this._imgQueue[n.id];i&&(i.src="",i.onload=null,i.onerror=null,delete this._imgQueue[n.id])},t.renderer.loadTileImage=(e,n,i)=>{e._key=i;const s=new Image;this._imgQueue[i]=s;const o={key:i,url:n,rgbImage:s,callback:(a,l,c)=>{this._generateBaseObjects(a,l,c)},img:e,vt:this};this.loopMessage(o)}})}}/*!
 * Code from baidu mapv
 * License: BSD-3
 * https://github.com/huiyan-fe/mapv
 *
 */function Ue(r){r=r||{},this.gradient=r.gradient||{.25:"rgba(0, 0, 255, 1)",.55:"rgba(0, 255, 0, 1)",.85:"rgba(255, 255, 0, 1)",1:"rgba(255, 0, 0, 1)"},this.maxSize=r.maxSize||35,this.minSize=r.minSize||0,this.max=r.max||100,this.min=r.min||0,this.initPalette()}Ue.prototype.setMax=function(r){this.max=r||100};Ue.prototype.setMin=function(r){this.min=r||0};Ue.prototype.setMaxSize=function(r){this.maxSize=r||35};Ue.prototype.setMinSize=function(r){this.minSize=r||0};Ue.prototype.initPalette=function(){var r=this.gradient,t=Ar(256,1),e=this.paletteCtx=t.getContext("2d"),n=e.createLinearGradient(0,0,256,1);for(var i in r)n.addColorStop(parseFloat(i),r[i]);e.fillStyle=n,e.fillRect(0,0,256,1)};Ue.prototype.getColor=function(r){var t=this.getImageData(r);return"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]/256+")"};Ue.prototype.getImageData=function(r){var t=this.paletteCtx.getImageData(0,0,256,1).data;if(r===void 0)return t;var e=this.max,n=this.min;r>e&&(r=e),r<n&&(r=n);var i=Math.floor((r-n)/(e-n)*(256-1))*4;return[t[i],t[i+1],t[i+2],t[i+3]]};Ue.prototype.getSize=function(r){var t=0,e=this.max,n=this.min,i=this.maxSize,s=this.minSize;if(r>e&&(r=e),r<n&&(r=n),e>n)t=s+(r-n)/(e-n)*(i-s);else return i;return t};Ue.prototype.getLegend=function(r){var t=this.gradient,e=r.width||20,n=r.height||180,i=Ar(e,n),s=i.getContext("2d"),o=s.createLinearGradient(0,n,0,0);for(var a in t)o.addColorStop(parseFloat(a),t[a]);return s.fillStyle=o,s.fillRect(0,0,e,n),i};/*!
 * Code from baidu mapv
 * License: BSD-3
 * https://github.com/huiyan-fe/mapv
 *
 */function b_(r){var t=r/2,e=r+t,n=1e4,i=Ar(e*2,e*2),s=i.getContext("2d");return s.shadowBlur=t,s.shadowColor="black",s.shadowOffsetX=s.shadowOffsetY=n,s.beginPath(),s.arc(e-n,e-n,r,0,Math.PI*2,!0),s.closePath(),s.fill(),i}function iu(r,t,e){var n=ru(e),i=M_(e),s=n-i,o=e.range||null,a=0,l=1024;o&&o.length===2&&(a=(o[0]-i)/s*1024),o&&o.length===2&&(l=(o[1]-i)/s*1024);for(var c=e.maxOpacity||.8,h=e.minOpacity||0,u=3,f=r.length,d;u<f;u+=4)d=r[u]*4,r[u]/256>c&&(r[u]=256*c),r[u]/256<h&&(r[u]=256*h),d&&d>=a&&d<=l?(r[u-3]=t[d],r[u-2]=t[d+1],r[u-1]=t[d+2]):r[u]=0}function ru(r){var t=r.max||100;return t}function M_(r){var t=r.min||0;return t}function su(r,t,e){var n=ru(e),i=e._size||e.size||13,s=b_(i),o=s.width/2,a=s.height/2,l=t,c={};l.forEach(function(f){var d=f.count===void 0?1:f.count,g=Math.min(1,d/n).toFixed(2);c[g]=c[g]||[],c[g].push(f)});for(var h in c)if(!isNaN(h)){var u=c[h];r.beginPath(),e.withoutAlpha||(r.globalAlpha=h),u.forEach(function(f){var d=f.coordinate,g=f.count===void 0?1:f.count;r.globalAlpha=g/n,r.drawImage(s,d[0]-o,d[1]-a)})}}function w_(r,t,e){if(!(r.canvas.width<=0||r.canvas.height<=0)){var n=e.strength||.3;r.strokeStyle="rgba(0,0,0,"+n+")";var i=Ar(r.canvas.width,r.canvas.height),s=i.getContext("2d");s.scale(devicePixelRatio,devicePixelRatio),e=e||{},r.save();var o=new Ue({gradient:e.gradient});if(su(s,t,e),!e.absolute){var a=s.getImageData(0,0,r.canvas.width,r.canvas.height);iu(a.data,o.getImageData(),e),r.putImageData(a,0,0),r.restore()}o=null,i=null}}const Cc={draw:w_,drawGray:su,colorize:iu},S_={altitude:0,interactive:!1,min:0,max:100,size:13,gradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"},gridScale:.5},Lc=2048;class A_ extends $t{constructor(t,e,n,i){Array.isArray(t)||(t=[t]);let s=1/0,o=1/0,a=-1/0,l=-1/0;const c=[];for(let D=0,Y=t.length;D<Y;D++){const{coordinate:V,lnglat:tt,xy:nt}=t[D],pt=V||tt||nt;if(!pt)continue;const W=i.coordinateToVector3(pt);c.push(W);const{x:wt,y:xt}=W;s=Math.min(s,wt),o=Math.min(o,xt),a=Math.max(a,wt),l=Math.max(l,xt)}e=lt.extend({},S_,e,{layer:i,points:t});let{gridScale:h,altitude:u}=e;const f=Math.abs(a-s),d=Math.abs(l-o),g=Math.max(f*h,d*h);if(g>Lc){const D=g/h;h=Lc/D}const m=Math.ceil(f*h),p=Math.ceil(d*h),v=m/f,y=p/d,_=[];for(let D=0,Y=c.length;D<Y;D++){const V=c[D];V.x-=s,V.y-=o,V.x*=v,V.y*=y,V.y=p-V.y,_.push({coordinate:[V.x,V.y],count:t[D].count})}let x=Ar(m,p),M=x.getContext("2d");Cc.drawGray(M,_,e);const w=M.getImageData(0,0,M.canvas.width,M.canvas.height);let C=-1/0;const b=new Float32Array(w.data.length/4),T=new Float32Array(w.data.length/4);for(let D=3,Y=w.data.length,V=0;D<Y;D+=4){const tt=w.data[D];C=Math.max(C,tt),T[V]=tt,tt<=0&&(b[V]=1),V++}const P=new Ue({gradient:e.gradient});Cc.colorize(w.data,P.getImageData(),e),x=null,M=null;const F=eu(f,d,m-1,p-1),Z=F.getIndex().array,z=F.attributes.position.array,R=new Float32Array(z.length),U=new Uint32Array(z.length*6),G=new Ot;let j=0;for(let D=0,Y=z.length,V=0,tt=Z.length,nt=0,pt=w.data.length,W=0;D<Math.max(Y,tt,pt);D+=3){if(D<Y){const wt=T[W];wt>0&&(z[D+2]=wt/C)}if(V<tt){const wt=Z[V],xt=Z[V+1],St=Z[V+2];(!b[wt]||!b[xt]||!b[St])&&(U[j]=wt,U[j+1]=xt,U[j+2]=St,j+=3)}if(nt<pt){const wt=w.data[nt],xt=w.data[nt+1],St=w.data[nt+2],ht=`rgb(${wt},${xt},${St})`;G.setStyle(ht),R[V]=G.r,R[V+1]=G.g,R[V+2]=G.b}V+=3,nt+=4,W++}const k=new Uint32Array(j);for(let D=0;D<j;D++)k[D]=U[D];F.setIndex(new _t(k,1)),At(F,"color",new _t(R,3,!0)),n.vertexColors=oe(),super(),this._initOptions(e),this._createMesh(F,n);const I=i.altitudeToVector3(u,u).x;this.getObject3d().position.copy(new L((s+a)/2,(o+l)/2,I)),this.type="HeatMap"}}const Pc=new Ot;let Rc=1;class T_{constructor(t){this.object3ds=[],this.layer=t,this.camera=t.getCamera(),this.renderer=t.getThreeRenderer(),this.pickingTexture=new sn(1,1),this.pickingScene=new oh}getColor(){return Pc.setHex(Rc),Rc++,Pc}add(t){if(t){const e=t._colorIndex;e&&(this.object3ds[e]=t,this.pickingScene.add(t))}return this}remove(t){if(t){const e=t._colorIndex;e&&(this.object3ds[e]=null,this.pickingScene.remove(t))}return this}isEmpty(){if(this.pickingScene.children.length===0)return!0;for(let t=0,e=this.pickingScene.children.length;t<e;t++){const n=this.pickingScene.children[t];if(n){const i=n.__parent;if(i&&i.getOptions().interactive===!0)return!1}}return!0}pick(t){if(!t||this.isEmpty())return;const{camera:e,renderer:n,pickingTexture:i,pickingScene:s,object3ds:o,layer:a}=this,l=this.pickingScene.children.length;for(let M=0;M<l;M++){const w=this.pickingScene.children[M];w&&w.__parent&&(w.__parent.picked=!1)}const{width:c,height:h}=a._getRenderer().canvas,u=i.width,f=i.height;(c!==u||h!==f)&&i.setSize(c,h),n.setRenderTarget(i),n.clear(),e&&e.layers&&this.camera.layers.set(0),n.render(s,e);const d=new Uint8Array(4),{x:g,y:m}=t,p=window.devicePixelRatio,v=g*p,y=i.height-m*p;n.readRenderTargetPixels(i,Math.round(v),Math.round(y),1,1,d);const _=d[0]<<16|d[1]<<8|d[2],x=o[_];if(x)x.__parent&&(o[_].__parent.picked=!0);else for(let M=0;M<l;M++){const w=this.pickingScene.children[M];if(w&&w.__parent){const C=w.__parent;if(C._colorMap&&C._colorMap[_]!=null){C.picked=!0,C.index=C._colorMap[_];break}}}n.setRenderTarget(null)}}const E_={bottomHeight:0,altitude:0};class ou extends $t{constructor(t,e,n,i){e=lt.extend({},E_,e,{layer:i,lineString:t}),super(),this._initOptions(e);const{asynchronous:s}=e,{lineStrings:o,center:a}=Vi(t),l=new Pi;let c;if(s){const d=lt.GUID();this.getOptions().id=d,this.getOptions().center=a,Bh.push({id:d,data:o,lineString:t,center:a,layer:i,baseObject:this})}else{const d=[],g={};for(let m=0,p=o.length;m<p;m++){const v=ti(o[m],i,a,!1).positions;Cn(v,e.bottomHeight,i,g),d.push(Ds(v))}c=Is(d),l.setPositions(c)}this._setMaterialRes(i,n),this._createLine2(l,n);const{altitude:h}=e,u=i.altitudeToVector3(h,h).x,f=i.coordinateToVector3(a,u);this.getObject3d().position.copy(f),s||(this._setPickObject3d(c,n.linewidth),this._init()),this.type="FatLine"}_init(){const t=this.getLayer().getPick();this.on("add",()=>{t.add(this.pickObject3d)}),this.on("remove",()=>{t.remove(this.pickObject3d)})}_setMaterialRes(t,e){const i=t.getMap().getSize(),s=i.width,o=i.height;e.resolution.set(s,o)}_setPickObject3d(t,e){const n=new Pi;n.setPositions(t);const s=this.getLayer().getPick().getColor(),o=[];for(let h=0,u=t.length/3;h<u;h++)o.push(s.r,s.g,s.b);n.setColors(o);const a=new Cs({color:"#fff",linewidth:e,vertexColors:oe()});this._setMaterialRes(this.getLayer(),a);const l=s.getHex(),c=new Aa(n,a);c.position.copy(this.getObject3d().position),c._colorIndex=l,this.setPickObject3d(c)}identify(t){return this.picked}setSymbol(t){if(t&&t instanceof He){t.needsUpdate=!0;const e=this.getMap().getSize(),n=e.width,i=e.height;t.resolution.set(n,i),this.getObject3d().material=t}return this}_workerLoad(t){const e=new Float32Array(t.position),n=this.getObject3d();n.geometry.setPositions(e),n.computeLineDistances(),this._setPickObject3d(e,n.material.linewidth),this._init(),this.isAdd&&this.getLayer().getPick().add(this.pickObject3d),this._fire("workerload",{target:this})}}const C_={altitude:0,colors:null};class L_ extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]);const s=[],o=[],a=t.length;for(let M=0;M<a;M++){const w=t[M],C=Vi(w);s.push(C.center),o.push(C.lineStrings)}const l=Mr(s);e=lt.extend({},C_,e,{layer:i,lineStrings:t,coordinate:l}),super(),this._initOptions(e);const{asynchronous:c}=e,h=new Pi,u=[],f={};let d=[],g=0,m=[],p,v;if(c)Uh.push({id:lt.GUID(),data:o,key:e.key,center:l,layer:i,baseObject:this,lineStrings:t});else{for(let M=0;M<a;M++){const w=o[M];let C=0;for(let b=0,T=w.length;b<T;b++){const P=on(w[b])?w[b].properties:w[b].getProperties()||{},{positions:F}=ti(w[b],i,l,!1);Cn(F,P.bottomHeight,i,f),C+=F.length/3*2-2,m.push(Ds(F))}d[M]={position:{count:C,start:g,end:g+C*3},instanceStart:{count:C,start:g,end:g+C*3},instanceEnd:{count:C,start:g,end:g+C*3},hide:!1},g+=C*3}p=Is(m),h.setPositions(p)}this._setMaterialRes(i,n),this._createLine2(h,n);const{altitude:y}=e,_=i.altitudeToVector3(y,y).x,x=i.coordinateToVector3(l,_);this.getObject3d().position.copy(x),this._baseObjects=u,this._datas=t,this._geometriesAttributes=d,this.faceIndex=null,this.index=null,this._geometryCache=new Pi,c||(v=new Float32Array(p),this._geometryCache.setPositions(v)),this._colorMap={},this.isHide=!1,this._initBaseObjectsEvent(u),c||(this._setPickObject3d(v,n.linewidth),this._init()),this.type="FatLines"}_setMaterialRes(t,e){const i=t.getMap().getSize(),s=i.width,o=i.height;e.resolution.set(s,o)}_setPickObject3d(t,e){if(!this._colorMap)return;const n=this._geometryCache||new Pi;n.setPositions(t);const i=this.getLayer().getPick(),{_geometriesAttributes:s}=this,o=La(s);let a=0;for(let f=0,d=s.length;f<d;f++){const g=i.getColor(),m=g.getHex();this._colorMap[m]=f;const{count:p}=s[f].position;this._datas[f].colorIndex=m;for(let v=0;v<p;v++)o[a]=g.r,o[a+1]=g.g,o[a+2]=g.b,a+=3}n.setColors(o);const l=new Cs({color:"#fff",linewidth:e,vertexColors:oe()});this._setMaterialRes(this.getLayer(),l);const h=i.getColor().getHex(),u=new Aa(n,l);u.position.copy(this.getObject3d().position),u._colorIndex=h,this.setPickObject3d(u)}identify(t){return this.picked}setSymbol(t){if(t&&t instanceof He){t.needsUpdate=!0;const e=this.getMap().getSize(),n=e.width,i=e.height;t.resolution.set(n,i),this.getObject3d().material=t}return this}getSelectMesh(){const t=this._getIndex();if(t!=null){if(!this._baseObjects[t]){const e=this._datas[t],n=lt.extend({},this.getOptions(),{index:t},on(e)?e.properties:e.getProperties());this._baseObjects[t]=new ou(e,n,this.getObject3d().material,this.getLayer()),this._proxyEvent(this._baseObjects[t])}return{data:this._datas[t],baseObject:this._baseObjects[t]}}}_updateAttribute(t,e){const{indexs:n}=this._getHideGeometryIndex(e),i=this._geometryCache.attributes[e].array,s=i.length;for(let a=0;a<s;a++)t.array[a]=i[a];let o=-1e5;for(let a=0;a<n.length;a++){const l=n[a],{start:c,end:h}=this._geometriesAttributes[l][e];for(let u=c;u<h;u++)t.array[u]=o}return this}_showGeometry(t,e){let n;if(t&&(n=t.getOptions().index),n!=null){const i=this._geometriesAttributes[n],{hide:s}=i;if(s===e)return this;i.hide=e;const o=this.getObject3d().geometry;this._updateAttribute(o.attributes.instanceStart,"instanceStart"),this._updateAttribute(o.attributes.instanceEnd,"instanceEnd"),o.attributes.instanceStart.data.needsUpdate=!0,o.attributes.instanceEnd.data.needsUpdate=!0,this.isHide=e}return this}_workerLoad(t){const{geometriesAttributes:e}=t;this._geometriesAttributes=e;const n=this.getObject3d(),i=new Float32Array(t.position),s=new Float32Array(i);n.geometry.setPositions(new Float32Array(i)),this._geometryCache.setPositions(s),this._setPickObject3d(s,n.material.linewidth),this._init(),this.isAdd&&this.getLayer().getPick().add(this.pickObject3d),this._fire("workerload",{target:this})}}const P_={radius:10,height:100,altitude:0,topColor:"",bottomColor:"#2d2f61",heightEnable:!0};class au extends $t{constructor(t,e,n,i){e=lt.extend({},P_,e,{layer:i,coordinate:t}),super(),this._initOptions(e);const{height:s,radius:o,topColor:a,bottomColor:l,altitude:c}=e,h=i.altitudeToVector3(s,s).x,u=i.distanceToVector3(o,o).x,f=Xh().clone();f.scale(u*2,u*2,h),a&&(Ni(f,l,a,"z",h/2),n.vertexColors=oe()),this._createMesh(f,n);const d=i.altitudeToVector3(c,c).x,g=i.coordinateToVector3(t,d);this.getObject3d().position.copy(g),this.type="Box"}}const R_={radius:10,height:100,altitude:0,topColor:null,bottomColor:"#2d2f61"};class D_ extends ni($t){constructor(t,e,n,i){Array.isArray(t)||(t=[t]);const s=t.length,o=Mr(t),a=i.coordinateToVector3(o),l=[],c=[],h=[];let u=0;const f={},d={};for(let y=0;y<s;y++){const _=lt.extend({index:y},R_,t[y]),{radius:x,altitude:M,topColor:w,bottomColor:C,height:b,coordinate:T}=_,P=vs(x,i,f),F=yn(b,i,d),Z=yn(M,i,d),z=Xh().clone();z.scale(P*2,P*2,F),w&&(Ni(z,C,w,"z",F/2),n.vertexColors=oe());const R=i.coordinateToVector3(T).sub(a),U=z.attributes.position.array;for(let k=0,I=U.length;k<I;k+=3)U[k+2]+=Z,U[k]+=R.x,U[k+1]+=R.y,U[k+2]+=R.z;l.push(z);const G=new au(T,_,n,i);c.push(G),z.index.count/3;const j=z.attributes.position.count;z.attributes.normal.count,z.attributes.uv.count,h[y]={position:{count:j,start:u,end:u+j*3},hide:!1},u+=j*3}super(),e=lt.extend({},{altitude:0,layer:i,points:t},e),this._initOptions(e);const g=jh(l);this._createMesh(g,n);const m=e.altitude,p=i.altitudeToVector3(m,m).x,v=a.clone();v.z=p,this.getObject3d().position.copy(v),this._baseObjects=c,this._datas=t,this._geometriesAttributes=h,this.faceIndex=null,this._geometryCache=Yn(g),this.isHide=!1,this._colorMap={},this._initBaseObjectsEvent(c),this._setPickObject3d(),this._init(),this.type="Boxs"}identify(t){return this.picked}}var lu={exports:{}};lu.exports=Fs;lu.exports.default=Fs;function Fs(r,t,e){e=e||2;var n=t&&t.length,i=n?t[0]*e:r.length,s=cu(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,c,h,u,f,d;if(n&&(s=N_(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(var g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return pr(s,o,e,a,l,d,0),o}function cu(r,t,e,n,i){var s,o;if(i===ha(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Dc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Dc(s,r[s],r[s+1],o);return o&&zs(o,o.next)&&(gr(o),o=o.next),o}function Jn(r,t){if(!r)return r;t||(t=r);var e=r,n;do if(n=!1,!e.steiner&&(zs(e,e.next)||te(e.prev,e,e.next)===0)){if(gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pr(r,t,e,n,i,s,o){if(!!r){!o&&s&&V_(r,n,i,s);for(var a=r,l,c;r.prev!==r.next;){if(l=r.prev,c=r.next,s?O_(r,n,i,s):I_(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),gr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=F_(Jn(r),t,e),pr(r,t,e,n,i,s,2)):o===2&&z_(r,t,e,n,i,s):pr(Jn(r),t,e,n,i,s,1);break}}}}function I_(r){var t=r.prev,e=r,n=r.next;if(te(t,e,n)>=0)return!1;for(var i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ei(i,a,s,l,o,c,g.x,g.y)&&te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function O_(r,t,e,n){var i=r.prev,s=r,o=r.next;if(te(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,m=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,v=la(d,g,t,e,n),y=la(m,p,t,e,n),_=r.prevZ,x=r.nextZ;_&&_.z>=v&&x&&x.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&Ei(a,h,l,u,c,f,_.x,_.y)&&te(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Ei(a,h,l,u,c,f,x.x,x.y)&&te(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=v;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=p&&_!==i&&_!==o&&Ei(a,h,l,u,c,f,_.x,_.y)&&te(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=m&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&Ei(a,h,l,u,c,f,x.x,x.y)&&te(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function F_(r,t,e){var n=r;do{var i=n.prev,s=n.next.next;!zs(i,s)&&hu(i,n,n.next,s)&&mr(i,s)&&mr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),gr(n),gr(n.next),n=r=s),n=n.next}while(n!==r);return Jn(n)}function z_(r,t,e,n,i,s){var o=r;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&j_(o,a)){var l=uu(o,a);o=Jn(o,o.next),l=Jn(l,l.next),pr(o,t,e,n,i,s,0),pr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function N_(r,t,e,n){var i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=cu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(W_(c));for(i.sort(B_),s=0;s<i.length;s++)e=U_(i[s],e);return e}function B_(r,t){return r.x-t.x}function U_(r,t){var e=k_(r,t);if(!e)return t;var n=uu(e,r);return Jn(n,n.next),Jn(e,e.next)}function k_(r,t){var e=t,n=r.x,i=r.y,s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=n&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===n))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,c=o.x,h=o.y,u=1/0,f;e=o;do n>=e.x&&e.x>=c&&n!==e.x&&Ei(i<h?n:s,i,c,h,i<h?s:n,i,e.x,e.y)&&(f=Math.abs(i-e.y)/(n-e.x),mr(e,r)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&G_(o,e)))&&(o=e,u=f)),e=e.next;while(e!==l);return o}function G_(r,t){return te(r.prev,r,t.prev)<0&&te(t.next,r,r.next)<0}function V_(r,t,e,n){var i=r;do i.z===0&&(i.z=la(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,H_(i)}function H_(r){var t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function la(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function W_(r){var t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ei(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function j_(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!X_(r,t)&&(mr(r,t)&&mr(t,r)&&Z_(r,t)&&(te(r.prev,r,t.prev)||te(r,t.prev,t))||zs(r,t)&&te(r.prev,r,r.next)>0&&te(t.prev,t,t.next)>0)}function te(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function zs(r,t){return r.x===t.x&&r.y===t.y}function hu(r,t,e,n){var i=fs(te(r,t,e)),s=fs(te(r,t,n)),o=fs(te(e,n,r)),a=fs(te(e,n,t));return!!(i!==s&&o!==a||i===0&&us(r,e,t)||s===0&&us(r,n,t)||o===0&&us(e,r,n)||a===0&&us(e,t,n))}function us(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function fs(r){return r>0?1:r<0?-1:0}function X_(r,t){var e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&hu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function mr(r,t){return te(r.prev,r,r.next)<0?te(r,t,r.next)>=0&&te(r,r.prev,t)>=0:te(r,t,r.prev)<0||te(r,r.next,t)<0}function Z_(r,t){var e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function uu(r,t){var e=new ca(r.i,r.x,r.y),n=new ca(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Dc(r,t,e,n){var i=new ca(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function gr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ca(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Fs.deviation=function(r,t,e,n){var i=t&&t.length,s=i?t[0]*e:r.length,o=Math.abs(ha(r,0,s,e));if(i)for(var a=0,l=t.length;a<l;a++){var c=t[a]*e,h=a<l-1?t[a+1]*e:r.length;o-=Math.abs(ha(r,c,h,e))}var u=0;for(a=0;a<n.length;a+=3){var f=n[a]*e,d=n[a+1]*e,g=n[a+2]*e;u+=Math.abs((r[f]-r[g])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[g+1]-r[f+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function ha(r,t,e,n){for(var i=0,s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}Fs.flatten=function(r){for(var t=r[0][0].length,e={vertices:[],holes:[],dimensions:t},n=0,i=0;i<r.length;i++){for(var s=0;s<r[i].length;s++)for(var o=0;o<t;o++)e.vertices.push(r[i][s][o]);i>0&&(n+=r[i-1].length,e.holes.push(n))}return e};const $_=`(function(n){"use strict";
/*!
   * poly-extrude v0.1.0
    */var t={exports:{}};function r(n,t,r){r=r||2;var i,o,u,v,s,l,x,c=t&&t.length,d=c?t[0]*r:n.length,g=e(n,0,d,r,!0),y=[];if(!g||g.next===g.prev)return y;if(c&&(g=function(n,t,r,i){var a,o,u,v=[];for(a=0,o=t.length;a<o;a++)(u=e(n,t[a]*i,a<o-1?t[a+1]*i:n.length,i,!1))===u.next&&(u.steiner=!0),v.push(p(u));for(v.sort(h),a=0;a<v.length;a++)r=f(v[a],r);return r}(n,t,g,r)),n.length>80*r){i=u=n[0],o=v=n[1];for(var m=r;m<d;m+=r)(s=n[m])<i&&(i=s),(l=n[m+1])<o&&(o=l),s>u&&(u=s),l>v&&(v=l);x=0!==(x=Math.max(u-i,v-o))?32767/x:0}return a(g,y,r,i,o,x,0),y}function e(n,t,r,e,i){var a,o;if(i===z(n,t,r,e)>0)for(a=t;a<r;a+=e)o=Z(a,n[a],n[a+1],o);else for(a=r-e;a>=t;a-=e)o=Z(a,n[a],n[a+1],o);return o&&y(o,o.next)&&(F(o),o=o.next),o}function i(n,t){if(!n)return n;t||(t=n);var r,e=n;do{if(r=!1,e.steiner||!y(e,e.next)&&0!==g(e.prev,e,e.next))e=e.next;else{if(F(e),(e=t=e.prev)===e.next)break;r=!0}}while(r||e!==t);return t}function a(n,t,r,e,h,f,l){if(n){!l&&f&&function(n,t,r,e){var i=n;do{0===i.z&&(i.z=x(i.x,i.y,t,r,e)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,function(n){var t,r,e,i,a,o,u,v,s=1;do{for(r=n,n=null,a=null,o=0;r;){for(o++,e=r,u=0,t=0;t<s&&(u++,e=e.nextZ);t++);for(v=s;u>0||v>0&&e;)0!==u&&(0===v||!e||r.z<=e.z)?(i=r,r=r.nextZ,u--):(i=e,e=e.nextZ,v--),a?a.nextZ=i:n=i,i.prevZ=a,a=i;r=e}a.nextZ=null,s*=2}while(o>1)}(i)}(n,e,h,f);for(var p,c,d=n;n.prev!==n.next;)if(p=n.prev,c=n.next,f?u(n,e,h,f):o(n))t.push(p.i/r|0),t.push(n.i/r|0),t.push(c.i/r|0),F(n),n=c.next,d=c.next;else if((n=c)===d){l?1===l?a(n=v(i(n),t,r),t,r,e,h,f,2):2===l&&s(n,t,r,e,h,f):a(i(n),t,r,e,h,f,1);break}}}function o(n){var t=n.prev,r=n,e=n.next;if(g(t,r,e)>=0)return!1;for(var i=t.x,a=r.x,o=e.x,u=t.y,v=r.y,s=e.y,h=i<a?i<o?i:o:a<o?a:o,f=u<v?u<s?u:s:v<s?v:s,l=i>a?i>o?i:o:a>o?a:o,x=u>v?u>s?u:s:v>s?v:s,p=e.next;p!==t;){if(p.x>=h&&p.x<=l&&p.y>=f&&p.y<=x&&c(i,u,a,v,o,s,p.x,p.y)&&g(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function u(n,t,r,e){var i=n.prev,a=n,o=n.next;if(g(i,a,o)>=0)return!1;for(var u=i.x,v=a.x,s=o.x,h=i.y,f=a.y,l=o.y,p=u<v?u<s?u:s:v<s?v:s,d=h<f?h<l?h:l:f<l?f:l,y=u>v?u>s?u:s:v>s?v:s,m=h>f?h>l?h:l:f>l?f:l,w=x(p,d,t,r,e),M=x(y,m,t,r,e),b=n.prevZ,A=n.nextZ;b&&b.z>=w&&A&&A.z<=M;){if(b.x>=p&&b.x<=y&&b.y>=d&&b.y<=m&&b!==i&&b!==o&&c(u,h,v,f,s,l,b.x,b.y)&&g(b.prev,b,b.next)>=0)return!1;if(b=b.prevZ,A.x>=p&&A.x<=y&&A.y>=d&&A.y<=m&&A!==i&&A!==o&&c(u,h,v,f,s,l,A.x,A.y)&&g(A.prev,A,A.next)>=0)return!1;A=A.nextZ}for(;b&&b.z>=w;){if(b.x>=p&&b.x<=y&&b.y>=d&&b.y<=m&&b!==i&&b!==o&&c(u,h,v,f,s,l,b.x,b.y)&&g(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;A&&A.z<=M;){if(A.x>=p&&A.x<=y&&A.y>=d&&A.y<=m&&A!==i&&A!==o&&c(u,h,v,f,s,l,A.x,A.y)&&g(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function v(n,t,r){var e=n;do{var a=e.prev,o=e.next.next;!y(a,o)&&m(a,e,e.next,o)&&b(a,o)&&b(o,a)&&(t.push(a.i/r|0),t.push(e.i/r|0),t.push(o.i/r|0),F(e),F(e.next),e=n=o),e=e.next}while(e!==n);return i(e)}function s(n,t,r,e,o,u){var v=n;do{for(var s=v.next.next;s!==v.prev;){if(v.i!==s.i&&d(v,s)){var h=A(v,s);return v=i(v,v.next),h=i(h,h.next),a(v,t,r,e,o,u,0),void a(h,t,r,e,o,u,0)}s=s.next}v=v.next}while(v!==n)}function h(n,t){return n.x-t.x}function f(n,t){var r=function(n,t){var r,e=t,i=n.x,a=n.y,o=-1/0;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){var u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>o&&(o=u,r=e.x<e.next.x?e:e.next,u===i))return r}e=e.next}while(e!==t);if(!r)return null;var v,s=r,h=r.x,f=r.y,x=1/0;e=r;do{i>=e.x&&e.x>=h&&i!==e.x&&c(a<f?i:o,a,h,f,a<f?o:i,a,e.x,e.y)&&(v=Math.abs(a-e.y)/(i-e.x),b(e,n)&&(v<x||v===x&&(e.x>r.x||e.x===r.x&&l(r,e)))&&(r=e,x=v)),e=e.next}while(e!==s);return r}(n,t);if(!r)return t;var e=A(r,n);return i(e,e.next),i(r,r.next)}function l(n,t){return g(n.prev,n,t.prev)<0&&g(t.next,n,n.next)<0}function x(n,t,r,e,i){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-r)*i|0)|n<<8))|n<<4))|n<<2))|n<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-e)*i|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function p(n){var t=n,r=n;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==n);return r}function c(n,t,r,e,i,a,o,u){return(i-o)*(t-u)>=(n-o)*(a-u)&&(n-o)*(e-u)>=(r-o)*(t-u)&&(r-o)*(a-u)>=(i-o)*(e-u)}function d(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!function(n,t){var r=n;do{if(r.i!==n.i&&r.next.i!==n.i&&r.i!==t.i&&r.next.i!==t.i&&m(r,r.next,n,t))return!0;r=r.next}while(r!==n);return!1}(n,t)&&(b(n,t)&&b(t,n)&&function(n,t){var r=n,e=!1,i=(n.x+t.x)/2,a=(n.y+t.y)/2;do{r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(e=!e),r=r.next}while(r!==n);return e}(n,t)&&(g(n.prev,n,t.prev)||g(n,t.prev,t))||y(n,t)&&g(n.prev,n,n.next)>0&&g(t.prev,t,t.next)>0)}function g(n,t,r){return(t.y-n.y)*(r.x-t.x)-(t.x-n.x)*(r.y-t.y)}function y(n,t){return n.x===t.x&&n.y===t.y}function m(n,t,r,e){var i=M(g(n,t,r)),a=M(g(n,t,e)),o=M(g(r,e,n)),u=M(g(r,e,t));return i!==a&&o!==u||(!(0!==i||!w(n,r,t))||(!(0!==a||!w(n,e,t))||(!(0!==o||!w(r,n,e))||!(0!==u||!w(r,t,e)))))}function w(n,t,r){return t.x<=Math.max(n.x,r.x)&&t.x>=Math.min(n.x,r.x)&&t.y<=Math.max(n.y,r.y)&&t.y>=Math.min(n.y,r.y)}function M(n){return n>0?1:n<0?-1:0}function b(n,t){return g(n.prev,n,n.next)<0?g(n,t,n.next)>=0&&g(n,n.prev,t)>=0:g(n,t,n.prev)<0||g(n,n.next,t)<0}function A(n,t){var r=new P(n.i,n.x,n.y),e=new P(t.i,t.x,t.y),i=n.next,a=t.prev;return n.next=t,t.prev=n,r.next=i,i.prev=r,e.next=r,r.prev=e,a.next=e,e.prev=a,e}function Z(n,t,r,e){var i=new P(n,t,r);return e?(i.next=e.next,i.prev=e,e.next.prev=i,e.next=i):(i.prev=i,i.next=i),i}function F(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function P(n,t,r){this.i=n,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function z(n,t,r,e){for(var i=0,a=t,o=r-e;a<r;a+=e)i+=(n[o]-n[a])*(n[a+1]+n[o+1]),o=a;return i}t.exports=r,t.exports.default=r,r.deviation=function(n,t,r,e){var i=t&&t.length,a=i?t[0]*r:n.length,o=Math.abs(z(n,0,a,r));if(i)for(var u=0,v=t.length;u<v;u++){var s=t[u]*r,h=u<v-1?t[u+1]*r:n.length;o-=Math.abs(z(n,s,h,r))}var f=0;for(u=0;u<e.length;u+=3){var l=e[u]*r,x=e[u+1]*r,p=e[u+2]*r;f+=Math.abs((n[l]-n[p])*(n[x+1]-n[l+1])-(n[l]-n[x])*(n[p+1]-n[l+1]))}return 0===o&&0===f?0:Math.abs((f-o)/o)},r.flatten=function(n){for(var t=n[0][0].length,r={vertices:[],holes:[],dimensions:t},e=0,i=0;i<n.length;i++){for(var a=0;a<n[i].length;a++)for(var o=0;o<t;o++)r.vertices.push(n[i][a][o]);i>0&&(e+=n[i-1].length,r.holes.push(e))}return r};var I=t.exports;function E(n){for(var t,r,e=0,i=1,a=n.length;i<a;)t=r||n[0],e+=((r=n[i])[0]-t[0])*(r[1]+t[1]),i++;return e>0}function L(n,t,r){return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n}function H(n,t){var r=t[0],e=t[1],i=t[2],a=Math.sqrt(r*r+e*e+i*i)||1;return n[0]=r/a,n[1]=e/a,n[2]=i/a,n}function U(n,t){function r(n,t,r,e){n[0]=t,n[1]=r,n[2]=e}for(var e,i,a,o,u,v,s,h,f,l=[],x=[],p=[],c=[],d=[],g=[],y=n.length,m=new Float32Array(t.length),w=0;w<y;){var M=3*n[w],b=3*n[w+1],A=3*n[w+2];r(l,t[M],t[M+1],t[M+2]),r(x,t[b],t[b+1],t[b+2]),r(p,t[A],t[A+1],t[A+2]),L(d,p,x),L(c,l,x),e=g,a=c,o=void 0,u=void 0,v=void 0,s=void 0,h=void 0,f=void 0,o=(i=d)[0],u=i[1],v=i[2],s=a[0],h=a[1],f=a[2],e[0]=u*f-v*h,e[1]=v*s-o*f,e[2]=o*h-u*s;for(var Z=0;Z<3;Z++)m[M+Z]+=g[Z],m[b+Z]+=g[Z],m[A+Z]+=g[Z];w+=3}for(var F=0,P=m.length;F<P;)r(g,m[F],m[F+1],m[F+2]),H(g,g),m[F]=g[0]||0,m[F+1]=g[1]||0,m[F+2]=g[2]||0,F+=3;return m}function j(n){if(1===n.length)return{position:n[0].position,normal:n[0].normal,uv:n[0].uv,indices:n[0].indices,results:n};for(var t=0,r=0,e=0,i=n.length;e<i;e++){var a=n[e],o=a.position,u=a.indices;t+=o.length,r+=u.length}for(var v={position:new Float32Array(t),normal:new Float32Array(t),uv:new Float32Array(t/3*2),indices:new Uint32Array(r),results:n},s=0,h=0,f=0,l=0,x=0,p=n.length;x<p;x++){var c=n[x],d=c.position,g=c.indices,y=c.normal,m=c.uv;v.position.set(d,s),v.normal.set(y,s),v.uv.set(m,l);for(var w=0,M=g.length;w<M;){var b=g[w]+h;v.indices[f]=b,f++,w++}l+=m.length,s+=d.length,h+=d.length/3}return v}function O(n){return 180*n/Math.PI}function S(n){return n/180*Math.PI}function W(n,t,r,e,i,a){var o=3*r,u=3*e,v=3*i,s=3*a,h=t[o],f=t[o+1],l=t[o+2],x=t[u],p=t[u+1],c=t[u+2],d=t[v],g=t[v+1],y=t[v+2],m=t[s],w=t[s+1],M=t[s+2];Math.abs(f-p)<Math.abs(h-x)?(n.push(h,1-l),n.push(x,1-c),n.push(d,1-y),n.push(m,1-M)):(n.push(f,1-l),n.push(p,1-c),n.push(g,1-y),n.push(w,1-M))}function k(n,t){t=Object.assign({},{depth:2},t);var r=n.map((function(n){for(var r=0,e=n.length;r<e;r++){var i=n[r];B(i),0===r?E(i)||(n[r]=i.reverse()):E(i)&&(n[r]=i.reverse()),V(i)&&i.splice(i.length-1,1)}var a=function(n,t){for(var r=function(n){var t=0,r=0,e=n.length;for(;r<e;)t+=n[r].length,r++;return t}(n),e=n.length,i=[],a=new Float32Array(2*r),o=[],u=[],v=3*r,s=2*r,h=t.depth,f=0,l=0,x=0,p=0;p<e;p++){var c=n[p];p>0&&i.push(f/2);for(var d=0,g=c.length;d<g;){var y=c[d],m=y[0],w=y[1];a[f++]=m,a[f++]=w,o[l]=m,o[l+1]=w,o[l+2]=h,o[v+l]=m,o[v+l+1]=w,o[v+l+2]=0,u[x]=m,u[x+1]=w,u[s+x]=m,u[s+x+1]=w,l+=3,x+=2,d++}}return{flatVertices:a,holes:i,points:o,count:r,uvs:u}}(n,t);return a.polygon=n,function(n,t){for(var r=[],e=n.count,i=0,a=t.length;i<a;i+=3){var o=t[i],u=t[i+1],v=t[i+2];r[i]=o,r[i+1]=u,r[i+2]=v;var s=a+i,h=e+o,f=e+u,l=e+v;r[s]=h,r[s+1]=f,r[s+2]=l}n.index=r}(a,I(a.flatVertices,a.holes,2)),function(n,t){for(var r=n.points,e=n.index,i=n.polygon,a=n.uvs,o=t.depth,u=0,v=i.length;u<v;u++)for(var s=i[u],h=0,f=s.length;h<f;){var l=s[h],x=s[h+1];h===f-1&&(x=s[0]);var p=r.length/3,c=l[0],d=l[1],g=x[0],y=x[1];r.push(c,d,o,g,y,o,c,d,0,g,y,0);var m=p+2,w=p+3,M=p,b=p+1;e.push(m,M,w,M,b,w),W(a,r,m,w,M,b),h++}}(a,t),a.position=new Float32Array(a.points),a.indices=new Uint32Array(a.index),a.uv=new Float32Array(a.uvs),a.normal=U(a.indices,a.position),a})),e=j(r);return e.polygons=n,e}function B(n){V(n)||n.push(n[0])}function V(n){var t=n.length,r=n[0],e=r[0],i=r[1],a=n[t-1],o=a[0],u=a[1];return e===o&&i===u}function _(n,t){t=Object.assign({},{depth:2,lineWidth:1},t);var r=n.map((function(n){var r=function(n,t){var r=0,e=t.lineWidth/2,i=[],a=[],o=[],u=n.length,v=0;for(;v<u-1;){var s=n[v],h=n[v+1],f=h[1]-s[1],l=h[0]-s[0],x=0,p=O(Math.atan(f/l));if(r=p,0===v)x=p,x-=90;else{var c=n[v-1];q.x=c[0]-s[0],q.y=c[1]-s[1],R.x=h[0]-s[0],R.y=h[1]-s[1],x=p-D(q,R)/2}var d=C(S(x),e,s),g=d[0],y=d[1];i.push(g,y),G(g,s,h)?(a.push(g),o.push(y)):(a.push(y),o.push(g)),v++}var m=r,w=S(m-=90),M=n[u-2],b=n[u-1],A=C(w,e,b),Z=A[0],F=A[1];i.push(Z,F),G(Z,M,b)?(a.push(Z),o.push(F)):(a.push(F),o.push(Z));return{offsetPoints:i,leftPoints:a,rightPoints:o}}(n,t);return r.line=n,function(n,t){var r=t.depth,e=[],i=[],a=[],o=n.leftPoints,u=n.rightPoints,v=0,s=o.length;for(;v<s;){var h=3*v,f=o[v],l=f[0],x=f[1];e[h]=l,e[h+1]=x,e[h+2]=r;var p=u[v],c=p[0],d=p[1],g=3*s+h;e[g]=c,e[g+1]=d,e[g+2]=r;var y=2*s*3+h;e[y]=l,e[y+1]=x,e[y+2]=0;var m=2*s*3+3*s+h;e[m]=c,e[m+1]=d,e[m+2]=0,v++}v=0,s=e.length;for(;v<s;){var w=e[v],M=e[v+1];a.push(w,M),v+=3}v=0,s=o.length;for(;v<s-1;){var b=v,A=v+1,Z=b+s,F=A+s;i.push(b,Z,A),i.push(Z,F,A);var P=v+2*s,z=P+1,I=P+s,E=z+s;i.push(P,I,z),i.push(I,E,z),v++}n.index=i,n.points=e,n.uvs=a}(r,t),function(n,t){var r=n.points,e=n.index,i=n.leftPoints,a=n.rightPoints,o=n.uvs,u=t.depth,v=[i,a];function s(n,t){var i=r.length/3;r.push(n[0],n[1],u,t[0],t[1],u,n[0],n[1],0,t[0],t[1],0);var a=i+2,v=i+3,s=i,h=i+1;e.push(a,s,v,s,h,v),W(o,r,a,v,s,h)}for(var h=0,f=v.length;h<f;h++){var l=v[h];h>0&&(l=(l=l.map((function(n){return n}))).reverse());for(var x=0,p=l.length-1;x<p;){s(l[x],l[x+1]),x++}}for(var c=i.length,d=[a[0],i[0],i[c-1],a[c-1]],g=0;g<d.length;g+=2){s(d[g],d[g+1])}}(r,t),r.position=new Float32Array(r.points),r.indices=new Uint32Array(r.index),r.uv=new Float32Array(r.uvs),r.normal=U(r.indices,r.position),r})),e=j(r);return e.lines=n,e}var q={x:0,y:0},R={x:0,y:0};function C(n,t,r){var e=r[0],i=r[1],a=[e+Math.cos(n)*t,i+Math.sin(n)*t],o=n+=Math.PI;return[a,[e+Math.cos(o)*t,i+Math.sin(o)*t]]}var D=function(n,t){var r=n.x,e=n.y,i=t.x,a=t.y,o=r*i+e*a,u=r*a-e*i;return(Math.atan2(u,o)/Math.PI*180+360)%360};function G(n,t,r){var e=t[0],i=t[1],a=r[0],o=r[1];return(i-o)*n[0]+(a-e)*n[1]+e*o-a*i>0}function J(n,t){void 0===t&&(t={}),t=Object.assign({},{radius:1,height:2,radialSegments:6},t);for(var r=Math.round(Math.max(4,t.radialSegments)),e=t,i=e.radius,a=e.height,o=360/r/360*Math.PI*2,u=r+1,v=new Float32Array(3*u*2),s=n[0],h=n[1],f=0,l=0,x=3*u,p=2*u,c=[],d=[],g=-1;g<r;g++){var y=o*g,m=Math.cos(y)*i+s,w=Math.sin(y)*i+h;v[f]=m,v[f+1]=w,v[f+2]=0,v[f+x]=m,v[f+1+x]=w,v[f+2+x]=a;var M,b;M=.5+m/i/2,b=.5+w/i/2,d[l]=M,d[l+1]=b,d[l+p]=M,d[l+1+p]=b,f+=3,l+=2,g>1&&c.push(0,g-1,g)}v[f-=3]=v[0],v[f+1]=v[1],v[f+2]=v[2];var A=v.length;v[A-3]=v[0],v[A-2]=v[1],v[A-1]=a;for(var Z=c.length,F=0;F<Z;F++){var P=c[F];c.push(P+u)}var z=new Float32Array(2*(3*u*2-6)),I=-1;f=2*u,l=0;for(var E=0,L=v.length/2;E<L-3;E+=3){var H=v[E],j=v[E+1],O=v[E+3],S=v[E+4];z[++I]=H,z[++I]=j,z[++I]=a,z[++I]=O,z[++I]=S,z[++I]=a,z[++I]=H,z[++I]=j,z[++I]=0,z[++I]=O,z[++I]=S,z[++I]=0;var W=f+2,k=f+3,B=f,V=f+1;c.push(B,W,V,W,k,V),f+=4;var _=l/u,q=(l+1)/u;d.push(_,a/i/2,q,a/i/2,_,0,q,0),l++}var R=new Float32Array(v.length+z.length);R.set(v,0),R.set(z,v.length);var C=U(c,R);return{points:v,indices:new Uint32Array(c),position:R,normal:C,uv:new Float32Array(d)}}var K={x:0,y:0},N={x:0,y:0};function Q(n,t,r,e){for(var i=n.length,a=0;a<i;a++){var o=n[a].data;t=n[a].center||t;for(var u=0,v=o.length;u<v;u++)for(var s=o[u],h=0,f=s.length;h<f;h++)n[a].data[u][h]=T(s[h],t,r,e)}}function T(n,t,r,e){for(var i,a=[],o=0,u=(i=r?new Float64Array(n):new Float32Array(n)).length;o<u;o+=2){var v=i[o],s=i[o+1];if(t&&r&&e){K.x=v,K.y=s;var h=un(K,N);K.x=h.x,K.y=h.y,v=(h=vn(e,K,r,N)).x,s=h.y,v-=t[0],s-=t[1]}a.push([v,s])}return a}function X(n,t){void 0===t&&(t=!1);for(var r=n.length,e=[],i=[],a=0,o=0;o<r;o++){var u=t?$(n[o]):Y(n[o]),v=n[o].bottomHeight||0,s=u.position;i.push(u);var h=s.length/3;e[o]={position:{middleZ:v+(n[o].height||0)/2,count:h,start:a,end:a+3*h},hide:!1},a+=3*h}var f=tn(i),l=f.position,x=f.normal,p=f.uv,c=f.indices;return{position:l.buffer,normal:x.buffer,uv:p.buffer,indices:c.buffer,geometriesAttributes:e}}function Y(n){var t=n.data,r=n.height,e=n.bottomHeight,i=k(t,{depth:r}),a=i.position,o=i.normal,u=i.uv,v=i.indices;return rn(a,e),{position:a,normal:o,uv:u,indices:v}}function $(n){var t=n.data,r=n.height,e=n.width,i=n.bottomHeight,a=_(t,{lineWidth:e,depth:r}),o=a.position,u=a.normal,v=a.uv,s=a.indices;return rn(o,i),{position:o,normal:u,uv:v,indices:s}}function nn(n,t){for(var r=new Float32Array(t),e=0,i=0;i<n.length;++i)r.set(n[i],e),e+=n[i].length;return r}function tn(n){for(var t={},r={},e=0;e<n.length;++e){var i=n[e];for(var a in i)void 0===t[a]&&(t[a]=[],r[a]=0),t[a].push(i[a]),r[a]+=i[a].length}var o={},u=0,v=[];for(var s in t)if("indices"===s)for(var h=t[s],f=0,l=h.length;f<l;f++){for(var x=h[f],p=0,c=x.length;p<c;p++)v.push(x[p]+u);u+=t.position[f].length/3}else{var d=nn(t[s],r[s]);if(!d)return null;o[s]=d}return o.indices=new Uint32Array(v),o}function rn(n,t){if(void 0!==t&&"number"==typeof t&&0!==t)for(var r=0,e=n.length;r<e;r+=3)n[r+2]+=t}function en(n){for(var t=[],r=0,e=n.length;r<e;r+=7){var i=n[r],a=n[r+1],o=n[r+2],u=n[r+3],v=n[r+4],s=n[r+5];t.push({radialSegments:o,radius:u,height:v,altitude:s,center:[i,a]})}for(var h=t.length,f=[],l=[],x=0,p=0;p<h;p++){var c=J(t[p].center||[0,0],t[p]),d=c.position;if(t[p].altitude)for(var g=t[p].altitude,y=0,m=d.length;y<m;y+=3)c[y+2]+=g;l.push(c);var w=d.length/3;f[p]={position:{middleZ:t[p].height/2,count:w,start:x,end:x+3*w},hide:!1},x+=3*w}var M=tn(l),b=M.position,A=M.normal,Z=M.uv,F=M.indices;return{position:b.buffer,normal:A.buffer,uv:Z.buffer,indices:F.buffer,geometriesAttributes:f}}var an=Math.PI/180,on=6378137*Math.PI/180;function un(n,t){var r,e=85.0511287798,i=n.x,a=Math.max(Math.min(e,n.y),-e);r=0===a?0:Math.log(Math.tan((90+a)*an/2))/an;var o=i*on,u=r*on;return t?(t.x=o,t.y=u,t):{x:o,y:u}}function vn(n,t,r,e){var i=n[0]*(t.x-n[2])/r,a=-n[1]*(t.y-n[3])/r;return e?(e.x=i,e.y=a,e):{x:i,y:a}}function sn(n){void 0===n&&(n=[]);for(var t=n.length,r=new Float32Array(3*t),e=0;e<t;e++){var i=n[e],a=3*e;r[a]=i[0],r[a+1]=i[1]}return r}function hn(n){for(var t=new Float32Array(2*n.length-6),r=0,e=0,i=n.length/3;e<i;e++){var a=n[3*e],o=n[3*e+1],u=n[3*e+2];if(e>0&&e<i-1){var v=3*r;t[v]=a,t[v+1]=o,t[v+2]=u,r++}var s=3*r;t[s]=a,t[s+1]=o,t[s+2]=u,r++}return t}function fn(n){var t=0,r=n.length;if(1===r)return n[0];for(var e=0;e<r;e++)t+=n[e].length;for(var i=new Float32Array(t),a=0,o=0;o<r;o++)i.set(n[o],a),a+=n[o].length;return i}n.initialize=function(){},n.onmessage=function(n,t){var r=n.data,e=r.type,i=r.datas,a=r.glRes,o=r.matrix,u=r.center;if("ExtrudePolygons"===e){Q(i,u,a,o);var v=X(i);t(null,v,[v.position,v.normal,v.uv,v.indices])}else if("ExtrudeLines"===e){for(var s=0,h=i.length;s<h;s++)for(var f=0,l=i[s].data.length;f<l;f++)i[s].data[f]=T(i[s].data[f],i[s].center||u,a,o);var x=X(i,!0);t(null,x,[x.position,x.normal,x.uv,x.indices])}else if("ExtrudePolygon"===e){var p=[],c=[];i.forEach((function(n){var t=[n];Q(t,u,a,o);var r=X(t),e=r.position,i=r.normal,v=r.uv,s=r.indices;p.push({id:n.id,position:e,normal:i,uv:v,indices:s}),c.push(e,i,v,s)})),t(null,p,c)}else if("Line"===e||"FatLine"===e){for(var d=[],g=[],y=0,m=i.length;y<m;y++){for(var w=[],M=0,b=i[y].data.length;M<b;M++){i[y].data[M]=T(i[y].data[M],i[y].center||u,a,o);var A=sn(i[y].data[M]);w.push(hn(A))}var Z=fn(w);rn(Z,i[y].bottomHeight),d.push({id:i[y].id,position:Z.buffer}),g.push(Z.buffer)}t(null,d,g)}else if("Lines"===e||"FatLines"===e){for(var F=0,P=[],z=[],I=0,E=[],L=0,H=i.length;L<H;L++){for(var U=0,j=0,O=i[L].data.length;j<O;j++){i[L].data[j]=T(i[L].data[j],i[L].center||u,a,o);var S=sn(i[L].data[j]);rn(S,i[L].bottomHeight),U+=S.length/3*2-2,E.push(hn(S))}var W=U;P[L]=[F,F+W],F+=W,z[L]={position:{count:U,start:I,end:I+3*U},hide:!1},"FatLines"===e&&(z[L].instanceStart={count:U,start:I,end:I+3*U},z[L].instanceEnd={count:U,start:I,end:I+3*U}),I+=3*U}var k=fn(E);t(null,{id:i.id,position:k.buffer,geometriesAttributes:z,faceMap:P},[k.buffer])}else if("ExtrudeLine"===e){for(var B=0,V=i.length;B<V;B++)for(var _=0,q=i[B].data.length;_<q;_++)i[B].data[_]=T(i[B].data[_],i[B].center||u,a,o);var R=[],C=[];i.forEach((function(n){var t=X([n],!0),r=t.position,e=t.normal,i=t.uv,a=t.indices;R.push({id:n.id,position:r,normal:e,uv:i,indices:a}),C.push(r,e,i,a)})),t(null,R,C)}else if("Bar"===e){for(var D=[],G=[],J=(i=new Float32Array(i)).length/7,K=0;K<J;){var N=i.slice(7*K,7*(K+1)),Y=en(N),$=Y.position,nn=Y.normal,tn=Y.uv,an=Y.indices;D.push({id:parseInt(N[6]),position:$,normal:nn,uv:tn,indices:an}),G.push($,nn,tn,an),K++}t(null,D,G)}else if("Bars"===e){var on=en(i=new Float32Array(i));t(null,on,[on.position,on.normal,on.uv,on.indices])}},Object.defineProperty(n,"__esModule",{value:!0})})`,q_="__maptalks.three__";function Y_(){return q_}function J_(){return $_}const Q_="__maptalks.three.fetchdata__";function K_(r){const t=[],e=[];r.initialize=function(){},r.onmessage=function(o,a){const c={url:o.data,postResponse:a,abort:!1};i(c)};function i(o){o.abort?(e.splice(e.indexOf(o),1),t.length&&(e.push(t[0]),t.splice(0,1),s(e[e.length-1]))):e.length<5?(e.push(o),s(o)):t.push(o)}function s(o){fetch(o.url).then(a=>a.text()).then(a=>{new Blob([a],{type:"application/json"}).arrayBuffer().then(c=>{o.postResponse(null,c,[c]),o.abort=!0,i(o)})}).catch(a=>{o.abort=!0,i(o)})}}const ty={renderer:"gl",doubleBuffer:!1,glOptions:null,geometryEvents:!0,identifyCountOnEvent:0,forceRenderOnZooming:!0,loopRenderCount:50},ey=Math.PI/180,Ic=[[4e3,220],[2e3,100],[1e3,30],[500,15],[100,5],[50,2],[10,1],[5,.7],[2,.1],[1,.05],[.5,.02],[.4,.01],[.1,.005],[.05,.002],[.01,.001]],Oc=["mouseout","mousemove","click","mousedown","mouseup","dblclick","contextmenu","touchstart","touchmove","touchend"],Qe=new Zt(0,0),zo=new Eu(0,0),No="__webglFramebuffer";class Da extends Pu{constructor(t,e){super(t,e),this._animationBaseObjectMap={},this._needsUpdate=!0,this._mousemoveTimeOut=0,this._mousedownTime=0,this._baseObjects=[],this._delayMeshes=[],this.type="ThreeLayer"}isMercator(){const t=this.getMap();if(!t)return!1;const e=t.getSpatialReference(),n=e._projection,i=e._resolutions;return!!(n&&n.code==="EPSG:3857"&&i&&i.length&&Math.floor(i[0])===156543&&t.getGLRes)}isRendering(){const t=this.getMap();return t?t.isInteracting()||t.isAnimating():!1}prepareToDraw(...t){}draw(t,e,n,i,s,o){this.renderScene(o,this)}drawOnInteracting(t,e,n,i,s,o,a){this.renderScene(a,this)}coordinateToVector3(t,e=0,n){const i=this.getMap();if(!i)return null;const s=Array.isArray(t);s?(Qe.x=t[0],Qe.y=t[1]):t instanceof Zt||(t=new Zt(t));const o=qi(i),a=Yi(i,s?Qe:t,o,zo);return n&&(n.x=a.x,n.y=a.y,n.z=e),new L(a.x,a.y,e)}coordinatiesToGLFloatArray(t,e){const n=this.getMap();if(!n)return null;const i=qi(n),s=t.length,o=new Float32Array(s*2),a=new Float32Array(s*3);for(let l=0;l<s;l++){let c=t[l];const h=Array.isArray(c);h?(Qe.x=c[0],Qe.y=c[1]):c instanceof Zt||(c=new Zt(c));const u=Yi(n,h?Qe:c,i,zo);u.x-=e.x,u.y-=e.y;const f=l*2;o[f]=u.x,o[f+1]=u.y;const d=l*3;a[d]=u.x,a[d+1]=u.y,a[d+2]=0}return{positions:a,positons2d:o}}coordinatiesToGLArray(t,e){const n=this.getMap();if(!n)return null;const i=qi(n),s=t.length,o=new Array(s);for(let a=0;a<s;a++){let l=t[a];const c=Array.isArray(l);c?(Qe.x=l[0],Qe.y=l[1]):l instanceof Zt||(l=new Zt(l));const h=Yi(n,c?Qe:l,i,zo);h.x-=e.x,h.y-=e.y,o[a]=[h.x,h.y]}return o}distanceToVector3(t,e,n){if(t===0&&e===0||!lt.isNumber(t)||!lt.isNumber(e))return new L(0,0,0);const i=this.getMap(),s=qi(i);let o=n||i.getCenter();o instanceof Zt||(o=new Zt(o));const a=i.locate(o,t,e),l=Yi(i,o,s),c=Yi(i,a,s),h=Math.abs(c.x-l.x)*lt.sign(t),u=Math.abs(c.y-l.y)*lt.sign(e);return new L(h,u,0)}altitudeToVector3(t,e,n,i){if(t===0||!lt.isNumber(t))return new L(0,0,0);const s=this.getMap();if(s.altitudeToPoint){const o=qi(s);let a=s.altitudeToPoint(t,o);return t<0&&a>0&&(a=-a),i?(i.x=a,i.y=a,i.z=0,i):new L(a,a,0)}return this.distanceToVector3(t,t,n)}toShape(t){if(!t)return null;if(t instanceof gs)return t.getGeometries().map(l=>this.toShape(l));const e=t.getCenter(),n=this.coordinateToVector3(e),s=t.getShell().map(l=>{const c=this.coordinateToVector3(l).sub(n);return new ct(c.x,c.y)}),o=new Jo(s),a=t.getHoles();return a&&a.length>0&&(o.holes=a.map(l=>{const c=l.map(h=>{const u=this.coordinateToVector3(h).sub(n);return new ct(u.x,u.y)});return new Jo(c)})),o}toExtrudeMesh(t,e,n,i){if(!t)return null;if(t instanceof gs)return t.getGeometries().map(g=>this.toExtrudeMesh(g,e,n,i));const s=t.getCoordinates();s.forEach(g=>{const m=g.length;for(let p=m-1;p>=1;p--)g[p].equals(g[p-1])&&g.splice(p,1)}),t.setCoordinates(s);const o=this.toShape(t),a=this.coordinateToVector3(t.getCenter());i=lt.isNumber(i)?i:e,i=this.altitudeToVector3(i,i).x;const l=this.altitudeToVector3(e,e).x,c={bevelEnabled:!1,bevelSize:1},h=parseInt(vr)>=93?"depth":"amount";c[h]=i;const u=new Sa(o,c);let f=u;Vt.prototype.fromGeometry&&(f=new Vt,f.fromGeometry(u));const d=new ye(f,n);return d.position.set(a.x,a.y,l-i),d}toExtrudePolygon(t,e,n){return new qh(t,e,n,this)}toBar(t,e,n){return new oa(t,e,n,this)}toLine(t,e,n){return new Zh(t,e,n,this)}toExtrudeLine(t,e,n){return new $h(t,e,n,this)}toModel(t,e){return new Uv(t,e,this)}toExtrudeLineTrail(t,e,n){return new qv(t,e,n,this)}toExtrudePolygons(t,e,n){return new Kv(t,e,n,this)}toPoint(t,e,n){return new Qh(t,e,n,this)}toPoints(t,e,n){return new n_(t,e,n,this)}toBars(t,e,n){return new i_(t,e,n,this)}toExtrudeLines(t,e,n){return new r_(t,e,n,this)}toLines(t,e,n){return new o_(t,e,n,this)}toThreeVectorTileLayer(t,e,n){return new d_(t,e,n,this)}toTerrain(t,e,n){return new nu(t,e,n,this)}toTerrainVectorTileLayer(t,e,n){return new y_(t,e,n,this)}toHeatMap(t,e,n){return new A_(t,e,n,this)}toFatLine(t,e,n){return new ou(t,e,n,this)}toFatLines(t,e,n){return new L_(t,e,n,this)}toBox(t,e,n){return new au(t,e,n,this)}toBoxs(t,e,n){return new D_(t,e,n,this)}getBaseObjects(){return this.getMeshes().filter(t=>t instanceof $t)}getMeshes(){const t=this.getScene();if(!t)return[];const e=[];for(let n=0,i=t.children.length;n<i;n++){const s=t.children[n];s instanceof re&&!(s instanceof xs)&&e.push(s.__parent||s)}return e}clear(){return this.clearMesh()}clearMesh(){const t=this.getScene();if(!t)return this;for(let e=t.children.length-1;e>=0;e--){const n=t.children[e];if(n instanceof re&&!(n instanceof xs)){t.remove(n);const i=n.__parent;i&&i instanceof $t&&(i.isAdd=!1,i.options.layer=null,i._fire("remove",{target:i}),delete this._animationBaseObjectMap[n.uuid],i._hideUI())}}return this}lookAt(t){const e=this._getRenderer();return e&&e.context.lookAt(t),this}getCamera(){const t=this._getRenderer();return t?t.camera:null}getScene(){const t=this._getRenderer();return t?t.scene:null}renderScene(t,e){const n=this._getRenderer();return n&&(n.clearCanvas(),n.renderScene(t),e||n.setToRedraw()),this}loop(t=!1){const e=this._delayMeshes;if(!e.length)return;const n=this.getMap();if(!n||n.isAnimating()||n.isInteracting())return;const i=this.options.loopRenderCount||50,s=e.slice(0,i);s&&this.addMesh(s,t),e.splice(0,i)}renderPickScene(){const t=this._getRenderer();if(t){const e=t.pick;e&&e.pick(this._containerPoint)}return this}getThreeRenderer(){const t=this._getRenderer();return t?t.context:null}getPick(){const t=this._getRenderer();return t?t.pick:null}delayAddMesh(t){if(!t)return this;Array.isArray(t)||(t=[t]);for(let e=0,n=t.length;e<n;e++)this._delayMeshes.push(t[e]);return this}addMesh(t,e=!0){if(!t)return this;Array.isArray(t)||(t=[t]);const n=this.getScene();if(t.forEach(i=>{i instanceof $t?(n.add(i.getObject3d()),i.isAdd||(i.isAdd=!0,i.options.layer=this,i._fire("add",{target:i})),i._animation&&lt.isFunction(i._animation)&&(this._animationBaseObjectMap[i.getObject3d().uuid]=i)):i instanceof re&&n.add(i)}),this._zoomend(),e){const i=this._getRenderer();i&&i.setToRedraw()}return this}removeMesh(t,e=!0){if(!t)return this;Array.isArray(t)||(t=[t]);const n=this.getScene();if(t.forEach(i=>{if(i instanceof $t){n.remove(i.getObject3d()),i.isAdd&&(i.isAdd=!1,i.options.layer=null,i._fire("remove",{target:i}),i._hideUI()),i._animation&&lt.isFunction(i._animation)&&delete this._animationBaseObjectMap[i.getObject3d().uuid];const s=this._delayMeshes;if(s.length){for(let o=0,a=s.length;o<a;o++)if(s[o]===i){s.splice(o,1);break}}}else i instanceof re&&n.remove(i)}),e){const i=this._getRenderer();i&&i.setToRedraw()}return this}_initRaycaster(){return this._raycaster||(this._raycaster=new Rx,this._mouse=new ct),this}getRaycaster(){return this._raycaster}identify(t,e){if(!t)return[];if(Array.isArray(t)&&(t=new Zt(t)),!(t instanceof Zt))return[];const n=this.getMap().coordToContainerPoint(t);this._containerPoint=n;const{x:i,y:s}=n;this._initRaycaster(),this.fire("identify",{coordinate:t,options:e});const o=this._raycaster,a=this._mouse,l=this.getCamera(),c=this.getScene(),h=this.getMap().getSize();if(!c)return[];const u=h.width,f=h.height;a.x=i/u*2-1,a.y=-(s/f)*2+1,o.setFromCamera(a,l),o.layers&&o.layers.enableAll&&o.layers.enableAll(),Dx(o,this._getLinePrecision(this.getMap().getResolution()));const d=[],g=[];c.children.forEach(_=>{const x=_.__parent;if(x&&x.getOptions){const M=x;M.getOptions().interactive&&M.isVisible()&&(M.identify&&lt.isFunction(M.identify)?g.push(M):d.push(_))}else(_ instanceof ye||_ instanceof Si)&&d.push(_)});let m=[];const p=o.intersectObjects(d,!0);p&&Array.isArray(p)&&p.length&&(m=p.map(_=>{let x=_.object;const M=_.instanceId;x=this._recursionMesh(x)||{};const w=x.__parent||x;return w.faceIndex=_.faceIndex,w.index=_.index,w.intersect=_,lt.isNumber(M)&&(w.instanceId=M),w})),this.renderPickScene(),g.length&&g.forEach(_=>{_.identify(t)&&m.push(_)});const v=m.length;for(let _=0;_<v;_++)if(m[_])for(let x=_+1;x<v;x++)m[_]===m[x]&&m.splice(x,1);e=lt.extend({},e);const y=e.count;return lt.isNumber(y)&&y>0?m.slice(0,y):m}_recursionMesh(t){for(;t&&t.parent!==this.getScene();)t=t.parent;return t}_getLinePrecision(t=10){for(let e=0,n=Ic.length;e<n;e++){const[i,s]=Ic[e];if(t>i)return s}return .01}_identifyBaseObjectEvents(t){if(!this.options.geometryEvents)return this;const e=this.map||this.getMap();if(e.isInteracting()||!e.options.geometryEvents||e._ignoreEvent(t))return this;const n=t.type,i=e._getEventParams?e._getEventParams(t):this._getEventParams(t);i.type=n;const{type:s,coordinate:o}=i,a=lt.now();if(this._mousemoveTimeOut&&s==="mousemove"&&a-this._mousemoveTimeOut<64)return this;this._mousemoveTimeOut=a,(s==="mousedown"||s==="touchstart")&&(this._mousedownTime=lt.now());let l=!1;if(s==="click"||s==="touchend"){const m=e.options.clickTimeThreshold||280;l=lt.now()-this._mousedownTime<m}if(s==="click"&&!l)return this;const c=this.options.identifyCountOnEvent;let h=Math.max(0,lt.isNumber(c)?c:0);h===0&&(h=1/0);const u=m=>{const p=[];this._baseObjects&&this._baseObjects.forEach(v=>{let y=!0;m.forEach(_=>{v===_&&(y=!1)}),y&&p.push(v)}),p.forEach(v=>{v&&v instanceof $t&&(v.getSelectMesh?v.isHide||(v._mouseover=!1,v.fire("mouseout",Object.assign({},i,{target:v,type:"mouseout",selectMesh:null})),v.closeToolTip()):(v._mouseover=!1,v.fire("mouseout",Object.assign({},i,{target:v,type:"mouseout"})),v.closeToolTip()))})};if(s==="mouseout")return u([]),this._baseObjects=[],this;const f=this.identify(o,{count:h}),d=this.getScene();if(f.length===0&&d)for(let m=0,p=d.children.length;m<p;m++){const y=(d.children[m]||{}).__parent;y&&y.fire("empty",Object.assign({},i,{target:y}))}function g(m,p){p=p||s;const v=m.getInfoWindow();v&&!v._owner&&v.addTo(m),((v?v.options:{}).autoOpenOn||"click")===p&&(m.openInfoWindow(o),m.fire("showinfowindow",{infoWindow:v}))}if(s==="mousemove"?(u(f),f.forEach(m=>{if(m instanceof $t){m._mouseover||(m.fire("mouseover",Object.assign({},i,{target:m,type:"mouseover",selectMesh:m.getSelectMesh?m.getSelectMesh():null})),m._mouseover=!0,g(m,"mouseover")),m.fire(s,Object.assign({},i,{target:m,selectMesh:m.getSelectMesh?m.getSelectMesh():null}));const p=m.getToolTip();p&&!p._owner&&p.addTo(m),m.openToolTip(o),g(m)}}),this._baseObjects=f):f.forEach(m=>{m instanceof $t&&(m.fire(s,Object.assign({},i,{target:m,selectMesh:m.getSelectMesh?m.getSelectMesh():null})),g(m))}),s==="touchend"&&l){const m=lt.extend({},i,{domEvent:t});f.forEach(p=>{p instanceof $t&&(p.fire("click",Object.assign({},m,{target:p,selectMesh:p.getSelectMesh?p.getSelectMesh():null})),g(p,"click"))})}return this}_getEventParams(t){const e=this.getMap(),n={domEvent:t};if(!e)return n;const i=t.touches&&t.touches.length>0?t.touches[0]:t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0]:t;if(i){const s=ks.getEventContainerPoint,o=s(i,e._containerDOM);n.coordinate=e.containerPointToCoordinate(o),n.containerPoint=o,n.viewPoint=e.containerPointToViewPoint(o),n.pont2d=e._containerPointToPoint(o)}return n}_zoomend(){const t=this.getScene();if(!t)return;const e=this.getMap().getZoom();t.children.forEach(n=>{const i=n.__parent;if(i&&i.getOptions){const s=i;s.zoomChange&&lt.isFunction(s.zoomChange)&&s.zoomChange(e);const o=s.getMinZoom(),a=s.getMaxZoom();e<o||e>a?(s.isVisible()&&(s.getObject3d().visible=!1),s._zoomVisible=!1):o<=e&&e<=a&&(s._visible&&(s.getObject3d().visible=!0),s._zoomVisible=!0)}})}_getGeometryEventMapPanel(){const t=this.map||this.getMap();return t._panels.allLayers||t._containerDOM}onAdd(){super.onAdd();const t=this.map||this.getMap();if(!t)return this;const e=this._getGeometryEventMapPanel();return this._identifyBaseObjectEventsThis||(this._identifyBaseObjectEventsThis=this._identifyBaseObjectEvents.bind(this)),this._zoomendThis||(this._zoomendThis=this._zoomend.bind(this)),ks.on(e,Oc.join(" "),this._identifyBaseObjectEventsThis,this),this._needsUpdate=!0,this._animationBaseObjectMap||(this._animationBaseObjectMap={}),t.on("zooming zoomend",this._zoomendThis,this),this}onRemove(){super.onRemove();const t=this.map||this.getMap();if(!t)return this;const e=this._getGeometryEventMapPanel();return ks.off(e,Oc.join(" "),this._identifyBaseObjectEventsThis,this),t.off("zooming zoomend",this._zoomendThis,this),this.clear(),this}_callbackBaseObjectAnimation(){const t=this;if(t._animationBaseObjectMap)for(const e in t._animationBaseObjectMap)t._animationBaseObjectMap[e]._animation();return this}_getFovRatio(){const e=this.getMap().getFov();return Math.tan(e/2*ey)}}Da.mergeOptions(ty);const ny={bloom:!0};class iy extends Cu.CanvasLayerRenderer{constructor(){super(...arguments),this._renderTime=0,this._renderTarget=null}getPrepareParams(){return[this.scene,this.camera]}getDrawParams(){return[this.scene,this.camera]}_drawLayer(){super._drawLayer.apply(this,arguments)}hitDetect(){return!1}createCanvas(){super.createCanvas(),this.createContext()}createContext(){if(this.canvas.gl&&this.canvas.gl.wrap)this.gl=this.canvas.gl.wrap();else{const e=this.layer.options.glOptions||{alpha:!0,depth:!0,antialias:!0,stencil:!0,preserveDrawingBuffer:!1};e.preserveDrawingBuffer=!0,this.gl=this.gl||this._createGLContext(this.canvas,e)}this._initThreeRenderer(),this.layer.onCanvasCreate(this.context,this.scene,this.camera)}_initThreeRenderer(){this.matrix4=new Jt;const t=new sh({context:this.gl,alpha:!0});t.autoClear=!1,t.setClearColor(new Ot(1,1,1),0),t.setSize(this.canvas.width,this.canvas.height),t.clear(),this.context=t;const e=this.scene=new oh,n=this.layer.getMap(),i=n.getFov()*Math.PI/180,s=this.camera=new Le(i,n.width/n.height,n.cameraNear,n.cameraFar);s.matrixAutoUpdate=!1,this._syncCamera(),e.add(s),this.pick=new T_(this.layer),Ke.star()}onCanvasCreate(){super.onCanvasCreate()}resizeCanvas(t){if(!this.canvas)return;let e,n=this.getMap();t?e=t:e=n.getSize();const i=n.getDevicePixelRatio?n.getDevicePixelRatio():Lu.retina?2:1,s=this.canvas,{width:o,height:a,cssWidth:l,cssHeight:c}=lt.calCanvasSize(e,i);if(this.layer._canvas&&(s.style.width!==l||s.style.height!==c)&&(s.style.width=l,s.style.height=c),s.width===o&&s.height===a)return this;s.width=o,s.height=a,this.context.setSize(s.width,s.height)}clearCanvas(){!this.canvas||this.context.clear()}prepareCanvas(){return this.canvas?this.clearCanvas():this.createCanvas(),this.layer.fire("renderstart",{context:this.context}),null}renderScene(t){if(this.layer._callbackBaseObjectAnimation(),this._syncCamera(),t&&t.renderTarget){const{width:e,height:n}=t.renderTarget.fbo;this._renderTarget?(this._renderTarget.viewport.set(0,0,e,n),this._renderTarget.scissor.set(0,0,e,n)):(this._renderTarget=new sn(e,n,{depthBuffer:!1}),this.context.setRenderTarget(this._renderTarget),this.context.render(this.scene,this.camera));const i=this.context.properties.get(this._renderTarget),s=i[No];i[No]=t.renderTarget.getFramebuffer(t.renderTarget.fbo),this.context.setRenderTarget(this._renderTarget);const o=t.bloom===1&&t.sceneFilter,a=this.scene.children||[];let l=!1;if(o){const c=t.sceneFilter;l=c(ny);for(let h=0,u=a.length;h<u;h++){if(!a[h]||!a[h].layers)continue;const f=a[h].__parent;a[h].bloom=!1,f&&(a[h].bloom=f.bloom);let d=0;(a[h]&&c(a[h])||!f)&&l&&(d=1),a[h].__layer!==d&&(ua(a[h],d),a[h].__layer=d)}}else for(let c=0,h=a.length;c<h;c++)!a[c]||!a[c].layers||a[c].__layer!==0&&(ua(a[c],0),a[c].__layer=0);this.camera.layers.set(l?1:0),this.context.render(this.scene,this.camera),i[No]=s}else this.context.render(this.scene,this.camera);this.context.setRenderTarget(null),this.completeRender()}remove(){delete this._drawContext,this._renderTarget&&(this._renderTarget.dispose(),delete this._renderTarget),super.remove()}_syncCamera(){const t=this.getMap(),e=this.camera;e.matrix.elements=t.cameraWorldMatrix,e.projectionMatrix.elements=t.projMatrix,this.matrix4.invert?e.projectionMatrixInverse.elements=this.matrix4.copy(e.projectionMatrix).invert().elements:e.projectionMatrixInverse&&(e.projectionMatrixInverse.elements=this.matrix4.getInverse(e.projectionMatrix).elements)}_createGLContext(t,e){const n=["webgl2","webgl","experimental-webgl"];let i=null;for(let s=0;s<n.length;++s){try{i=t.getContext(n[s],e)}catch{}if(i)break}return i}}Da.registerRenderer("gl",iy);function ua(r,t){if(!r)return;r.layers&&r.layers.set(t);const e=r.children;if(e&&e.length)for(let n=0,i=e.length;n<i;n++)ua(e[n],t)}function qi(r){return r.getGLRes?r.getGLRes():r.getGLZoom()}function Yi(r,t,e,n){return r.coordToPointAtRes?r.coordToPointAtRes(t,e,n):r.coordinateToPoint(t,e,n)}Gs&&(Gs(Y_(),J_()),Gs(Q_,K_));const ry={computed:{...xr({map:"MapModule/map"})},mounted(){this.$nextTick(()=>{this.addBridge()})},methods:{addBridge(){let r=this.map;var t=new Da("\u6865\u4F53\u793A\u610F\u56FE",{identifyCountOnEvent:1});t.prepareToDraw=function(o,a,l){var c=new Cx(16724747);c.position.set(0,-10,10).normalize(),a.add(c),a.add(new Lx("#FF330b36",.5)),s(),e(),n(),i()},t.addTo(r.getInstance());function e(){const o=new Ao({color:"#FF330b36",transparent:!0}),a={type:"Feature",geometry:{type:"Polygon",coordinates:[[[117.6518154144287,39.00918025017526],[117.65146136283873,39.009905547159086],[117.6512575149536,39.00984719020561],[117.65156865119934,39.009063535023365],[117.6518154144287,39.00918025017526]]]},properties:{name:"1-3cf0006e",_color:"#4b3aff",center:[117.6518154144287,39.00918025017526]}},l=t.toExtrudePolygon(a,{height:10},o);t.addMesh(l)}function n(){const o=new Ao({color:"#FF330b36",transparent:!0}),a={type:"Feature",geometry:{type:"Polygon",coordinates:[[[117.65066206455232,39.01120189278148],[117.65100002288818,39.01041825260885],[117.6512575149536,39.01050578731423],[117.65094101428984,39.01130609959715],[117.65066206455232,39.01120189278148]]]},properties:{name:"1-3cf0006e",_color:"#4b3aff",center:[117.6518154144287,39.00918025017526]}},l=t.toExtrudePolygon(a,{height:10},o);t.addMesh(l)}function i(){const o=new Ao({color:"#33330b36",transparent:!1}),a={type:"Feature",geometry:{type:"Polygon",coordinates:[[[117.65100002288818,39.01041825260885],[117.6512575149536,39.01050578731423],[117.65146136283873,39.009905547159086],[117.6512575149536,39.00984719020561],[117.65100002288818,39.01041825260885]]]},properties:{name:"1-3cf0006e",_color:"#4b3aff",center:[117.6518154144287,39.00918025017526]}},l=t.toExtrudePolygon(a,{height:30},o);t.addMesh(l)}function s(){requestAnimationFrame(s),t._needsUpdate=!t._needsUpdate,t._needsUpdate&&!t.isRendering()&&t.redraw()}}}};var sy=function(){var t=this,e=t._self._c;return e("div")},oy=[],ay=Qn(ry,sy,oy,!1,null,null,null,null);const fu=ay.exports;const ly={props:{shipInfo:{type:Object,default(){return{}}}},data(){return{}},methods:{close(){this.$emit("close")},lockBearing(){this.$emit("lockBearing",this.shipInfo)}}};var cy=function(){var t=this,e=t._self._c;return e(Ru,{ref:"shipInfo"},[e(Du,{attrs:{dense:"",flat:""}},[t.shipInfo.properties?e("div",[t._v(" "+t._s(t.shipInfo.properties.mmsi)+" ")]):t._e(),e(Fa),t._v(" 123 ")],1),e(Iu,[t._t("default")],2),e(Ou,[e(Fa),e(Ki,{attrs:{color:"success"},on:{click:t.lockBearing}},[t._v("\u89C6\u89D2\u9501\u5B9A")]),e(Ki,{attrs:{color:"success"},on:{click:t.close}},[t._v("close")])],1)],1)},hy=[],uy=Qn(ly,cy,hy,!1,null,null,null,null);const du=uy.exports,fy={components:{ShipInfoCard:du},data(){return{showShipInfoCard:!1,shipInfo:{},index:0,ready:!1,locked:!1,activeShip:"",markerList:[]}},computed:{...xr({map:"MapModule/map",shipList:"shipList/shipList"})},mounted(){this.$nextTick(()=>{this.initShips(),this.$eventBus.$on("shipTrack",this.onShipTrack),this.$eventBus.$on("ShipInfo",this.onShipInfo),this.$eventBus.$on("TrackEvent",this.onTrackEvent)})},watch:{shipList(r){this.initShips()}},methods:{initShips:async function(){let r=this.map;const t=this.shipList;if(typeof t!="object"||t.length<=0)return;const e=this;e.markerList,t.forEach(n=>{const i=n.properties.mmsi,s=n.name||n.properties.mmsi,o=s.length;let a="shipItem";e.activeShip&&thta.activeShip===i&&(a="activeShip");var l=new Bo.UIMarker(n.geometry.coordinates,{id:i,pitchWithMap:!0,rotateWithMap:!0,content:`<div style="margin-top:-80px" title="${s}">
            <div style="background-color: #f0f0f0; margin-top:-30px; height: 17px; width:${o*8+10}px; position:absolute;font-size: 13px;">
              ${s}
            </div>
            <div style="width: 25px;height:5px;margin-top:96px; border-bottom:1px solid #000;transform: rotate( 105deg);"></div>
            <div id="${i}" class="${a}">
              <svg width="15" height="30" style="transform:rotate(${n.properties.heading}deg)">
                <g>
                  <path xmlns="http://www.w3.org/2000/svg" d="m0.782406,29.604881l6.709559,-29.044118l6.709559,29.044118l-13.419118,0z" style="fill:#5BF709;stroke: #000000;stroke-width:1" />
                </g>
              </svg>
            <div/>
          </div>`}).addTo(r.getInstance());e.markerList.push(l),l.on("click",function(c){e.showShipInfo("click",c,n)})}),this.ready=!0},cleaarItem(){this.markerList[1].remove()},cleaarGeom(){this.markerList[0].setCoordinates({x:117.706,y:38.993})},onShipTrack(r){this.ready},onShipInfo(r){this.ready},onTrackEvent(r){this.ready},getShipInfo(r){return r},getShipColor(){},showShipInfo(r,t,e){this.activeShip&&(document.getElementById(this.activeShip).className="shipItem"),this.shipInfo=this.getShipInfo(e),this.activeShip=e.mmsi,document.getElementById(this.activeShip).className="activeShip",this.showShipInfoCard=!0},closeShipInfo(){this.activeShip&&(document.getElementById(this.activeShip).className="shipItem"),this.showShipInfoCard=!1,this.locked=!1},lockBearing(r){this.locked=!0;let t=this.map.getInstance();t.setPitch(30),t.setBearing(r.properties.heading),t.panTo(r.geometry.coordinates);let e=document.getElementById("compass");e.style.transform="rotate("+r.geometry.coordinates+"deg)"}}};var dy=function(){var t=this,e=t._self._c;return e(du,{directives:[{name:"show",rawName:"v-show",value:t.showShipInfoCard,expression:"showShipInfoCard"}],staticClass:"shipInfoCard",attrs:{shipInfo:t.shipInfo},on:{close:t.closeShipInfo,lockBearing:t.lockBearing}},[e(Ki,{attrs:{color:"success"},on:{click:t.cleaarGeom}},[t._v("\u79FB\u52A8\u4F4D\u7F6E\u6D4B\u8BD5")]),e(Ki,{attrs:{color:"success"},on:{click:t.cleaarItem}},[t._v("\u6E05\u9664\u6D4B\u8BD5")]),e(Ki,{attrs:{color:"success"},on:{click:t.cleaarGeom}},[t._v("\u79FB\u52A8\u4F4D\u7F6E\u6D4B\u8BD5")])],1)},py=[],my=Qn(fy,dy,py,!1,null,null,null,null);const pu=my.exports,gy=""+new URL("\u6307\u5317\u9488.82a71869.png",import.meta.url).href,xy={computed:{...xr({map:"MapModule/map"})},methods:{returnNorth(){let r=this.map.getInstance();if(r){r.setBearing(0),r.setPitch(0);let t=document.getElementById("compass");t.style.transform="rotate("+0+"deg)"}}}};var vy=function(){var t=this,e=t._self._c;return e("div",{staticClass:"compass",attrs:{title:"\u56DE\u5230\u6B63\u5317\u65B9\u5411"},on:{click:t.returnNorth}},[e("img",{attrs:{id:"compass",src:gy}})])},_y=[],yy=Qn(xy,vy,_y,!1,null,null,null,null);const by=yy.exports;const My={components:{MapMain:Fc,MapShips:pu,MapComapss:by,MapArea:zc,MapBridge:fu,MapAnimation:Bc,MapTool:Nc},data(){return{isDebug:!0,show:!1,showShipInfoCard:!1,shipInfo:{},name:"",activeShip:"",map:{}}},mounted(){},created(){},methods:{init(){this.$route.meta.showPanel},update(r){},addPanel(){var r=new maptalks.control.Panel({position:{top:"220",left:"50"},draggable:!0,custom:!1,content:"\u901A\u822A\u516C\u544A",closeButton:!0});this.map.addControl(r);var t=new maptalks.control.Panel({position:{top:"120",left:"50"},draggable:!0,custom:!1,content:"\u6C14\u8C61\u4FE1\u606F",closeButton:!0});this.map.addControl(t)},animation(){var r=new maptalks.VectorLayer("\u8F68\u8FF9",{hitDetect:!0,geometryEvents:!0}).addTo(this.map),t=coordinates,e=new maptalks.LineString(t,{id:"arrow",arrowStyle:"classic",arrowPlacement:"point",symbol:{lineWidth:2,lineColor:"yellow"}});e.addTo(r)},addDragrotatingListener(r){}}};var wy=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100vw",height:"100%"}},[e(Fc),e("map-Comapss"),e(pu),e(zc),e(fu),e(Bc),e(Nc),t._m(0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("div",{ref:"infowindow_content"},[e("h2",[t._v(t._s(t.name))])])])],1)},Sy=[function(){var r=this,t=r._self._c;return t("div",{staticClass:"mouse-position",attrs:{id:"mouse-position"}},[t("div",{attrs:{id:"mouse-position1"}})])}],Ay=Qn(My,wy,Sy,!1,null,null,null,null);const Iy=Ay.exports;export{Iy as default};
