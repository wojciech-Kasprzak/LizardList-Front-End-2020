// import Vue from 'vue'
// import { instance } from './../http-common';

export default {
    state: {
        show: false,
    },
    getters: {
        // getUserId: state => state.user.id,
        // getUserName: state => state.user.name
    },
    mutations: {
        setLoader: (store) => {
            console.log('ccc');
            store.show = !store.show;
        },
    },
    actions: {
        showLoader({ commit }) {
            commit('setLoader');
            // setTimeout(function () {
            //     commit('setLoader');
            // }, 3000);
        },
        // checkLogin({ commit, state }) {

        // },
    },
    namespaced: true
};
