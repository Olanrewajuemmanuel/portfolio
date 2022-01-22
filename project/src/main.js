import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap CSS and support
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';

createApp(App).use(router).mount('#app')
