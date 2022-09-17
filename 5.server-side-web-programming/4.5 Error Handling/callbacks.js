const fs = require("fs");

fs.readFile("node.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("This is the end of the callbacks example");
