<template>
  <tr>
    <td><input type="checkbox" name="" id="" v-model="item.checked" /></td>
    <td>{{ item.name }}</td>
    <td>{{ item.price }}</td>
    <td>
      <!-- <button>你好</button> -->
      <a
        href="javascript:void(0)"
        @click="item.num <= 0 ? (item.num = 0) : item.num--"
        >-</a
      >
      {{ item.num }}
      <a href="javascript:void(0)" @click="item.num++">+</a>
    </td>
    <td>{{ item.price * item.num }}</td>
    <td><a href="javascript:void(0)" @click="del(item.name)">删除</a></td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    // 删除功能
    del(val) {
      const index = this.$parent.goodList.findIndex((ele) => {
        return ele.name == val;
      });
      this.$parent.goodList.splice(index, 1);
    },
  },
};
</script>

<style></style>
