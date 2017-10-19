// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Heads from "./components/head"
import Foot from "./components/foot"
import Right from "./components/cont_right"
import Hello from "./components/HelloWorld"
//import VueResource from 'vue-resource'
//import Test from "./components/test"
Vue.use(VueRouter)
Vue.config.productionTip = false

//设置路由
const router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	{path:"/",component:Hello},
	{path:"/foot",component:Foot}
	]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})