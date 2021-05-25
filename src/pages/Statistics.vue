<template>
  <div>
    <Title text="Statystyki" textColor="głosowania" />

    <!-- <div v-for="obj in statistic.Percent" :key="obj">
      <div
        v-for="answer in obj.Answers"
        :key="answer.id"
        :style="{'height': answer+'px'}"
      >{{answer}}</div>
    </div>-->
    <!-- {{this.$route.params.idPoll}} -->

    <div class="chart" v-for="item in this.Percent" :key="item.Content">
      <p class="chart__title">{{ item.Content }}</p>
      <div
        class="chart__row"
        v-for="(percent, index) in item.Answers"
        :key="percent.id"
      >
        <div class="chart__item" :style="{ width: percent + 'px' }"></div>
        <p class="chart__val">{{ index }} -> {{ percent }}%</p>
      </div>
    </div>

    <BottomBar :cancel="'Powrót'" :next="'false'" @func-cancel="returnOf" />

    <!-- <div class="chart" v-for="item in this.Percent" :key="item.Content">
      <p class="chart__title">{{item.Content}}</p>
      <div class="chart__content">
        <div
          class="chart__item"
          v-for="percent in item.Answers"
          :key="percent.id"
          :style="{'width': percent+'px'}"
        >
          <p class="chart__val">{{percent}} %</p>
        </div>
      </div>
    </div>-->

    <!-- {{statistic.Questions}} -->
    <!-- <div class="chart">
      <div class="chart__item" style="height: 40px;">
        <p class="chart__number">4</p>
        <p class="chart__desc">Tak</p>
      </div>
    </div>

    <div v-for="item in statistic.Percent" :key="item.Content">
      {{item.Content}}
      <div class="chart">
        <div class="chart__item" v-for="(percent, index) in item.Answers" :key="percent.id">
          <p class="chart__number">{{percent}} %</p>
          <div class="chart__bar" :style="{'height': percent+'%'}"></div>
          <p class="chart__desc">{{index}}</p>
        </div>
      </div>
    </div>-->
    <!-- <VueApexCharts width="380" type="donut" :options="options" :series="series" /> -->

    <!-- <SubTitle text="Lista pytań" icon="yes" :pollId="poll.id"/> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "./../router";
// import VueApexCharts from "vue-apexcharts";

import Title from "../components/elements/Title.vue";
import BottomBar from "../components/elements/BottomBar.vue";
// import SubTitle from "../components/elements/SubTitle.vue";

import percent from "../mixins/percent.js";

export default {
  name: "Statistics",
  mixins: [percent],
  components: {
    Title,
    BottomBar,
    // VueApexCharts,
    // SubTitle,
  },
  data: function () {
    return {
      options: {},
      series: [5, 3],
      Percent: [],
    };
  },
  computed: {
    ...mapGetters("statistic", {
      statistic: "statistic",
    }),
  },
  methods: {
    increase() {
      this.height += 20;
    },
    ...mapActions("statistic", {
      get: "get",
    }),
    returnOf() {
      router.push("/yourpoll/" + this.statistic.OwnerId);
    },
    performance() {
      this.statistic.Questions.forEach((elem) => {
        let obj = {};
        obj.Content = elem.Content;
        var tmpArr = [];

        elem.Answers.forEach((item) => {
          if (elem.Type_question_ID != 3 && elem.Type_question_ID != 4) {
            tmpArr.push(item.Content);
          } else if (elem.Type_question_ID == 4) {
            tmpArr.push(item.VariantAnswer.Content);
          }
        });

        // console.log(this.counter(tmpArr));

        obj.Answers = this.counter(tmpArr);
        this.Percent.push(obj);
      });

      console.log(this.Percent);
    },
    // counter(arr) {
    //   console.log("ARR->", arr);
    //   let count = {};
    //   arr.forEach(function (i) {
    //     count[i] = (count[i] || 0) + 1;
    //   });
    //   // console.log(count);
    //   return this.ratio(count);
    // },

    // ratio(obj) {
    //   console.log("ratio->", obj);
    //   let ratioResult = {};
    //   let sumValues = (object) => Object.values(object).reduce((a, b) => a + b);
    //   let maxVal = sumValues(obj);

    //   for (const val in obj) {
    //     let number = (obj[val] * 100) / maxVal;
    //     ratioResult[val] = (Math.round(number * 100) / 100).toFixed(2);
    //   }
    //   console.log("->");
    //   console.log(ratioResult);
    //   return ratioResult;
    // },
  },
  created: function () {
    // this.get({ id: this.$route.params.idPoll });
    this.performance();
  },
};
</script>

<style scoped lang="scss">
.chart {
  margin-bottom: 5%;
  &__title {
    margin-bottom: 3%;
  }
  &__content {
    display: flex;
    // justify-content: flex-start;
    // align-items: flex-end;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__item {
    // width: auto;
    height: 40px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    background: $lightGreen;
    margin-bottom: 5px;
  }
  &__row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 2%;
  }
  &__name {
    margin-right: 10px;
  }
  &__val {
    margin-left: 10px;
  }
  &__number {
    // position: absolute;
    // top: -20px;
    // width: 100%;
    // text-align: center;
  }
  &__desc {
    // position: absolute;
    // bottom: -20px;
    // width: 100%;
    // text-align: center;
  }
}
</style>