<template>
  <div id="tabbook">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="书名" width="180"> </el-table-column>
      <el-table-column prop="address" label="作者"> </el-table-column>
      <el-table-column prop="address" label="出版社"> </el-table-column>
      <el-table-column prop="address" label="操作">
        <el-button type="success">查看详情</el-button>
        <el-button type="warning">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },

  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
        },
      ],
    };
  },
};
</script>
<style scoped>
#tabbook {
  width: 1200px;
  margin-left: -400px;
}
</style>
