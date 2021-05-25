<template>
  <div class="list" v-if='list'>
    <ItemList v-if="list.length == 0" :empty="true" />
    <ItemList v-else v-for="(item, index) in list" :key="item.id" :index="index+1" :text="item.Content"  :idQuestion="item.id" :deleteIcon="true"/>
  </div>
</template>

<script>
import ItemList from "../elements/ItemList.vue";

export default {
  name: "List",
  components: {
    ItemList,
  },
    props: {
    list: Array,
  },
};
</script>

<style scoped lang="scss">
</style>