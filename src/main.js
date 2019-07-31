// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import StoreOption from './vuex/store';
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
const store = new Vuex.Store(StoreOption);

router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username');
  console.log(username)
  if (username == null && to.path !== '/login') {
    console.log("去登陆页面")
    next('/login');
  } else {
      next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
