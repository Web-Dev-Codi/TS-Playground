"use strict";
// Generics 101
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// Creating a generic
// T stands for Type and represent the data type we pass to this function
// The T inside the () has to match the type inside <>
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
// We must declar the type inside angle brackets and use a mathcing type.
const dude = logAndReturnValue("Sub Dude!");
const dudetwo = logAndReturnValue(2023);
const dudethree = logAndReturnValue([2, 3, 4]);
const dudefour = logAndReturnValue(true);
const dudefive = logAndReturnValue(["Hi", "Dude", "Generics", "Rock"]);
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
