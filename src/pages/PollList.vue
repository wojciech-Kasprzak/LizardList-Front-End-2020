<template>
  <div>
    <Title text="Lista" textColor="głosowań" />
    <div class="list" v-if="polls">
      <ItemList v-if="polls.length == 0" :empty="true" />
      <router-link v-for="(item, index) in polls" :key="item.id" :to="'/questions/'+item.id">
        <ItemList
          v-if="polls.length != 0 && item.Active == 1"
          :index="index+1"
          :text="item.Name"
          :idQuestion="item.id"
          :deleteIcon="false"
        />
      </router-link>
    </div>

    <BottomBar :cancel="'Powrót'" :next="'false'" @func-cancel="returnOf" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "./../router";
import BottomBar from "../components/elements/BottomBar.vue";

import Title from "../components/elements/Title.vue";
import ItemList from "../components/elements/ItemList.vue";

export default {
  name: "PollList",
  components: {
    Title,
    ItemList,
    BottomBar
  },
  computed: {
    ...mapGetters("poll", {
      polls: "polls",
    }),

    // ...mapState("poll",{
    //   poll: "poll",
    // }),
  },
  // data: function () {
  //   return {
  //     // tasks: [],
  //     name: "",
  //   };
  // },
  methods: {
    ...mapActions("poll", {
      getList: "getList",
    }),
    returnOf() {
      router.push("/");
    },
  },
  created: function () {
    this.getList();
  },
};
</script>

<style scoped lang="scss">
</style>