<template>
  <div class="itemList">
    <p class="itemList__text" v-if="empty == false">
      <span class="itemList__number">{{index}}.</span> {{text}}
    </p>
    <p class="itemList__text"  v-if="empty">
      Lista jest smutna bo jest pusta
    </p>
    <img v-if="empty == false && deleteIcon == true" src="@/assets/Icons/delete.svg" alt class="itemList__img" v-on:click='$store.dispatch("questions/delete", { id: idQuestion })'/>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    index: Number,
    idQuestion: Number,
    text: String,
    empty: Boolean,
    deleteIcon: Boolean,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.itemList {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  &__text {
    color: $darkGray;
  }
  &__number {
    color: #000;
  }
  &__img {
  }
}
</style>
