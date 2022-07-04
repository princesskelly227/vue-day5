<template>
  <div>
    <TodoHeader @add='addfn' @setchecked='setcheckedfn'></TodoHeader>
    <TodoMain :list='showlist' @del='delfn'></TodoMain>
    <TodoFooter :count='count' @fliterdata='fliterdatafn' @clear='clearfn'></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  data() {
    return{
      list:JSON.parse(localStorage.getItem('list'))||[],
      getles:'all'
    }
  },
  components:{
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  methods:{
    addfn(val){
      const id=this.list[this.list.length-1]?this.list[this.list.length-1].id+1:100
      this.list.push({
        id,
        name:val,
        isDone:false
      })
      console.log(this.list);
    },
    delfn(id){
      const index=this.list.findIndex(ele=>ele.id==id)
      this.list.splice(index,1)
    },
    fliterdatafn(val){
      this.getles=val
    },
    clearfn(){
      this.list.forEach(ele=>ele.isDone=false)
    },
    setcheckedfn(val){
      this.list.forEach(ele=>ele.isDone=val)
    }
  },
  computed:{
    count(){
      return this.list.filter(ele=>!ele.isDone).length
    },
    showlist(){
      if(this.getles=='yes'){
        return this.list.filter(ele=>ele.isDone)
      }else if(this.getles=='no'){
        return this.list.filter(ele=>!ele.isDone)
      }else{
        return this.list
      }
    }
  },
  watch:{
    list:{
      handler(val){
        localStorage.setItem('list',JSON.stringify(val||[]))
      }
    }
  }
};
</script>

<style></style>
