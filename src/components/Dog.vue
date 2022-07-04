<template>
  <div class="my_div">
    <img :src="item.dogImgUrl" alt="" />
    <p :style="{ backgroundColor: colorStr }" @click="btn">
      {{ item.dogName }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStr: '',
    };
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    btn() {
      // console.log(Math.floor(Math.random() * 256));
      this.colorStr = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;

      this.$emit('getdog', this.item.dogName);
    },
  },
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>
