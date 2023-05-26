import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/Home.vue'),
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
