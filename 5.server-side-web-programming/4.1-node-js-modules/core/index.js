const http = require("http");

const server = http.createServer(function(req,res){
    res.end("hi");
});

server.listen(3000,"localhost",() => {
    console.log("server is running on http://localhost:3000");
});