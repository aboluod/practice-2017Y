<template>
  <div id="app">
    这是一个空的APP
    <child :content="msg" v-on:sendParent="showMsg"></child> 
    <p>{{ data }}</p>

    <br><br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Brother1></Brother1>
    <Brother2></Brother2>  
  </div>
</template>

<script>
// 兄弟组件之间传递数据的原理：
//1，创建一个事件传递中心，这里创建的是assets下面的EventHandler.js，用它作为传递消息的中介
// 2，在需要传值的组件中用EventHandle.$emit触发一个自定义事件，并传递参数
// 3，在需要接受数据的组件中用EventHandle.$on监听自定义事件，并在回调函数中处理传递过来的参数





import child from './components/Child.vue';
import Brother1 from './components/Brother1.vue'
import Brother2 from './components/Brother2.vue'
export default {
  name: 'app',
  data() {
    return {
        msg: '我是父组件传递的数据',
        data: ''
    }
  },
  components: {
    child,
    Brother1,
    Brother2
  },
  methods: {
      //ms是子组件发送过来的数据
      showMsg(ms){
        console.log(ms);
        this.data = ms;
      }
  }
}
</script>

<style scoped>
#app p {
  margin-top: 100px;
  
}
</style>
