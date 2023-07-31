import {App, Plugin} from 'vue'
import VLock from './VLockUI.vue'


export default {
    install(Vue: App) {
        Vue.component(VLock.name, VLock)
    }
} as Plugin

export {
    VLock
}
