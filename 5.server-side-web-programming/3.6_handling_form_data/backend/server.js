var express = require("express");
var db = require("./database.js");
var app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    credentials: true,
    origin: "*",
    methods: ["GET", "POST"],
  })
);
// Start server
var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log(
    "Server running on http://localhost:%PORT%".replace("%PORT%", HTTP_PORT)
  );
});

//HTTP GET method
app.get("/api/products", (req, res, next) => {
  try {
    // SQL query to select all data
    var sql = "select * from products";
    var params = [];

    // Running the SQL query
    db.all(sql, params, (err, rows) => {
      // error response
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      // success response
      res.status(200).json({
        message: "success",
        data: rows,
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

//HTTP POST method
app.post("/api/products", (req, res, next) => {
  try {
    const { productName, description, unitPrice } = req.body;
    // SQL query to insert data into the database
    var sql =
      "INSERT INTO products (productName, description, unitPrice) VALUES (?,?,?)";
    var params = [productName, description, unitPrice];

    // Running the SQL query
    db.run(sql, params, (err, result) => {
      // error response
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      } else {
        // success response
        res.status(200).json({
          message: "success",
          data : req.body
        });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
});
