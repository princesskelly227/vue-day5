import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// Vue.use(ElementUI);     //全局注入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
// 
Vue.config.productionTip = false

// main.js  全局使用EventBus
// import Bus from "./EventBus/index.js";
// Vue.use(Bus);

// Vue.prototype.$EventBus = new Vue();

// 1.0 样式引入
// 在素材的文件下 直接拖进来就可以了
import "./assets/styles/base.css"
import "./assets/styles/index.css"

new Vue({
  render: h => h(App),
}).$mount('#app')
