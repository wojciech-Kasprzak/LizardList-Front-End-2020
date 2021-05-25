<template>
  <div class="text" :class="{ 'text--icon': icon == 'yes' }">
    <p class="text__content">{{text}}</p>
    <router-link :to="'/poll/'+pollId+'/add'">
      <img v-if="icon == 'yes'" src="@/assets/Icons/add.svg" alt class="text__img" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: {
    pollId: Number,
    text: String,
    icon: String,
  },
  methods: {
    addQuestion: function () {
      this.$store.dispatch("questions/create", { name: this.name });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text {
  margin-bottom: 4%;

  &--icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    font-weight: 500;
    font-size: 1.3rem;
  }
  &__img {
  }
}
</style>
