<template>
  <div class="accordionList" v-if="list">
    <div
      class="accordionList__item"
      v-for="(item, index) in list"
      :key="item.id"
      v-on:click="active = item.id"
    >
      <p class="accordionList__name">
        <span class="accordionList__number">{{index+1}}.</span>
        {{item.Name}}
      </p>
      <div class="accordionList__more" :class="{'accordionList__more--active': active == item.id }">
        <p class="accordionList__more-item" v-on:click="edit(item.id)">Edycja</p>

        <!-- <router-link :to="'/statistics/' + item.id"> -->
        <p class="accordionList__more-item" v-on:click="get({ id: item.id })">Statystyki</p>
        <!-- </router-link> -->
        <!-- this.getOne({id: this.owner.id})
        // this.get({ id: this.$route.params.idPoll }); -->
      </div>
    </div>

    <!-- <ItemList v-else v-for="(item, index) in list" :key="item.id" :index="index+1" :text="item.Content"  :idQuestion="item.id"/> -->
  </div>
</template>

<script>
// import ItemList from "../elements/ItemList.vue";
import { mapActions } from "vuex";
import router from "../../router";

export default {
  name: "AccordionList",
  components: {
    // ItemList,
  },
  props: {
    list: Array,
  },
  data: function () {
    return {
      active: null,
    };
  },
    // statistic/get', { id: to.params.idPoll });
  methods: {
    ...mapActions("statistic", {
      get: "get",
    }),
    edit: function (id) {
      router.push("/poll/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.accordionList {
  margin: 0 -10px;
  &__item {
    padding: 0 10px;
    margin-bottom: 5%;
    // border-bottom: 2px solid $lightGreen;
  }
  &__name {
    color: $darkGray;
    &--more {
      margin-bottom: 5%;
    }
  }
  &__number {
    color: #000;
  }
  &__more {
    display: none;
    // height: 0;
    margin-left: 5%;
    margin-bottom: 8%;
    &--active {
      display: block;
    }
  }
  &__more-item {
    color: $darkGray;
    transition: all 0.5s;
    &:first-child {
      margin-top: 3%;
      margin-bottom: 3%;
    }
    &:hover {
      color: $lightGreen;
      margin-left: 10px;
    }
  }
}
</style>