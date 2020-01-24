const http = require('http');
const {promisify} = require('util');

const [_, __, count, type] = process.argv;

if (!count) {
    throw new Error('Первый аргумент обязательный.');
}

if (isNaN(+count)) {
    throw new Error('Первый аргумент должен быть числом.');
}

if (!type) {
    throw new Error('Второй аргумент обязательный.');
}

if (type !== '-p' && type !== '-c') {
    throw new Error('Вторым аргументом может быть только "-p" (для параллельного вида запроса) и "-c" (для последовательного вида запроса).');
}

const parallel = type === '-p';



const request = (i) => new Promise((res) => http.get('http://localhost:8000', res))
                            .then(() => console.log(`Request ${i + 1} done`));

(async () => {

    for (let i = 0; i < +count; i++) {
        !!parallel ? request(i) : await request(i);
    }

})();