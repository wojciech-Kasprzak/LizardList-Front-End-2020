export default {
  data() {
    return {};
  },
  methods: {
    counter(arr) {
      console.log("ARR->", arr);
      let count = {};
      arr.forEach(function(i) {
        count[i] = (count[i] || 0) + 1;
      });
      // console.log(count);
      return this.ratio(count);
    },

    ratio(obj) {
      console.log("ratio->", obj);
      let ratioResult = {};
      let sumValues = (object) => Object.values(object).reduce((a, b) => a + b);
      let maxVal = sumValues(obj);

      for (const val in obj) {
        let number = (obj[val] * 100) / maxVal;
        ratioResult[val] = (Math.round(number * 100) / 100).toFixed(2);
      }
      console.log("->");
      console.log(ratioResult);
      return ratioResult;
    },
  },
};
