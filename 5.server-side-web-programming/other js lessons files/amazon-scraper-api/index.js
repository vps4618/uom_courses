import express from 'express';
import request from 'request-promise';

const app = express();

// get a port dynamically from where we put our api or get port 5000
const PORT = process.env.PORT  || 5000;

const apiKey = "cc13f1e7dd9f11eeb217133ce21e46c5";
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

// use to parse json 
app.use(express.json());

app.get('/',(req,res) => {
    res.send('Welcome to Amazon Scraper API');
});

//get product details
app.get('/products/:productId', async (req,res) => {
    const {productId } = req.params;
    try{
        	const response = await request(`${baseUrl}&url=https://vpsoftwares.herokuapp.com/`);
            // by json.parse make data readable
            res.json(JSON.parse(response));
    }catch(err){
        res.json(err);
    }
})

app.listen(PORT,() => {
    console.log(`Server running on port http://localhost:${PORT}`);
});