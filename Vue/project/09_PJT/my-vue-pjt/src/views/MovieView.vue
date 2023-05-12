<template>
  <div class="d-flex flex-wrap justify-content-center">
    <MovieCard 
     v-for="movie in movieData" 
     :key="movie.id"
     :movie ="movie" />
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue"
import axios from 'axios'

export default {
    name: 'MovieView',
    components: {
        MovieCard,
    },

    created() {
      this.getMovieData()
    },

    data() {
      return {
        movieData: []
      }
    },

    methods: {
      getMovieData() {
      const MovieURL = `https://api.themoviedb.org/3/movie/top_rated?${api_key}&language=ko&page=1`
      
        axios({
            method: 'get',
            url: MovieURL
        })
        .then((response)=> {
            console.log(response);
            console.log(response.data);
            // console.log(response.data.results);
            const movieData = response.data.results
            this.movieData = movieData
        })
        .catch((error) => {
            console.log(error);
        })
      }
  },


}
</script>

<style>

</style>