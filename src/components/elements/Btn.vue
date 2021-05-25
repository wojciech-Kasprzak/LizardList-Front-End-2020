<template>
  <div class="btn">
    <p class="btn__text">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  background: $lightGreen;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 13px 0;
  border-radius: 30px;
  margin-bottom: 5%;
  &--100 {
    max-width: 100%;
    transition: all .5s;
    margin: 0 auto;
    margin-bottom: 5%;
    &:hover {
      max-width: 80%;
    }
  }
  &__text {
    color: #fff;
  }
}
</style>
