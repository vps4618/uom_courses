const express = require("express");
const db = require("./database");
const bodyParser = require("body-parser");

const PORT = 8080;
const host = "localhost";
const app = express();
app.use(bodyParser.json());

app.post("/api/customers", (req, res) => {
  try {
    const {
      name,
      address,
      email,
      dateOfBirth,
      gender,
      age,
      cardHolderName,
      cardNumber,
      expiryDate,
      cvv,
      timeStamp,
    } = req.body;
    if (
      !name ||
      !address ||
      !email ||
      !dateOfBirth ||
      !gender ||
      !age ||
      !cardHolderName ||
      !cardNumber ||
      !expiryDate ||
      !cvv ||
      !timeStamp
    ) {
      res.status(400).json({ error: "All data should be inserted !" });
    } else {
      if (!email.includes("@")) {
        res.status(400).json({ error: "Email must be a valid email !" });
      } else {
        if (cardNumber.length > 12 || cardNumber.length < 12) {
          res
            .status(400)
            .json({ error: "Card Number must be a valid number !" });
        } else {
          const sql =
            "INSERT INTO customer (name,address,email,dateOfBirth,gender,age,cardHolderName,cardNumber,expiryDate,cvv,timeStamp) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
          const params = [
            name,
            address,
            email,
            dateOfBirth,
            gender,
            age,
            cardHolderName,
            cardNumber,
            expiryDate,
            cvv,
            timeStamp,
          ];
          db.run(sql, params, function (err) {
            if (err) {
              res.status(400).json({ error: err.message });
            } else {
              res.status(201).json({
                message: `Customer ${name} has registered`,
                customerId: this.lastID,
              });
            }
          });
        }
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.toString() });
  }
});

// get all records (optional)
app.get("/api/customers", (req, res) => {
  try {
    const sql_command_for_get_records = "SELECT * from customer";
    const parameters = [];
    db.all(sql_command_for_get_records, parameters, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ records: result });
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${host}:${PORT}`);
});
