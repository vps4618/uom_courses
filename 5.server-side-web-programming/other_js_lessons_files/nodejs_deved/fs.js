const fs = require('fs');

//  writing a file
/// this works asynchronously
fs.writeFile('message.txt', 'Hello there node', err => {
    if (err) {
        throw err
    }
    console.log('file has been written');
});

// reading a file
fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})