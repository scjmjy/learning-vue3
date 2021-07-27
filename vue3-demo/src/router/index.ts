import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Vue3Syntax from '@/views/Vue3Syntax/Vue3Syntax.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/vue3',
        name: 'Vue3Syntax',
        component: Vue3Syntax,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
