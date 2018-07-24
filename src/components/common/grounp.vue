<template>
  <div class="grounp-wrapper">
  	<div class="grounp-item">
  	  <h2>{{title}}</h2>
  	  <ul class="grounp-box">
  	  	<li class="border-bottom" v-for="item in items">
  	  	  <router-link :to="{name: 'subject',
          params: {classify: item.subtype ? item.subtype : 'book',
          id: item.id}}">
  	  	  	<img class="grounp-img" v-if="item.images.small" :src="getImages(item.images.small)">
            <div class="grounp-info">
              <span class="title">{{item.title}}</span>
              <rating v-if="item.rating" :rating="item.rating"></rating>
            </div>
  	  	  </router-link>
  	  	</li>
  	  </ul>
  	</div>
  </div>  
</template>

<script type="ecmascript-6">
import Rating from './rating'
export default {
  name: "Grounp",
  components:{
    Rating
  },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
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
.grounp-wrapper
  margin-top: 0.6rem
  .grounp-item
    h2
      color:#aaa
      line-height:0.3rem
    li
      padding:0.2rem 0
      a
        display:block
        overflow:hidden
        .grounp-img
          width:0.8rem
          float:left
        .grounp-info
          float:left
          padding-left:0.2rem
          .title
            font-size:0.38rem
            color:#494949
      
      
</style>