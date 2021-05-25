// import Vue from 'vue'
import { instance } from "../../http-common";
import router from "../../router";

export default {
  state: {
    questions: {},
    variants: [],
    msg: {},
  },
  getters: {
    variants: (state) => state.variants,
  },
  mutations: {
    // setPoll: (store, data) => {
    //     store.poll = data;
    // },
    setMsg: (store, data) => {
      store.msg = data;
    },
    setVariants: (store, data) => {
      console.log(data);
      store.variants = data;
    },
  },
  actions: {
    add({ commit }, { pollId, content, typeQuestionId, variants, deviceId }) {
      instance({
        method: "POST",
        url: "/questions",
        data: {
          PollId: pollId,
          Content: content,
          Type_question_ID: typeQuestionId,
          Variants: variants,
          deviceId: deviceId,
        },
        dataType: "json",
      }).then(function(response) {
        console.log(response.data);
        commit("setMsg", response.data);
        router.push({ name: "poll", params: { pollId } });
      });
    },
    delete({ commit }, { id }) {
      instance({
        method: "DELETE",
        url: "/questions/" + id,
        dataType: "json",
      }).then(function(response) {
        console.log(response.data);
        commit("poll/removeQuestionFromPoll", id, { root: true });
      });
    },
    // getOne({ commit }, { id }) {
    //     console.log(id);
    //     instance({
    //         method: 'GET',
    //         url: '/polls/' + id,
    //         dataType: "json",
    //     })
    //         .then(function (response) {
    //             console.log(response.data);
    //             commit('setQuestionToPoll_', response.data)
    //         })
    // },
  },
  namespaced: true,
};
