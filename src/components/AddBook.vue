<template>
  <div id="add">
    <el-input placeholder="书名" v-model.trim="bookname"></el-input>
    <el-input placeholder="作者" v-model.trim="author"></el-input>
    <el-input placeholder="出版社" v-model.trim="publisher"></el-input>
    <el-button type="primary" @click="addFn">新增图书</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: '',
      author: '',
      publisher: '',
    };
  },
  methods: {
    addFn() {
      if (this.bookname == '' || this.author == '' || this.publisher == '') {
        return alert('请补全图书的信息');
      }
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          // ...this.bookObj,
          // 等同于下面
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        },
      }).then((res) => {
        // console.log(res.data.msg);
        alert(res.data.msg);
      });
      (this.bookname = ''), (this.author = ''), (this.publisher = '');
    },
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
