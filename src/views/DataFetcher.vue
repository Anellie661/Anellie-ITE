<template>
    <div>
      <v-btn @click="fetchData">Fetch Data</v-btn>
      <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="snackbarTimeout" top>
        {{ snackbarMessage }}
      </v-snackbar>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        loading: false,
        data: null,
        error: null,
        snackbar: false,
        snackbarMessage: '',
        snackbarColor: '',
        snackbarTimeout: 2000
      };
    },
    methods: {
      async fetchData() {
        try {
          this.loading = true;
          const response = await axios.get('/api/data');
          this.data = response.data;
          this.loading = false;
          this.showSnackbar('Data fetched successfully', 'success');
        } catch (error) {
          this.error = error.message;
          this.loading = false;
          this.showSnackbar('Failed to fetch data', 'error');
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
  
  <style scoped>
  /* Scoped styles for DataFetcher.vue */
  </style>
  