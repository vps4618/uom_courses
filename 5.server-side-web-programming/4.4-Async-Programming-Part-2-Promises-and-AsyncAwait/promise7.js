const fs = require("fs");
const util = require("util");

// without promises (hard to read)
// fs.readFile("customer3.txt", (err, data1) => {
//   fs.readFile("customer4.txt", (err, data2) => {
//     fs.readFile("customer5.txt", (err, data3) => {
//       console.log(data1.toString());
//       console.log(data2.toString());
//       console.log(data3.toString());
//     });
//   });
// });

// with promises (easy to read)
var read = util.promisify(fs.readFile);
Promise.all([
  read("customer3.txt"),
  read("customer4.txt"),
  read("customer5.txt"),
])
  .then((data) => {
    const [data1, data2, data3] = data;
    console.log(data1.toString());
    console.log(data2.toString());
    console.log(data3.toString());
  })
  .catch((error) => {
    console.log("hi");
  });
