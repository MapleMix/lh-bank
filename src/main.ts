import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from "pinia";
import router from "./routers/index.ts";
// import "bootstrap/scss/bootstrap";
import axios from "./axios.ts"

const add = createApp(App);

add.use(createPinia());
add.use(router);
add.mount("#app");
add.use(axios, {
    baseUrl: 'https://cataas.com/',
})
