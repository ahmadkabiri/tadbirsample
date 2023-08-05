import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './components/servises/routes'
Vue.use(VueRouter)

const router = new VueRouter({
  routes : routes 
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')




















