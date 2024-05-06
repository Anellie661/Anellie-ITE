import { createRouter, createWebHistory } from 'vue-router';
import CreateListItem from '@/components/CreateListItem.vue';
import ViewListItem from '@/components/ViewListItem.vue';
import EditListItem from '@/components/EditListItem.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/create' // Redirect to the create page by default
    },
    {
      path: '/create',
      name: 'CreateListItem',
      component: CreateListItem
    },
    {
      path: '/view/:id',
      name: 'ViewListItem',
      component: ViewListItem,
      props: true // Pass route params as props to the component
    },
    {
      path: '/edit/:id',
      name: 'EditListItem',
      component: EditListItem,
      props: true // Pass route params as props to the component
    }
  ]
});

export default router;
