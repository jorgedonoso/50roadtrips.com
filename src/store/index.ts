import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        USA: [],
        International: [],
        USAImages: [],
        InternationalImages: [],
    },
    mutations: {
        setUSAData(state, payload) {
            state.USA = payload.data.items;
        },
        setInternationalData(state, payload) {
            state.International = payload.data.items;
        },
        setUSAImagesData(state, payload) {
            state.USAImages = payload.data.includes.Asset;
        },
        setInternationalImagesData(state, payload) {
            state.InternationalImages = payload.data.includes.Asset;
        },
    },
    actions: {
        GET_USA_DATA({ state, commit }) {
            if (!state.USA.length) {
                return axios
                    .get(process.env.VUE_APP_USA_CONTENT_ENDPOINT)
                    .then((res) => {
                        commit('setUSAData', res);
                        commit('setUSAImagesData', res);
                    });
            }
        },
        GET_INTERNATIONAL_DATA({ state, commit }) {
            if (!state.International.length) {
                return axios
                    .get(process.env.VUE_APP_INTERNATIONAL_CONTENT_ENDPOINT)
                    .then((res) => {
                        commit('setInternationalData', res);
                        commit('setInternationalImagesData', res);
                    });
            }
        },
    },
});
