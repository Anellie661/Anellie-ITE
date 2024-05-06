<template>
  <div>
    <h1>View List Item</h1>
    <p>Name: {{ listItem.name }}</p>
    <!-- Other details -->
    <router-link :to="{ name: 'EditListItem', params: { id: listItem.id }}">Edit</router-link>
    <button @click="deleteItem">Delete</button>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter.vue'; // Import MyFooter component
import axios from 'axios'; // Import Axios for HTTP requests
import { useRouter } from 'vue-router'; // Import useRouter for navigation

export default {
  components: {
    MyFooter
  },
  data() {
    return {
      listItem: {}
    };
  },
  created() {
    this.fetchItem(); // Fetch item data on component creation
  },
  methods: {
    async fetchItem() {
      try {
        const response = await axios.get(`/api/items/${this.$route.params.id}`); // Fetch item data
        this.listItem = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem() {
      try {
        await axios.delete(`/api/items/${this.$route.params.id}`); // Delete item
        const router = useRouter();
        router.push('/'); // Redirect to home page
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
