// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import {mdi} from 'vuetify/iconsets/mdi'

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          base: "#FFFBEB",
          primary: "#F97316",
          secondary: "#C2410C", // #FFCDD2
          secondary2: "#FB923C",
          secondary3: "#FED7AA",
          accent: "#3B82F6",
        }
      },
    },
  },
  icons : {
    defaultSet: 'mdi',
    aliases,
    sets: {
      fa,
      mdi
    },
  }
})