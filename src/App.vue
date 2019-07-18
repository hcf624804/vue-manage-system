<template>
  <div class="homeBox">
  <el-container class="container" direction="vertical" style="height: 100%">
    <el-header :style="header">
      <web-header></web-header>
    </el-header>
   <el-container direction="horizontal" style="height: 90%">
     <el-aside :style="aside" style="background-color: #2c323e;border: #2c3e50">
         <web-menu></web-menu>
     </el-aside>
     <el-container style="background-color: #f5f7fa">
        <el-main :style="elmain">
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
          <el-tooltip class="item" effect="light" :content="quanpin_content" placement="bottom">
            <el-button icon="el-icon-full-screen" round class="quanpin" v-on:click="quanpinClick" size="mini"></el-button>
          </el-tooltip>
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
  data() {
    return {
      header:{
        height:''
      },
      aside:{
        width:''
      },
      elmain:{
        padding:'10px;'
      },
      quanpin:false,
      quanpin_content:'全屏',
    }
  },
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
    },
    quanpinClick(){
      if(this.quanpin){
        this.header.height = (window.innerHeight-70)*0.05+'px';
        this.aside.width = window.innerWidth*0.12+'px';
        this.quanpin=false;
        this.elmain.padding=10+'px';
        this.quanpin_content='全屏';
      }else{
        this.header.height = 0+'px';
        this.aside.width = 0+'px';
        this.quanpin=true;
        this.elmain.padding=0+'px';
        this.quanpin_content='取消全屏';
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
  },
  created () {
    this.header.height = (window.innerHeight-70)*0.05+'px';
    this.aside.width = window.innerWidth*0.12+'px';
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
    position: relative;
  }
  .el-footer{
    padding: 0px;
  }
.el-scrollbar__wrap{
  overflow-x: hidden;
}
  .quanpin{
    position: absolute;
    top: 10px;
    right: 20px;
  }

</style>
