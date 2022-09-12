import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsCard from '@/components/NewsCard'
import NewsList from '@/components/NewsList'
import NewsFilter from '@/components/NewsFilter'
// const api = import.meta.env.VITE_NYT_API_KEY

//API
https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ldCEwHQGzuG5sYctiCjOOVJducjY1qSu

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/',
      name: 'NewsCard',
      component: NewsCard
    },
    {
      path: '/',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/',
      name: 'NewsFilter',
      component: NewsFilter
    }
  ]
})
