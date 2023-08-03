<template>
<div>
  <h1>{{ title }}</h1>
  <button @click="changeTitle">Change Title</button>
  <hr/>
  <UserName/>
</div>
</template>

<script>

import UserName from './UserName.vue';

export default {
  name: 'App',
  components : {
    UserName
  },
  data () {
    return{
      title : "Sabzlearn.ir"
    }
  },
  methods : {
    changeTitle () {
      this.title = 'Vue Js Course'
    }
  },
  beforeUpdate () {
  
  },
  updated () {
    console.log("App" , "Update Shodam! :)")

  },
  mounted () {
    console.log("App" , "Mount Shodam ! :)")
  }
  }


</script>

<style scoped>
div{
  text-align: center;
  
}
</style>
