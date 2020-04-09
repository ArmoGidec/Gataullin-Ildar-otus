const state = {
    day: 24,
    last: '10/25',
    all: '80/100',
};

export const MUTATIONS = {
    SET_DAY: 'SET_DAY',
    SET_LAST: 'SET_LAST',
    SET_ALL: 'SET_ALL'
}

const mutations = {
    [MUTATIONS.SET_DAY]: (state, day) => state.day = day,
    [MUTATIONS.SET_LAST]: (state, last) => state.last = last,
    [MUTATIONS.SET_ALL]: (state, all) => state.all = all,
};

const getters = {
    day: ({day}) => day,
    last: ({last}) => {
        const [solved, of] = last.split('/');
        return { solved, of };
    },
    accurancy: ({all}) => {
        const [solved, of] = all.split('/');
        return Math.floor(solved / of * 100);
    }
};

export default { state, mutations, getters };
