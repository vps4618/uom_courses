import fetch from "node-fetch";

const link = "https://my-json-server.typicode.com/typicode/demo/comments";

fetch(link)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
