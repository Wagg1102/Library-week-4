<template>
    <div class="container d-flex justify-content-center" style="height: 100vh; padding-top: 50px;">
      <div class="w-50">
        <h1 class="text-center mb-4">Add Book</h1>
        <form @submit.prevent="addBook">
          <div class="mb-3">
            <label for="isbn" class="form-label">ISBN:</label>
            <input type="text" v-model="isbn" id="isbn" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input type="text" v-model="name" id="name" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Add Book</button>
        </form>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import db from '../firebase/init.js'
  import { collection, addDoc } from 'firebase/firestore';
  const isbn = ref('');
  const name = ref('');
  
  const addBook = async() => {
    try{
    if (isNaN(Number(isbn.value)))
  {
    alert('ISBN must be a valid number')
    return;
  }
  await addDoc(collection(db, 'books'),{
    isbn: Number(isbn.value),
    name: name.value
  })
  isbn.value = ''
  name.value = ''
  alert("Add book succeed!")
  }catch (error) {console.error('Adding book faild' + error)}
    
  }
  </script>