<template>
  <div>
    <Title text="Wariany" textColor=" odpowiedzi" />
    <SubTitle text="Dodaj warianty" />
    {{inputs}}
    <input
      type="text"
      class="input"
      placeholder="Wpisz odpowiedź"
      v-for="i in inputs"
      :key="i"
      name="variants[]"
      v-model="variants[i]"
    />
    {{variants}}
    <div class="btnNav btnNav--firstRow">
      <div
        class="btnNav__item btnNav__item--gray btnNav__item--height btnNav__item--width btnNav__item--marginRight"
        v-on:click="hideInput()"
      >
        <div class="btnNav__remove"></div>
      </div>
      <div
        class="btnNav__item btnNav__item--green btnNav__item--height btnNav__item--width"
        v-on:click="showInput()"
      >
        <div class="btnNav__add"></div>
      </div>
    </div>
    <div class="btnNav">
      <div class="btnNav__item btnNav__item--gray btnNav__item--marginRight">
        <p class="btnNav__text">Anuluj</p>
      </div>
      <div class="btnNav__item btnNav__item--green" :class="{ 'btnNav__item--disable': this.variants.length == 0}" v-on:click="accept()">
        <p class="btnNav__text">Akceptuj</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from './../router'

import Title from "../components/elements/Title.vue";
import SubTitle from "../components/elements/SubTitle.vue";

export default {
  name: "AddVariants",
  components: {
    Title,
    SubTitle,
  },

  data: function () {
    return {
      inputs: 0,
      variant: null,
      variants: [],
    };
  },
  methods: {
    showInput: function () {
      this.inputs += 1;
    },
    hideInput: function () {
      if (this.inputs > 0) {
        this.inputs -= 1;
        this.variants.pop();
      }
    },
    accept: function () {
      this.variants.shift()
      
      this.$store.commit('questions/setVariants', this.variants)
      router.push('/poll/'+this.$route.params.idPoll+'/add')
    },
  },
  watch: {
    name: function (val) {
      if (val != "" || val != null) {
        this.error = null;
      }
    },
    inputs: function (val) {
      if (val == 0) {
        this.variants = [];
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