<template>
  <div class="component-a-container">
    <div v-html="bookIcon"></div>
    <input
      type="text"
      v-model="todoValue"
      placeholder="متن خود را تایپ نمایید ..."
      @keyup="setInput"
    />
    <div v-html="plusIcon" v-if="todoValue" @click="sendData" class="plus-icon"></div>
  </div>
</template>

<script>
import { bookIcon, plusIcon } from "../../services/icons";
export default {
  name: "ComponentA",
  data() {
    return {
      bookIcon,
      plusIcon,
      todoValue: "",
      toastOptions: {
        theme: "bubble",
        position: "top-right",
        duration: 2000,
      },
    };
  },
  methods: {
    setInput(event) {
      console.log(event);
      console.log(this.todoValue);
      if (this.todoValue.trim() && event.keyCode == 13) {
        this.sendData(this.todoValue.trim());
  
      } else if (event.keyCode==13) {
        this.showToast('یادداشت خالی است !')
      }
    },
    sendData () {
      this.showToast('یادداشت ایجاد شد',"show")
      this.$emit('data-sent', this.todoValue);
      this.todoValue=''
    },
    showToast(msg, type) {
      if (type === "show") {
        this.$toasted.show(msg, {
          ...this.toastOptions,
          type: "success",
        });
      } else {
        this.$toasted.show(msg,{
          ...this.toastOptions,
          type:'error'
        })
      }
    },
  },
};
</script>

<style scoped>
.component-a-container {
  display: flex;
  width: 568px;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f8f8;
  height: 60px;
  border-radius: 12px;
  padding: 0 0.5rem;
}
.component-a-container input {
  flex: 1;
  background-color: inherit;
  padding: 0 0.5rem;
  height: 100%;
  outline: none;
  border: none;
}
.plus-icon {
  padding: 1rem 0;
  cursor: pointer;
}
</style>
