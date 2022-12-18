import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js";

import {Quasar} from 'quasar'
import quasarUserOptions from './quasar-user-options'
import './registerServiceWorker'

const app = createApp(App)

app.config.globalProperties.stat_welcome = 0
app.config.globalProperties.stat_loaded = 1
app.config.globalProperties.stat_saved = 2
app.config.globalProperties.stat_gamewinner = 3
app.config.globalProperties.stat_choosefig = 4
app.config.globalProperties.stat_idle = 5
app.config.globalProperties.stat_ready1 = 6
app.config.globalProperties.stat_ready2 = 7
app.config.globalProperties.stat_playing = 13
app.config.globalProperties.stat_moving = 14
app.config.globalProperties.stat_entername = 15

app.use(Quasar, quasarUserOptions)

app.use(VueSweetalert2);

app.use(router);

app.mount('#app')
