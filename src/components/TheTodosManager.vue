<template>
  <div class="todos__container">
    <form 
      class="todos__header"
      @submit.prevent="$emit('addTodo', todo) && (todo = '')"
    >
      <input 
        class="todos__header_input"
        type="text"
        placeholder="Whats needs to be done?"
        v-model="todo"
      />
      <button
        class="todos__header_submit"
        type="submit"
      >
        <img src="/img/plus.svg"/>
      </button>
    </form>

    <ul class="todos__body">
      <template v-if="todosActiveLength + todosCompletedLength">
        <div class="todos__body_scroll">
          <li
            v-for="todo of todosFiltred"
            :key="todo.id"
          >
            <button
              class="todos__body_item todos__button"
              :class="{ 'todos__body_item-active': todo.isComplete }"
              v-text="todo.text"
              @click.prevent="$emit('switchCompleteStatusTodoById', todo.id)"
            />
          </li>
        </div>
      </template>
      <div v-else class="todos__body_empty">
        <img src="/img/rain.svg"/>
        <span>Todos list is empty</span>
      </div>
    </ul>

    <div class="todos__footer">
      <span 
        class="todos__footer_counter"
        v-text="todosFooterCounterText"
      />

      <div 
        ref="filtersList"
        class="todos__footer_filters"
        :class="{ 'todos__footer_filters-open': isOpenFiltersList }"
      >
        <button 
          v-for="(filter, filterIndex) of filtersTypesList"
          :key="filterIndex"
          class="todos__footer_filters_item todos__button"
          :class="{ 'todos__button-active': todoFilterType === filter }"
          @click="$emit('setTodoFilterType', filter)"
          v-text="filter"
        />
      </div>

      <div 
        ref="filtersSwitchButton"
        class="todos__footer_filters-switch"
        @click="isOpenFiltersList = !isOpenFiltersList"
      >
        <img src="/img/filter.svg"/>
      </div>

      <button 
        class="todos__footer_clear todos__button"
        :disabled="!todosCompletedLength"
        @click="todosCompletedLength && $emit('clearCompleted')"
        v-text="'Clear completed'"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';

export default {
  name: 'TheTodosManager',

  props: {
    todosFiltred: {
      type: Object,
      default: () => ({})
    },
    filtersTypesList: {
      type: Array,
      default: () => [],
    },
    todoFilterType: {
      type: String,
      default() {
        const isExistFilterTypeAll = _.includes(this.filtersTypesList, 'all');
        return isExistFilterTypeAll ? 'all' : _.first(this.filtersTypesList);
      },
    },
    todosActiveLength: {
      type: Number,
      default: () => 0,
    },
    todosCompletedLength: {
      type: Number,
      default: () => 0,
    },
  },

  data: () => ({
    todo: null,
    isOpenFiltersList: false,
  }),

  computed: {
    todosFooterCounterText() {
      const { todosActiveLength: length } = this;
      if(!length) return 'all items completed';
      return `${ length } ${ length == 1 ? 'item' : 'items' } left`;
    },
  },

  beforeMount() {
    document.addEventListener('click', this.closeFiltersListEvent);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.closeFiltersListEvent);
  },

  methods: {
    closeFiltersListEvent(event) {
      const openFilterButtonEl = this.$refs.filtersSwitchButton;
      const filtersListEl = this.$refs.filtersList;

      const isFiltersListEl = event.target === filtersListEl 
        || _.includes(filtersListEl.children, event.target);
      const isOpenFilterButtonEl = event.target === openFilterButtonEl 
        || _.includes(openFilterButtonEl.children, event.target);

      if(isFiltersListEl || isOpenFilterButtonEl) return;
      this.isOpenFiltersList = false;
    },
  },
};
</script>

<style lang="scss" scoped>
$backgroundColor: #fafafa;
$contentColor: #fff;
$hoverColor: #f4f4f4;
$textColor: #333;
$borderColor: #d7d7d7;
$specialColor: #8bc34a;

