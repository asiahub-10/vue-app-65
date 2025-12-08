import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.ts'
import { createPinia } from 'pinia';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const pinia = createPinia();

createApp(App)
.use(pinia)
.use(router)
.mount('#app')
