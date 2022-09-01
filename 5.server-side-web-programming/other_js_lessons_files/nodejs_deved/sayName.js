const sayName = () => {
    console.log('Hi Vishwa Praveen');
}
const sayAddress = () => {
    console.log('No 207 A ,Imbulahena Urugala,Ingiriya.');
}

// exporting something
// export one item -> module.exports = sayName;
module.exports.sayName = sayName;
module.exports.sayAddress =sayAddress;