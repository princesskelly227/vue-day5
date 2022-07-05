import Vue from 'vue'
import App from './App.vue'
// 
// import ElementUI from 'element-ui';             //全局引入element
// import 'element-ui/lib/theme-chalk/index.css';    //全局引入element的样式
// Vue.config.productionTip = false

// Vue.use(ElementUI);     //全局注入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)



// 
Vue.config.productionTip = false
// 1.0 样式引入
// 在素材的文件下 直接拖进来就可以了
import "./assets/styles/base.css"
import "./assets/styles/index.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
