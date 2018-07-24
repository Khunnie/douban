<template>
  <div class="content">
   	<div class="search-hd border-bottom">
   	  <form class="search-form">
   	  	<input type="text" 
   	  		   name=""
   	  		   class="search-input" 
   	  		   placeholder="搜索 书 / 影 / 音 / 标签"
   	  		   v-model.lazy="queryStr"
   	  	>
   	  	<button class="search-btn" @click="query">搜索</button>
   	  </form>
   	</div>
   	<div class="search-body" v-if="queryStr">
   	  <grounp title="影视" :items="queryRes_movie"></grounp>
   	</div>
  </div> 
</template>

<script type="ecmascript-6">
import { mapState } from 'vuex'
import Grounp from '../common/grounp'
export default {
  name: "Search",
  data () {
  	return {
  	  queryStr: ""
  	}
  },
  components: {
  	Grounp
  },
  computed: {
    ...mapState({
      queryRes_movie: state => state.search.queryRes_movie
    })
  },
  methods: {
    query: function (){
      if (this.queryStr) {
        this.$store.dispatch({
          type: 'query',
          queryStr: this.queryStr
        })
      }
    }
  },
  created: function () {
    const q = this.$route.params.q
    if (q) {
      this.queryStr = q
      this.query()
    }
  }
}   
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .content
    content()
    .search-hd
   	  padding:0.14rem 0.4rem
   	  font-size:0.26rem
   	  .search-input
   	  	width:85%
   	  	height:0.6rem
   	  	box-sizing:border-box
   	  	background:#f5f5f5
   	  	border-radius:4px
   	  	padding:0.1rem 0.16rem
   	  .search-btn
   	  	height:0.6rem
   	  	padding-left:5%
   	  	line-height:0.6rem
   	  	float:right
   	  	background:#fff 
   	  	color:#333
    .search-body
      padding:0 0.4rem 
   
</style>
