const fs = require("fs");
const util = require("util");

// without promises
fs.readFile("customer.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// with promises
var read = util.promisify(fs.readFile);
read("customer2.txt")
  .then((data) => console.log(data.toString()))
  .catch((err) => console.error(err));
