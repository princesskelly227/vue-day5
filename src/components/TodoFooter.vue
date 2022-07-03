<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isTrue == 'all' }"
          href="javascript:;"
          @click="change('all')"
        >
          全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isTrue == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isTrue == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      isTrue: 'all',
    };
  },
  methods: {
    change(val) {
      this.isTrue = val;
      this.$emit('checkAll', this.isTrue);
    },
  },
};
</script>
