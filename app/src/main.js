import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/routes/Home.vue'
import App from '@/App.vue'
import Top from './routes/Top.vue'
import Area from '@/routes/Area.vue'
import Trip from '@/routes/Trip.vue'
import Detail from '@/routes/Detail.vue'
import Genre from '@/routes/Genre.vue'
import Random from '@/routes/Random.vue'

loadFonts()

const routes = [
  { path: '/', component: Home},
  { path: '/ohokayama', component: Top },
  { path: '/ohokayama/area', component: Area },
  { path: '/ohokayama/genre', component: Genre},
  { path: '/ohokayama/detail', component: Detail},
  { path: '/ohokayama/random', component: Random},
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

