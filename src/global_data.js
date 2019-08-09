const logoName = '后台管理系统'
const menuList = [
  {
    name: '我的信息',
    id: '40000',
    icon: 'el-icon-s-custom',
    sub: [
      {
        id:'40001',
        name:'我的消息',
        componentName: 'message',
        route: '/message'
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
    icon:'el-icon-s-data',
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
const wdmessage = [
  {
    'name':1,
    'title':'一致性 Consistency',
    'content':'与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
  },
  {
    'name':2,
    'title':'反馈 Feedback',
    'content':'控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
  },
  {
    'name':3,
    'title':'效率 Efficiency',
    'content':'帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。'
  },
  {
    'name':4,
    'title':'可控 Controllability',
    'content':'用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；'
  }
  ]
export default {
  logoName,
  menuList,
  wdmessage
}
