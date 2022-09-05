    /*
    better comments
    -----------------
    ! Hey this code is not working
    ? Is this still working 
    TODO This function is not finished
    */
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const PORT = 3000 || process.env.PORT;

dotenv.config();

// Import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// connect to db
mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Successfully connected to database");
  }
});
// getting post data (Middleware)
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
