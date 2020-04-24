const useGame = ({ checkSolution, inputs, updateTask, isTick }) => {
    let correctly = 0;
    let solved = 0;
    const max = 25;

    const toCheck = () => {
        const solution = checkSolution(inputs.first, inputs.second);

        inputs.first = inputs.second = '';
        inputs.active = 'first';

        if (solution.isCorrect) {
            correctly += 1;
        }

        solved += 1;

        if (solved === max) {
            return gameEnd();
        }

        updateTask();
    };

    const gameEnd = (endCb) => {
        isTick.value = false;
        isTick.toggler = () => { };
        if (isTick.clearTimer && (typeof isTick.clearTimer === 'function')) {
            isTick.clearTimer();
        }

        return (endCb !== undefined && typeof endCb === 'function' ? endCb : cb) ({ correctly, solved });
    };

    let cb = () => {};

    const onEnd = newCb => cb = newCb;

    return { toCheck, gameEnd, onEnd };
};

export default useGame;
