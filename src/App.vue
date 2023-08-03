<template>
  <div>
    <UserName :title="title" @changeAppTitle="changeTitle($event)"/>
  </div>
</template>

<script>

import UserName from './components/UserName.vue';

export default {
  name: 'App',
  data () {
    return {
      title : "Sabzlearn.ir"
    }
  },
  components : {
    UserName
  } ,
  methods : {
    changeTitle (userData) {
      this.title = userData
    }
  }

  }


</script>

<style scoped>
div{
  text-align: center;
}
</style>
