import Vue from "vue";
import App from "./App.vue";

/////////

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

///////
import Toasted from 'vue-toasted'
Vue.use(Toasted);

//////

import VueRouter from "vue-router";
import routes from "./services/routes";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
