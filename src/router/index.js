import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/IndexPage'
import FavoritesPage from '@/pages/FavoritesPage'
import BreedPage from '../pages/BreedPage'
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '/:breed',
      name: 'breeds',
      props: true,
      component: BreedPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
