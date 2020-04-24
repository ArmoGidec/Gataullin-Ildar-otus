const countDay = () => {
    const today = new Date().toLocaleDateString();
    const lastInDay = localStorage.getItem('lastInDay') || today;

    localStorage.setItem('lastInDay', today);

    let day = localStorage.getItem('day') || 1;
    if (today !== lastInDay) {
        day += 1;
    }

    localStorage.setItem('day', day);

    return day;
};

const state = {
    day: countDay(),
    last: localStorage.getItem('last'),
    all: localStorage.getItem('all'),
};

export const MUTATIONS = {
    SET_LAST: 'SET_LAST',
    SET_ALL: 'SET_ALL'
}

const mutations = {
    [MUTATIONS.SET_LAST]: (state, last) => state.last = last,
    [MUTATIONS.SET_ALL]: (state, all) => state.all = all,
};

/**
 * @type {import('vuex').ActionTree<state>}
 */
const actions = {
    saveResult({ dispatch, state }, { solved, correctly }) {
        const [allCorrectly, allSolved] = (state.all || '0/0').split('/').map(val => +val);
        dispatch('setAll', `${allCorrectly + correctly}/${allSolved + solved}`);
        dispatch('setLast', `${correctly}/${solved}`);
    },
    setAll({ commit }, all) {
        commit(MUTATIONS.SET_ALL, all);
        localStorage.setItem('all', all);
    },
    setLast({ commit }, last) {
        commit(MUTATIONS.SET_LAST, last);
        localStorage.setItem('last', last);
    }
};

const getters = {
    day: ({ day }) => day,
    last: ({ last }) => {
        if (last === null) {
            return null;
        }

        const [correctly, solved] = last.split('/');
        return { correctly, solved };
    },
    accurancy: ({ all }) => {
        if (all === null) {
            return null;
        }

        const [correctly, solved] = all.split('/');
        return Math.floor(correctly / solved * 100);
    }
};

export default { state, mutations, actions, getters };
