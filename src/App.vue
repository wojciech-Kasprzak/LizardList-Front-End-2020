<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <!-- <div class="container" v-on:click="$store.dispatch('showLoader')"> -->
    <div class="container">
      <!-- <Loader /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

// import Loader from "./components/Loader.vue";

export default {
  computed: {
    ...mapState({
      loader: "loader",
    }),
  },
  components: {
    // Loader,
  },
  data: function () {
    return {};
  },
};
</script>


