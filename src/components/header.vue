<template>
    <el-row :gutter="0" class="header">
      <el-col :span="18" style="height: 100%;">
        <div class="logo"><i :class="collapseMenuIcon" v-on:click="collapseMenuClick"></i>{{logoName}}</div>
      </el-col>
      <el-col :span="3" style="height: 100%;">
        <div class="guanzhu">
        <el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            关注我们<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><img :src="logoSrc"></el-dropdown-item>
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
            <el-dropdown-item>身份信息</el-dropdown-item>
            <el-dropdown-item>认证信息</el-dropdown-item>
            <el-dropdown-item>订单信息</el-dropdown-item>
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
        logoSrc: require("../assets/logo.png"),
        radio:'中文',
        collapseMenu:false,
        collapseMenuIcon:'el-icon-s-fold'
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
      }
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
