import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home = () => import(/* webpackChunkName: "chunkname1" */ '@/components/home.vue')
const index = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/index.vue')
const message = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/message.vue')
const identify = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/identify.vue')
const order = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/order.vue')
const wallet = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/wallet.vue')
const login = () => import(/* webpackChunkName: "chunkname1" */ '@/pages/login.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: home,
      children:[
        {
          path: '/index',
          name: '总览',
          component: index
        },
        {
          path: '/message',
          name: '我的消息',
          component: message
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
    },
    {
      path: '/login',
      name: '登陆',
      component: login
    }
  ]
})
