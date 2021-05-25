<template>
  <div>
    <Title text="Nazwa" :textColor="poll.Name" />
    <div class="margin__10" v-for="item in poll.Questions" :key="item.id">
      <SubTitle :text="item.Content" />

      <YesNo
        class="margin__none--bottom padding__left-right"
        :id="item.id"
        v-if="item.Type_question_ID == 1"
      />
      <Range
        class="margin__none--bottom padding__left-right"
        :id="item.id"
        v-if="item.Type_question_ID == 2"
      />
      <InputAnswer :id="item.id" v-if="item.Type_question_ID == 3" />
      <VariantAnswers
        class="padding__left-right"
        :array="item.VariantAnswer"
        :questionId="item.id"
        v-if="item.Type_question_ID == 4"
      />

      <YesNo
        class="margin__none--bottom padding__left-right"
        :id="item.id"
        v-if="item.Type_question_ID == 5"
      />
    </div>
    <BottomBar
      @func-cancel="clear"
      @func-next="send"
      @func-statistic="check(poll.id)"
      next="Zapisz"
    />
  </div>
</template>

<script>
import router from "./../router";
import { mapGetters, mapActions, mapMutations } from "vuex";

import Title from "../components/elements/Title.vue";
import SubTitle from "../components/elements/SubTitle.vue";
import YesNo from "../components/elements/YesNo.vue";
import Range from "../components/elements/Range.vue";
import InputAnswer from "../components/elements/InputAnswer.vue";
import VariantAnswers from "../components/elements/VariantAnswers.vue";
import BottomBar from "../components/elements/BottomBar.vue";

export default {
  name: "QuestionsList",
  components: {
    Title,
    SubTitle,
    YesNo,
    Range,
    InputAnswer,
    VariantAnswers,
    BottomBar,
  },
  computed: {
    ...mapGetters("poll", {
      poll: "poll",
    }),
  },
  data: function () {
    return {
      radioSelect: null,
    };
  },
  methods: {
    ...mapMutations("answers", {
      setAnswers: "setAnswers",
      clearAnswers: "clearAnswers",
      clearSelectRadio: "clearSelectRadio",
    }),
    ...mapActions({
      getOne: "poll/getOne",
      send: "answers/send",
      checkStatistics: "device/checkStatistics",
    }),
    clear() {
      this.clearAnswers();
      this.clearSelectRadio();
      router.push("/polls");
    },
    check(id) {
      let _this = this;
      setTimeout(function () {
        _this.checkStatistics(id);
      }, 500);
    },
    // showInput: function () {
    //   this.inputs += 1;
    //   this.question.variants[this.inputs] = "";
    // },
  },
  watch: {
    radioSelect: function (val) {
      this.setAnswers({ QuestionId: this.id, Content: val });
    },
  },
  created: function () {
    console.log(this.$route.params);
    this.getOne({ id: this.$route.params.idPoll });
    // this.$store.dispatch("poll/getOne", { id: this.$route.params.idPoll });
  },
};
</script>

