<template>
  <div id="app">
    <Header></Header>
    <MyMain></MyMain>
  </div>
</template>

<script>
import MyMain from './components/Main.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    MyMain,
    Header
  }

}
</script>

<style>

</style>
