import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/*  font awesome icons  */
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/* bootstrap css,js */
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./styles.css"; //main css file

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
