const url = require('url');

// parsing url
const address = 'http://localhost:8000/default.html?year=2017&month=february';
const parsedUrl = url.parse(address,true);
console.log(parsedUrl);

//getting host
const host = parsedUrl.host;
console.log(host);

// getting pathname
const pathName = parsedUrl.pathname;
console.log(pathName);

// getting queries
const queries = parsedUrl.query;
console.log(queries);

console.log(queries.month);