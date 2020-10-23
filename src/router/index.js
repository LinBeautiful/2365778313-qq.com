import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Ask from '../views/Ask.vue'
import Tree from '../views/Tree.vue'
import Zoo from '../views/Zoo.vue'
import OX from '../views/OX.vue'
import Pic from '../views/Pic.vue'
import Top from '../views/Top.vue'
import Zhoubian from '../views/Zhoubian.vue'
import Pond from '../views/Pond.vue'
import Mlist from '../views/Mlist.vue'
import Zoos from '../views/Zoos.vue'
import Abouts from '../views/Abouts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/About',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/About',
        name: 'About',
        component: About,
      children:[
        {
          path:'Abouts/:id',
          name:'Abouts',
          component:Abouts
        }
      ]
      },
      {
        path:'/Ask',
        name:'Ask',
        component: Ask,
      },
      {
        path:'/Tree',
        name:'Tree',
        component: Tree,
      },
      {
        path:'/Zoo',
        name:'Zoo',
        component: Zoo,
        children:[
          {
            path:'Zoos/:id',
            name:'Zoos',
            component: Zoos,
          }
        ]
      },
      {
        path:'/OX',
        name:'OX',
        component: OX,
      },
      {
        path:'/Pic',
        name:'Pic',
        component: Pic,
      },
      {
        path:'/Top',
        name:'Top',
        component: Top,
      },
      {
        path:'/Zhoubian',
        name:'Zhoubian',
        component: Zhoubian,
      },
      {
        path:'/Pond',
        name:'Pond',
        component: Pond,
      },
      {
        path:'/Mlist',
        name:'Mlist',
        component: Mlist,
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
