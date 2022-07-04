<template>
  <div>
    <!-- 把组件当普通标签用 -->
    <!-- <my-dog></my-dog> -->
    <MyDog></MyDog>
  </div>
</template>

<script>
// 引入子组件
// 注册子组件
import MyDog from './components/Dog.vue';
export default {
  components: {
    MyDog,
  },
};
</script>

<style></style>
