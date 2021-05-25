// import Vue from 'vue'
import { instance } from "../../http-common";
// import router from "../../router";

export default {
  state: {
    devices: {},
    // polls: {},
  },
  getters: {
    devices: (state) => state.devices,
    // polls: (state) => state.polls,
  },
  mutations: {
    // setPolls: (store, data) => {
    //   store.polls = data;
    // },
    setDevices: (store, data) => {
      store.devices = data;
    },
    // setActivate: (store, data) => {
    //   store.poll.Active = data;
    // },
    // removeQuestionFromPoll: (store, id) => {
    //   for (let i = 0; i <= store.poll.Questions.length - 1; i++) {
    //     if (store.poll.Questions[i].id == id) {
    //       console.log(i);
    //       store.poll.Questions.splice(i, 1);
    //     }
    //   }
    // },
  },
  actions: {
    getList({ commit }) {
      instance({
        method: "GET",
        url: "/devices",
        dataType: "json",
      }).then(function(response) {
        console.log(response.data);
        commit("setDevices", response.data);
      });
    },
    async checkStatistics({ dispatch }, PollId) {
      let resultPercent = {};
      const data = await dispatch(
        "statistic/getForDevices",
        { id: PollId },
        { root: true }
      );
      data.Questions.forEach((elem) => {
        let tmpArr = [];
        console.log(elem);
        if (elem.Type_question_ID == 5) {
          resultPercent.Devices_ID = elem.Devices_ID;
          elem.Answers.forEach((item) => {
            tmpArr.push(item.Content);
          });
          // this.counter(tmpArr);

          let count = {};
          tmpArr.forEach(function(i) {
            count[i] = (count[i] || 0) + 1;
          });
          //   return this.ratio(count);

          let ratioResult = {};
          let sumValues = (object) =>
            Object.values(object).reduce((a, b) => a + b);
          let maxVal = sumValues(count);

          for (const val in count) {
            let number = (count[val] * 100) / maxVal;
            ratioResult[val] = (Math.round(number * 100) / 100).toFixed(2);
          }
          resultPercent.percent = ratioResult;
          //  {Yes: "42.31", No: "57.69"}
          //  return ratioResult;
        }
      });
      console.log(resultPercent);

      let stateDevice = null;
      
      if (resultPercent.percent.No == undefined) {
        resultPercent.percent.No = 0
      }
      if (resultPercent.percent.Yes == undefined) {
        resultPercent.percent.Yes = 0
      }

      if (resultPercent.percent.Yes > resultPercent.percent.No) {
        console.log("większe Yes", resultPercent.percent.Yes);
        stateDevice = 1;
      } else if (resultPercent.percent.Yes == resultPercent.percent.No) {
        console.log("Równe");
      } else {
        console.log("większe No", resultPercent.percent.No);
        stateDevice = 0;
      }
      if (stateDevice != null) {
        // instance({
        //   method: "POST",
        //   url: "/devices/" + resultPercent.Devices_ID,
        //   data: { state: stateDevice },
        //   dataType: "json",
        // }).then(function(response) {
        //   console.log(response.data);
        // });

        const response = await instance.post(
          "/devices/" + resultPercent.Devices_ID,
          { state: stateDevice }
        );
        console.log(response.data);
      }

      //   return response.data;
    },
  },
  namespaced: true,
};
