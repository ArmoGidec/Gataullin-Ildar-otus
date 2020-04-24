import { ref } from "@vue/composition-api";
import { OPERATION } from "$src/utils/types";

const { ADD, DIV, MUL, SUB } = OPERATION;

const useTask = (level, types) => {
    const task = ref(createTask(level, types));

    const updateTask = () => (task.value = createTask(level, types));

    return { task, updateTask, checkSolution: checkSolution.bind(null, task) };
};

const createTask = (level, types) => {
    const type = types[randomInteger(1, types.length) - 1];

    const execTask = taskTypes[type.symbol];

    return execTask(
        getRandomOperand(level),
        getRandomOperand(level),
        getRandomOperand(level)
    );
};

const checkSolution = (task, firstInput, secondInput) => {
    const operationSymbol = task.value.operation.symbol;

    const firstOperand = task.value[
        operationSymbol === ADD.symbol || operationSymbol === MUL.symbol
            ? 'firstOperand'
            : 'expectedResult'
    ];
    const secondOperand = +firstInput;
    const thirdOperand = +secondInput;

    if (isNaN(secondOperand) || isNaN(thirdOperand)) {
        throw new Error("Inputs values must be a number type");
    }


    const execTask = taskTypes[operationSymbol];

    const { expectedResult } = execTask(
        firstOperand,
        secondOperand,
        thirdOperand
    );

    return { isCorrect: expectedResult === task.value.expectedResult };
};

const taskTypes = {
    [ADD.symbol]: (firstOperand, secondOperand, thirdOperand) => {
        const expectedResult = firstOperand + secondOperand + thirdOperand;
        return { expectedResult, firstOperand, operation: ADD };
    },
    [SUB.symbol]: (firstOperand, secondOperand, thirdOperand) => {
        const expectedResult = firstOperand;
        firstOperand = expectedResult + secondOperand + thirdOperand;
        return { expectedResult, firstOperand, operation: SUB };
    },
    [MUL.symbol]: (firstOperand, secondOperand, thirdOperand) => {
        const expectedResult = firstOperand * secondOperand * thirdOperand;
        return { expectedResult, firstOperand, operation: MUL };
    },
    [DIV.symbol]: (firstOperand, secondOperand, thirdOperand) => {
        const expectedResult = firstOperand;
        firstOperand = expectedResult * secondOperand * thirdOperand;
        return { expectedResult, firstOperand, operation: DIV };
    }
};

const getRandomOperand = level => Math.floor(Math.random() * 8 + 1) * level;

function randomInteger(min, max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export default useTask;
