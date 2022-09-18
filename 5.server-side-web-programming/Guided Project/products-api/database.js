const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";
const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite Database");
    db.run(
      `CREATE TABLE products (id INTEGER PRIMARY KEY  AUTOINCREMENT,productName text,description text,category text,brand text,expiredDate text,manufacturedDate text,batchNumber  INTEGER,unitPrice INTEGER,quantity INTEGER,createdDate text)`,
      (err) => {
        if (err) {
          //Table already created
        } else {
          //Table just created,creatng some rows
          const insert = `INSERT INTO products (productName, description, category, brand, expiredDate, manufacturedDate, batchNumber, unitPrice, quantity, createdDate) VALUES (?,?,?,?,?,?,?,?,?,?)`;
          db.run(
            insert,
            [
              "White Basmathi Rice",
              `White Basmathi rice imported from pakistan .
                            High quality rice with extra fragnance, Orginacally grown`,
              "Rice",
              "CIC",
              "2023.05.04",
              "2022.02.20",
              324567,
              1020,
              200,
              "2022.02.24",
            ],
            (err) => {
              console.log(err);
            }
          );
        }
      }
    );
  }
});
module.exports = db;
