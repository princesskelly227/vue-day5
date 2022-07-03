<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{count}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected:isel=='all'}" href="javascript:;" @click="change('all')">全部</a>
      </li>
      <li>
        <a :class="{selected:isel=='no'}" href="javascript:;" @click="change('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected:isel=='yes'}" href="javascript:;" @click="change('yes')" >已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click='clear'>清除已完成</button>
  </footer>
</template>

<script>
export default {
  props:['count'],
  data(){
    return{
      isel:'all'
    }
  },
  methods:{
    change(val){
      this.isel=val
      this.$emit('fliterdata',val)
    },
    clear(){
      this.$emit('clear')
    }
  }
}
</script>