"use strict";
const express = require("express");
const app = express();

//app.METHOD(PATH, HANDLER)
app.get("/a/cool/route/path",function(req,res){
    res.send("<h1>hi</h1>/");
    console.log('The User visited /a/cool/route/path PATH');
});
let x;
app.post('/', (req, res) => {
    
    x = req.body;
    res.send('success');
         
  })
app.get('/', (req, res) => {

res.send(x);
        
})

  


app.listen(3000);