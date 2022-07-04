<template>
  <div>
    <br /><br />
    <input
      type="text"
      placeholder="搜索-书本名称"
      @keyup.enter="Searchbookup"
      v-model.trim="Searchbook"
    /><br /><br />
    <table border="1" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in BookList" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.author }}</td>
          <td>
            <a href="javascript:" @click="delbook(item.id)">删除</a
            ><a href="javascript:" @click="detailbookfn(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
    <br /><br />
    <input
      type="text"
      placeholder="书名"
      v-model.trim="BookList.bookname"
      value="BookList.bookname"
    /><br /><br />
    <input
      type="text"
      placeholder="作者"
      v-model.trim="BookList.author"
      value="BookList.author"
    /><br /><br />
    <input
      type="text"
      placeholder="出版社"
      v-model.trim="BookList.publisher"
      value="BookList.publisher"
    /><br /><br />
    <button @click="addbook">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BookList: {
        id: "",
        bookname: "",
        author: "",
        publisher: "",
      },
      Searchbook: "",
    };
  },
  created() {
    this.$axios({
      url: "/api/getbooks",
    }).then((ele) => {
      this.BookList = ele.data.data;
    });
  },
  components: {},
  methods: {
    Searchbookup() {
      if (this.Searchbook == "") {
        this.Searchbook = "";
        return alert("内容不能为空");
      }
      this.$axios({
        url: "/api/getbooks",
        params: {
          bookname: this.Searchbook,
        },
      }).then((ele) => {
        ele.data.data.forEach((ele) =>
          alert(
            `书名：${ele.bookname}\n作者：${ele.author}\n出版社：${ele.publisher}`
          )
        );
        // alert(`${ele.data.data[0].bookname}\n${ele.data.data[0].author}\n${ele.data.data[0].publisher}`)
      });
      this.Searchbook = "";
    },
    addbook() {
      console.log(this.BookList.bookname);
      if (
        this.BookList.bookname == "" || this.BookList.author == "" || this.BookList.publisher == ""
      ) {
        console.log(111);
        return alert("内容不能为空");
      }
      this.$axios({
        method: "post",
        url: "/api/addbook",
        data: {
          ...this.BookList,
        },
      });
      this.$nextTick(()=>{
        this.$axios({
        url: "/api/getbooks",
      }).then((ele) => {
        this.BookList = ele.data.data;
      });
      })
      this.$nextTick(()=>{
        this.$axios({
        url: "/api/getbooks",
      }).then((ele) => {
        this.BookList = ele.data.data;
      });
      })
      this.BookList.bookname = "";
      this.BookList.author = "";
      this.BookList.publisher = "";
      console.log(this.BookList);
    },
    delbook(id) {
      this.$axios({
        url: "/api/delbook",
        params: {
          id,
        },
      });
      console.log(this.BookList);
      this.$axios({
        url: "/api/getbooks",
      }).then((ele) => {
        this.BookList = ele.data.data;
      });
    },
    detailbookfn(id) {
      this.$axios({
        url: "/api/getbooks",
        params: {
          id,
        },
      }).then((ele) => {
        ele.data.data.forEach((ele) =>
          alert(
            `书名：${ele.bookname}\n作者：${ele.author}\n出版社：${ele.publisher}`
          )
        );
        // alert(`${ele.data.data[0].bookname}\n${ele.data.data[0].author}\n${ele.data.data[0].publisher}`)
      });
    },
  },
  computed: {},
  watch: {},
};
</script>

<style>
button {
  width: 50px;
  height: 20px;
  background-color: hotpink !important;
  color: white !important;
  border-radius: 5px;
}
table {
  text-align: center;
}
tr {
  height: 50px;
}
td {
  width: 100px;
}
a {
  margin: 10px;
  color: hotpink;
  text-decoration: initial;
}
</style>
