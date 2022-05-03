import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import { loadFonts } from './plugins/webfontloader'
// import dateFilter from '@/filters/date.filter'

loadFonts()
const axiosInstance = axios.create({
  withCredentials: true,
})

const app = createApp(App)
app.config.globalProperties.$axios = { ...axiosInstance }
app.use(router).use(store).use(vuetify).mount('#app')



