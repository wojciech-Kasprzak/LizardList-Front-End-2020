<template>
  <div>
    <Title text="Nazwa:" :textColor="poll.Name" />
    <SubTitle text="Lista pytań" icon="yes" :pollId="poll.id" />
    <List :list="poll.Questions" />
    <BottomBar
      @func-cancel="
        poll.Active == 1 ? deactivate({ id: $route.params.idPoll }) : ''
      "
      @func-next="activate({ id: $route.params.idPoll })"
      :cancel="poll.Active == 1 ? 'Dezaktywuj' : 'Anuluj'"
      :next="poll.Active == 1 ? 'Lista ankiet' : 'Aktywuj'"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Title from "../components/elements/Title.vue";
import SubTitle from "../components/elements/SubTitle.vue";
import List from "../components/elements/List.vue";
import BottomBar from "../components/elements/BottomBar.vue";

export default {
  name: "Poll",
  components: {
    Title,
    SubTitle,
    List,
    BottomBar,
  },
  computed: {
    ...mapGetters("poll", {
      poll: "poll",
    }),

    // ...mapState("poll",{
    //   poll: "poll",
    // }),
  },
  data: function () {
    return {
      // tasks: [],
      name: "",
    };
  },
  methods: {
    ...mapActions("poll", {
      activate: "activate",
      deactivate: "deactivate",
      getOne: "getOne",
    }),
  },
  created: function () {
    this.getOne({ id: this.$route.params.idPoll });
    // this.$store.dispatch("poll/getOne", { id: this.$route.params.idPoll });
  },
};
</script>

<style scoped lang="scss">
</style>