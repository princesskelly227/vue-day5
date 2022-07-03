<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// 引入组件
import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {};
  },
  // 注册组件
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style></style>
