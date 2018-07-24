<template>
  <div class="content">
   	<scroll title="最受关注图书｜虚构类" type="hasCover" :items="novel"></scroll>
    <scroll title="最受关注图书｜非虚构类" type="hasCover" :items="reality"></scroll>
    <scroll title="豆瓣书店" type="hasCover" :items="travel"></scroll>
    <scroll title="发现好书" type="hasTags" :items="bookTags"></scroll>
   	<classify></classify>
  </div> 
</template>

<script type="ecmascript-6">
import { mapState } from 'vuex'
import Scroll from "../common/scroll"
import Classify from "../common/classify"
export default {
  name:"book",
  components: {
  	Scroll,
  	Classify
  },
  computed: {
    // Getting Vuex State from store/modules/movie
    ...mapState({
      novel: state => state.book.novel,
      reality: state => state.book.reality,
      travel: state => state.book.travel,
      bookTags: state => state.book.bookTags
    })
  },
  methods: {
    // Dispatching getMovie
    getBook: function () {
      this.$store.dispatch('getBook')
    }
  },
  created () {
    // Getting movies data on created
    this.getBook()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.content
  content()   
</style>
