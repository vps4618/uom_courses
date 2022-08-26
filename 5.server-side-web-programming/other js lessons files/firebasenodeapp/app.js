const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const PORT = process.env.PORT || 3000;

// import routes
const postsRoutes = require('./routes/posts');

// when a user goes to posts , postsRoutes will available
app.use('/posts',postsRoutes);

// connect to db
mongoose.connect(process.env.DB_CONNECTION,() => {
    console.log('Successfully connected');
})

//how to we start listening to the  server
app.listen(PORT,()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});