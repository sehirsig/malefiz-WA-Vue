import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Malefiz from '../views/Malefiz.vue'
import RegisterComponent from "../components/Authentication/RegisterComponent.vue";
import LoginComponent from "../components/Authentication/LoginComponent.vue";
import AccountComponent from "../components/Authentication/AccountComponent.vue";
import firebase from "firebase/compat/app";

const routes = [
    {
        path: '/register-user',
        name: 'register-user',
        component: RegisterComponent,
        meta: {
            requiresNoAuth: true
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: LoginComponent,
        meta: {
            requiresNoAuth: true
        }
    },
    {
        path: '/account',
        name: 'account',
        component: AccountComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/malefiz',
        name: 'Malefiz',
        component: Malefiz,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export function getCurrentUser() {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            unsubscribe()
            resolve(user)
        }, reject)
    })
}

router.beforeEach(async (to) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const requiresNoAuth = to.matched.some(record => record.meta.requiresNoAuth);
    if (requiresAuth && !await getCurrentUser()) {
        return '/signin';
    } else if (requiresNoAuth && await getCurrentUser()) {
        return '/'
    }
})

export default router