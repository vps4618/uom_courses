/*
JSON Example
------------
Name  - string
Age - Number
Telephone numbers - Array
isMarried - Boolean
Address - Object
    Street name - string
    City - string
    postal code - number
*/

let user = {
    "name" : "B.D.Vishwa Praveen",
    "age" : 17,
    "telephoneNumbers" : ["0772923594","0713593086"],
    "isMarried" : false,
    "address" : {
        "streetName" : "Bulathsinhala",
        "city" : "Ingiriya",
        "postalCode" : 100526
    }
}

console.log(user.address.postalCode);