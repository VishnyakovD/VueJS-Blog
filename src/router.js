import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/home-page.vue'
import About from './views/about-page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/posts',
      name: 'posts',
      //alias: '/posts-*',
      component: ()=>import("./views/home-page.vue"),
      children:[
        {
          path:':id',
          component:()=>import("./views/post-page.vue") 
      }
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
