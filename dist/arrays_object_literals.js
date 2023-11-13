"use strict";
// Arrays
let names = ["Gülden", "Astra", "Neby"];
let ages = [25, 35, 66, 45];
names.push("Cordisco");
ages.push(32);
console.log(`names:`, names);
console.log(`ages:`, ages);
// type inference with arrays
let fruits = ["apple", "peachs", "bananas", "apples"];
fruits.push("grapes");
console.log("fruits:", fruits);
const f = fruits[3];
console.log("f:", f);
//Object Literals
let user = {
    firstName: "Brian",
    age: 100,
    id: 243
};
user.firstName = "Gülden";
user.id = 22;
user.age = 35;
console.log("user:", user);
// Type inference with object literals
let person = {
    name: "Astra",
    age: 2,
    id: 34
};
person.name = "Brian";
person.age = 2;
person.id = 44;
console.log("person:", person);
