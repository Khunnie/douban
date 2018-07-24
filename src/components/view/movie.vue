<template>
  <div class="content">
   	<scroll title="影院热映" type="hasCover" :items="hotMovies"></scroll>
   	<scroll title="免费在线观影" type="hasCover" :items="topMovies"></scroll>
   	<scroll title="新片速递" type="hasCover" :items="newMovies"></scroll>
   	<scroll title="发现好电影" type="hasTags" :items="movieTags"></scroll>
   	<classify></classify>
  </div> 
</template>

<script type="ecmascript-6">
import { mapState } from 'vuex'
import Scroll from "../common/scroll"
import Classify from "../common/classify"
export default {
  name:"movie",
  components: {
  	Scroll,
  	Classify
  },
  computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
      hotMovies: state => state.movie.hotMovies,
      newMovies: state => state.movie.newMovies,
      topMovies: state => state.movie.topMovies,
      movieTags: state => state.movie.movieTags
    })
  },
  methods: {
    // Dispatching getMovie
    getMovie: function () {
      this.$store.dispatch('getMovie')
    }
  },
  created () {
    // Getting movies data on created
    this.getMovie()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.content
  content()   
</style>
