<template>
  <div class="homeBox">
  <el-container class="container" direction="vertical" style="height: 100%">
    <el-header height="5%">
      <web-header></web-header>
    </el-header>
   <el-container direction="horizontal" style="height: 90%">
     <el-aside width="11%" style="background-color: #2c323e;border: #2c3e50">
         <web-menu></web-menu>
     </el-aside>
     <el-container style="background-color: #f5f7fa">
        <el-main>
          <el-tabs v-model="activeRoute"
                   class="main-tab"
                   type="card"
                   closable
                   v-if="options.length"
                   @tab-remove="tabRemove"
                   @tab-click="tabClick">
            <el-tab-pane
              v-for="(item, index) in options"
              :key="item.name"
              :label="item.name"
              :name="item.route"
            >

            </el-tab-pane>
          </el-tabs>

            <router-view :key="this.$store.state.activeDate"></router-view>

        </el-main>
     </el-container>
   </el-container>
  </el-container>
  </div>
</template>

<script>
  import header from '@/components/header.vue';
  import menu from '@/components/menu.vue';

export default {
  name: 'App',
  components: {
    "web-header": header,
    "web-menu": menu
  },
  methods: {
    // tab切换时，动态的切换路由
    tabClick (tab) {
      localStorage.setItem('currentRoutePath', this.activeRoute);
      let path = this.activeRoute;
      this.$router.push({path: path});
    },
    tabRemove (targetName) {
      // 首页不可删除
      if(targetName == '/') {
        return;
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeRoute === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit('set_active_index', this.options[this.options.length-1].route);
          this.$router.push({path: this.activeRoute});
        } else {
          this.$router.push({path: '/'});
        }
      }
    }
  },
  computed: {
    options () {
      return this.$store.state.options;
    },
    activeRoute: {

      get () {
        return this.$store.state.activeRoute;
      },
      set (val) {
        this.$store.commit('set_active_index', val);
      }
    }
  },
  watch: {
    '$route' (to) {
      let flag = false;
      for (let option of this.options ) {
        if (option.name === to.name) {
          flag = true;
          this.$store.commit('set_active_index', to.path);
          break
        }
      }

      if (!flag) {
        this.$store.commit('add_tabs', {route: to.path, name: to.name});
        this.$store.commit('set_active_index', to.path);
      }
      localStorage.setItem('currentRouteName', to.name);
      localStorage.setItem('currentRoutePath', to.path);
    }
  }
}
</script>

<style>

html,
body,
#app,
.homeBox,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}
.is-active{
  background-color: white;
}
.el-tabs__nav-scroll{
  background-color: #f7f5fb;
}
.el-tabs__item{
  border-radius: 5px;
}
.main-tab{
  background-color: white;
  color: white;
}
  .el-main{
    padding: 10px;
  }
  .el-footer{
    padding: 0px;
  }
.el-scrollbar__wrap{
  overflow-x: hidden;
}
</style>
