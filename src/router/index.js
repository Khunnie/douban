import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import movie from '@/components/view/movie'
import book from '@/components/view/book'
import Search from '@/components/view/Search'
import Subject from '@/components/view/subject'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/movie',
      name: 'movie',
      component: movie
    }, {
      path: '/book',
      name: 'book',
      component: book
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }, {
      path:'/:classify/subject/:id',
      name:'subject',
      component: Subject
    }

  ]
})
