import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.ts'

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App)
.use(router)
.mount('#app')
