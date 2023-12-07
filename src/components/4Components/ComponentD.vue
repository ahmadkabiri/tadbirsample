<template>
  <div class="component-d-container">
    <div class="right-btn">
      <div class="todo-counter">{{ unCompletedTodos }}</div>
      <button>تسک مانده</button>
    </div>
    <div class="left-btn">
      <button
        @click="filterTodos('allTodos')"
        :class="{ 'clicked-btn': clickedBtn === 'allTodos' }"
      >
        همه
      </button>
      <button
        @click="filterTodos('completedTodos')"
        :class="{ 'clicked-btn': clickedBtn === 'completedTodos' }"
      >
        تکمیل نشده ها
      </button>
      <button
        @click="filterTodos('unCompletedTodos')"
        :class="{ 'clicked-btn': clickedBtn === 'unCompletedTodos' }"
      >
        تکمیل شده ها
      </button>
    </div>
  </div>
</template>

<script>
import { checkAllIcon } from "../../services/icons";
export default {
  name: "ComponentD",
  props: {
    unCompletedTodos: {
      default: 0,
    },
  },

  data() {
    return {
      checkAllIcon,
      clickedBtn: "allTodos",
      i: 0,
    };
  },
  // watch: {
  //   unCompletedTodos(todoCount) {
  //     console.log(todoCount)
  //   },
  // },
  methods: {
    filterTodos(state) {
      this.clickedBtn = state;
      this.i++;
      this.$emit("filter-todos", state + this.i);
    },
  },
};
</script>

<style scoped>
.component-d-container {
  margin-top: 10px;
  display: flex;
  width: 568px;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}

.right-btn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: red; */
  /* width: 3rem; */
}
button {
  font-size: 12px;
  color: #999999;
  margin-right: 0.5rem;
  transition: ease-in-out all 0.2s;
}
button:hover {
  color: black;
}

.todo-counter {
  font-size: 12px;
}

.clicked-btn {
  color: black;
}
</style>
