<template>
  <div>
    <h1>로또</h1>
    <button @click="getNums">Get Lucky Numbers</button>
    <p>{{nums}}</p>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"></script>
<script>
export default {
  name: 'TheLotto',
  data: function() {
    return{
      nums : [],
    }
  },
  methods: {
    getNums: function() {
      const numbers = _.range(1, 46)
      this.nums = _.sampleSize(numbers, this.$route.params.lottoNum)
      // this.nums = _.sortBy(this.sampleNums)
    }
  }
}
</script>