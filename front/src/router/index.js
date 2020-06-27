import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import(/* webpackChunkName: "forgot" */ '../views/Forgot.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/inbox',
    name: 'Inbox',
    component: () => import(/* webpackChunkName: "inbox" */ '../views/Inbox.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  },
  {
    path: '/petSignup',
    name: 'PetSignup',
    component: () => import(/* webpackChunkName: "petSignup" */ '../views/PetSignup.vue')
  },
  {
    path: '/petProfile',
    name: 'PetProfile',
    component: () => import(/* webpackChunkName: "petProfile" */ '../views/PetProfile.vue')
  },
  {
    path: '/editProfile',
    name: 'EditProfile',
    component: () => import(/* webpackChunkName: "editProfile" */ '../views/EditProfile.vue')
  },
  {
    path: '/reportBugs',
    name: 'ReportBugs',
    component: () => import(/* webpackChunkName: "reportBugs" */ '../views/ReportBugs.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  },
  {
    path: '/walk',
    name: 'Walk',
    component: () => import(/* webpackChunkName: "walk" */ '../views/Walk.vue')
  },
  {
    path: '/walker',
    name: 'Walker',
    component: () => import(/* webpackChunkName: "walker" */ '../views/Walker.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router