import {App, Plugin} from 'vue'
import VLockUI from './components/VLockUI/VLockUI.vue'


export default {
    install(Vue: App) {
        Vue.component(VLockUI.name, VLockUI)
    }
} as Plugin

export {VLockUI}
