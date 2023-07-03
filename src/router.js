import {createRouter, createWebHistory} from "vue-router";
import Photos from "./components/Photos.vue";
import Home from "./views/Home.vue";
import Piter from "./views/Piter.vue";
import Grad from "./views/Grad.vue";
import Catalog from "./views/Catalog.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:id/',
        name: 'catalog',
        component: Catalog,

    },
    // {
    //     path: '/piter',
    //     name: 'piter',
    //     component: Piter
    // },
    // {
    //     path: '/grad',
    //     name: 'grad',
    //     component: Grad
    // },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router