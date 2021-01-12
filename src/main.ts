import { createApp } from 'vue'
import VueFinalModal from 'vue-final-modal'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"

createApp(App)
.use(router)
.use(VueFinalModal())
.mount('#app')

