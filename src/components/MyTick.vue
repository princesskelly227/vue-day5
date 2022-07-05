<template>
  <tr>
    <td><input type="checkbox" v-model="obj.checked"/></td>
    <td>{{ obj.name }}</td>
    <td>{{ obj.price }}</td>
    <td><button @click="obj.num>0?obj.num--:0">-</button>{{obj.num}}<button @click="obj.num++">+</button></td>
    <td>{{ obj.price * obj.num }}</td>
    <td><button @click="del(obj.name)">删除</button></td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    del(val) {
      const index = this.$parent.goodList.findIndex((ele) => ele.name == val);
      this.$parent.goodList.splice(index, 1);
    },
  },
};
</script>

<style>
button {
  width: 50px;
  height: 30px;
  background-color: wheat !important;
  margin: 10px !important;
}
table {
  text-align: center;
}
</style>
