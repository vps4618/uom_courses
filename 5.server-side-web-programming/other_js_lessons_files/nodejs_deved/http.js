const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // rendering html file
        fs.readFile(path.join(__dirname,'index.html'),'utf-8',(err,data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();

        })
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // writing html as lines
        // res.write('<h1>Welcome to the homepage</h1>');
        // res.write('<p>Additional info</p>');
        // res.end();
    }
    if (req.url === '/user') {
        res.write('Welcome user jhonson');
        res.end();
    }
});


server.listen(3000, () => {
    console.log('Server up and running on http://localhost:3000/');
});