<template>
  <div class="nav-list">
    <ul>
      <li>
        <router-link to="/">影院热映</router-link>
      </li>
      <li>
        <router-link to="/">租房找室友</router-link>
      </li>
      <li>
        <router-link to="/">豆瓣时间</router-link>
      </li>
      <li>
        <router-link to="/">使用豆瓣APP</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.nav-list
  margin-top:0.4rem
  padding-top:0.12rem
  ul
  	overflow:hidden
	li
	  float:left
	  width:50%
	  box-sizing:border-box
	  font-size:0.3rem
	  padding:0.06rem
	  a
	  	background-color:#f6f6f6
	  	color:#494949
	  	display:block
	  	text-align:center
	  	line-height:0.4rem
	  	padding:0.24rem 0
	  	border-radius:0.04rem
	  	ellipsis() 	  
</style>
