// functions
// a and b must be numbers and return a number
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

console.log("addTwoNumbers:", addTwoNumbers(4, 7));

// Arrow function
const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b;
};
console.log("subtractTwoNumbers:", subtractTwoNumbers(55, 33));


// Function with Array
function addAllNumbers(items: number[]): number {
    // reduce is allowed since we are working with arrays
    const total = items.reduce((a, c) => a + c, 0);
    return total;
};

console.log("addAllNumbers:", addAllNumbers([5, 7, 9, 11, 3, 2, 1]));


// Explicit Return

function formatGreeting(name: string, greeting: string): string {
    return `${greeting}, ${name}`
}

const greeting = formatGreeting("Brian", "Hello");
console.log("greeting:", greeting);

