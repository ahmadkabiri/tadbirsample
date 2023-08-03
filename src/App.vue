<template>
  <div>
    <FallowerUsers :users="users" ></FallowerUsers>
  </div>
</template>

<script>

import FallowerUsers from './components/FallowerUsers.vue';
import eventBus from './services/eventBus';

export default {
  name: 'App',
  components : {
    FallowerUsers
  },
  data () {
    return {
      users : [
        {id : 1 , name : "Js" , age : 25 , color : 'red'} ,
        {id : 2 , name : "React Js" , age : 8 , color :"blue"} ,
        {id : 3 , name : "Vue Js" , age : 7 , color : "green"} ,
        {id : 4 , name : "JQuery" , age : 16 , color : "yellow"} ,
        {id : 5 , name : "Angular Js" , age : 11 , color : "gray"} ,
      ]
    }
  } ,
  methods : {
    removeUser (id) {
      let userIndex = this.users.findIndex(user => user.id === id) ;
      this.users.splice(userIndex,1)
    }
  },
  created () {
    eventBus.$on("removeUser",id => {
      this.removeUser(id)
    })
  },

  }

</script>

<style scoped>
/* div{
  text-align: center;
} */
</style>
