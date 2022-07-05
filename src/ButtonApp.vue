<template>
  <div>
    <MyButton type="danger" content="危险按钮" @myclick="clickF"></MyButton>
  </div>
</template>

<script>
import MyButton from './components/Button.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    MyButton,
  },
  methods: {
    clickF() {
      alert(666)
    }
  }
}
</script>

<style></style>
