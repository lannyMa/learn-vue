import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Add from "../components/Add.vue"
import Collect from "../components/Collect.vue"
import Detail from "../components/Detail.vue"
import Home from "../components/Home.vue"
import List from "../components/List.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {path: "/add", component: Add},
    {path: "/collect", component: Collect},
    {path: "/detail", component: Detail},
    {path: "/home", component: Home},
    {path: "/list", component: List},
  ]
})
