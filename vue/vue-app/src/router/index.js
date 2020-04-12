import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('$src/pages/Settings.vue'),
            name: 'settings'
        },
        {
            path: '/game',
            component: () => import('$src/pages/Game.vue'),
            name: 'game'
        },
    ]
});

export default router;
