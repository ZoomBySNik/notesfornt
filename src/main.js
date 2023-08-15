import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

// Set a base URL for Axios if needed (replace with your server URL)
axios.defaults.baseURL = 'https://localhost:7199/api';
// Добавление интерцептора для запросов
axios.interceptors.request.use(config => {
    // Получение токена из localStorage или из другого места
    const token = localStorage.getItem('token');

    // Добавление заголовка "Authorization" к конфигурации запроса
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});

// Используйте axios для ваших запросов
export default axios;

createApp(App).mount('#app');
