<template>
  <input
    type="text"
    class="input margin__none--bottom padding__left-right"
    placeholder="Odpowiedź tekstowa"
    v-model="text"
  />
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "InputAnswer",
  props: {
    id: Number,
  },
  data: function () {
    return {
      text: null,
    };
  },
  methods: {
    ...mapMutations("answers", {
      setAnswers: "setAnswers",
    }),
  },
  watch: {
    text: function (val) {
      this.setAnswers({ QuestionId: this.id, Content: val });
    },
  },
};
</script>

<style scoped lang="scss">
.input {
  background: $gray;
  border: none;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
  font-family: "Montserrat";
  font-weight: 200;
  margin-bottom: 5%;

  &--textarea {
    height: 100px;
  }
}
</style>