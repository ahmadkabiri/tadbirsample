<template>
  <div>
    <userBox  title="AMIR"/>
    <userBox  title="AMIN"/>
    <userBox  title="ALI"/>
    <userBox  title="HASAN"/>
    <userBox  title="QADIR"/>
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
