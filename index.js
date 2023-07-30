import components from "./src/components";

const plugins = {
    install(Vue) {
        for (const props in components) {
            if (components.hasOwnProperty(props)) {
                const component = components[props]
                Vue.component(component.name, component)
            }
        }
    }
}

export default plugins
