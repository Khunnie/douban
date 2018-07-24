<template>
  <div class="content">
    <div class="page">
    	<home-nav ></home-nav>
    	<recommend :items="events"></recommend>
  <!--     <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
        <loading slot="spinner"></loading>
      </infinite-loading> -->
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import HomeNav from './Nav'
import Recommend from './recommend'
import Loading from '../common/Loading'
export default {
  name: 'Home',
  components: {
    HomeNav,
    Recommend,
    InfiniteLoading,
    Loading
  },
  computed: {
     ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    // Using vue-infinite-loading
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    // Dispatching Actions
    ...mapActions([
      'loadMore'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.content
  content()
  .page
  	margin:0 0.36rem
</style>
