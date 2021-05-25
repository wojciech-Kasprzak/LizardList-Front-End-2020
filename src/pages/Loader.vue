<template>
  <div class="loader">
    <div class="loader__fields loader__fields--topLeft">
      <img src="@/assets/loader/top_1.svg" alt />
    </div>
    <div class="loader__fields loader__fields--topRight">
      <img src="@/assets/loader/top_2.svg" alt />
    </div>
    <div class="loader__fields loader__fields--bottom">
      <img src="@/assets/loader/bottom.svg" alt />
    </div>
    <div class="loader__fields--white">
      <img src="@/assets/loader/white.svg" alt />
      <div class="loader__logo">
        <img src="@/assets/logo.svg" alt />
        <p class="loader__name">
          Lizard
          <span>List</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loader {
  margin: 0 -10px;
  background: $background;
  height: 100vh;
  // width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  // animation-name: end;
  // animation-duration: 3s;
  // // animation-delay: .2s;
  // animation-fill-mode: forwards;

  &__logo {
    position: absolute;
    top: 10%;
    text-align: center;
  }
  &__name {
    margin-top: 5%;
    font-size: 1.5rem;
    span {
      color: $lightGreen;
    }
  }
  &__fields {
    position: absolute;
    &--white {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      animation-name: whiteEnter;
      animation-duration: 1s;
      animation-delay: 0.8s;
      animation-fill-mode: forwards;
    }
    &--topLeft {
      top: -100%;
      right: 25%;
      animation-name: topLeftEnter;
      animation-duration: 1s;
      // animation-delay: .2s;
      animation-fill-mode: forwards;
    }
    &--topRight {
      right: -100%;
      top: -5%;
      animation-name: topRightEnter;
      animation-duration: 1s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    &--bottom {
      bottom: -12%;
      left: -30%;
      animation-name: bottomEnter;
      animation-duration: 1s;
    }
  }
}

// @keyframes end {
//   0% {
//     display: block;
//   }
//   100% {
//     display: none;
//   }
// }
@keyframes whiteEnter {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes bottomEnter {
  0% {
    transform: translate(0, 200px);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes topLeftEnter {
  0% {
    top: -100%;
  }
  100% {
    top: -10%;
  }
}
@keyframes topRightEnter {
  0% {
    right: -100%;
  }
  100% {
    right: -10%;
  }
}
</style>
