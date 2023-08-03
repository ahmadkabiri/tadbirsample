<template>
  <div>
    <FallowerUsers :followers="followers" @toRemoveFollower="removeFollower($event)" />
  </div>
</template>

<script>

import FallowerUsers from './components/FallowerUsers.vue'

export default {
  name: 'App',
  data () {
    return {
      followers : [
        {id : 1 , name :"amin"},
        {id : 2 , name :"amir"},
        {id : 3 , name :"ali"},
        {id : 4 , name :"ahmad"},
        {id : 5 , name :"hasan"},
      ]
    }
  },
  methods : {
    removeFollower (id) {
      let followerIndex = this.followers.findIndex( follower => follower.id===id) ;
      console.log(followerIndex)
      this.followers.splice(followerIndex,1)
    }
  },
  components : {
    FallowerUsers
  }
  }


</script>

<style scoped>
div{
  text-align: center;
}
</style>
