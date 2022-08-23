// example 1
let p = new Promise((resolve,reject) => {
    let a=1+2;
    if(a==2){
        resolve('success')
    }else{
        reject('failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message)
})


//example 2
//callback function
// const userLeft = false;
// const userWatchingCatMeme = false;

// function watchTutorialCallback(callback,errorCallback){
//     if(userLeft){
//         errorCallback({name:'User Left',message:':)'})
//     }else if(userWatchingCatMeme){
//         errorCallback({name:'User watching Cat meme',message:'webDevSimplified < cat'})
//     }else{
//         callback('Thumbs up and subscribe')
//     }
// }

// watchTutorialCallback((message)=> {
//     console.log('Success: ' +message)
// },(error) => {
//     console.log(error.name + ' ' +error.message)
// })

//promise
const userLeft = true;
const userWatchingCatMeme = true;

function watchTutorialPromise(){
    return new Promise((resolve,reject) => {
        if(userLeft){
            reject({name:'User Left',message:':)'})
        }else if(userWatchingCatMeme){
            reject({name:'User watching Cat meme',message:'webDevSimplified < cat'})
        }else{
            resolve('Thumbs up and subscribe')
        }
    })

}
watchTutorialPromise().then((message)=> {
    console.log('Success: ' +message)
}).catch((error) => {
    console.log(error.name + ' ' +error.message)
})


//example 3
const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo  = new Promise((resolve,reject) => {
    resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 Recorded');
})

// give output after all promises done
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => console.log(messages))

// give output after one promise done
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => console.log(message))