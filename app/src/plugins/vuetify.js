// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

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
})