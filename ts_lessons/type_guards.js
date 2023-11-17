"use strict";
// Type guards
function swapIdType(id) {
    if (typeof id === "string") {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idtwo = swapIdType("2");
console.log("idOne:", idOne);
console.log("idtwo:", idtwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
