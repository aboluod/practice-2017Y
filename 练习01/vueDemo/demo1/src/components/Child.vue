<template>
  <div>
      <h3>我自己是子组件</h3>
      <p>这里是父组件传递的内容 【{{ content }}】</p>
      <hr>
      <hr>
      <input type="button" value="字组件给父组件发送数据按钮" v-on:click="send">
  </div>
</template>

<script>
    export default {
      props: ['content'],
      methods: {
          send(){
              //子组件通过$emit方法给父组件发送数据，第一个参数是自定义的事件，第二个参数是自定义事件的内容   
              this.$emit('sendParent','按钮发送过来的zizujian给父组件发数据')
          }
      }
    }
</script>
<style scoped>
 p {
     background-color: gold;
 }
 hr {
     border: 1px solid pink;
 }
</style>

