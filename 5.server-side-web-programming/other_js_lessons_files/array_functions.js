const items = [
    {name : "Bike", price :100},
    {name : "TV", price :100},
    {name : "Album", price :10},
    {name : "Book", price :5},
    {name : "Phone", price :500},
    {name : "Computer", price :1000},
    {name : "Keyboard", price :25}
]


// filtering items under a condition
const filteredItems = items.filter((item) => {
    return item.price === 100
})

console.log(filteredItems);

// map function help to convert an array to new array
const itemNames = items.map((item) => {
    return item.name
})

console.log(itemNames);

// find in item
const foundItem = items.find((item) => {
    return item.name ==="Bike"
})

console.log(foundItem);

//for each method
items.forEach((item) => {
    console.log(item.price)
})

// checking some having some conditions
const hasInexpensiveItem = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItem);


// checking every item having some conditions
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems);


//performing some functions in array
// calculating total price
const totalPrice =  items.reduce((currentTotal,item) => {
    return item.price + currentTotal
},0)

console.log(totalPrice);

// checking whether something present in array or not
const array = [1,2,3,4,5];

const includesTwo = array.includes(2);
console.log(includesTwo);


