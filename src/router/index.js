import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
      // {
      //   path: '/workbench',
      //   name: 'workbench',
      //   component: () => import('../views/workBench.vue')
      // },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/404',
  //   name: '404',
  //   component: (resolve) => require(['../views/notfound'], resolve),
  //   meta: {
  //     title: '页面不存在',
  //     auth: false
  //   }
  // },
  //访问的路径不存在时，重定向到首页。
  // {
  //   path: '*',
  //   redirect: '/index'
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// routes.beforeEach((to, from, next) => {
//     console.log(to)
//     if (to.meta.auth) {
//         if (localStorage.token) {
//             next();
//         } else {
//             next({
//                 path: '/',
//                 query: {redirect: to.fullPath}
//             })
//         }
//     } else {
//         next();
//     }
// });

export default router
