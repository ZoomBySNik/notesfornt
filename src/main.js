import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VueMasonryPlugin } from "vue-masonry";

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
const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify)
    .use(VueMasonryPlugin)
    .mount('#app')
