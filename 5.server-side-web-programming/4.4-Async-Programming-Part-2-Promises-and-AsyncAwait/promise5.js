const fs = require("fs");

console.log("ABC");

// without promises
fs.readFile("customer.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log("XYZ");

// with promises
new Promise((resolve, reject) => {
  fs.readFile("customer2.txt", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data.toString());
    }
  });
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("OK");
