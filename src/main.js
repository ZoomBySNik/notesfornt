import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Set a base URL for Axios if needed (replace with your server URL)
axios.defaults.baseURL = 'https://localhost:7199/api';

createApp(App).mount('#app');
