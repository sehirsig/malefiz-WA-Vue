import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js";

const app = createApp(App)

app.use(VueSweetalert2);


app.use(router);

app.mount('#app')
