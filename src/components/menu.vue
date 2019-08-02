<template>
  <el-container direction="vertical" style="height: 100%">
    <el-main style="height: 90%;width: 100%;">
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    :router='true'
    unique-opened
    @open="handleOpen"
    @close="handleClose"
    @select="selectItems"
    background-color="#2c323e"
    text-color="#afb8c1"
    active-text-color="#2fa8fd"
    style="border-right-width: 0;"
    :collapse="collapse">
    <el-menu-item index="/index">
      <i class="el-icon-s-home"></i>
      <span slot="title">系统总览</span>
    </el-menu-item>
    <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
      <template slot="title">
        <i :class="item.icon"></i>
        <span v-text="item.name"></span>
      </template>
      <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.route" v-if="item.sub">
        <el-menu-item :index="sub.route" v-text="sub.name">
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
    </el-main>
  </el-container>
</template>

<script>
  import global from '@/global_data.js'
  import Bus from './bus.js'

  export default {
    name: 'menu',
    data() {
      return{
        menu:global.menuList,
        collapse:false
      }
    },
    mounted() {
      const routePath = localStorage.getItem('currentRoutePath')
      const routeName = localStorage.getItem('currentRouteName')
      console.log(routePath)
      if(routePath !== '/index'){
        this.$store.commit("add_tabs",{route:'/index',name:'总览'})
        this.$store.commit("add_tabs",{route:routePath,name:routeName})
        this.$store.commit("set_active_index",routePath)
      }else{
        this.$store.commit("add_tabs",{route:'/index',name:'总览'})
        this.$store.commit("set_active_index",routePath)
        this.$router.push('/index');
      }
      let self =this
      Bus.$on('collapseMenu',(e) => {
        self.collapse = e
        console.log("传过来的数据是："+e)
      })
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      },
      selectItems(key, keyPath) {
        localStorage.setItem('currentRoutePath', key);
      }
    }
  }
</script>

<style scoped>

</style>
