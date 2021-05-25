<template>
  <div class="variantAnswers">
    <Radio v-for="(item) in array" :key="item.id" :questionId="questionId" :id="item.id" :content="item.Content"/>
  </div>
</template>

<script>
import Radio from "../elements/Radio.vue";

export default {
  name: "VariantAnswers",
  components: {
    Radio,
  },
  props: {
    questionId: Number,
    array: Array,
  },
  data: function () {
    return {
      select: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
