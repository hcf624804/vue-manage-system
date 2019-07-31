<template>
  <div class="box">
    <el-card shadow="hover" class="login">
      <el-container>
        <el-header>

        </el-header>
        <el-main>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">登录名：</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-input
              placeholder="请输入登录名"
              v-model="username"
              clearable />
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">登录密码：</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-input
                placeholder="请输入登录密码"
                v-model="password"
                show-password />
            </div></el-col>
          </el-row>
        </el-main>
        <el-footer>

        </el-footer>
      </el-container>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return{
        username:'admin',
        password:'123456'
      }
    }
  }
</script>

<style scoped>
  .box{
    background: url("../assets/login_background.jpg") no-repeat;
    position: relative;
    width:100%;
    height:100%;
    padding: 0px !important;
    background-size: 100%;
  }
  .login{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    width: 400px;
    height: 400px;
    filter:alpha(Opacity=80);-moz-opacity:0.5;opacity: 0.5;
  }
  .el-row{

  }
</style>
