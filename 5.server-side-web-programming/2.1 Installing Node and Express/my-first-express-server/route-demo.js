const express = require("express");
const app = express();

//app.METHOD(PATH, HANDLER)
app.get("/a/cool/route/path",function(req,res){
    res.send("hi");
    console.log('The User visited /a/cool/route/path PATH');
});

app.listen(3000);