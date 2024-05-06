<template>
  <div id="app">
    <header> </header>
    <main>
      <router-view></router-view>  </main>
    <footer> </footer>
  </div>
</template>

<script>
// Import Vue and Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import CreateList from '@/views/CreateList.vue';
import ViewList from '@/views/ViewList.vue';
import EditList from '@/views/EditList.vue';

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/create', name: 'CreateList', component: CreateList },
    { path: '/view/:id', name: 'ViewList', component: ViewList, props: true },
    { path: '/edit/:id', name: 'EditList', component: EditList, props: true }
  ]
});

export default router;
</script>

<!-- Add your CSS styles here if needed -->
<style>
/* Add your CSS styles here */
</style>