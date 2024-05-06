// main.js
import 'vuetify/styles';
import { createApp } from 'vue';
import App from './App.vue'; // Adjust the path to your main app component
import router from './router'; // Import your router instance

const app = createApp(App);
app.use(router); // Register the router instance
app.mount('#app'); // Mount your app to an element (e.g., with id="app")



