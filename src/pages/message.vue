<template>
    <div class="box">
      <el-card shadow="hover" class="message">
        <div slot="header" class="clearfix">
          <el-button style="float: left; padding: 3px 0" type="primary">未读消息</el-button>
          <el-button style="float: left; padding: 3px 0" type="primary">已读消息</el-button>
          <el-button style="float: right; padding: 3px 0" type="text">全部置为已读</el-button>
        </div>
        <div v-if="key" :key="o" class="text item">
          <el-collapse v-model="activeNames" @change="handleChange" class="message_list">
            <el-collapse-item :key="item.name" v-for="item in wdmessage" :name="item.name">
              <template slot="title">
                {{item.title}}<i class="header-icon el-icon-info"></i>
              </template>
              <div>{{item.content}}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
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
        wdmessage:global.wdmessage,
        ydmessage:[

        ]
      };
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
</style>
