<template>
  <div class="component-c-container">
    <div
      class="todo"
      v-for="todo in todos"
      :key="todo.id"
      @mouseover="visibleRemoveIcon(todo.id)"
      @mouseleave="unvisibleRemoveIcon(todo.id)"
    >
      <div class="right-side">
        <div
          v-html="ringIcon"
          class="ring-icon"
          v-if="!todo.isCompeleted"
          @click="completeTodo(todo.id)"
        ></div>
        <div
          v-html="circleCheckIcon"
          class="ring-icon"
          v-else
          @click="completeTodo(todo.id)"
        ></div>
        <div :class="{ 'text-decoration ': todo.isCompeleted }">
          {{ todo.todoValue }}
        </div>
      </div>
      <div
        class="left-side"
        v-html="removeIcon"
        v-if="todo.isVisible"
        @click="removeTodo(todo.id)"
      ></div>
    </div>

    <div class="empty-section" v-if="!todos.length">یادداشتی وجود ندارد...</div>
  </div>
</template>

<script>
import { ringIcon, removeIcon, circleCheckIcon } from "../../services/icons";
export default {
  name: "ComponentC",
  props: ["received", "makeChangeOnTodos", "filterTodosState"],
  data() {
    return {
      ringIcon,
      removeIcon,
      circleCheckIcon,
      todos: [],
      allTodos: [],
      filterTodosToggle: true,
      remainedTodosCounter: 0,
    };
  },
  watch: {
    received(todo) {
      this.addTodo(todo);
    },
    makeChangeOnTodos(state, oldState) {
      console.log(state, oldState);
      this.reArangeTodos(state);
    },
    filterTodosState(state) {
      this.filterTodos(state);
    },
  },
  created() {
    this.fillTodos()
  },
  methods: {
    addTodo(todo) {
      let id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0;
      let newTodo = {
        todoValue: todo,
        isCompeleted: false,
        isVisible: false,
        id,
      };

      this.todos.push(newTodo);
      this.allTodos.push(newTodo);
      this.filterTodosToggle = true;
      // this.filterTodos('allTodos')
      this.unCompletedTodosCounter("in");
      this.setTodosToLocalStorage();
      // console.log(this.todos);
    },

    completeTodo(todoId) {
      console.log(todoId);
      this.todos.map((todo) => {
        if (todo.id == todoId) {
          if (todo.isCompeleted) {
            todo.isCompeleted = false;
            this.unCompletedTodosCounter("in");
          } else {
            todo.isCompeleted = true;
            this.unCompletedTodosCounter("de");
          }
        }
      });
      this.setTodosToLocalStorage();
    },

    visibleRemoveIcon(todoId) {
      // console.log(todoId);
      this.todos.map((todo) => {
        if (todo.id == todoId) {
          todo.isVisible = true;
        }
      });
    },
    unvisibleRemoveIcon(todoId) {
      // console.log(todoId);
      this.todos.map((todo) => {
        if (todo.id == todoId) {
          todo.isVisible = false;
        }
      });
    },
    // unCompleteTodo(todoId) {},
    removeTodo(todoId) {
      this.todos = this.todos.filter((todo) => {
        if (todo.id == todoId && !todo.isCompeleted) {
          this.unCompletedTodosCounter("de");
        }
        return todo.id != todoId;
      });
      this.setTodosToLocalStorage();
    },
    reArangeTodos(state) {
      console.log(state);
      if (state.includes("completedTodos")) {
        this.todos.map((todo) => {
          if (!todo.isCompeleted) {
            this.unCompletedTodosCounter("de");
          }
          todo.isCompeleted = true;
        });
      } else {
        console.log(this.todos);
        this.todos = this.todos.filter((todo) => !todo.isCompeleted);
      }
      this.setTodosToLocalStorage();
    },
    filterTodos(state) {
      if (this.filterTodosToggle) {
        this.allTodos = [...this.todos];
        this.filterTodosToggle = false;
      }

      if (state.includes("allTodos")) {
        console.log("a");
        this.todos = [...this.allTodos];
      } else if (state.includes("unCompletedTodos")) {
        console.log("b");
        this.todos = this.allTodos.filter((todo) => todo.isCompeleted);
      } else {
        console.log("fwlkjefkwef");
        this.todos = this.allTodos.filter((todo) => !todo.isCompeleted);
      }
    },
    unCompletedTodosCounter(type = 'none') {
      if (type == "in") {
        this.remainedTodosCounter++;
      } else if (type == "de") {
        this.remainedTodosCounter--;
      }
      console.log(this.remainedTodosCounter);
      this.$emit("remained-todos", this.remainedTodosCounter);
    },
    setTodosToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    getTodosFromLocalStorage() {
      return JSON.parse(localStorage.getItem("todos"));
    },
    fillTodos () {
      let todos = this.getTodosFromLocalStorage().length ? this.getTodosFromLocalStorage() : [] 
      this.todos = todos
      if(todos.length){
        let counter = 0 ;
        todos.forEach(todo => {
          if(!todo.isCompeleted) counter++
        })
        this.remainedTodosCounter = counter
      } else {
        this.remainedTodosCounter = 0
      }
      this.unCompletedTodosCounter()
    }
  },
};
</script>

<style scoped>
.component-c-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 10rem;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 1px solid #f0f0f0;
  overflow-y: auto;
}

.todo {
  display: flex;
  width: 568px;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
  height: 60px;
  border-radius: 12px;
  padding: 0 0.5rem;
  /* margin-bottom: 0.5rem; */
  transition: 0.2s all ease-in-out;
}

.todo:hover {
  background-color: #f8f8f8;
}

.right-side {
  display: flex;
  justify-content: start;
  align-items: center;
  /* background-color: yellow; */
  height: 100%;
  min-width: 95%;
  font-size: 20px;
}

.left-side {
  cursor: pointer;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}
.ring-icon {
  margin-left: 0.5rem;
  cursor: pointer;
  /* background-color: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-decoration {
  text-decoration: line-through;
}

.empty-section {
  font-size: 20px;
  color: #c7c7c7;
  width: 568px;
  display: flex;
  justify-content: center;
}

.color-black {
  color: black;
}
</style>
