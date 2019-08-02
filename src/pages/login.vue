<template>
  <div class="box">
    <el-card shadow="hover" class="login">
      <el-container>
        <el-header>

        </el-header>
        <el-main>
          <el-form :model="login" :rules="loginRules" ref="login" label-width="0px">
            <el-form-item prop="username">
              <el-input v-model="login.username" placeholder="username">
                <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="password" v-model="login.password" @keyup.enter.native="loginSubmit('login')">
                <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
              </el-input>
            </el-form-item>
              <el-button type="primary" @click="loginSubmit('login')">登录</el-button>
          </el-form>
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
        login: {
          username: 'admin',
          password: '123456'
        },
        loginRules:{
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      loginSubmit(form){
        this.$refs[form].validate((valid) => {
          if (valid) {
            localStorage.setItem('username',this.login.username);
            this.$router.push('/index');
          } else {
            this.$message.error('请输入登录名和登陆密码');
            return false;
          }
        });
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
