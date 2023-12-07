<template>
  <div class="component-container">

    <div  class="d-flex justify-content-center align-items-center">
        <ComponentA @data-sent="sendDataToComponentC"></ComponentA>
    </div>
    <div  class=" d-flex justify-content-center align-items-center">
     
      <ComponentB @change-todos="makeChangeOnTodos"></ComponentB>
    </div>
    <div class=" d-flex justify-content-center align-items-center">

      <ComponentC :received="todo" :makeChangeOnTodos="todosState" :filterTodosState="todosFilterState" @remained-todos="checkRemainedTasks"></ComponentC>
    </div>
    <div class=" d-flex justify-content-center align-items-center">
      <ComponentD @filter-todos="filterTodos" :unCompletedTodos="unCompletedTodosCount"></ComponentD>
      </div>
  </div>
</template>

<script>

import  ComponentA  from './4Components/ComponentA'
import  ComponentB  from './4Components/ComponentB'
import  ComponentC  from './4Components/ComponentC'
import  ComponentD  from './4Components/ComponentD'


export default {
  name: "DashboardPage",
  components : {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,


  },
  data () {
    return {
      todo : null ,
      todosState : null ,
      todosFilterState : null ,
      unCompletedTodosCount : null 
    }
  },
  created () {
    this.checkLogin()
  },
  methods : {
    sendDataToComponentC (todoValue) {
      // console.log(todoValue)
      // console.log("1",this.todo)
      this.todo = todoValue
      // console.log(todoValue)
      // console.log("2",this.todo)
    },
    makeChangeOnTodos(state) {
      this.todosState = state
    },
    filterTodos (state) {
      this.todosFilterState = state
    },
    checkRemainedTasks(reTodosCount) {
      this.unCompletedTodosCount = reTodosCount
      console.log(this.unCompletedTodosCount)
    },
    checkLogin () {
      let isLogin = localStorage.getItem('isLogin')
      if(!isLogin) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style scoped>
.component-container{
    width: 600px;
    min-height: 300px;
    background-color: #fff;
    border-radius: 12px;
    padding: 10px;
}

.aa{
height: 1rem;
}

</style>
