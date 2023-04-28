const http = require("http");
const server = http.createServer((req, res) => console.log("incomng..."));

server.listen(8000);
