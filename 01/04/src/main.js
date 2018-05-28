import Vue from "vue"
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from "./App.vue";
import home from "./components/Home.vue";

let router = new VueRouter({
  routes: [
    {path: '/home', component: home},
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});