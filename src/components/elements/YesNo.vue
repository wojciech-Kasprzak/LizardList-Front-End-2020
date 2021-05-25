<template>
  <div class="yesNo">
    <div class="yesNo__item" v-on:click="select = 'Yes'">
      <img src="@/assets/Icons/yesSelected.svg" alt class="yesNo__icon" v-if="select == 'Yes'" />
      <img src="@/assets/Icons/yes.svg" alt class="yesNo__icon" v-else />
      <p class="yesNo__text">Tak</p>
    </div>
    <div class="yesNo__item" v-on:click="select = 'No'">
      <img src="@/assets/Icons/noSelected.svg" alt class="yesNo__icon" v-if="select == 'No'" />
      <img src="@/assets/Icons/no.svg" alt class="yesNo__icon" v-else />
      <p class="yesNo__text">Nie</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "YesNo",
  props: {
    id: Number,
  },
  data: function () {
    return {
      select: null,
    };
  },
  methods: {
    ...mapMutations("answers", {
      setAnswers: "setAnswers",
    }),
  },
  watch: {
    select: function (val) {
      this.setAnswers({ QuestionId: this.id, Content: val });
    },
  },
};
</script>

<style scoped lang="scss">
.yesNo {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;

  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: calc(100% / 2);
  }
  &__text {
    font-size: 1.2rem;
  }
  &__icon {
    margin-right: 10px;
    max-width: 20%;
  }
}
</style>