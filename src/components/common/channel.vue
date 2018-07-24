<template>
  <div class="channel">
   	<div class="title">
   	  <h2>{{title}}</h2>
   	  <router-link to="/">更多</router-link>
   	</div>
   	<div class="wrapper">
      <ul class="movie-wrapper">
        <li v-for="item in items">
          <a :href="item.href" v-if="!item.line">{{item.title}}</a>
        </li>
      </ul>
   	</div>  	
  </div> 
</template>

<script type="ecmascript-6">

export default {
  name: "Channel",
  props: ['title', 'items'],
  methods:{
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 8 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
  }
}    
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.channel
  margin-top:0.24rem
  .title
  	height:0.64rem
  	line-height:0.64rem
  	padding:0 0.4rem
  	h2
  	  display:inline-block
  	  font-size:0.32rem
  	a
  	  float:right
  	  color:#42bd56
  .wrapper
  	box-sizing:border-box
  	.row-item
  	  padding:0.3rem 0.4rem
  	  overflow-x:auto
  	  white-space:nowrap
  	  margin-left:-0.16rem
  	  .item
  	  	display:inline-block
  	  	width:2rem
  	  	margin-left:0.16rem
  	  	img
  	  	  width:100%
  	  	  height:2.84rem
  	  	.name
  	  	  ellipsis()
  	  	  font-size:0.3rem
  	  	  color:#111
  	  	  margin-top:0.2rem
  	  	  text-align:center  
    .movie-wrapper
      padding:0.3rem 0.4rem
      overflow-x:auto
      white-space:nowrap
      li
        display:inline-block
        margin:0  0.16rem 0.16rem 0
        font-size:0.32rem
        a
          display:inline-block
          height:1rem
          line-height:1rem
          border-width:1px
          border-style:solid
          padding:0 0.5rem
          border-radius:4px
      :empty
        width:100%
        height:0rem
        display:block
</style>