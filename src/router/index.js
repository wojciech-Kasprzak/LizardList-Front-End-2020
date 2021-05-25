import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store'

// import Loader from "./../components/Loader.vue";
import ChoiceFunction from "./../pages/ChoiceFunction.vue";
import NewPoll from "./../pages/NewPoll.vue";
import Poll from "./../pages/Poll.vue";
import AddQuestion from "./../pages/AddQuestion.vue";
import AddVariants from "./../pages/AddVariants.vue";
import YourPoll from "./../pages/YourPoll.vue";
import PollList from "./../pages/PollList.vue";
import QuestionsList from "./../pages/QuestionsList.vue";
import Statistics from "./../pages/Statistics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ChoiceFunction",
    component: ChoiceFunction,
  },
  // {
  //   path: '/wybor',
  //   name: 'ChoiceFunction',
  //   component: ChoiceFunction
  // },
  // {
  //   path: '/nowa',
  //   name: 'NewPoll',
  //   component: NewPoll,
  //   beforeEnter(next) {
  //     store.dispatch('create');
  //     next('/nowa')
  //   }
  // }
  {
    path: "/new",
    component: NewPoll,
    // beforeEnter(to, from, next) {

    //   next()
    // }
  },
  {
    path: "/poll/:idPoll",
    name: "poll",
    component: Poll,
    // beforeEnter(to, from, next) {
    //   store.dispatch('owner/create');
    //   next()
    // }
  },
  {
    path: "/poll/:idPoll/add",
    name: "AddQuestion",
    component: AddQuestion,
  },
  {
    path: "/poll/:idPoll/addVariants",
    name: "AddVariants",
    component: AddVariants,
  },
  {
    path: "/yourpoll/:idOwner",
    name: "YourPoll",
    component: YourPoll,
  },
  {
    path: "/polls",
    name: "PollList",
    component: PollList,
  },
  {
    path: "/questions/:idPoll",
    name: "QuestionsList",
    component: QuestionsList,
  },
  {
    path: "/statistics/:idPoll",
    name: "Statistics",
    component: Statistics,
    // beforeEnter(to) {
    //   console.log(to.params.idPoll);
    //   store.dispatch('statistic/get', { id: to.params.idPoll });
    //   // next()
    // }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
