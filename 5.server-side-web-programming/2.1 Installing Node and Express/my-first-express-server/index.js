const express = require("express");

const app = express(); // initialize instance of express

app.get("/hello", (req,res) =>{
    res.send("Hello World");
});

app.get("/vishwapraveen", (req,res) =>{
    res.send("Hi I am Vishwa Praveen");
});

app.listen(3000);