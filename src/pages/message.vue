<template>
    <div class="box">
      <el-card shadow="hover" class="message">
        <div slot="header" class="clearfix">
          <span>我的消息</span>
          <el-button style="float: right; padding: 3px 0" type="text" v-on:click="allYd">全部置为已读</el-button>
        </div>
        <el-collapse v-model="activeNames" @change="handleChange" class="message_list">
          <el-collapse-item :key="item.id" v-for="item in message" :name="item.id">
            <template slot="title">
              {{item.title}}<div class="hongdian" v-if="item.wd"></div>
            </template>
            <div>{{item.content}}</div>
            <div style="font-size: 10px;margin-top: 5px;">——{{item.comefrom}}<div style="float: right">{{item.date}}</div></div>
          </el-collapse-item>
        </el-collapse>
      </el-card>
    </div>
</template>

<script>
  import global from '@/global_data.js'
  export default {
    name: 'message',
    data() {
      return {
        activeName: 'first',
        key:true,
        activeNames:[],
        message:global.message
      };
    },
    methods:{
      handleChange(val){
        console.log(val);
        let message = this.message;
        for(let i in val){
          console.log("iiiiiiiiiiiii"+val[i])
          for(let j in message){
            if(val[i] == message[j].id){
              console.log(message[j]);
              message[j].wd = false;
            }
          }
        }
        console.log(message);
      },
      allYd(){
        let message = this.message;
        for(let j in message){
          message[j].wd = false;
        }
      }
    }
  }
</script>

<style scoped>
  .box{
    background-color: white;
    width: 100%;
    height: 93%;
    border-radius: 10px;
  }
  .message{
    width: 80%;
    position: absolute;
    left: 10%;
  }
 .message{
   width: 90%;
   left: 5%;
   height: 80%;
   top: 10%;
 }
  .clearfix{
    height: 30px;
  }
  .message_list{
    width: 80%;
    margin-left: 10%;
    margin-top: 2%;
  }
  .hongdian{
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    margin-left: 5px;
  }
</style>
