const sqlite3 = require("sqlite3").verbose();
const DB_SOURCE = "db.sqlite";

const db = new sqlite3.Database(DB_SOURCE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected To the Database");
    db.run(
      "CREATE TABLE customer (id INTEGER PRIMARY KEY AUTOINCREMENT,name text,address text,email text,dateOfBirth text,gender text,age INTEGER,cardHolderName text,cardNumber text,expiryDate text,cvv text,timeStamp text)",
      (err) => {
        if (err) {
          // console.error(err.message);
        }
      }
    );
  }
});
module.exports = db;
