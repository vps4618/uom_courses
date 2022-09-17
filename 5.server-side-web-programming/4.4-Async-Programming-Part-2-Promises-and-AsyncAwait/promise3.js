const promise = new Promise((resolve, reject) => {
  // reject("Failure");
  resolve("Success");
})

  .then((value) => {
    throw "Error occured"; // due to this throw block catch block executed
    console.log(value);
    return "One";
  })

  .then((value) => {
    console.log(value);
    return "Two";
  })
  .then((value) => {
    console.log(value);
    return "Three";
  })
  .then((value) => {
    console.log(value);
    return "Four";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
