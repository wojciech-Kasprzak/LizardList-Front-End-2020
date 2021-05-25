<template>
  <div>
    <Title text="Twoje" textColor="głosowania" />
    <AccordionList :list="owner.Polls" />
    <BottomBar :cancel="'Powrót'" :next="'false'" @func-cancel="returnOf" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "./../router";

import Title from "../components/elements/Title.vue";
import AccordionList from "../components/elements/AccordionList.vue";
import BottomBar from "../components/elements/BottomBar.vue";

export default {
  name: "Poll",
  components: {
    Title,
    AccordionList,
    BottomBar,
  },
  computed: {
    ...mapGetters("owner", {
      owner: "owner",
    }),
  },
  data: function () {
    return {
      polls: [],
    };
  },
  methods: {
    ...mapActions("owner", {
      getOne: "getOne",
    }),
    returnOf() {
      router.push("/");
    },
  },
  created: function () {
    console.log('*****');
    // console.log(this.owner.id);
    this.getOne({id: this.owner.id})
        // this.getOne({ id: this.$route.params.idPoll });
    // this.polls = this.owner.Polls;
  },
};
</script>

<style scoped lang="scss">
</style>