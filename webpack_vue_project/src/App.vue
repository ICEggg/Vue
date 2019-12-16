<template>
  <div id="app">

    <router-link to="/test">经典布局</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  el: '#app',
  data:{
    mes:"start"
  },
  method:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