.todos {
  &__button {
    padding: 2px 5px;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    border: 0;
    &[disabled] {
      opacity: .5;
      cursor: no-drop;
    }
    &:hover:not([disabled]), &:focus:not([disabled]) {
      background-color: $hoverColor;
      color: $specialColor;
    }
    &:focus:not([disabled]) {
      box-shadow: inset 0 0 0 1px $specialColor;
    }
    &-active {
      box-shadow: inset 0 0 0 1px $textColor;
    }
  }

  &__container {
    max-width: 500px;
    max-height: calc(100vh - 200px);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: $backgroundColor;
    outline: 1px solid $borderColor;
    font-size: 18px;
    overflow: hidden;
    color: $textColor;
    display: grid;
    grid-template-rows: 50px calc(100% - 100px) 50px;
    .todos__header {
      position: relative;
      &_input {
        width: 100%;
        max-height: 100%;
        outline: none;
        border: none;
        padding: 15px 50px;
        font-size: inherit;
        color: $specialColor;
        box-shadow: inset 0 -1px 0 0 $borderColor;
        &:focus {
          box-shadow: inset 0 -1px 0 0 $specialColor;
          &::placeholder {
            color: $hoverColor;
          }
        }
        &::placeholder {
          color: $borderColor;
        }
      }
      &_submit {
        padding: 0;
        border: none;
        line-height: 1;
        height: 30px;
        position: absolute;
        z-index: 1;
        right: 0;
        margin: 10px;
        cursor: pointer;
        border-radius: 5px;
        background-color: $backgroundColor;
        outline: 1px solid $borderColor;
        &:hover, &:focus {
          background-color: $contentColor;
          box-shadow: 0 0 2px 0 $borderColor;
          outline: 1px solid $specialColor;
        }
        img {
          width: 30px;
          opacity: .5;
        }
      }
    }
    .todos__body {
      padding: 0;
      &_empty {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 10px;
        color: black;
        opacity: .1;
        pointer-events: none;
        user-select: none;
        padding: 50px;
        img {
          width: 100px;
        }
      }
      &_scroll {
        max-height: 100%;
        overflow-y: auto;
      }
      &_item {
        width: 100%;
        padding: 10px;
        padding-left: 50px;
        border-radius: 0;
        cursor: pointer;
        list-style-type: none;
        text-align: start;
        position: relative;
        word-wrap: break-word;
        border-bottom: 1px solid $borderColor;
        &:hover {
          background-color: $contentColor;
          box-shadow: 0 0 2px 0 $borderColor;
        }
        &-active {
          color: $borderColor;
          text-decoration: line-through;
          &::before, &::after {
            position: absolute;
            left: 8px;
            width: 24px;
            height: 24px;
            top: calc(50% - 12px);
          }
          &::before {
            content: "✓";
            color: $specialColor;
            line-height: 24px;
            font-weight: bold;
            text-align: center;
          }
          &::after {
            content: "";
            border: 2px solid $borderColor;
            border-radius: 50%;
          }
        }
      }
    }
    .todos__footer {
      padding: 15px;
      background-color: $contentColor;
      box-shadow: 0 -1px 0 0 $borderColor;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative; 
      &_counter {
        cursor: default;
        z-index: 1;
      }
      &_filters {
        display: flex;
        gap: 10px;
        position: absolute;
        width: calc(100% - 30px);
        justify-content: center;
        &-switch {
          display: none;
          position: absolute;
          left: calc(50% - 15px);
          cursor: pointer;
          img {
            width: 30px;
            opacity: .5;
          }
        }
      }
      &_clear {
        z-index: 1;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .todos__container {
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    .todos__footer {
      &_filters {
        flex-direction: column;
        align-self: end;
        transform: translateY(-50px) translateX(calc(50vw - 50% - 15px));
        position: fixed;
        width: auto;
        background: $contentColor;
        padding: 20px;
        border-radius: 5px;
        outline: 1px solid $borderColor;
        &:not(.todos__footer_filters-open) {
          display: none;
        }
        &-switch {
          display: flex;
        }
      }
    }
  }
}
</style>