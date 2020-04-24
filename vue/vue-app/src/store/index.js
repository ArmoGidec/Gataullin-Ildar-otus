import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import settings from './modules/settings/';
import results from './modules/results/';

Vue.use(Vuex);

const store = new Store({
    modules: {
        settings,
        results
    }
});

export default store;
