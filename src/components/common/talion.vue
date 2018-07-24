<template>
  <div class="talion">
  	<div class="header-bar border-bottom">
  	  <span class="close" @click="closeClick">关闭</span>
  	  <form class="search" onsubmit="return false">
  	  	<input type="search" name="" 
  	  		v-model.trim.lazy="queryStr"
  	  		 @keyup.enter="goSearch()">
  	  </form>
  	</div>
  	<ul class="has-header">
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(35, 132, 232);">电影</strong>
            <span>影院热映</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(230, 70, 126);">同城</strong>
            <span>周末活动</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">阅读</strong>
            <span>电子书</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(225, 100, 77);">东西</strong>
            <span>心爱之物</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(122, 106, 219);">电视</strong>
            <span>正在热播</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(42, 184, 204);">小组</strong>
            <span>志趣相投</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(87, 116, 197);">游戏</strong>
            <span>虚拟世界</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(64, 207, 169);">FM</strong>
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a href="#" target="_blank">
            <strong style="color: rgb(159, 120, 96);">图书</strong>
            <span>畅销排行</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(89, 108, 221);">应用</strong>
            <span>玩手机</span>
          </a>
          <a href="#" target="_blank">
            <strong style="color: rgb(66, 189, 86);">市集</strong>
            <span>购买原创</span>
          </a>
        </div>
      </li>
    </ul>
  </div> 
</template>

<script type="ecmascript-6">
export default {
  name: "Talion",
  data () {
  	return {
  	  queryStr: ""
  	}
  },
  methods: {
  	closeClick () {
  	  this.$emit('close')
  	},
  	goSearch () {
  	  this.$emit('close')
  	  this.$router.push({
  	  	name: 'Search',
  	  	params: {
  	  	  q:this.queryStr
  	  	}
  	  })
  	}
  }
}  
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.talion
  position:fixed
  left:0
  top:0 
  bottom:0
  right:0 
  background-color:#fff
  z-index:3
  .header-bar
  	header()
  	.close
  	  color:#42bd56
  	  font-size:0.32rem
  	.search
  	  border:1px solid #f3f3f3
  	  flex:1
  	  margin-left:0.24rem
  	  input
  	  	box-sizing:border-box
  	  	background:url('../../assets/images/serarch.png') no-repeat 50% #f3f3f3
  	  	background-size:7%
  	  	width:100%
  	  	height:0.62rem
  	  	border-radius:3px 	  
  .has-header 
  	padding-top:0.5rem
  	margin-top:0.94rem
  	display:flex
  	justify-content: space-around
  	li
  	  width:33.33%
  	  div
  	  	position:relative
  	  	left:50%
  	  	top:0
  	  	a
  	  	  position:relative
  	  	  left:-50%
  	  	  top:0
  	  	  margin-bottom:0.5rem
  	  	  text-align:center
  	  	  display:block
  	  	  strong
  	  	  	display:block
  	  	  	font-size:0.48rem
  	  	  	font-weight:400
  	  	  	line-height:0.56rem
  	  	  span
  	  	  	display:block
  	  	  	color:#999
  	  	  	height:0.34rem
  	  	  	line-height:0.34rem
  	  	  	font-size:0.24rem
  	  	
</style>
