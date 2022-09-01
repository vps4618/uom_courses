// imporing a js file
const getInfo = require('./sayName');

getInfo.sayName();
getInfo.sayAddress();

// getting directory
console.log(__dirname);

// getting filename
console.log(`filename -> ${__filename}`);