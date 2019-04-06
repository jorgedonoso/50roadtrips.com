import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    USA: [],
    International: []
  },
  mutations: {
    setUSAData(state, payload) {
      state.USA = payload;
    },
    setInternationalData(state, payload) {
      state.International = payload;
    }
  },
  actions: {
    GET_USA_DATA({ state, commit }) {
      return new Promise((resolve) => {
          if (state.USA.length > 0) {
              resolve(state.USA);
          } else {
            axios.get(process.env.VUE_APP_USA_CONTENT_ENDPOINT).then((res)=>{
              commit('setUSAData', res);
              resolve(res);
            });
          }
      });
    },
    GET_INTERNATIONAL_DATA({ state, commit }) {
      return new Promise((resolve) => {
          if (state.International.length > 0) {
              resolve(state.International);
          } else {
            axios.get(process.env.VUE_APP_INTERNATIONAL_CONTENT_ENDPOINT).then((res)=>{
              commit('setInternationalData', res);
              resolve(res);
            });
          }
      });
    }
  },
  getters: {
    getUSA(state) {
      return state.USA;
    },
    getInternational(state) {
      return state.International;
    }
  }
});
