<template>
  <div class="component-b-container">
    <div class="right-btn">
      <div v-html="checkAllIcon" class="check-icon"></div>
      <button @click="makeChangesOnTodos('completedTodos')">تکمیل همه تسک ها</button>
    </div>
    <div class="left-btn">
      <button @click="makeChangesOnTodos('removeCompletedTodos')">حذف تکمیل شده ها</button>
    </div>
  </div>
</template>

<script>
import { checkAllIcon } from "../../services/icons";
export default {
  name: "ComponentB",

  data() {
    return {
      checkAllIcon,
      i:0
     
    };
  },
  methods : {
    makeChangesOnTodos (state) {
      this.i++
      console.log('hi')
      this.$emit('change-todos', state+this.i);
    }
  }


};
</script>

<style scoped>
.component-b-container {
  margin-top: 10px;
  display: flex;
  width: 568px;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  /* padding: 0 0.5rem; */
  border-bottom: 1px solid #f0f0f0;
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
</style>
