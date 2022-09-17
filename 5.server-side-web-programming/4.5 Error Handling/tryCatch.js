const fs = require("fs");

try{
    console.log("This is the start of the try block");
    const data = fs.readFileSync("node.txt","utf-8");
    console.log(data);
    console.log("This is the end of the try block");
}catch(err){
    console.log("Incorrect file name");
}

console.log("This is the end of the try...catch block");