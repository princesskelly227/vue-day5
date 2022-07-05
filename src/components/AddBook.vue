<template>
  <div id="add">
    <el-input placeholder="书名"></el-input>
    <el-input placeholder="作者"></el-input>
    <el-input placeholder="出版社"></el-input>
    <el-button type="primary">新增图书</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style scoped>
#add {
  margin-top: 100px;
  margin-left: -400px;
  width: 200px;
}
</style>
