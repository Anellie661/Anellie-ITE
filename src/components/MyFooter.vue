<template>
  <v-footer app color="primary">
    <span class="footer-text">&copy; 2024 List_Nest_Is_The_Best</span>
  </v-footer>
</template>

<script>
import { VFooter } from 'vuetify/lib/components'; // Corrected import

export default {
  components: {
    VFooter // Corrected component name
  }
};
</script>

<style scoped>
.footer-text {
  color: #ffffff; /* White text color */
  font-size: 14px; /* Adjust font size */
  padding: 10px; /* Add some padding */
  text-align: center; /* Center align text */
}
</style>
