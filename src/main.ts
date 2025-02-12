import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from "./pages/HomePage.vue"
import LoginPage from "./pages/LoginPage.vue"


const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path: '',
            component : HomePage
        },
        {
            path : '/login',
            component: LoginPage
        }
    ]
})


createApp(App).use(router).mount('#app')
