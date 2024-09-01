<template>
    <div class="container mt-5">
      <h2>Profile</h2>
      <div v-if="isAuthenticated" class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">User Information</h5>
          <p class="card-text">Detail information</p>
        </div>
      </div>
      <div v-else class="alert alert-warning mt-3">
        <p>need to login to cheak your information</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuthticate } from '../router/authenticate' 
  
  const { isAuthenticated } = useAuthticate()
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  
  .card, .alert {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  
  h2 {
    font-weight: bold;
  }
  </style>