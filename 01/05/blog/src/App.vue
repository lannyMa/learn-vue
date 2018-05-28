<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>
    <router-link to="/collect">收藏</router-link>
    <router-link to="/add">添加</router-link>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
