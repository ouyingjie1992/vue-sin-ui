/**
 * @author ouyj
 * Date: 19/04/04
 */
import sinCheckBox from './checkBox/index';

const components = [
    sinCheckBox
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  sinCheckBox
}