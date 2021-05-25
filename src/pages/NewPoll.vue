<template>
  <div>
    <Title text="Nowe" textColor="głosowanie" />
    <div class="input">
      <div class="input__item">
        <p class="input__label">Wpisz nazwę</p>
        <input
          class="input__input"
          placeholder="Nazwa głosowania"
          type="text"
          name="name"
          v-model="name"
        />
      </div>
    </div>
    <p class="error" v-if="error">{{ error }}</p>
    <BottomBar @func-next="create" @func-cancel="returnOf" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "./../router";

import Title from "../components/elements/Title.vue";
import BottomBar from "../components/elements/BottomBar.vue";

export default {
  name: "NewPoll",
  components: {
    Title,
    BottomBar,
  },
  computed: {
    // ...mapGetters("owner", {
    //   owner: "owner",
    // }),
    ...mapState("poll", {
      poll: "poll",
    }),
  },
  data: function () {
    return {
      name: null,
      error: null,
    };
  },
  methods: {
    handleCreate() {
      console.log("Child has been created.");
    },
    create: function () {
      if (this.name == "" || this.name == null) {
        this.error = "Wpisz nazwę głosowania";
      } else {
        this.$store.dispatch("poll/create", { name: this.name });
      }
    },
    returnOf() {
      router.push("/");
    },
  },
  watch: {
    name: function (val) {
      if (val != "" || val != null) {
        this.error = null;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped lang="scss">
</style>-->