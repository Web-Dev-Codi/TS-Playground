// Tuples
// Allows an array of values of diffrent types in a specific order

// Types must apper in order declared
// let person: [string, number, boolean] = ["A String", 34, true];


// Tuples examples

let hsla: [number, string, string, number];
hsla = [233, "100%", "55%", 1];
console.log("hsla:", hsla);

let xy: [number, number];
xy = [67.6, 87.6];
console.log("xy:", xy);

// Inside a function

function useCoords(): [number, number] {
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
let user: [name: string, age: number];

user = ["Astra", 2];

