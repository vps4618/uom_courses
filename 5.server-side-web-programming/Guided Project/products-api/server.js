const express = require("express");
const bodyParser = require("body-parser");
const { request, response } = require("express");

const app = express();
const db = require("./database");
app.use(bodyParser.json());
const port = 8080;

// post a product
app.post("/api/products", (req, res, next) => {
  try {
    const errors = [];
    if (!req.body.productName) {
      errors.push("An Invalid Input !");
      res.status(400).json({ errors: errors });
    } else {
      const {
        productName,
        description,
        category,
        brand,
        expiredDate,
        manufacturedDate,
        batchNumber,
        unitPrice,
        quantity,
        createdDate,
      } = req.body;
      const sql = `INSERT INTO products (productName,description,category,brand,expiredDate,manufacturedDate,batchNumber,unitPrice,quantity,createdDate) VALUES (?,?,?,?,?,?,?,?,?,?)`;
      const params = [
        productName,
        description,
        category,
        brand,
        expiredDate,
        manufacturedDate,
        batchNumber,
        unitPrice,
        quantity,
        createdDate,
      ];
      // we must use normal function instead of arrow function for get this.lastID
      db.run(sql, params, function (err) {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        } else {
          res.json({
            message: "Success",
            data: req.body,
            id: this.lastID,
          });
        }
      });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// get products
app.get("/api/products", (req, res, next) => {
  try {
    const sql = "select * from products";
    const params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      } else {
        res.json({ message: "success", data: rows });
      }
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// update a product
app.put("/api/products", (req, res, next) => {
  try {
    const errors = [];
    if (!req.body.productName) {
      errors.push("An Invalid Input !");
      res.status(400).json({ errors: errors });
    } else {
      const {
        id,
        productName,
        description,
        category,
        brand,
        expiredDate,
        manufacturedDate,
        batchNumber,
        unitPrice,
        quantity,
        createdDate,
      } = req.body;
      const sql = `UPDATE products set productName = ?,description = ?,category = ?,brand = ?,expiredDate = ?,manufacturedDate = ?,batchNumber = ?,unitPrice = ?,quantity = ?,createdDate = ? WHERE id = ?`;
      const params = [
        productName,
        description,
        category,
        brand,
        expiredDate,
        manufacturedDate,
        batchNumber,
        unitPrice,
        quantity,
        createdDate,
        id,
      ];
      // we must use normal function instead of arrow function for get this.changes
      db.run(sql, params, function (err) {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        } else {
          res.status(200).json({
            updated: this.changes,
          });
        }
      });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// delete a product
app.delete("/api/products/delete/:id", (req, res, next) => {
  try {
    db.run(
      "DELETE FROM products WHERE id = ?",
      req.params.id,
      function (err, result) {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({ message: "deleted", rows: this.changes });
      }
    );
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

app.listen(port, () => {
  console.log(
    "Server is running on http://localhost:%PORT%".replace("%PORT%", port)
  );
});
