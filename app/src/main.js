import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Top from './routes/Top.vue'
import Area from '@/routes/Area.vue'
import Trip from '@/routes/Trip.vue'
import Details from '@/routes/Details.vue'

loadFonts()

const routes = [
  { path: '/', component: Top },
  { path: '/area', component: Area },
  { path: '/details', component: Details},
  { path: '/trip', component: Trip}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
  .use(vuetify)
  .mount('#app')

