<template>
    <el-row :gutter="0" class="header">
      <el-col :span="18" style="height: 100%;">
        <div class="logo"><i :class="collapseMenuIcon" v-on:click="collapseMenuClick"></i>{{logoName}}</div>
      </el-col>
      <el-col :span="3" style="height: 100%;">
        <div class="guanzhu">
        <el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            支持作者<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><img :src="logoSrc" style="width: 250px;"></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </div>
      </el-col>
      <el-col :span="1" style="height: 100%;">
        <div class="wode">
        <el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            我的<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
            <el-badge :value="messageCount" :max="99" class="item">
            <el-dropdown-item @click.native="gotoMessage">我的消息</el-dropdown-item>
            </el-badge>
          </el-dropdown-menu>
        </el-dropdown>
        </div>
      </el-col>
      <el-col :span="2" style="height: 100%;">
        <div class="language">
        <el-radio-group v-model="radio" size="mini">
          <el-radio-button label="中文"></el-radio-button>
          <el-radio-button label="english"></el-radio-button>
        </el-radio-group>
        </div>
      </el-col>
    </el-row>
</template>

<script>
  import global from '@/global_data.js'
  import Bus from './bus.js'

  export default {
    name: 'header',
    data() {
      return {
        logoName: global.logoName,
        logoSrc: require("../assets/Alipay.png"),
        radio:'中文',
        collapseMenu:false,
        collapseMenuIcon:'el-icon-s-fold',
        messageCount:0
      }
    },
    methods:{
      collapseMenuClick(){
        if(!this.collapseMenu){
          this.collapseMenuIcon='el-icon-s-unfold'
          this.collapseMenu=true
          Bus.$emit('collapseMenu',true)
        }else{
          this.collapseMenuIcon='el-icon-s-fold'
          this.collapseMenu=false
          Bus.$emit('collapseMenu',false)
        }
      },
      gotoMessage(){
        localStorage.setItem('currentRoutePath', '/message');
        this.$store.commit("add_tabs",{route:'/message',name:'我的消息'})
        this.$store.commit("set_active_index",'/message')
        this.$router.push('/message');
      }
    },
    created () {
      let message = global.message;
      let count = 0;
      for(let i in message){
        if(message[i].wd == 0){
          count ++;
        }
      }
      this.messageCount = count;
    },
    mounted() {
      let self =this
      Bus.$on('messageCount',(e) => {
        self.messageCount = e
        console.log("传过来的数据是："+e)
      })
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 100%;
  }
  .logo{
    height: 100%;
    color: midnightblue;
    display: box;
    box-pack:center;
    box-orient:vertical;
    display: -webkit-box;
    -webkit-box-pack:center;
    -webkit-box-orient:vertical;
    font-size: 30px;
  }
  .guanzhu{
    float: right;
    height: 100%;
    color: midnightblue;
    display: box;
    box-pack:center;
    box-orient:vertical;
    display: -webkit-box;
    -webkit-box-pack:center;
    -webkit-box-orient:vertical;
  }
  .wode{
    width: 100%;
    text-align: center;
    height: 100%;
    color: midnightblue;
    display: box;
    box-pack:center;
    box-orient:vertical;
    display: -webkit-box;
    -webkit-box-pack:center;
    -webkit-box-orient:vertical;
  }
  .language{
    width: 100%;
    align-content: center;
    height: 100%;
    color: midnightblue;
    display: box;
    box-pack:center;
    box-orient:vertical;
    display: -webkit-box;
    -webkit-box-pack:center;
    -webkit-box-orient:vertical;
  }
</style>
