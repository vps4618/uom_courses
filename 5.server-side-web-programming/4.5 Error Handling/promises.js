function square(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num !== "number") {
        reject(new TypeError(`Expected number but got : ${typeof num}`));
      }
      const result = num * num;
      resolve(result);
    }, 1000);
  });
}

square(5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
