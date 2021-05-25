<template>
  <!-- <div class="bottomBar">
    <img src="@/assets/logo.svg" alt class="bottomBar__img" />
    <div class="bottomBar__btns">
      <p class="bottomBar__item bottomBar__item--grey">Anuluj</p>
      <p class="bottomBar__item bottomBar__item--green" v-on:click="$emit('func-next')">{{next}}</p>
    </div>
  </div>-->

  <div class="plusMinus">
    <div class="plusMinus__minus plusMinus--marginRight" v-on:click="$emit('func-minus')"></div>
    <div class="plusMinus__plus" v-on:click="$emit('func-plus')"></div>
  </div>
</template>

<script>
export default {
  name: "PLusAndMinus",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.plusMinus {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  &--marginRight {
    margin-right: 8%;
  }
  &__minus {
    position: relative;
    width: 40px;
    height: 30px;
    opacity: 1;

    &:before {
      transform: rotate(90deg);
      position: absolute;
      left: 20px;
      content: " ";
      height: 30px;
      width: 2px;
      background-color: $cancel;
    }
  }
  &__plus {
    position: relative;
    width: 40px;
    height: 30px;
    opacity: 1;

    &:before {
      transform: rotate(90deg);
      position: absolute;
      left: 20px;
      content: " ";
      height: 30px;
      width: 2px;
      background-color: $lightGreen;
    }
    &:after {
      transform: rotate(180deg);
      position: absolute;
      left: 20px;
      content: " ";
      height: 30px;
      width: 2px;
      background-color: $lightGreen;
    }
  }
}
</style>
