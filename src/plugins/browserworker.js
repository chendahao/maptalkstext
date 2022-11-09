/**
 * 用于 Web Worker，所有用到 signalr 的 webworker 组件都需要先引入此文件
 * 由于 @aspnet/signalr 通过 全局 window 属性判断 浏览器环境还是Node 环境，
 * 在 WebWorker 中上下文对象是 DedicatedWorkerGlobalScope，但是支持 原生 WebSocket,不需要外部引入 ws 对象
 */
if(typeof self !== 'undefined' && typeof window === 'undefined'){
    self.window = {};
};