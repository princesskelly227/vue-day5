<template>
  <div id="tabbook">
    <el-table
      style="width: 100%"
      :data="arr"
      :row-class-name="rouClassNameFn"
      @row-click="onRowClick"
    >
      <el-table-column prop="id" label="序号" width="180"> </el-table-column>
      <el-table-column prop="bookname" label="书名" width="180">
      </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="publisher" label="出版社"> </el-table-column>
      <el-table-column label="操作">
        <el-button type="success">查看详情</el-button>
        <el-button type="warning" @click="onRowClick">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      // id: '',
    };
  },

  created() {
    this.getArr();
  },
  methods: {
    getArr(params = {}) {
      this.$axios({
        url: '/api/getbooks',
        params: params,
      }).then((res) => {
        this.arr = res.data.data;
        // console.log(this.arr);
      });
    },

    // Element Ul 的方法  循环的时候把索引号放进去
    rouClassNameFn({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    }, //拿到索引号
    onRowClick(row, event, column) {
      // console.log(row);
      // console.log(row.id);
      const id = row.id;
      // console.log(id);
      this.$axios({
        url: '/api/delbook',
        params: { id },
      }).then(() => {
        this.getArr();
      });
    },
    // kkFn() {
    //   console.log(onRowClick(id));
    // },
  },
};
</script>
<style scoped>
#tabbook {
  width: 1200px;
  margin-left: -400px;
}
</style>
