<template>
  <button :class="`on-button-${colorStr}`" @click="Myclick">{{ title }}</button>
  <!-- 
    封装一组按钮插件
    1. 按钮的内容可以支持自定义
    2. 按钮的类型只有4种 primary success warning danger，
    需入其他的需要校验
   -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '按钮组件',
    },
    type: {
      type: String,
      default: 'blur',
      validator(val) {
        return ['blur', 'yellow', 'red', 'green'];
      },
    },
  },
  data() {
    return {
      colorStr: 'blur',
    };
  },
  methods: {
    Myclick(){
      this.$emit('Myclick')
    }
  }
};
</script>
<style>
button {
  color: #fff;
  outline: none;
  border: none;
  width: 150px;
  height: 50px;
  font-size: 50px;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.on-button-blur {
  background-color: #409eff;
}
.on-button-green {
  background-color: #67c23a;
}
.on-button-yellow {
  background-color: #e6a23c;
}
.on-button-red {
  background-color: #f56c6c;
}
</style>
