import { createApp } from 'vue'
import VueFinalModal from 'vue-final-modal'
import App from './App.vue'
import router from './router'

createApp(App)
.use(router)
.use(VueFinalModal())
.mount('#app')

