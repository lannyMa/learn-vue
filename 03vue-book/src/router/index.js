import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/Home.vue"
import list from "../components/List.vue"
import detail from "../components/Detail.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/home', component: home},
    {path: '/list', component: list},
    {path: '/detail', component: detail},
  ]
})
