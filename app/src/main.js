import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/routes/Home.vue'
import App from '@/App.vue'
import Top from './routes/Top.vue'
import Area from '@/routes/Area.vue'
import Trip from '@/routes/Trip.vue'
import Details from '@/routes/Details.vue'

loadFonts()

const routes = [
  { path: '/', component: Home},
  { path: '/ohokayama', component: Top },
  { path: '/ohokayama/area', component: Area },
  { path: '/ohokayama/details', component: Details},
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

