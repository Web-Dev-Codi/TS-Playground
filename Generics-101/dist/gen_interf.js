"use strict";
// Generic Intefaces
const collectionOne = {
    data: ["Cool", "Dude", "Awesome"],
    name: "Fun things to say"
};
console.log("collectionOne:", collectionOne);
const collectionTwo = {
    data: [5, 6, 5, 3, 5],
    name: "Numbers List"
};
console.log("collectionTwo:", collectionTwo);
// The type becomes whatever data type you pass into the functions argument
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const resultsOne = randomCollectionItem(collectionOne);
const resultsTwo = randomCollectionItem(collectionTwo);
console.log("resultsOne:", resultsOne);
console.log("resultsTwo:", resultsTwo);
