<template>
    <fragment>
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between">
                    <router-link :to="{name: 'settings'}" class="btn btn-light shadow px-3">
                        <i class="fa fa-times" aria-hidden="true"></i>
                        Отмена
                    </router-link>
                    <Timer :time="time" :isTick="isTick" @timeover="onTimeOver" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <Display
                    :task="task"
                    :class="{hidden: !isTick.value}"
                    :inputs="inputs"
                    @activate="input => isTick.value && activate(input)"
                />
            </div>
        </div>
        <div class="row mb-4 text-center">
            <div class="col">
                <button
                    :title="`${isTick.value ? 'Пауза': 'Играть'}`"
                    class="btn btn-secondary shadow rounded-circle"
                    @click="isTick.toggler"
                >
                    <i :class="`fa fa-${ isTick.value ? 'pause' : 'play' }`" aria-hidden="true"></i>
                </button>
            </div>
            <div class="col">
                <button
                    class="btn btn-danger shadow rounded-circle"
                    title="Очистить поля"
                    @click="clearInputs"
                    :disabled="isDisabled.clearBtn || !isTick.value"
                >
                    <i class="fa fa-reply-all" aria-hidden="true"></i>
                </button>
            </div>
            <div class="col">
                <button
                    class="btn btn-success shadow rounded-circle"
                    :title="isDisabled.checkBtn ? 'Перед проверкой необходимо заполнить поля': 'Проверить'"
                    :disabled="isDisabled.checkBtn || !isTick.value"
                    @click="toCheck"
                >
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <Keypad
                    @keyClick="number => isTick.value && toInput(number)"
                    @navigate="direction => isTick.value && navigate(direction)"
                />
            </div>
        </div>

        <Modal v-show="modal.show">{{ modal.content }}</Modal>
    </fragment>
</template>

<script>
import { reactive, computed } from '@vue/composition-api';

import useStore from '$src/composition/useStore';
import useTask from '$src/composition/useTask';
import useInputs from '$src/composition/useInputs';
import useGame from '$src/composition/useGame';

/**
 * @type {import('Vue').Component}
 */
const Game = {
    name: 'Game',

    components: {
        Timer: () => import('$src/components/Timer'),
        Display: () => import('$src/components/Display'),
        Keypad: () => import('$src/components/Keypad'),
        Modal: () => import('$src/components/Modal')
    },

    setup() {
        const { getters, dispatch } = useStore();

        const level = getters.level;
        const time = getters.time;
        const types = getters.types;

        const isTick = reactive({
            value: false,
            toggler() {
                isTick.value = !isTick.value;
            }
        });

        const { task, updateTask, checkSolution } = useTask(level, types);
        const { inputs, activate, toInput, clearInputs } = useInputs();
        const isDisabled = computed(() => ({
            checkBtn: inputs.first === '' || inputs.second === '',
            clearBtn: inputs.first === '' && inputs.second === ''
        }));

        const navigate = direction =>
            (inputs.active = direction === 'left' ? 'first' : 'second');

        const { toCheck, gameEnd, onEnd } = useGame({
            checkSolution,
            inputs,
            updateTask,
            isTick
        });
        onEnd(({ solved, correctly }) => {
            modal.content = `Все примеры решены. Правильно решенных примеров: ${correctly} из ${solved} решены правильно`;
            modal.show = true;
            dispatch('saveResult', { solved, correctly });
        });

        const modal = reactive({
            content: '',
            show: false
        });

        const onTimeOver = () =>
            gameEnd(({ solved, correctly }) => {
                modal.content = `Время закончилось. Правильно решенных примеров: ${correctly} из ${solved} решены правильно`;
                modal.show = true;
                dispatch('saveResult', { solved, correctly });
            });

        return {
            time,
            isTick,

            task,

            inputs,
            activate,
            toInput,
            clearInputs,

            navigate,

            isDisabled,

            toCheck,

            modal,

            onTimeOver
        };
    }
};

export default Game;
</script>