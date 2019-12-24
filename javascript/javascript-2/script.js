const promiseReduce = (asyncFunctions, reduce, initValue) =>
    asyncFunctions.reduce(
        async (memo, curFunc) => reduce(await memo, await curFunc()),
        initValue
    );

const fn1 = () => {
    console.log("fn1");
    return Promise.resolve(1);
};

const fn2 = () =>
    new Promise(resolve => {
        console.log("fn2");
        setTimeout(() => resolve(2), 1000);
    });

promiseReduce(
    [fn1, fn2],
    (memo, value) => {
        console.log("reduce");
        return memo * value;
    },
    1
).then(console.log);
