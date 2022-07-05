<template>
  <div>
    <TodoHeader @add='addFn' @setchecked="setcheckedFn"></TodoHeader>
    <TodoMain :list='checked' @del1='delFn'></TodoMain>
    <TodoFooter :count='count' @filterdata='filterdataFn' @clear="clearFun"></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default { 
  data(){
    return{
      list:JSON.parse(localStorage.getItem('list')),
      //  [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 201, name: "睡觉", isDone: false },
      //   { id: 103, name: "打豆豆", isDone: true },
      // ],
      getSel :'all'
    }
  },
  components:{
    TodoFooter,
    TodoHeader,
    TodoMain
  },
  methods: {
    
    addFn(val){
      const id =this.list[this.list.length-1]?this.list[this.list.length-1].id+1:100
      this.list.push({
        name:val,
        isDone:false,
        id,
      })
    },
    delFn(id){
      const index = this.list.findIndex(ele=>ele.id==id)
      this.list.splice(index,1)
    },
    filterdataFn(val){
      this.getSel=val
      console.log(this.getSel);
    },
     clearFun(){ // 清除已完成
          this.list = this.list.filter(obj => obj.isDone == false)
        },
        setcheckedFn(val){
          this.list.forEach(ele=>ele.isDone=val)
        }
  },
  computed:{
    count(){
      return this.list.filter(ele=> !ele.isDone).length
    },
    checked(){
      if(this.getSel=="no"){
      return this.list.filter(ele=> !ele.isDone)}
      else if(this.getSel=="yes"){
        return this.list.filter(ele=>ele.isDone)
      }else{
        return this.list
      }
    }
   
  },
  watch:{
    list:{
      deep:true,
      handler(val){
        localStorage.setItem('list',JSON.stringify(val || []))
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>