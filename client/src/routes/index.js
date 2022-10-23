import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/register',
    component: Register,
    name: 'Regiser',
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
    name: 'NotFound',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
