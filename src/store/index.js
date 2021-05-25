import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import loader from "@/store/modules/loader.store.js";
import owner from "@/store/modules/owner.store.js";
import poll from "@/store/modules/poll.store.js";
import questions from "@/store/modules/questions.store.js";
import answers from "@/store/modules/answers.store.js";
import statistic from "@/store/modules/statistic.store.js";
import device from "@/store/modules/device.store.js";

const store = new Vuex.Store({
  modules: {
    loader,
    owner,
    poll,
    questions,
    answers,
    statistic,
    device,
  },
});

export default store;
