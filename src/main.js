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

library.add(faFacebook, faInstagram, faTwitter, faPinterest, faCartArrowDown, faHome, faChevronRight, faXmark);

const app = createApp(App);

app.use(router);
app.use(bootstrap);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
