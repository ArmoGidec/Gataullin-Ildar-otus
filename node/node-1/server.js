const http = require('http');
const { promisify } = require('util');

const wait = promisify((ms, cb) => setTimeout(cb, ms));

const server = http.createServer(async (_, res) => {
    await wait(100);
    res.end();
});

server.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
});