<template>
  <div>
    <button :class="type" @click="click">{{title}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods:{
    click(){
        this.$emit('myclick')
    }
  },
  props:{
    title:{
        type:String,
        default:'按钮组件'
    },
    type:{
        type:String,
        default:'primary',
        validator(val){
            return ['primary','success','warning','danger'].includes(val)
        }
    }
  },
  components: {
    
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
