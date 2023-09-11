import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

import ManModelPage from '../views/ManModelPage.vue'

const routes = [
  { path: '/', component: ManModelPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router