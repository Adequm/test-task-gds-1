<template>
  <div class="container">
    <TheTodosManager
      :todosFiltred="todosFiltred"
      :todoFilterType="todoFilterType"
      :filtersTypesList="filtersTypesList"
      :todosActiveLength="todosActiveLength"
      :todosCompletedLength="todosCompletedLength"
      :todosFiltredLength="todosFiltredLength"
      :style="{ height: appHeight }"
      @addTodo="addTodo"
      @switchCompleteStatusTodoById="switchCompleteStatusTodoById"
      @setTodoFilterType="setTodoFilterType"
      @clearCompleted="clearCompletedTodos"
    />
  </div>
</template>

<script>
import TheTodosManager from '@/components/TheTodosManager';

import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Home',

  components: {
    TheTodosManager,
  },

  data: () => ({
    isWidthLess768: false,
    innerHeight: 0,
  }),

  computed: {
    ...mapState([
      'todoFilterType',
      'filtersTypesList',
    ]),
    ...mapGetters([
      'todosFiltred',
      'todosActiveLength',
      'todosCompletedLength',
      'todosFiltredLength',
    ]),
    appHeight() {
      return this.isWidthLess768
        ? `${ this.innerHeight }px`
        : '100%';
    },
  },

  beforeMount() {
    const updateInnerSize = () => {
      if(!document.body.offsetWidth) return;
      this.isWidthLess768 = document.body.offsetWidth <= 768;
      this.innerHeight = innerHeight;
    }

    updateInnerSize();
    window.addEventListener('resize', updateInnerSize);
  },

  methods: {
    ...mapMutations([
      'addTodo',
      'switchCompleteStatusTodoById',
      'setTodoFilterType',
      'clearCompletedTodos',
    ]),
  },
};
</script>

<style>
*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: #fafafa;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 100px 0;
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0;
  }
}
</style>
