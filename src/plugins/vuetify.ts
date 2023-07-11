import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VDataTable } from "vuetify/labs/VDataTable";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  components: {
    VDataTable,
  },
});
