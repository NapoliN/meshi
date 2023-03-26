import "core-js";
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/Home.vue'
import App from '@/App.vue'
import Top from '@/routes/ohokayama/Top.vue'
import Area from '@/routes/ohokayama/Area.vue'
import Detail from '@/routes/ohokayama/Detail.vue'
import Genre from '@/routes/ohokayama/Genre.vue'
import Random from '@/routes/ohokayama/Random.vue'
import Search from '@/routes/ohokayama/Search.vue'
import TopTrip from '@/routes/trip/TopTrip.vue'

loadFonts()

const routes = [
  { path: '/', component: Home},
  { path: '/ohokayama', component: Top },
  { path: '/ohokayama/area', component: Area },
  { path: '/ohokayama/genre', component: Genre},
  { path: '/ohokayama/detail', component: Detail},
  { path: '/ohokayama/random', component: Random},
  { path: "/ohokayama/search",component : Search},
  { path: '/trip', component: TopTrip}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
  .use(vuetify)
  .mount('#app')

