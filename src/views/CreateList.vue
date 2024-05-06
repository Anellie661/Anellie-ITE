<template>
  <div>
    <v-app-bar app></v-app-bar>
    <h1>Create New List Item</h1>
    <v-form @submit.prevent="handleSubmit" style="display: block !important"> 
      <v-container>
        <v-row> 
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.name" label="Name" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.address" label="Address"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.telephone" label="Telephone"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.occupation" label="Occupation"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.nis" label="NIS"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.gra" label="GRA"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.salary" label="Salary"></v-text-field>
          </v-col>
          <!-- Add other form fields as needed -->
        </v-row>
      </v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="100">
          <v-btn size="x-large" @click="submitForm">Submit</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn size="x-large" @click="clearForm">Clear</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <v-footer app></v-footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        address: '',
        telephone: '',
        occupation: '',
        nis: '',
        gra: '',
        salary: ''
      },
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('/api/items', this.formData);
        this.successMessage = 'Item created successfully';
        this.errorMessage = '';
        this.$router.push({ name: 'ViewListItem', params: { id: response.data.id }});
      } catch (error) {
        this.successMessage = '';
        this.errorMessage = error.response.data.message;
      }
    },
    clearForm() {
      Object.keys(this.formData).forEach(key => {
        this.formData[key] = '';
      });
    }
  }
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
