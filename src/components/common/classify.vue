<template>
  <div class="classify">
  	<h2>分类浏览</h2>
  	<div class="content">
  	  <ul>
  	  	<li v-for="item in items">
  	  	  <a :href="baseUri + item.href">{{item.title}}<span class="next"></span></a>
  	  	</li>
  	  </ul>
  	</div>
  </div>
</template>

<script type="ecmascript-6">
export default {
  name: 'Classify',
  data () {
  	return {
  	  baseUri: 'https://m.douban.com/',
  	  items: [
  	  	{
          title: '经典',
          href: 'movie/classic'
        },
        {
          title: '冷门佳片',
          href: 'movie/underrated'
        },
        {
          title: '豆瓣高分',
          href: 'movie/doubantop'
        },
        {
          title: '动作',
          href: 'movie/action'
        },
        {
          title: '喜剧',
          href: 'movie/comedy'
        },
        {
          title: '爱情',
          href: 'movie/love'
        },
        {
          title: '悬疑',
          href: 'movie/mystery'
        },
        {
          title: '恐怖',
          href: 'movie/horror'
        },
        {
          title: '科幻',
          href: 'movie/scifi'
        },
        {
          title: '治愈',
          href: 'movie/sweet'
        },
        {
          title: '文艺',
          href: 'movie/artfilm'
        },
        {
          title: '成长',
          href: 'movie/youth'
        },
        {
          title: '动画',
          href: 'movie/animation'
        },
        {
          title: '华语',
          href: 'movie/chinese'
        },
        {
          title: '欧美',
          href: 'movie/western'
        },
        {
          title: '韩国',
          href: 'movie/korean'
        },
        {
          title: '日本',
          href: 'movie/japanese'
        }
  	  ]
  	}
  }
}
</script>

<style lang="stylus" scoped>
.classify	
  h2  
    height: 0.64rem
    line-height: 0.64rem
    padding: 0 0.4rem
    font-size:0.32rem 
  .content
  	margin-left:0.4rem
  	overflow:hidden
  	ul
  	  padding:0.36rem 0 0.6rem
  	  li
  	  	border:0.02rem solid #eee
  	  	border-left:none
  	  	margin-top:-0.02rem
  	  	height:0.88rem
  	  	line-height:0.88rem
  	  	box-sizing:border-box
  	  	width:50%
  	  	float:left
  	  	padding-right:0.36rem
  	  	font-size:0.32rem
  	  	a
  	  	  width:100%
  	  	  height:100%
  	  	  display:inline-block
  	  	  color:#42bd56
  	  	  .next
  	  	  	float:right
  	  	  	display:inline-block
  	  	  	border-right:0.02rem solid #ccc
  	  	  	border-bottom:0.02rem solid #ccc
  	  	  	width:0.22rem
  	  	  	height:0.22rem
  	  	  	transform: rotate(-45deg)
  	  	  	margin-top:0.32rem
  	  :nth-child(even)
  	  	border-right:none
  	  	padding-left:0.4rem
</style>