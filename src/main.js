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

// Database connection
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD40GQaSJ9le5UyO-KP1abaA4RAjpjRMZk",
    authDomain: "malefiz-wa-vue.firebaseapp.com",
    projectId: "malefiz-wa-vue",
    storageBucket: "malefiz-wa-vue.appspot.com",
    messagingSenderId: "66821837679",
    appId: "1:66821837679:web:6c2cc77451c10836898e9a",
    measurementId: "G-Z2LLQ2BH3C"
}
firebase.initializeApp(firebaseConfig)

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

app.config.globalProperties.backend_url = "malefiz-wa-playserver.herokuapp.com"

app.use(Quasar, quasarUserOptions)

app.use(VueSweetalert2);

app.use(router);

app.mount('#app')
