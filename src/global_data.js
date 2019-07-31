const logoName = '后台管理系统'
const menuList = [
  {
    name: '我的信息',
    id: '40000',
    sub: [
      {
        id:'40001',
        name:'密码修改',
        componentName: 'password',
        route: '/password'
      },
      {
        id:'40002',
        name:'身份认证',
        componentName: 'identify',
        route: '/identify'
      }
    ]
  },
  {
    name:'订单信息',
    id:'50000',
    sub:[
      {
        id: '50001',
        name:'我的订单',
        componentName: 'order',
        route: '/order'
      },
      {
        id: '50002',
        name:'我的钱包',
        componentName: 'wallet',
        route: '/wallet'
      }
    ]
  }
]
export default {
  logoName,
  menuList
}
