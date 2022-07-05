<template>
  <div>
    <MyButton title="成功按钮" type="success" @myclick='myclickfn'></MyButton>
  </div>
</template>

<script>
import MyButton from './components/ButtonSubassembly.vue'
export default {
  data() {
    return {
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
