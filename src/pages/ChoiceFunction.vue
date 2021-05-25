<template>
  <div>
    <Logo />
    <Title text="Witaj w" textColor="LizardList" />
    <router-link :to="'/yourpoll/' + owner.id" v-if="owner.id">
      <Btn class="btn--100" text="Twoje głosowania" />
    </router-link>
    <Btn
      class="btn--100"
      text="Załóź głosowanie"
      v-on:click.native="create()"
    />
    <router-link to="/polls">
      <Btn to class="btn--100" text="Wypełnij głosowanie" />
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import Logo from "../components/elements/Logo.vue";
import Btn from "../components/elements/Btn.vue";
import Title from "../components/elements/Title.vue";

export default {
  name: "ChoiceFunction",
  components: {
    Logo,
    Btn,
    Title,
  },
  computed: {
    ...mapGetters("owner", {
      owner: "owner",
    }),
    // ...mapState("poll", {
    //   owner: "owner",
    // }),
  },
  methods: {
    ...mapMutations("owner", {
      setOwner: "setOwner",
    }),
    ...mapActions("owner", {
      create: "create",
      getOne: "getOne",
    }),
  },
  mounted() {
    let obj = { id: 17, Date_created: "2021-02-10T16:39:38.000Z" };
    sessionStorage.setItem("owner", JSON.stringify(obj));
    console.log(JSON.parse(sessionStorage.getItem("owner")));

    if (sessionStorage.getItem("owner")) {
      this.setOwner(JSON.parse(sessionStorage.getItem("owner")));
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped lang="scss">
</style>-->