import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    twelve:null
  },
  mutations: {
    setTwelve(state,payload){
      state.twelve=payload
    }
  },
  actions: {

  }
})
