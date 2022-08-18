import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueToast from '@meforma/vue-toaster'
const toastOptions = {
    position: 'top'
}

const horizon = createApp(App).use(VueToast, toastOptions).use(store).use(router).mount('#app')

export default horizon;
