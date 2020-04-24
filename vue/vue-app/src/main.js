import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import Fragment from 'vue-fragment';

import App from './App.vue';
import router from './router';
import store from './store'

Vue.config.productionTip = false;

Vue.use(CompositionApi);
Vue.use(Fragment.Plugin);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
