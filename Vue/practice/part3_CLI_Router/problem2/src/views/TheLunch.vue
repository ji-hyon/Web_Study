<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <h1>점심메뉴</h1>
    <button @click="pickMenu">Pick Lunch</button>
    <p>오늘의 추천 : {{menu}}</p>
    <br>
    <h2>로또를 뽑아보자</h2>
    <button @click="pickNum">Pick Lotto</button>
  </div>
</template>

<script>
import _ from 'lodash'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TheLunch',
//   components: {
//     HelloWorld
//   }
  data: function() {
    return {
      lunch: ['더고메', '육수고집', '차이나호', '소담상', '속이찬새참'],
      menu: null,
    }
  },
  methods: {
    pickMenu: function() {
      this.menu = _.sample(this.lunch)
    },
    pickNum: function() {
      this.$router.push({name: 'TheLotto', params:{lottoNum:6}})
    }
  }
}
</script>
