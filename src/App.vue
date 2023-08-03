<template>
<div>
  <UserName :title="title" :changeTitle="changeTitle"/>
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
    return {
      title : "Sabzlearn.ir"
    }
  },
  methods : {
    changeTitle () {
      this.title = "Vue Js Course"
    },
  }

  }


</script>

<style scoped>
div{
  text-align: center;
}
</style>
