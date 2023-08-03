<template>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
        <h3>
          {{ user.name }} - {{ user.age }}
        </h3>
        <button @click="removeUser(user.id)">Remove User</button>
      </li>
      </ul>
    </div>
</template>

<script>

import eventBus from '../services/eventBus'


export default {
  name: 'FallowerUsers' ,
  props : ['users'] ,
  methods : {
    removeUser (id) {
    eventBus.$emit("removeUser",id)
    }
  }
}


</script>

<style scoped>
/* div{
    text-align: center;
} */
li {
  list-style: none;
}
</style>
