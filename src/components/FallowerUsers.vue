<template>
    <div>
      <ul>
        <li v-for="follower in followers" :key="follower.id">
        <h2>{{ follower.name }}</h2>
        <button @click="sendFollower(follower.id)">Remove Follower</button>
        <hr>
      </li>
      </ul>
    </div>
</template>

<script>


export default {
  name: 'FallowerUsers' ,
  props : ['followers'] ,
  methods : {
    sendFollower (id) {
      // console.log(id)
      this.$emit("toRemoveFollower",id)
    }
  }
}


</script>

<style scoped>
div{
    text-align: center;
}
li {
  list-style: none;
}
</style>
