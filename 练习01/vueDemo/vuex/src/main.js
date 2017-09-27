// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './myVuex/store'

Vue.use(Vuex)
// 这句代码的作用是：阻止vue在启动时生成的生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,    //将store实例注入到根组件下的所有子组件中，  子组件中通过this.$store来访问store
  template: '<App/>',
  components: { App }
})
