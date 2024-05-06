<template>
  <div>
    <h1>Edit List</h1>
    <form @submit.prevent="handleSubmit">
      <input v-model="editedList.name" placeholder="Name" required>
      <!-- Add more form fields for editing -->

      <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="snackbarTimeout">
        {{ snackbarMessage }}
      </v-snackbar>

      <button type="submit">Submit</button>
      <button @click="clearForm">Clear</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      editedList: {
        // Initialize with existing list data fetched from API
      },
      snackbar: false,
      snackbarMessage: '',
      snackbarColor: '',
      snackbarTimeout: 2000
    };
  },
  created() {
    // Fetch list data to be edited
  },
  methods: {
    async handleSubmit() {
      try {
        this.snackbar = true;
        this.snackbarMessage = 'Loading...';

        // Make HTTP request to update list item
        await axios.put(`/api/lists/${this.$route.params.id}`, this.editedList);

        this.snackbarColor = 'success';
        this.snackbarMessage = 'List updated successfully';
      } catch (error) {
        this.snackbarColor = 'error';
        this.snackbarMessage = 'Failed to update list';

        console.error(error);
      }
    },
    clearForm() {
      // Clear form data
      Object.keys(this.editedList).forEach(key => {
        this.editedList[key] = '';
      });
    }
  }
};
</script>
