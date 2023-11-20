// Generics 101

function logAndReturnString(val: string): string {
	console.log(val);
	return val;
}

function logAndReturnNumber(val: number): number {
	console.log(val);
	return val;
}

function logAndReturnBoolean(val: boolean): boolean {
	console.log(val);
	return val;
}

// Creating a generic
// T stands for Type and represent the data type we pass to this function
// The T inside the () has to match the type inside <>
function logAndReturnValue<T>(val: T): T {
	console.log(val);
	return val;
}

// We must declar the type inside angle brackets and use a mathcing type.
const dude = logAndReturnValue<string>("Sub Dude!");
const dudetwo = logAndReturnValue<number>(2023);
const dudethree = logAndReturnValue<number[]>([2, 3, 4]);
const dudefour = logAndReturnValue<boolean>(true);
const dudefive = logAndReturnValue<string[]>(["Hi", "Dude", "Generics", "Rock"]);


// function getRandomArrayValue<T>(values: T[]): T {
// 	const i = Math.floor(Math.random() * values.length);
// 	return values[i];
// }

// interface User {
// 	name: string,
// 	score: number,
// }

// const users: User[] = [
// 	{ name: "Brian", score: 100 },
// 	{ name: "Gülden", score: 134 },
// 	{ name: "Astra", score: 162 },
// 	{ name: "Neby", score: 432 },
// ];

// const randomUser = getRandomArrayValue<User>(users)
// console.log("randomUser:", randomUser);
