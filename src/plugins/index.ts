// import { loadFonts } from "./font";
import vuetify from "./vuetify";
import store from "./store";
import router from "../router";
import { createPinia } from "pinia";

import type { App } from "vue";

export function registerPlugins(app: App) {
  //   loadFonts().then(r => { console.log(r)})
  app.use(createPinia()).use(store).use(vuetify).use(router);
}
