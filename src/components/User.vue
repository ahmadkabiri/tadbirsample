<template>
    <h1>
        {{ title }}
    </h1>
</template>

<script>
export default {
    name : "userBox" ,
    props : ['title'],
}
</script>

<style scoped>
h1 {
    color : red ;

}
</style>