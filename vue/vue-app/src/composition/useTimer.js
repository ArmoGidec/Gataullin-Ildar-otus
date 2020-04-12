import { ref, computed } from '@vue/composition-api';

const useTimer = (time, isTick, emit) => {
    const timeLeft = ref(time * 60);
    const formatedTime = computed(() => {
        const minutes = Math.floor(timeLeft.value / 60);
        const seconds = (timeLeft.value % 60).toString().padStart(2, '0');

        return `${minutes}:${seconds}`
    });

    const timerId = setInterval(() => {
        if (isTick.value) {
            timeLeft.value = timeLeft.value - 1;
            if (timeLeft.value === 0) {
                emit('timeover');
                return clearTimer();
            }
        }
    }, 1000);

    const clearTimer = () => {
        window.console.log('clear timer');
        clearInterval(timerId);
    }

    return { formatedTime, clearTimer };
}

export default useTimer;
