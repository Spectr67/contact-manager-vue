import { createApp } from 'vue'
import App from './App.vue'
import script from './script.js'

import './style.css'

createApp(App).mount('#app')

document.addEventListener('DOMContentLoaded', script)
