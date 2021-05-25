// import Vue from 'vue'
import { instance } from "../../http-common";
import router from "../../router";

export default {
  state: {
    statistic: {},
  },
  getters: {
    statistic: (state) => state.statistic,
  },
  mutations: {
    setStatistic: (store, data) => {
      store.statistic = data;
    },
    setPercent: (store, data) => {
      store.statistic.Percent.push(data);
    },
  },
  actions: {
    get({ commit }, { id }) {
      console.log(id);
      instance({
        method: "GET",
        url: "/answers/" + id,
        dataType: "json",
      }).then(function(response) {
        response.data.Percent = [];
        console.log(response.data);
        commit("setStatistic", response.data);
        router.push("/statistics/" + id);
        return response.data;
        // dispatch('performance', { Questions: response.data.Questions })
      });
    },
    async getForDevices({ commit }, { id }) {
      const response = await instance.get("/answers/" + id);
      commit("setStatistic", response.data);
      return response.data;
    },
    // performance({ commit, dispatch }, { Questions }) {
    //     Questions.forEach((elem) => {
    //         let obj = {};
    //         obj.Content = elem.Content;
    //         var tmpArr = [];

    //         elem.Answers.forEach((item) => {
    //             if (elem.Type_question_ID != 3 && elem.Type_question_ID != 4) {
    //                 tmpArr.push(item.Content);
    //             } else if (elem.Type_question_ID == 4) {
    //                 tmpArr.push(item.VariantAnswer.Content);
    //             }
    //         });

    //         // console.log(this.counter(tmpArr));
    //         console.log(tmpArr);

    //         dispatch('counter', { arr: tmpArr }).then((data) => {
    //             console.log(data);
    //             obj.Answers = data;
    //         })

    //         console.log(obj);
    //         commit('setPercent', obj)
    //         // this.arr.push(obj);
    //     });

    //     // console.log(this.arr);
    //     // commit('setStatisticdd', 'response.data')
    // },
    // counter({ dispatch }, { arr }) {
    //     let count = {};
    //     arr.forEach(function (i) {
    //         count[i] = (count[i] || 0) + 1;
    //     });
    //     console.log(count);
    //     // dispatch('ratio', { obj: count })
    //     return dispatch('ratio', { obj: count })
    //     // return this.ratio(count);
    //     // commit('setStatisticdd', 'response.data')
    // },
    // ratio(context, { obj }) {
    //     let ratioResult = {};
    //     let sumValues = (object) => Object.values(object).reduce((a, b) => a + b);
    //     let maxVal = sumValues(obj);

    //     for (const val in obj) {
    //         ratioResult[val] = (obj[val] * 100) / maxVal;
    //     }
    //     // console.log("->");
    //     // console.log(ratioResult);
    //     return ratioResult;
    // },
  },
  namespaced: true,
};
