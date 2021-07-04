import Vue from 'vue'
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

/*
   vue.runtime.common.js 和vue.js有何区别
    vue.runtime.common.js（项目中用的多）：
      1.不包含模板解析器，打包后体积小。
      2.配置项中的不能写template，要用render: h=>h(App)代替
    vue.js:
      1.包含解析模板器，打包后体积大。
      2.配置可以写template
  
 */
new Vue({
  render: h => h(App),
}).$mount('#app')
