<template>
  <div>
    <MyButton v-for="item in list" :key="item" :title="item.button" :type="item.color" @myclick='myclickfn'></MyButton>
  </div>
</template>

<script>
import MyButton from './components/ButtonSubassembly.vue'
export default {
  data() {
    return {
      list:[{
        button:'默认按钮',
        color:'warning'
      },
      {
        button:'主要按钮',
        color:'primary'
      },
      {
        button:'成功按钮',
        color:'success'
      },
      {
        button:'警告按钮',
        color:'danger'
      },
      ]
    };
  },
  methods:{
    myclickfn(){
      alert('成功')
    }
  },
  components: {
    MyButton
  },
  computed: {
  },
};
</script>

<style>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.primary{
  background-color: aqua;
}
.success{
  background-color: greenyellow;
}
.warning{
  background-color: whitesmoke;
}
.danger{
  background-color: yellow;
}
</style>
