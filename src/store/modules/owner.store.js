// import Vue from 'vue'
import { instance } from './../../http-common';
import router from '../../router'

export default {
    state: {
        owner: {},
    },
    getters: {
        owner: state => state.owner,
    },
    mutations: {
        setOwner: (store, data) => {
            store.owner = data;
        },
    },
    actions: {
        create({ commit }) {

            if (sessionStorage.getItem("owner")) {
                console.log(JSON.parse(sessionStorage.getItem("owner")));
                commit('setOwner', JSON.parse(sessionStorage.getItem("owner")))
                router.push('new')
            } else {
                instance({
                    method: 'POST',
                    url: '/owners',
                    dataType: "json",
                })
                    .then(function (response) {
                        console.log(response.data);
                        sessionStorage.setItem("owner", JSON.stringify(response.data));
                        commit('setOwner', response.data)
                        return response.data;
                    })
                router.push('/new')
            }
        },
        getOne({ commit }, { id }) {
            console.log(id);
            instance({
                method: 'GET',
                url: '/owners/' + id,
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setOwner', response.data)
                })
        },
    },
    namespaced: true
};
