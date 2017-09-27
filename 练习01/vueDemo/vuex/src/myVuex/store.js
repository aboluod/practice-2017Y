import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 存储状态值
    state: {
        // 存储了一个userName状态
        userName : 'zhBo'
    },

    // mutations存放被修改的状态，操作状态值
    // 组件通过commit提交mutations的方式请求改变state
    //mutations方法必须是同步方法
    mutations: {
        showUserName(state,msg){
            state.userName = msg;
        }
    }
})

export default store