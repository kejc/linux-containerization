import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
    initLocalStorageCache(state) {
      if(localStorage.getItem('store'))
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
    },
  },
  actions: {
  },
  modules: {
  }
})
