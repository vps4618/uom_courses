const fs = require("fs");

fs.readFile("external.txt", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});

console.log("another node js line after line read");