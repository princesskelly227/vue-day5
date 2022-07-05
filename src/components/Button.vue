<template>
<div>
    <button :class = "type" @click="clickFn">{{content}}</button>
</div>
</template>

<script>

export default {
    data() {
        return{

        }
    },
    props:{
        type: {
            type: String,
            default: "primary",
            validator(val) {
                return ["primary", "success", "warning", "danger"].includes(val)
            }
        },
        content: {
            type: String,
            default: "主要按钮"
        }
    },
    methods: {
        clickFn(){
            this.$emit("myclick")
        }
    }
};
</script>

<style lang="less" scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.primary {
  background-color: skyblue;
}
.success {
  background-color: hotpink;
}
.warning {
  background-color: yellow;
}
.danger {
  background-color: red;
}
</style>
