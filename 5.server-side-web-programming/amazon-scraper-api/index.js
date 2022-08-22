import express from 'express';
import request from 'request-promise';

const app = express();

// get a port dynamically from where we put our api or get port 5000
const PORT = process.env.PORT  || 5000;

// use to parse json 
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Welcome to Amazon Scraper API');
});

app.listen(PORT,() => {
    console.log()
});