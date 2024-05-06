<template>
  <div>
    <v-btn @click="fetchData">Fetch Data</v-btn> <!-- Example button to trigger data fetching -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="snackbarTimeout"
      top
    >
      {{ snackbarMessage }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'; // Import Axios for making HTTP requests

export default {
  data() {
    return {
      loading: false, // Flag to indicate if a request is loading
      data: null, // Variable to store the fetched data
      error: null, // Variable to store any error messages
      snackbar: false, // Snackbar visibility flag
      snackbarMessage: '', // Snackbar message
      snackbarColor: '', // Snackbar color
      snackbarTimeout: 2000, // Snackbar timeout duration in milliseconds
    };
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true; // Set loading state
        const response = await axios.get('/api/data'); // Make the HTTP GET request
        this.data = response.data; // Process response data
        this.loading = false; // Clear loading state
        this.showSnackbar('Data fetched successfully', 'success'); // Show success snackbar
      } catch (error) {
        this.error = error.message; // Handle error
        this.loading = false; // Clear loading state
        this.showSnackbar('Failed to fetch data', 'error'); // Show error snackbar
      }
    },
    showSnackbar(message, type) {
      this.snackbarMessage = message;
      this.snackbarColor = type === 'success' ? 'green' : 'red';
      this.snackbar = true;
    }
  }
};
</script>
