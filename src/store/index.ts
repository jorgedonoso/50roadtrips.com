import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        USA: [],
        International: [],
        Images: [],
    },
    mutations: {
        setUSAData(state, payload) {
            state.USA = payload.data.items;
        },
        setInternationalData(state, payload) {
            state.International = payload.data.items;
        },
        setImagesData(state, payload) {
            state.Images = payload.data.includes.Asset;
        },
    },
    actions: {
        GET_USA_DATA({ state, commit }) {
            if (!state.USA.length) {
                return axios
                    .get(process.env.VUE_APP_USA_CONTENT_ENDPOINT)
                    .then((res) => {
                        commit('setUSAData', res);
                        commit('setImagesData', res);
                    });
            }
        },
        GET_INTERNATIONAL_DATA({ state, commit }) {
            if (!state.International.length) {
                return axios
                    .get(process.env.VUE_APP_INTERNATIONAL_CONTENT_ENDPOINT)
                    .then((res) => {
                        commit('setInternationalData', res);
                        commit('setImagesData', res);
                    });
            }
        },
    },
});
