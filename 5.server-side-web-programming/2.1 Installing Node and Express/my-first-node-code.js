// console.log('Hello World');

// create a server without express js
const http = require("http");
const server = http.createServer((req,res)=>{
    res.end("Hello World");
});

server.listen(8000,"localhost",() => {
    console.log("Node JS is now Listening on localhost:8000");
});
