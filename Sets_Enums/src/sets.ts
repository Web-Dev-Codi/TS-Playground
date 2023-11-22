// Sets in typescript

const names = new Set<string>();

names.add("Gülden");
names.add("Astra");
names.add("Neby");
names.add("Brian");
console.log("names:", names);
// sets in custom types
interface User {
	email: string;
	score: number;
}

const user1: User = {email: "cordiscobrian@gmail.com", score: 23217}
const user2: User = { email: "g.bayar@hotmail.com", score: 42069 }

const users = new Set<User>()

users.add(user1)
users.add(user2)
console.log("users:", users);
// sets as function arguments

function logUserEmails(users: Set<User>): void {
	users.forEach(user => console.log(user.email))
}
logUserEmails(users)