"use strict";
// Tuples
// Allows an array of values of diffrent types in a specific order
// Types must apper in order declared
// let person: [string, number, boolean] = ["A String", 34, true];
// Tuples examples
let hsla;
hsla = [233, "100%", "55%", 1];
console.log("hsla:", hsla);
let xy;
xy = [67.6, 87.6];
console.log("xy:", xy);
// Inside a function
function useCoords() {
    // Get cords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
// Destructure the function
const [lat, long] = useCoords();
console.log("long:", long);
console.log("lat:", lat);
// Named Tuples
// Identifying the types. ARE NOT PROPERTY NAMES
let user;
user = ["Astra", 2];
