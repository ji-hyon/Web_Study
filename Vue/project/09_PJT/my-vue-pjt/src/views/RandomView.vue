<template>
  <div>

    <div>
     <button class="btn" @click="handleClick">PICK</button>
    </div>
    <br>

    <div class="card container">
    <img :src="'https://image.tmdb.org/t/p/w500' + randomMovie.poster_path">
      <p>
        {{ randomMovie.title }}
      </p>
      <p>
        <i class="bi bi-star-fill star"></i>
        {{ randomMovie.vote_average }}
      </p>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MovieView',
    components: {
    },

    created() {
       this.getRandomMovie();
    },

    data() {
      return {
        randomMovie: null,
      }
    },

    methods: {
      getRandomMovie() {
      const MovieURL = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=ko&page=1`
      
        axios({
            method: 'get',
            url: MovieURL
        })
        .then((response)=> {
            // console.log(response.data.results);
            const movieData = response.data.results;
            const randomIndex = Math.floor(Math.random() * movieData.length);
            this.randomMovie = movieData[randomIndex];
        })
        .catch((error) => {
            console.log(error);
        })
      },

      handleClick() {
      this.getRandomMovie();
      }

  },


}
</script>

<style>
.star {
  color: #fbbf24;
}
.btn {
  background-color: rgb(201, 237, 252);
}
.card {
  /* width: 45%; */
  width : 600px;
  margin-bottom: 30px
}
.container {
  /* display: flex;
  justify-content: center; */
}
</style>