import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import settings from './modules/settings';

Vue.use(Vuex);

const store = new Store({
    modules: {
        settings
    }
});

export default store;
