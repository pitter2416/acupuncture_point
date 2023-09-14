import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import ManModelPage from '../views/ManModelPage.vue'
// import XBotModelPage from '../views/XBotModelPage.vue'
// import ObjModelPage from '../views/ObjModelPage.vue'
// import TestModelPage from '../views/TestModelPage.vue'

const routes = [
  // { path: '/', component: ManModelPage},
  // { path: '/', component: XBotModelPage},
  // { path: '/man', component: ManModelPage},
  { path: '/', component: ManModelPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router