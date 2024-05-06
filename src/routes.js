// routes.js

import EditListItem from './components/EditListItem.vue';
import ViewListItem from './components/ViewListItem.vue';

const routes = [
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditListItem,
    props: true, // Pass route params as props to the component
  },
  {
    path: '/view/:id',
    name: 'view',
    component: ViewListItem,
    props: true, // Pass route params as props to the component
  },
  // Add more routes if needed
];

export default routes;
