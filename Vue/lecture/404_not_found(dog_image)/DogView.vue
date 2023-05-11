<template>
  <div>
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="">
    <br>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "DogView",
    data() {
        return {
            imgSrc: null,
            message: "로딩중......."
        }
    },
    methods: {
        getDogImage() {
        const breed = this.$route.params.breed
        const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`
        
        axios({
            method: 'get',
            url: dogImageSearchURL
        })
        .then((response)=> {
            // console.log(response);
            const dogimgSrc = response.data.message
            this.imgSrc = dogimgSrc
        })
        .catch((error) => {
            console.log(error);
            // 방법1
            // this.message = `${this.$route.params.breed}는 없는 품종입니다.`
            // 방법2
            this.$router.push('/404')
        })
        }
    },
    // 라우터에 접속 하자마자 created(라이프사이클훅)을 사용해서 이미지 뜨도록
    created() {
        this.getDogImage()
    }
}
</script>

<style>

</style>