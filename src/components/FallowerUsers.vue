<template>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
        <h3 v-color="user.color">
          {{ user.name }} - {{ user.age }}
        </h3>
        <button v-btn @click="removeUser(user.id)">Remove User</button>
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
  },
  directives : {
    color : {
      bind(el,binding/*,vNode */) {
        console.log("el", el) ;
        el.style.color= binding.value;
        el.style.fontSize = '1rem' ;
        console.log(binding.value)
        // console.log("binding",binding);
        // console.log("vNode",vNode)
      },
    },
    btn : {
      bind (el) {
        console.log(el)
        el.style.background = "purple" ;
        el.style.color = '#fff' ;
      }
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
