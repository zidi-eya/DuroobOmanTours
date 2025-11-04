import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import global styles (e.g. Bootstrap or Tailwind)
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import '@fortawesome/fontawesome-free/css/all.min.css'

import '../public/assets/css/style.css'

createApp(App).use(router).mount('#app')
