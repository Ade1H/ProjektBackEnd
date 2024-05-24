<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item._id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // Make a GET request to fetch items from the backend
    axios.get('http://localhost:3000/api/items')
      .then(response => {
        this.items = response.data;
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }
};
</script>
