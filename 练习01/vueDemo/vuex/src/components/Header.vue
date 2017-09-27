<template>
  <div>
      <input type="text" v-model="msg" >
      <input type="button" v-on:click="setName" value="点我" >
  </div>
</template>

<script>
    export default {
        name: 'Header',
        data (){
            return {
                msg: ''
            }
        },
        methods: {
            setName(){
                // 通过this.$store.state.状态名来获取vuex里面存的状态
                this.$store.commit('showUserName',this.msg);
            }
        }
    }
</script>
