<template>
    <div>
        <h1>
            {{ title }}
        </h1>
        <button @click="sendTitle">Change App Title</button>
    </div>
</template>

<script>


export default {
  name: 'UserName',
  methods : {
    sendTitle () {
      this.$emit('changeAppTitle',"Title change shod")
    }
  } ,
  props : {
    title : String
  }

}


</script>

<style scoped>
div{
    text-align: center;
}
</style>
