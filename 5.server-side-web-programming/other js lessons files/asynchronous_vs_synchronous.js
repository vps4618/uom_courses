let a = 1;
let b = 2;

// asynchronous function
setTimeout(() => {
    console.log(a);
},100)

a = 10
// another async
// fetch('/').then(() => console.log('fetch'))

console.log('synchronous')
console.log(a);
console.log(b);

