<template>
  <!-- <div class="select-radio__item" v-on:click="selected(id)"> -->
  <div class="select-radio__item" v-on:click="setRadio(id)">
    <div class="select-radio__content">{{content}}</div>
    <div class="select-radio__radio" :class="{ 'select-radio__radio--active': selectRadio == id }">
      <span></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Radio",
  props: {
    questionId: Number,
    id: Number,
    content: String,
  },
  data: function () {
    return {
      select: null,
    };
  },
  computed: {
    ...mapGetters("answers", {
      selectRadio: "selectRadio",
    }),
  },
  methods: {
    ...mapMutations("answers", {
      setAnswers: "setAnswers",
      setRadio: "setRadio",
    }),
  },
  watch: {
    selectRadio: function (val) {
      if (val != null) {
        console.log(val);
        console.log(`questionId -> ${this.questionId}`);
        this.setAnswers({ QuestionId: this.questionId, VariantAnsferId: val });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.select-radio {
  &__item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8%;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__content {
    width: 90%;
    padding-right: 10%;
  }
  &__radio {
    background-color: $gray;
    width: 26px;
    height: 26px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    span {
      background-color: #fff;
      width: 15.5px;
      height: 15.5px;
      border-radius: 20px;
      transition: all 0.5s;
    }
    &--active {
      background-color: $lightGreen;
      span {
        background-color: $lightGreen;
      }
    }
  }
}
</style>
