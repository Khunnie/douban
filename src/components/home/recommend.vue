<template>
  <div class="recommend">
  	<div class="item-wrapper border-bottom" v-for="item in items">
	  <router-link  to="/">
	  	<div class="item-left">
	  	  <div class="item-content">
	  	  	<h2>从前我们追求「性冷淡」，现在则是「莫兰迪」</h2>
	  	    <p>有一位意大利画家，终生定居在故乡博洛尼亚，画了一辈子瓶瓶罐罐，画出了一种永恒；他使用的色系饱和度很低，像是加上了一个灰色调、构成了艺术史上至为经典的「莫兰迪的尘埃」。如今更是由艺术到时尚都刮起莫兰迪风潮，彻底取代了前几年曾经备受追捧的「性冷淡」——也不完全确切，因为在某些说法里，莫兰迪也被认为是一种有颜色的「性冷淡」。 久久凝视莫兰迪的画作，似乎有一种蒙尘的质感。而事实也确实如此，据说莫兰迪本人的画室并不被允许打扫尘埃，他尊敬色彩、光线和静物的...</p>
	  	  </div>
	  	  <div class="author">by<span>陈苍苍</span></div>
	  	</div>
	  	<div class="item-img">
	  	  <img :src="item.image_hlarge">
	  	</div>
      </router-link> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
  	items: {
  	  type: Array,
  	  required: true
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .item-wrapper
  	padding:0.5rem 0
  	overflow:hidden
  	a
  	  display:flex
		.item-left
		  .item-content
		  	margin-bottom:0.2rem
			h2
			  color:#494949
			  margin-bottom:0.12rem
			  font-size:0.34rem
			  line-height:1.4
			p
			  color:#aaa
			  line-height: 1.5
			  font-size:0.24rem
			  overflow:hidden
			  display:-webkit-box
			  -webkit-box-orient:vertical
			  -webkit-line-clamp:3
		  .author
			color:#ccc
			font-size:0.24rem
		.item-img
		  width:1.72rem
		  height:1.72rem
		  margin-left:0.5rem
		  img
		  	width:100%
		  	height:100%
</style>
