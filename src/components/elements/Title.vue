<template>
  <div class="title">
    <p class="title__text">
      {{text}}
      <span>
        {{textColor}}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
    textColor: String,
  },
};
</script>

<style scoped lang="scss">
.title {
  margin-top: 30px;
  margin-bottom: 10%;
  &__text {
    font-size: 2rem;
    font-weight: 500;
  }
  span {
    color: $lightGreen;
  }
}
</style>
