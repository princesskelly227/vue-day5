<template>
  <div id="searchbook">
    <el-input
      placeholder="搜索-书本名称"
      v-model="val"
      @keydown="sear"
    ></el-input>
  </div>
</template>

<script sconde>
export default {
  data() {
    return {
      val: '',
    };
  },
  methods: {
    sear() {
      this.$emit('suiji', this.val);
    },
  },
};
</script>

<style scoped>
#searchbook {
  margin: 30px;
}
</style>
