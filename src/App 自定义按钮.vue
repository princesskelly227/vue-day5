<template>
  <div>
    <MyButton title="登录按钮" type="primary" @Myclick="MyclickFn"> </MyButton>
  </div>
</template>

<script>
import MyButton from './components/Button1.vue';
export default {
  components: {
    MyButton,
  },
  methods:{
    MyclickFn(){
      alert('111')
    }
  }
};
</script>

<style></style>
