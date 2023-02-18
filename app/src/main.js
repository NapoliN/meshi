import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Top from './routes/Top.vue'
import Area from '@/routes/Area.vue'

loadFonts()

const routes = [
  { path: '/', component: Top },
  { path: '/area', component: Area },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
  .use(vuetify)
  .mount('#app')

