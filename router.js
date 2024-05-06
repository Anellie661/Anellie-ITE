// router.js

import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; // Import the routes configuration from routes.js

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
