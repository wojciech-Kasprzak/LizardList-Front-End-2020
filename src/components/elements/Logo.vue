<template>
  <div class="logo">
    <img class="logo__img" src="@/assets/logo.svg" alt />
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  width: 100%;
  margin: 30% 0 25% 0;
  &__img {
    display: block;
    margin: 0 auto;
  }
}
</style>
