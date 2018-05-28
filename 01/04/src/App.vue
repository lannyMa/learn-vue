<template>
    <div>
        {{msg}}
        <router-view></router-view>
    </div>
</template>
<script>
  export default {
    data() { //1.数据是函数数据类型 2,返回值是对象数据类型
      return {msg: "maotai"};
    }
  }
</script>

