// import Vue from 'vue'
import { instance } from '../../http-common';
import router from '../../router'

export default {
    state: {
        poll: {},
        polls: {},
    },
    getters: {
        poll: state => state.poll,
        polls: state => state.polls,
    },
    mutations: {
        setPolls: (store, data) => {
            store.polls = data;
        },
        setPoll: (store, data) => {
            store.poll = data;
        },
        setActivate: (store, data) => {
            store.poll.Active = data;
        },
        removeQuestionFromPoll: (store, id) => {
            for (let i = 0; i <= store.poll.Questions.length - 1; i++) {
                if (store.poll.Questions[i].id == id) {
                    console.log(i);
                    store.poll.Questions.splice(i, 1);
                }
            }
        },
    },
    actions: {
        create({ commit }, { name }) {

            let OwnerId = this.state.owner.owner.id
            console.log(OwnerId);
            if (OwnerId == undefined) {
                OwnerId = JSON.parse(sessionStorage.getItem("owner")).id
            }
            console.log(OwnerId);
            console.log(name);
            instance({
                method: 'POST',
                url: '/polls',
                data: { Name: name, OwnerId: OwnerId },
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setPoll', response.data)
                    let idPoll = response.data.id
                    console.log(idPoll);
                    router.push({ name: 'poll', params: { idPoll } })

                })
        },
        getOne({ commit }, { id }) {
            console.log(id);
            instance({
                method: 'GET',
                url: '/polls/' + id,
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setPoll', response.data)
                })
        },
        activate({ commit }, { id }) {
            console.log('activate');
            console.log(id);
            instance({
                method: 'PUT',
                url: '/polls/' + id,
                data: { Active: 1 },
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setActivate', 1)
                })
            router.push('/yourpoll/' + JSON.parse(sessionStorage.getItem("owner")).id)
        },
        deactivate({ commit }, { id }) {
            instance({
                method: 'PUT',
                url: '/polls/' + id,
                data: { Active: 0 },
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setActivate', 0)
                })
            router.push('/yourpoll/' + JSON.parse(sessionStorage.getItem("owner")).id)
        },
        getList({ commit }) {
            instance({
                method: 'GET',
                url: '/polls',
                dataType: "json",
            })
                .then(function (response) {
                    console.log(response.data);
                    commit('setPolls', response.data)
                })
        },
    },
    namespaced: true
};
