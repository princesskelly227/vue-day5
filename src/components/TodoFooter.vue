<template>
  <footer class="footer">
    <span class="todo-count">剩余{{count}}<strong>数量值</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected: isSel =='all'}" href="javascript:;" 
       @click="change('all')" >全部</a>
      </li>
      <li>
        <a  :class="{selected: isSel =='no'}" href="javascript:;"
        @click="change('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected: isSel =='yes'}" href="javascript:;" 
        @click="change('yes')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
export default {
 props:['count'],
 data(){
    return{
        isSel:'all'
    }
 },
 methods:{
    change(val){
        this.isSel=val;
        this.$emit('filterdata',val)
    },
    clearFn(){ // 清空已完成任务
          // 7.1 触发App.vue里事件对应clearFun方法
          this.$emit('clear')
        }
 },

}
</script>