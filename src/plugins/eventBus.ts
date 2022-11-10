import Vue from 'vue'

const _eventBus = new Vue();

const plugin = {
    install: function (Vue:any) {
        Vue.eventBus = _eventBus;
        Object.defineProperties(Vue.prototype, {
            $eventBus: {
                get() {
                    return _eventBus;
                }
            },
        });
    }
}

Vue.use(plugin)

export default plugin;