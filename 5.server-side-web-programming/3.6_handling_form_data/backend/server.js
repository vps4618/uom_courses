var express = require("express");
const bodyparser = require('body-parser');
var db = require("./database.js");
var app = express();
const cors = require("cors");

app.use(bodyparser.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
// Start server
var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log("Server running on http://localhost:%PORT%".replace("%PORT%", HTTP_PORT));
});

const array = [{
  id:100,
  productName:"munchee super cream cracker",
  description:"top cruchy biscuits from sri lanka",
  unitPrice:300
},{
  id:100,
  productName:"munchee super cream cracker",
  description:"top cruchy biscuits from sri lanka",
  unitPrice:300
}];

//HTTP GET method
app.get("/api/products", (req, res, next) => {
  /*
  export interface Product {
    id: number;
    productName: string;
    description: string;
    unitPrice: number;
}
    message: string;
    data: Product[];
  */

  res.send({message:"hi",data:array})
});

//HTTP POST method
app.post("/api/products", (req, res, next) => {
  const productName1 = req.body.productName;
  const description1 = req.body.description;
  const unitPrice1 = req.body.unitPrice;
  const product = {
    id:102,
    productName:productName1,
    description:description1,
    unitPrice:unitPrice1
  }
  array.push(product);
  res.send({
    message:"hi",
    id:102
  })
});
