Promise.resolve("Success") // create a promise in easier way
  .then((value) => {
    throw "Error Occured  !";
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
