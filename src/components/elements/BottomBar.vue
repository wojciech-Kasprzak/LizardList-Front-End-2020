<template>
  <div class="bottomBar">
    <img src="@/assets/logo.svg" alt class="bottomBar__img" />
    <div class="bottomBar__btns">
      <p
        class="bottomBar__item bottomBar__item--grey"
        v-on:click="$emit('func-cancel')"
      >
        {{ cancel }}
      </p>
      <p
        class="bottomBar__item bottomBar__item--green"
        v-if="next != 'false'"
        v-on:click="$emit('func-next'), $emit('func-statistic')"
      >
        {{ next }}
      </p>
    </div>
  </div>
</template>
// func-cancel
<script>
export default {
  name: "BottomBar",
  props: {
    next: {
      type: String,
      default: "Dalej",
    },
    cancel: {
      type: String,
      default: "Anuluj",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottomBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $lightGreen;
  margin: 0 -15px;
  padding: 10px 15px;
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  &__img {
    width: 15%;
  }
  &__btns {
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  &__item {
    font-size: 1.2rem;
    &:first-child {
      margin-right: 15%;
    }
    &:last-child {
      margin-right: 5%;
    }
    &--grey {
      color: $cancel;
    }
    &--green {
      color: $lightGreen;
    }
  }
}
</style>
