<template>
  <div>
    <userBox  title="AMIR"/>
    <userBox  title="AMIN"/>
    <userBox  title="ALI"/>
    <userBox  title="HASAN"/>
    <userBox  title="QADIR"/>
    <h1>User From App Component</h1>
  </div>
</template>

<script>
import userBox from './components/User.vue';

export default {
  name: 'App',
  components : {
    userBox
  }

}


</script>

<style>

</style>
