import { MUTATIONS } from './types';

const state = {
    time: 7,
    level: 5,
    types: ['sum', 'div', 'pow']
};

const mutations = {
    [MUTATIONS.SET_TIME]: (state, time) => state.time = time,
    [MUTATIONS.SET_LEVEL]: (state, level) => state.level = level,
    [MUTATIONS.SET_TYPES]: (state, types) => state.types = types,
};

const getters = {
    time: ({time}) => +time,
    level: ({level}) => +level,
    types: ({types}) => types
};

export default { state, mutations, getters };
