<template>
  <div class ="my_div">
    <img :src= "item.dogImgUrl" alt=""/>
    <p @click="colorChange" :style="{background: colorStr}">{{item.dogName}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
          colorStr: ""
        }
    },
    props:{
        item: {
            type: Object,
            default: () => {{}}
        }
    },
    methods: {
      colorChange() {
        this.colorStr = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
        this.$emit('love', this.item.dogName)
      }
    }
}
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
