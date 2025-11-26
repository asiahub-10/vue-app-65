import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.ts'

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// import './assets/custom.css'

createApp(App).use(router).mount('#app')
