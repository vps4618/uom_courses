const promise = new Promise((resolve, reject) => {
  resolve("Success");
  reject('Failure');
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
