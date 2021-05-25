<template>
  <div>
    <Title text="Dodaj" textColor="pytanie" />
    <SubTitle text="Treść" />
    <textarea
      class="input input--textarea"
      name
      placeholder="Wpisz treść"
      v-model="question.content"
    ></textarea>
    <SubTitle text="Wybierz rodzaj odpowiedzi" />

    <div class="select-radio">
      <div class="select-radio__item">
        <div class="select-radio__content">
          <YesNo class="margin__none--bottom" />
        </div>
        <div
          class="select-radio__radio"
          :class="{
            'select-radio__radio--active': question.typeQuestionId == 1,
          }"
          v-on:click="question.typeQuestionId = 1"
        >
          <span></span>
        </div>
      </div>
      <div class="select-radio__item">
        <div class="select-radio__content">
          <Range class="margin__none--bottom" />
        </div>
        <div
          class="select-radio__radio"
          :class="{
            'select-radio__radio--active': question.typeQuestionId == 2,
          }"
          v-on:click="question.typeQuestionId = 2"
        >
          <span></span>
        </div>
      </div>
      <div class="select-radio__item">
        <div class="select-radio__content">
          <input
            type="text"
            class="input margin__none--bottom"
            placeholder="Odpowiedź tekstowa"
          />
        </div>
        <div
          class="select-radio__radio"
          :class="{
            'select-radio__radio--active': question.typeQuestionId == 3,
          }"
          v-on:click="question.typeQuestionId = 3"
        >
          <span></span>
        </div>
      </div>
      <div class="select-radio__item">
        <div class="select-radio__content">
          <p>Wielokrotnego wyboru</p>
        </div>
        <div
          class="select-radio__radio"
          :class="{
            'select-radio__radio--active': question.typeQuestionId == 4,
          }"
          v-on:click="question.typeQuestionId = 4"
        >
          <span></span>
        </div>
      </div>

      <div class="addVariants" v-if="question.typeQuestionId == 4">
        <SubTitle text="Dodaj warianty" />
        {{ question.variants }}
        <input
          type="text"
          class="input"
          placeholder="Wpisz odpowiedź"
          v-for="i in inputs"
          :key="i"
          name="question.variants[]"
          v-model="question.variants[i]"
        />
        <PLusAndMinus @func-minus="removeInput" @func-plus="addInput" />
      </div>

      <div class="select-radio__item">
        <div class="select-radio__content">
          <p>Kontrola pomieszczenia</p>
        </div>
        <div
          class="select-radio__radio"
          :class="{
            'select-radio__radio--active': question.typeQuestionId == 5,
          }"
          v-on:click="question.typeQuestionId = 5"
        >
          <span></span>
        </div>
      </div>

      <div class="addVariants" v-if="question.typeQuestionId == 5">
        <SubTitle text="Wybierz urządzenie" />
        {{ question.deviceId }}

        <div class="select-radio__item" v-for="item in devices" :key="item.id">
          <div class="select-radio__content">
            <p>{{ item.Name }}</p>
          </div>
          <div
            class="select-radio__radio"
            :class="{
              'select-radio__radio--active': question.deviceId == item.id,
            }"
            v-on:click="question.deviceId = item.id"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- dodać wyłaćzenie przycisku -->
    <!-- :class="{ 'btnNav__item--disable': this.disable}" -->
    <BottomBar @func-cancel="cancel" @func-next="add" next="Dodaj pytanie" />
  </div>
</template>

<script>
import router from "./../router";

import { mapActions, mapGetters } from "vuex";

import Title from "../components/elements/Title.vue";
import SubTitle from "../components/elements/SubTitle.vue";
import YesNo from "../components/elements/YesNo.vue";
import Range from "../components/elements/Range.vue";
import BottomBar from "../components/elements/BottomBar.vue";
import PLusAndMinus from "../components/elements/PLusAndMinus.vue";

export default {
  name: "AddQuestion",
  components: {
    Title,
    SubTitle,
    YesNo,
    Range,
    BottomBar,
    PLusAndMinus,
  },
  computed: {
    ...mapGetters("device", {
      devices: "devices",
    }),
  },
  data: function () {
    return {
      disable: false,
      inputs: 0,
      selectendDevices: null,
      question: {
        content: null,
        typeQuestionId: null,
        deviceId: null,
        variants: [],
      },
    };
  },
  methods: {
    ...mapActions({
      getList: "device/getList",
    }),

    addInput: function () {
      this.inputs += 1;
      this.question.variants[this.inputs] = "";
    },
    removeInput: function () {
      if (this.inputs > 0) {
        this.inputs -= 1;
        this.question.variants.pop();
      }
    },
    add: function () {
      if (this.question.variants.length > 0) {
        this.question.variants.forEach((elem, key) => {
          if (elem == null || elem == "" || elem == undefined) {
            console.log("clear");
            this.question.variants.splice(key, 1);
          }
        });
      }

      for (const key in this.question) {
        if (
          this.question[key] == null &&
          key != "variants" &&
          key != "deviceId"
        ) {
          console.log(key);
          this.disable = true;
        }
        if (key == "variants" && this.question["typeQuestionId"] == 4) {
          console.log(this.question[key].length);
          if (this.question[key].length == 0) {
            this.disable = true;
          }
        }
      }
      if (this.disable == false) {
        if (this.question.variants[0] == undefined) {
          this.question.variants.shift();
        }
        this.$store.dispatch("questions/add", {
          pollId: this.$route.params.idPoll,
          content: this.question.content,
          typeQuestionId: this.question.typeQuestionId,
          variants: this.question.variants,
          deviceId: this.question.deviceId,
        });
      }
    },
    cancel() {
      this.question.content = null;
      this.question.typeQuestionId = null;
      this.question.variants = [];
      router.push("/poll/" + this.$route.params.idPoll);
    },
  },
  watch: {
    disable: function (val) {
      console.log(val);
    },
    question: function (val) {
      console.log(val);
    },
    "question.typeQuestionId": function (val) {
      this.disable = false;
      if (val != 4 && this.question.variants.length > 0) {
        this.question.variants = [];
        this.inputs = 0;
      }
    },
    "question.variants": function () {
      console.log("variants watch");
      if (this.question.variants.length == 0) {
        // this.disable = true;
      } else {
        this.disable = false;
      }
    },

    inputs: function (val) {
      if (val == 0) {
        this.question.variants = [];
      }
    },
  },
  created() {
    this.getList();
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
    // &::before {
    //   content: "";
    //   position: absolute;
    // }
  }
}

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