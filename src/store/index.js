import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import _ from 'lodash';

Vue.use(Vuex);
const store = {};

store.state = () => ({
  todos: {},
  todoFilterType: 'all',
  filtersTypesList: ['all', 'active', 'completed'],
});


store.getters = {
  todosActive: state => _.pickBy(state.todos, { isComplete: false }),
  todosCompleted: state => _.pickBy(state.todos, { isComplete: true }),
  todosActiveLength: ({}, getters) => _.size(getters.todosActive),
  todosCompletedLength: ({}, getters) => _.size(getters.todosCompleted),

  todosFiltred({ todoFilterType }, { todosActive, todosCompleted }) {
    const todosFiltred = {};
    if(_.includes(['all', 'active'], todoFilterType)) _.assign(todosFiltred, todosActive);
    if(_.includes(['all', 'completed'], todoFilterType)) _.assign(todosFiltred, todosCompleted);
    return todosFiltred;
  },
};


store.mutations = {
  addTodo(state, text) {
    if(!text || !text.trim()) return;
    const todoId = Date.now();
    const newTodo = { id: todoId, text: text.trim(), isComplete: false };
    Vue.set(state.todos, todoId, newTodo);
  },

  switchCompleteStatusTodoById(state, todoId) {
    if(!_.has(state.todos, todoId)) return;
    const completeStatus = state.todos[todoId].isComplete;
    Vue.set(state.todos[todoId], 'isComplete', !completeStatus);
  },

  setTodoFilterType(state, filterType) {
    if(!_.includes(state.filtersTypesList, filterType)) return;
    Vue.set(state, 'todoFilterType', filterType);
  },

  clearCompletedTodos(state) {
    const notCompletedTodos = _.omitBy(state.todos, { isComplete: true });
    Vue.set(state, 'todos', notCompletedTodos);
  },
};


store.plugins = [
  createPersistedState({ 
    paths: ['todos', 'todoFilterType'], 
    key: 'todo-list',
  }),
];

export default new Vuex.Store(store);
