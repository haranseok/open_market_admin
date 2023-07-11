import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "@/router/index";
import { registerPlugins } from "@/plugins";
import installI18n from "./plugins/i18n";
import Aos from "aos";
import "aos/dist/aos.css";
const pinia = createPinia();
const app = createApp(App);
registerPlugins(app);
installI18n(app);
app.use(
  Aos.init({
    duration: 1000,
  })
);
app.use(Router);
app.use(pinia);
app.mount("#app");
