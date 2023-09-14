import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import ManModelPage from '../views/ManModelPage.vue'
import XBotModelPage from '../views/XBotModelPage.vue'
import ObjModelPage from '../views/ObjModelPage.vue'

const routes = [
  // { path: '/', component: ManModelPage},
  // { path: '/', component: XBotModelPage},
  // { path: '/man', component: ManModelPage},
  { path: '/', component: ObjModelPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router