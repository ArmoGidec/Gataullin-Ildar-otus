import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../pages/Settings.vue'),
            name: 'settings'
        },
        {
            path: '/game',
            component: () => import('../pages/Game.vue'),
            name: 'game'
        },
    ]
});

export default router;
