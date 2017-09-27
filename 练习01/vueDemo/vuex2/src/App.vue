<template>
  <div id="app">
    <h2>这是由多个组件修改一个state的例子，可以看到所有组件的state一同变化，而且每个组件中都可以操作state的变化</h2>
    <hr>
    <Hello></Hello>
    <ma></ma>
    <mb></mb>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Single from './components/Single'
import ma from './components/A'
import mb from './components/B'

export default {
  name: 'app',
  components: {
    ma,
    mb,
    Hello,
    Single
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
