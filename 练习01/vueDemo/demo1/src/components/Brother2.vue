<template>
  <div>
      <h3>r国： 八嘎</h3>
      {{ msg }}
      <input v-on:click="defend" type="button" value="防御">
  </div>
</template>

<script>
    import EventHandler from '../assets/EventHandler'
    export default {
        data () {
            return {
                msg : ''
            }
        },
        methods : {
            defend () {
                EventHandler.$emit('RDefineEv','岛国采用了高科技反原子弹系统，还是被炸了')
            }
        },
        mounted () {
            let _this = this;
            EventHandler.$on('myDefineEv',function( data ){
                _this.msg = data;
            })
        }
    }
</script>
