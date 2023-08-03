<template>
<div>
    <h1>
        User Component
    </h1>
</div>
</template>

<script>


export default {
  name: 'UserName',
  updated () {
    console.log("User" , "Update Shodam ! :)")
  },
  mounted () {
    console.log("User" , "Mount Shodam ! :)")
    
  }
}


</script>

<style scoped>
div{
    text-align: center;
}
</style>
