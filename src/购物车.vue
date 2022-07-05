<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isall" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyTick
          v-for="(item, index) in goodList"
          :key="index"
          :obj="item"
        ></MyTick>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">总件数：{{ count }} 总价格：{{ allprice }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import MyTick from "./components/MyTick.vue";
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  components: {
    MyTick,
  },
  methods: {},
  computed: {
    isall: {
      set(checked) {
        this.goodList.forEach((ele) => (ele.checked = checked));
      },
      get() {
        return this.goodList.every((ele) => ele.checked);
      },
    },
    count() {
      return this.goodList.reduce((sum, next) => (sum += next.num), 0);
    },
    allprice(){
      return this.goodList.reduce((sum, next) => sum+=next.price*next.num, 0);
    }
  },

};
</script>

<style></style>
