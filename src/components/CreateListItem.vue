<template>
    <div>
    <v-app-bar app></v-app-bar>
    <h1>Create New List Item</h1>
    <v-form @submit.prevent="handleSubmit" style="display: block !important">
    <v-container>
        . 
    <v-row>
    <v-col cols="12" md="6">
    <v-text-field v-model="formData.id" label="ID" required></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
    <v-text-field v-model="formData.name" label="Name" required></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
    <v-text-field v-model="formData.address" label="Address"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
    <v-text-field v-model="formData.telephoneNumber" label="Telephone Number" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
    <v-text-field v-model="formData.nis" label="NIS" required pattern="[A-Z]{2}-[0-9]{7}"></v-text-field>
    </v-col>
     <v-col cols="12" md="6">
    <v-text-field v-model="formData.gra" label="GRA"></v-text-field>
    </v-col>
    <v-col cols="12" md="6">
    <v-text-field v-model="formData.salary" label="Salary" required type="number"></v-text-field>
     </v-col>
    </v-row>
    <v-row align="center" justify="center">
    <v-col class="text-center" cols="20">
    <v-btn size="x-large" @click="handleSubmit">Submit</v-btn>
    </v-col>
     
    <v-col cols="auto">
    <v-btn size="x-large" @click="clearForm">Clear</v-btn>
    </v-col>
     </v-row>
    </v-container>
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
    id: '',
    name: '',
    address: '',
    telephoneNumber: '',
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
    this.clearForm();
    // Redirect to the view page of the created item
    this.$router.push({ name: 'view', params: { id: response.data.id }});
    } catch (error) {
    this.successMessage = '';
    this.errorMessage = error.response.data.message || 'Something went wrong!'; // Handle potential server errors
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