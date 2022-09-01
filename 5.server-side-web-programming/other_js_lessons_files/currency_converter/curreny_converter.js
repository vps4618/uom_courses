import fetch from 'node-fetch';
import  axios from 'axios';

// ryGHI8WC5rdlQWYfTKQXuaHrkBz9kTHD
/*
var myHeaders = new Headers();
myHeaders.append("apikey", "ryGHI8WC5rdlQWYfTKQXuaHrkBz9kTHD");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/currency_data/convert?to=to&from=from&amount=amount", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
*/

// const getExchangeRate = (fromCurrency,toCurrency) => {
//     axios.get('http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a08f7d8fe7f25e1b&format=1').then((response) => {
//         const rate = response.data.rates;
//         console.log(rate); 
//     });

// }

// getExchangeRate('USD','EUR');



var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {"apikey": "ryGHI8WC5rdlQWYfTKQXuaHrkBz9kTHD"}
};

// promise method
// const getExchangeRate = (fromCurrency,toCurrency,amount) => {
//     fetch(`https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   }

//   getExchangeRate('USD','LKR',"2");

// async await 
// first function
const getExchangeRate = async (fromCurrency,toCurrency,amount) => {
    try{
        const response =  await fetch(`https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions); 
        const data = await response.json();
        return data.result;

    }catch(err){
        console.log(err);
    }
}

// second function
const getCountries = async (toCurrency) => {
    try{
     const response = await fetch(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);
     const data = response.json();
     console.log(data);
    }catch(err){
        console.log(err);
    }
}

getCountries('USD'); // not working