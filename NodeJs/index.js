const ValidateABFromFunc = () => {
    const isArray = require('isarray');
    const a = { a: 2, b: 3, c: 4 };
    const b = [1, 2, 3, 4];
    console.log(isArray(a) ? " a is An Array" : " a is NOT an Array");
    console.log(isArray(b) ? " b is An Array" : " b is NOT an Array");

};

ValidateABFromFunc();

const server = require('http').createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = "My server is active";
    res.setHeader("content-type", "text/plain");
    console.log(res.statusMessage);
    res.end(res.statusMessage);
});

server.listen(3001, '127.0.0.1', () => {
    console.log('I am running');
});
