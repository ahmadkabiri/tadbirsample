<template>
    <div>
        <h1>
           {{ title }} 
        </h1>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>


export default {
  name: 'UserName',
  props : {
    title : String ,
    changeTitle : Function
  },
  methods : {
    // changeWords () {

    // },
  }

}


</script>

<style scoped>
div{
    text-align: center;
}
</style>
