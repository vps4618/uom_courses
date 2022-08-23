import fetch from "node-fetch";

function makeRequest(location){
    return new Promise((resolve,reject) => {
        console.log(`Making Request to ${location}`)
        if(location == 'Google'){
            resolve('Google say hi')
        }else{
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// makeRequest('Facebook').then(response => {
//     console.log('Response received');
//     return processRequest(response);
// }).then(processedResponse => console.log(processedResponse)).catch(error => console.log(error))

//example 1
async function doWork(){
    try{
        const response = await makeRequest('facebook');
        console.log('Response received');
        const processedResponse = await processRequest(response);
        console.log(processedResponse);
    }catch(error){
        console.log(error);
    }
}

doWork();

//example 2
console.log('\n');
const fetchPokemon = async (id) => {
    try{
        //wait untill getting data
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
    }catch(err){
        console.log('a');
    }
};

fetchPokemon(2);

//run before fetchPokemon
console.log(1);
