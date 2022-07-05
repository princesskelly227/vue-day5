<template>
  <div>
    <input type="text" placeholder="搜索-书本名称" /><br />
    <div style="margin: 10px">
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <td>序号</td>
          <td>书名</td>
          <td>作者</td>
          <td>出版商</td>
          <td>操作</td>
        </tr>
        <tr v-for='item in BookList' :key='item.id'>
          <td>{{item.id}}</td>
          <td>{{item.bookname}}</td>
          <td>{{item.author}}</td>
          <td>{{item.publisher}}</td>
          <td><a href="#">删除</a> / <a href="#">详情</a></td>
        </tr>
      </table>
    </div>
    <input type="text" placeholder="书名" v-model="BookList.bookname"/><br />
    <input type="text" placeholder="作者"  v-model="BookList.author"/><br />
    <input type="text" placeholder="出版社" v-model="BookList.publisher"/><br />
    <button @click="btn">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        BookList:[]
        
    };
  },
  computed: {
    list() {
      
    },
  },
  created(){
    this.$axios({
        url: "/api/getbooks",
      }).then((res) => 
    //   console.log(res)
    this.BookList=res.data.data
    
      );
    
  },
  methods: {
    btn() {
        // console.log(this.BookList)
      this.$axios({
              url:'/api/addbook',
              method: 'POST',
              data: {
                bookname:this.BookList.bookname,
                author:this.BookList.author,
                publisher:this.BookList.publisher
              }
          }).then(res=>console.log(res))
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 10px;
}
button {
  width: 40px;
  height: 30px;
  background-color: SKYblue;
}
</style>
