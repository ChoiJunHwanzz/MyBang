import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../views/MainPage.vue'
import Mypage from '@/views/member/Mypage'
import MemberRegisterPage from '@/views/member/MemberRegisterPage'
import MemberLoginPage from '@/views/member/MemberLoginPage'
import FindUserId from '@/components/member/FindUserId'
import FindUserPw from '@/components/member/FindUserPw'
import ModifyPassword from '@/components/member/ModifyPassword'
import BrokerRegister from '@/views/BrokerRegister'
import HostPage from '@/views/HostPage'


import ProductRegisterPage from '@/views/product/ProductRegisterPage'
import ProductListPage from '@/views/product/ProductListPage'
import ProductReadPage from '@/views/product/ProductReadPage'
import ProductModifyPage from '@/views/product/ProductModifyPage'

import VillaRegisterPage from '@/views/villa/VillaRegisterPage'
import VillaReadPage from '@/views/villa/VillaReadPage'

// Map
import Villa from '@/views/house/Villa'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
  },
  {
    path: '/member/create',
    name: 'MemberRegisterPage',
    components: {
      default: MemberRegisterPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/login',
    name: 'MemberLoginPage',
    components: {
      default: MemberLoginPage
    }
  },
  {
    path: '/findUserId',
    name: 'FindUserId',
    component: FindUserId
  },
  {
    path: '/findUserPw',
    name: 'FindUserPw',
    component: FindUserPw
  },
  {
    path: '/modifyPassword',
    name: 'ModifyPassword',
    component: ModifyPassword
  },
  {
    path: '/registerInfo',
    name: 'BrokerRegister',
    component: BrokerRegister
  },
  {
    path: '/HostPage',
    name: 'HostPage',
    component: HostPage
  },
  {
    path: '/product/register',
    name: 'ProductRegisterPage',
    components: {
      default: ProductRegisterPage
    }
  },
  {
    path: '/product/list',
    name: 'ProductListPage',
    component: ProductListPage
  },
  {
    path: '/product/:productNo',
    name: 'ProductReadPage',
    components: {
      default: ProductReadPage
    },
    props: {
      default: true
    }
  },
  {
    path: '/product/:productNo/edit',
    name: 'ProductModifyPage',
    components: {
      default: ProductModifyPage
    },
    props: {
      default: true
    },
  },
  {
    path: '/villa',
    name: 'Villa',
    component: Villa
  },
  {
    path: '/villa/register',
    name: 'VillaRegisterPage',
    component: VillaRegisterPage
  },
  {
    path: '/villa/:villaNo',
    name: 'VillaReadPage',
    components: {
      default: VillaReadPage
    },
    props: {
      default: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
