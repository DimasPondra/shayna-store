import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faInstagram, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faCartArrowDown, faHome, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./assets/css/main.css";

import "./axios";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

library.add(faFacebook, faInstagram, faTwitter, faPinterest, faCartArrowDown, faHome, faChevronRight, faXmark);

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(bootstrap);
app.use(Toast);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
