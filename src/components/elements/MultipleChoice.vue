<template>
  <div class="range-slider__module">
    <range-slider class="slider" min="0" max="10" step="1" v-model="sliderValue"></range-slider>
    <p class="range-slider__text">{{sliderValue}}</p>
  </div>
</template>

<script>
import RangeSlider from "vue-range-slider";
import "vue-range-slider/dist/vue-range-slider.css";
export default {
  name: "MultipleChoice",
  components: {
    RangeSlider,
  },
  data: function () {
    return {
      sliderValue: 5,
    };
  },
};
</script>

<style lang="scss">
.range-slider {
  width: 100% !important;
  padding: 0 !important;

  &__module {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 5%;
  }
  &__text {
    margin-left: 20px;
    font-size: 1.6rem;
  }
  &-rail {
    background-color: $gray;
  }
  &-fill {
    background-color: $lightGreen !important;
  }
  &-knob {
    background-color: $lightGreen !important;
    border: none !important;
    box-shadow: none !important;
  }
}
</style>