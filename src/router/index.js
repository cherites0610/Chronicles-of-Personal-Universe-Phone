import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import checkList from '@/views/checkList.vue'
import account from '@/views/account.vue'
import diary from '@/views/diary.vue'
import wordToUniverse from '@/views/wordToUniverse.vue'
import group from '@/views/group.vue'

const routes = [
  {
    path: '/  ',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/diary',
    name: 'diary',
    component: diary
  },
  {
    path: '/checkList',
    name: 'checkList',
    component: checkList
  },
  {
    path: '/wordToUniverse',
    name: 'wordToUniverse',
    component: wordToUniverse
  },
  {
    path: '/group',
    name: 'group',
    component: group
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
