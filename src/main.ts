import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from './router'
import './theme/variables.css'

const app = createApp(App)
app.use(IonicVue)
app.use(router)
app.mount('#app')
