<template>
  <div class="rating" v-if="rating">
  	<template v-if="full === 0">
  	  <span class="rating-text">暂无评分</span>
  	</template>
   	<template v-else>
   	  <template v-for="n in full">
   	  	<span class="start start-full"></span>
   	  </template>
   	  <template v-for="n in half">
   	  	<span class="start start-half"></span>
   	  </template>
   	  <template v-for="n in grey">
   	  	<span class="start start-grey"></span>
   	  </template>
   	  <span class="average">{{rating.average}}</span>
   	</template>
    <slot name="ratingsCount"></slot>
  </div> 
</template>

<script type="ecmascript-6">
export default {
  name: "Rating",
  props: {
    rating: {
      type: Object,
      required: true
    }
  },
  data () {
  	return {
  	  full: 0,
  	  half: 0,
  	  grey:0
  	}
  },
  created () {
  	let average = this.rating.average
  	this.full = parseInt(average/2)
  	this.half = average % 2 === 0 ? 0 : 1
  	this.grey = 5 - this.full - this.half
  }
} 
</script>

<style lang="stylus" scoped>
.rating
  color:#aaa
  line-height:0.375rem
  font-size:0.24rem
  margin-top:0.1rem
  .rating-text
  	text-align:center
  .start
  	width:0.2rem
  	height:0.2rem
  	margin-right:1px
  	display:inline-block
  	background-size:contain
  .start-full
  	background-image:url('../../assets/images/full.png')
  .start-half
  	background-image:url('../../assets/images/half.png')
  .start-grey
  	background-image:url('../../assets/images/grey.png')
</style>