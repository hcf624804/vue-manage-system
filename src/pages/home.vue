<template>
    <div class="box">
      <el-scrollbar class="default-scrollbar">
        <el-card shadow="hover">
          总览页
        </el-card>
      </el-scrollbar>
    </div>

</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
.box{
  background-color: white;
  width: 100%;
  height: 93%;
  border-radius: 10px;
}
.default-scrollbar {
  width: 100%;
  height: 100%;
}
</style>
