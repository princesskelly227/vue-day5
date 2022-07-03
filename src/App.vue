<template>
  <div>
    <TodoHeader @add="addFn"></TodoHeader>
    <TodoMain :list="showList" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @checkAll="checkAllFn"
      @clear="clearFn"
    ></TodoFooter>
  </div>
</template>

<script>
// 引入组件
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      list: [
        { id: 100, name: '吃饭', isDone: true },
        { id: 101, name: '睡觉', isDone: false },
        { id: 102, name: '打豆豆', isDone: true },
      ],
      getTrue: 'all',
    };
  },
  // 注册组件
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    // 添加
    addFn(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
    },
    // 删除
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    //
    checkAllFn(val) {
      this.getTrue = val;
    },
    clearFn() {
      this.list.forEach((ele) => (ele.isDone = false));
    },
  },
  computed: {
    count() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showList() {
      if (this.getTrue == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getTrue == 'yes') {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
};
</script>

<style></style>
