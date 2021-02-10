import { createApp } from 'vue'
import * as definitions from './index.d'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import { setVH } from './helpers/css'

import './assets/css/tailwind.css'
import './assets/css/gradients.css'
import router from './router'

// Css mobile viewport hack https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
setVH()
window.addEventListener('resize', setVH)

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
