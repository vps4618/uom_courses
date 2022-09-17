const promise = new Promise((resolve, reject) => {
  // reject("Failure");
  resolve("Success");
})

  .then((value) => {
    console.log(value); // output -> success
    return "One";
  })

  .then((value) => {
    console.log(value); // output -> One
    return "Two";
  })
  .then((value) => {
    console.log(value); // output -> Two
    return "Three";
  })
  .then((value) => {
    console.log(value); // output -> Three
    return "Four";
  })
  .then((value) => {
    console.log(value); // output -> Four
  })
  .catch((error) => {
    console.log(error);
  });
