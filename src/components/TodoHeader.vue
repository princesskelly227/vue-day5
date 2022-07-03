<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isall">
    <label for="toggle-all"></label> 
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
 data(){
  return{
    task:''
  }
 },
 methods:{
  enter(){
    if(this.task.length==0){
      return alert('内容不能为空')
    }
    this.$emit('add',this.task)
    this.task=''
  }
 },
 computed:{
  isall:{
    set(checked){
      this.$emit('setchecked',checked)
    },
    get(){
      return this.$parent.list.every(ele=>ele.isDone)
    }
  }
 }
}
</script>