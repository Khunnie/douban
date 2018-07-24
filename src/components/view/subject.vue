<template>
  <div class="content">
    <template>
      <div class="card">
        <h1 class="title">{{subject.title}}</h1>
        <section class="subject-info">
          <div class="left" v-if="subject.rating">
            <rating :rating="subject.rating">
              <span slot="ratingsCount">{{subject.ratings_count}}人评价</span>
            </rating>
             <template v-if="subject.genres && subjectMeta">
              <p class="meta">{{subjectMeta}}</p>
              <a href="#" class="open-app">用App查看影人资料</a>
            </template>
            <template v-if="subject.author && subjectMeta">
              <p class="meta">{{subjectMeta}}</p>
              <a href="#" class="buy">在豆瓣购买</a>
            </template>
          </div>
          <div class="right">
            <a href="javascript:;">
              <img v-if="subject.images" :src="getImages(subject.images.large)" />
            </a>
          </div>
        </section>
        <div class="link" v-if="subject.author">
          <p>在哪买这本书？<span class="info">豆瓣阅读电子书 66.00元起</span></p>
        </div>
        <marking>
          <template slot="book" v-if="subject.author">
            <span>想读</span>
            <span>在读</span>>
            <span>读过</span>>
          </template>
          <template slot="movie" v-else>
            <span>想看</span>
            <span>看过</span>
          </template>
        </marking>
        <section class="channel-box">
          <h2 class="channel-title">所属频道</h2>
          <ul class="channel">
            <li v-for="item in subject.genres">
              <router-link to="/">{{item}}</router-link>
            </li>
          </ul>
        </section>
        <section class="subject-intro">
          <h2>{{subject.title}}的简介</h2>
          <p>
            <template v-if="summary && subject.summary">
              {{isExpand ? summary : subject.summary}}……
            </template>
            <a href="javascript:;" v-show="isExpand" v-on:click="expand">
              (展开)
            </a>
          </p>
        </section>
        <section class="photo">
          <h2>{{subject.title}}的图片</h2>
        </section>
      </div>
    </template>
    <loading v-show="showLoading"></loading>
  </div> 
</template>

<script type="ecmascript-6">
import { mapState, mapGetters } from 'vuex'
import Rating from '../common/rating'
import marking from '../common/marking'
import Channel from '../common/channel'
import Loading from '../common/Loading'
export default {
  name: "Subject",
  components: {
    Rating,
    marking,
    Loading
  },
  data () {
  	return {
      showLoading: true,
      isExpand: true
  	}
  },
  computed: {
    // Getting Vuex State from store/modules/subject
    ...mapState({
      subject: state => state.subject.subject,
      adImgUrl: state => state.subject.adImgUrl,
      questions: state => state.subject.questions,
      movieTags: state => state.movie.movieTags
    }),
    // Getting Filtered Vuex State
    ...mapGetters({
      subjectMeta: 'subjectMeta',
      summary: 'summary',
      genres: 'genres'
    })
  },
  methods: {
    // Toggle summary
    expand: function (event) {
      this.isExpand = false
    },
    getImages( _url ){
      if( _url !== undefined ){
        let _u = _url.substring( 8 );
        return 'https://images.weserv.nl/?url=' + _u;
      }
    }
  },
  created () {
    console.log("1")
    // Getting route params
    const id = this.$route.params.id
    const classify = this.$route.params.classify

    // Dispatching getSingleSubject
    console.log(id)
    this.$store.dispatch({
      type: 'getSingleSubject',
      id: id,
      classify: classify
    }).then(res => {
      // Success handle
      this.showLoading = false
    })
  }
}   
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .left >>> .rating
    font-size:0.3rem
  .content
    content()
    .card
      padding: 0 0.36rem;
      .title
        font-size:0.48rem
        line-height:0.64rem
        margin:0.6rem 0 0.1rem
      h2
        color:#aaa
        font-size:0.3rem
        margin-bottom:0.3rem
      section
        margin-bottom:0.6rem
      .subject-info
        overflow:hidden
        position:relative
        .left
          position:absolute
          padding-right:2rem
          .meta
            margin-top:0.3rem
            font-size:0.28rem
            color:#494949
            padding-right:0.48rem
            line-height:1.6
          .open-app
            margin-top:0.24rem
            display:block
            color:#42bd56
        .right
          width:2rem
          float:right
          img
            width:100%
      .marking
        display:flex
        margin-bottom:0.6rem
        span
          height:0.6rem
          line-height:0.6rem
          color:#ffb712
          border:1px solid #ffb712
          font-size:0.3rem
          text-align:center
          flex:1
          &:first-child
            margin-right:0.2rem
      .channel-box
        li
          background:#effaf0
          border:1px solid #42bd56
          margin-right:0.2rem
          border-radius:15px
          padding:0.1rem 0.2rem
          display:inline-block
      .subject-intro
        line-height:0.44rem
        p
          font-size:#494949
         
</style>
