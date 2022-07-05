<template>
  <div>
    <SearchBook></SearchBook>

    <TableBook></TableBook>

    <AddBook></AddBook>
  </div>
</template>

<script>
// 引入搜索组件
import SearchBook from './components/SearchBook.vue';
// 引入添加组件
import AddBook from './components/AddBook.vue';
// 引入数据组件
import TableBook from './components/TableBook.vue';

export default {
  data() {
    return {
      arr: [''],
    };
  },
  components: {
    SearchBook,
    TableBook,
    AddBook,
  },
};
</script>

<style></style>
