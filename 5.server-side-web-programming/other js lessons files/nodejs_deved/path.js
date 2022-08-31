const path = require('path');

// getting file location
const fileLocation= path.join(__dirname, 'app.js');
console.log(fileLocation);

// getting base name
const fileName = path.basename(fileLocation);
console.log(fileName);

// getting extension name
const extension = path.extname(fileName);
console.log(extension);