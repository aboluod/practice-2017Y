<template>
  <div>
      <h3>z国： zhBo</h3>
      <input type="button" v-on:click="send" value="发送" >
      <p>{{ msg }}</p> 
  </div>
</template>

<script>
    import EventHandler from '../assets/EventHandler'
    export default {
        data(){
            return {
                msg : ''
            }
        },
        methods: {
            send(){
                EventHandler.$emit('myDefineEv','zhbo向岛国发射了一颗原子弹');
            }
        },
        //mounted相当于jQuery的ready，原生js的onload,是vue生命周期的钩子函数，用于在页面加载完成之后执行代码
        //这块的作用是：页面加载完成后，监听接收RDefineEv事件
        mounted (){
            let _this = this;
            //$on监听当前实例上的自定义事件
            EventHandler.$on('RDefineEv',function(data){
                _this.msg = data;
            })
        }
    }
</script>
