<template>
    <div>
      <h1>View List Item</h1>
      <p>Name: {{ listItem.name }}</p>
      <p>Address: {{ listItem.address }}</p>
      <!-- Display other details of the list item -->
  
      <!-- Edit and Delete buttons -->
      <v-btn @click="editItem" color="primary">Edit</v-btn>
      <v-btn @click="deleteItem" color="secondary">Delete</v-btn>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        listItem: {}
      };
    },
    created() {
      this.fetchItem();
    },
    methods: {
      async fetchItem() {
        try {
          const response = await axios.get(`/api/items/${this.$route.params.id}`);
          this.listItem = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      editItem() {
        // Navigate to the edit page of the current item
        this.$router.push({ name: 'edit', params: { id: this.$route.params.id }});
      },
      async deleteItem() {
        try {
          await axios.delete(`/api/items/${this.$route.params.id}`);
          // Redirect to the list page after deletion
          const router = useRouter();
          router.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  