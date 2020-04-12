import { reactive } from '@vue/composition-api';

const useInputs = () => {
    const inputs = reactive({
        first: '',
        second: '',
        active: 'first'
    });

    const activate = input => (inputs.active = input);

    const toInput = value => (inputs[inputs.active] += value);

    const clearInputs = () => (inputs.first = inputs.second = '');

    return { inputs, activate, toInput, clearInputs };
};

export default useInputs;
