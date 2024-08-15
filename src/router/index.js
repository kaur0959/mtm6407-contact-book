import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactDetailView from '../views/ContactDetailView.vue';

import ContactFormView from '../views/ContactFormView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactDetailView },
  { path: '/edit/:id', component: ContactFormView },
  { path: '/add', component: ContactFormView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
