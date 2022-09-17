import express from "express";
import sanitizeHtml from "sanitize-html";

const app = express();

app.get("",(req,res) => {
    res.send("hi");
    const receivedData = req.query.name; //input -> <script>hi</script>vishwa
    const sanitizedData = sanitizeHtml(receivedData);
    console.log(sanitizedData); //input -> vishwa
})

app.listen(4000,()=> {
    console.log("Server is listening on http://localhost:4000");
})