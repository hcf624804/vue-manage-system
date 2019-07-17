import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/home.vue')
const password = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/password.vue')
const identify = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/identify.vue')
const order = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/order.vue')
const wallet = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/wallet.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: '总览',
      component: home
    },
    {
      path: '/password',
      name: '密码修改',
      component: password
    },
    {
      path: '/identify',
      name: '身份认证',
      component: identify
    },
    {
      path: '/order',
      name: '我的订单',
      component: order
    },
    {
      path: '/wallet',
      name: '我的钱包',
      component: wallet
    }
  ]
})
