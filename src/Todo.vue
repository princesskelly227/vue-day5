<template>
  <div>
    <TodoHeader @add='addFn'></TodoHeader>
    <TodoMain :list='showlist' @del='delFn'></TodoMain>
    <TodoFooter :count='count' @filterdata = 'filterdataFn' @clear='clearFn'></TodoFooter>
  </div>
</template>

<script>
import './assets/styles/base.css'
import './assets/styles/index.css'

import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  data() {
    return {
      // list: [
      //   { id: 100, name: "吃饭", isDone: true },
      //   { id: 201, name: "睡觉", isDone: false },
      //   { id: 103, name: "打豆豆", isDone: true },
      // ],
      list: JSON.parse(localStorage.getItem("list")) || [],
      getSel: 'all'
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      const id = this.list[this.list.length - 1] ? this.list[this.list.length - 1].id +1 : 100
      this.list.push({
        name: val,
        isDone: false,
        id,
      })
    },
    delFn(id) {
      const index = this.list.findIndex( ele => ele.id == id)
      this.list.splice(index, 1)
    },
    filterdataFn(val){
      this.getSel = val
    },
    clearFn() {
      this.list.forEach(ele => ele.isDone =false)
    }
  },
  computed: {
    count() {
      return this.list.filter(ele => !ele.isDone).length
    },
    showlist() {
      if (this.getSel == 'no') {
        return this.list.filter(ele => !ele.isDone)
      } else if (this.getSel == 'yes') {
        return this.list.filter(ele => ele.isDone)
      } else {
        return this.list
      }
    }
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val || []))
      }
    }
  }
}
</script>

<style></style>
