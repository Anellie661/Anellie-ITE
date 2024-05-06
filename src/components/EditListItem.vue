<template>
  <div>
    <h1>Edit List Item</h1>
    <v-form @submit.prevent="handleSubmit">
      <!-- Form fields for editing the list item -->
      <v-text-field v-model="editedList.name" label="Name" required></v-text-field>
      <!-- Add more form fields as needed -->

      <!-- Submit and Clear buttons -->
      <v-btn type="submit" color="primary">Submit</v-btn>
      <v-btn @click="clearForm" color="secondary">Clear</v-btn>
    </v-form>
    <v-progress-linear v-if="loading" indeterminate color="primary"></v-progress-linear>
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="snackbarTimeout">
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      editedList: {},
      loading: false,
      snackbar: false,
      snackbarMessage: '',
      snackbarColor: '',
      snackbarTimeout: 2000
    };
  },
  created() {
    this.fetchItem();
  },
  methods: {
    async fetchItem() {
      try {
        const response = await axios.get(`/api/items/${this.$route.params.id}`);
        this.editedList = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleSubmit() {
      try {
        this.loading = true;
        this.snackbar = true;
        this.snackbarMessage = 'Loading...';
        await axios.put(`/api/items/${this.$route.params.id}`, this.editedList);
        this.snackbarColor = 'success';
        this.snackbarMessage = 'List updated successfully';
      } catch (error) {
        this.snackbarColor = 'error';
        this.snackbarMessage = 'Failed to update list';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    clearForm() {
      // Clear form data
      this.editedList = {};
    }
  }
};
</script>
