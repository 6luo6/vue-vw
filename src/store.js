import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
       change(state,obj){
         Object.assign(state,obj)
       }
  },
  actions: {
        update(context,obj){
         context.commit("change",obj)
        }
  }
})
