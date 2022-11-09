// import symbols from './symbol.config'
import proj4 from 'proj4/dist/proj4'
  /**
     * 地图（天地图）配置文件
     */
  var mapOptions = {
    zoom: 16,
    //中心点标记红十字，用于开发debug
    centerCross : false,
    minZoom: 6,
    maxZoom: 20,
    center: [117.652,39.01],
    attribution: false,
    spatialReference: {
      projection: 'EPSG:3857'
    },
    layerSwitcherControl: {
      position: {
        top: 110,
        right: 15
      },
      // title of base layers
      'baseTitle' : '地图切换',
      // title of layers
      'overlayTitle' : '图层',
      // layers you don't want to manage with layer switcher
      'excludeLayers' : [],
      // css class of container element, maptalks-layer-switcher by default
      'containerClass' : 'maptalks-layer-switcher'
    },
    //缩放级别控件
    zoomControl: {
      position: {
        top: 10,
        right: 10
      },
      slider: false,
      zoomLevel: true,
      containerClass: ''
    },
    scaleControl: {
      position: 'bottom-left',
      maxWidth: 100,
      metric: true,
      imperial: false
    },
    //鹰眼控件
    overviewControl : false, // add overview control
  }
  var baseLayers = [
    {
      visible: true,
      id: 'tianditu',
      name: '天地图',
      layerType: 'TileLayer',
      urlTemplate: 'http://t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=d18d774d914601719b0a06362ddfa797',
      subdomains: ['0','1','2','3','4','5','6','7'],
      spatialReference:{
        projection:'EPSG:3857'
      }
    },
    {
      visible : false,
      id: 'basemaps_light',
      name: 'light',
      layerType: 'TileLayer',
      urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      subdomains: ['a','b','c','d'],
      spatialReference:{
        projection:'EPSG:3857'
      }
    },
    {
      visible : false,
      id: 'basemaps_dark',
      name: 'dark',
      layerType: 'TileLayer',
      urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
      subdomains: ['a','b','c','d'],
      spatialReference:{
        projection:'EPSG:3857'
      }
    },
    {
      visible : false,
      id: 'osm',
      name: 'osm',
      layerType: 'TileLayer',
      urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ['a','b','c','d'],
      spatialReference:{
        projection:'EPSG:3857'
      }
    },
    {
      visible: false,
      id: '船讯网海图',
      name: '船讯网海图',
      layerType: 'TileLayer',
      // tileSystem : [-180.0, -80.0, 180.0, 84.0], // tile system
      urlTemplate: '/shipxy/tile.c?l=Na&m=o&x={x}&y={y}&z={z}',
      spatialReference: {
        projection: projection,
      },
      crs: 'EPSG:3395'
    },
  ]

  var proj3395 = '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs'
  var proj = proj4('EPSG:3857', proj3395);

  // define a custom projection object
  var projection = {
    code : 'EPSG:3395',  // code of the projection

    project : function (c) { // from 3857 to 3395
      var pc = proj.forward(c.toArray());
      return new maptalks.Coordinate(pc);
    },

    unproject : function (pc) { // from 3395 to 3857
      var c = proj.inverse(pc.toArray());
      return new maptalks.Coordinate(c);
    },

    // tell projection how to measure
    // for cartesian coordinates change this to:
    measure: 'identity'
    // measure: 'EPSG:4326'
  };
  // ----------------------通用部分----------------------------
  var layers = [{
      id: 'label_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'plot_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'buffer_layer',
      layerType: 'VectorLayer'
    },
    {
      id: 'cluster_layer',
      layerType: 'ClusterLayer',
      noClusterWithOneMarker: true,
      maxClusterZoom: 16,
      symbol: {
        markerType: 'ellipse',
        markerFill: {
          property: 'count',
          type: 'interval',
          stops: [
            [0, 'rgb(0, 115, 206)'],
            [9, 'rgb(0, 115, 206)'],
            [99, 'rgb(0, 115, 206)']
          ]
        },
        markerFillOpacity: 0.7,
        markerLineOpacity: 1,
        markerLineWidth: 1,
        markerLineColor: '#fff',
        markerWidth: {
          property: 'count',
          type: 'interval',
          stops: [
            [0, 40],
            [9, 50],
            [99, 60]
          ]
        },
        markerHeight: {
          property: 'count',
          type: 'interval',
          stops: [
            [0, 40],
            [9, 50],
            [99, 60]
          ]
        }
      },
      textSymbol: {
        'textFill': '#fff',
        'textFaceName': '"microsoft yahei"',
        'textSize': 16,
        'textDx': 0,
        'textDy': 4
      },
      drawClusterText: true,
      geometryEvents: true,
      single: true
    }
  ]

export default {
  mapOptions: mapOptions,
  baseLayers: baseLayers,
  layers: layers,
  // symbols: symbols
}