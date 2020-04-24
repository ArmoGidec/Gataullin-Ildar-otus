<template>
    <div class="timer">{{ formatedTime }}</div>
</template>

<script>
import useTimer from '$src/composition/useTimer';
import { onBeforeUnmount } from '@vue/composition-api';

/**
 * @type {import('vue').Component}
 */
const Timer = {
    name: 'Timer',
    props: ['time', 'isTick'],
    setup: ({ time, isTick }, { emit }) => {
        const { formatedTime, clearTimer } = useTimer(time, isTick, emit);

        isTick.clearTimer = clearTimer;
        onBeforeUnmount(clearTimer);

        return { formatedTime };
    }
};

export default Timer;
</script>

<style lang="scss" scoped>
.timer {
    border: 2px solid rgb(113, 162, 253);
    background-color: rgb(169, 180, 194);
    border-right-width: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    font-size: 1.2rem;
    width: 7rem;
    cursor: default;
}
</style>