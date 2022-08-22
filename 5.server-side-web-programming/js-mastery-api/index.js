import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
const app = express();
const PORT  = 5000;

//this gonna say we use json data in our whole application
app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/',(req,res) => {
    console.log('[TEST]!');
    res.send('Hello from home page');
})

app.listen(PORT, () => {
    console.log(`Server running on port : http://localhost:${PORT}`)
});