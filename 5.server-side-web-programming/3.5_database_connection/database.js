const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";
const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the Sqlite database.");
  }
});

module.exports = db;
