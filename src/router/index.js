import { createRouter, createWebHistory } from 'vue-router';

import ManModelPage from '../views/ManModelPage.vue'

const routes = [
  { path: '/', component: ManModelPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router