<template>
  <div>
    <div class="header-bar border-bottom">
      <h1 class="title">
        <router-link to="/">
          豆瓣
        </router-link>
      </h1>
      <ul class="nav">
        <li>
          <router-link style="color: #2384E8" to="/movie">
            电影
          </router-link>
        </li>
        <li>
          <router-link style="color: #9F7860" to="/book">
            图书
          </router-link>
        </li>
        <li>
          <router-link style="color: #E4A813" to="/">
            广播
          </router-link>
        </li>
        <li>
          <router-link style="color: #2AB8CC" to="/">
            小组
          </router-link>
        </li>
      </ul>
      <span class="talion" @click="handleClick"></span>
    </div>
    <talion v-show="ShowMenu" @close="handleClose"></talion>
  </div>

</template>

<script type="ecmascript-6">
import Talion from './talion'
export default {
  name:"HeaderFix",
  data () {
    return {
      ShowMenu: false
    }
  },
  components: {
    Talion
  },
  methods: {
    handleClick () {
      this.ShowMenu = true
    },
    handleClose () {
      this.ShowMenu = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.header-bar
  header()
  .title 
    width:0.92rem
    height: 0.55rem
    font-size: 0
    line-height:0.55rem
    color: #00b600
    word-break: break-all
    background: url('../../assets/images/logo_db.png') no-repeat
    background-size: contain
    a 
      display: block
  ul 
    display: flex
    flex: 1;
    justify-content: flex-end
  li
    display: inline-block
    font-size: 0.3rem
    margin-right: 0.38rem
  .talion
    font-size: 0
    background: url('../../assets/images/bn_srh_1.png') no-repeat
    background-size: cover
    width: 0.5rem
    height:0.38rem
    margin-top: 0.08rem
</style>
