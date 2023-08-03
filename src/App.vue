<template>
  <div>
    <b-alert variant="success" show>Succes Alert</b-alert>
    <b-alert variant="danger" show>Succes Alert</b-alert>
    <b-alert variant="info" show>Succes Alert</b-alert>
    <b-alert variant="warning" show>Succes Alert</b-alert>
  </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {BAlert} from 'bootstrap-vue'

export default {
  name: 'App',
  components : {
    BAlert
  }


  }


</script>

<style scoped>
div{
  text-align: center;
}
</style>
