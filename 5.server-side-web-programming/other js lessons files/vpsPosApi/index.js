import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send('Welcome to VpsPosApi');
})

app.get('/items',() => {
    res.send();
})

app.listen(port,() => {
    console.log('Server is listening on http://localhost:3000');
})

