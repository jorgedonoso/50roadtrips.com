import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    USA: []
  },
  mutations: {
    setLocations(state, payload) {
      state.USA = payload;
    }
  },
  actions: {
    GET_LOCATIONS({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
          if (state.USA.length > 0) {
              resolve(state.USA);
          } else {
            axios.get(process.env.VUE_APP_MAIN_CONTENT_ENDPOINT).then((res)=>{
              commit('setLocations', res);
              resolve(res);
            });
          }
      });
    }
  },
  getters: {
    getUSA(state) {
        return state.USA;
    }
  }
});
