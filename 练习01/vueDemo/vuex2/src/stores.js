export default {
    //存储状态值
    state: {
        count: 0
    },
    // 状态值的改变方法，操作状态值
    mutations: {
        increment(state) {
            state.count++
        },
        add(state,n) {
            state.count += n                   
        }
    },
    //actions用于处理异步事件，最后还是需要提交mutations来改变state
    actions: {
        increment (context) {
            context.commit('increment')
        },
        incrementAsync (context) {
            setTimeout(()=>{
                context.commit('increment')
            },1000)
        },
        incrementAsyncWithValue (context,value) {
            setTimeout(()=>{
                context.commit('add',value)
            },1000)
        }
    },
    // 在store中定义getters(可以认为是store的计算属性)。getters接受state作为其第一个函数
    getters: {
        done(state) {
            return state.count + 5
        }
    }
}