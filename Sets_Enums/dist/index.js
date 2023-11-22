"use strict";
// Sets in typescript
const names = new Set();
names.add("Gülden");
names.add("Astra");
names.add("Neby");
names.add("Brian");
console.log("names:", names);
const user1 = { email: "cordiscobrian@gmail.com", score: 23217 };
const user2 = { email: "g.bayar@hotmail.com", score: 42069 };
const users = new Set();
users.add(user1);
users.add(user2);
console.log("users:", users);
// sets as function arguments
function logUserEmails(users) {
    users.forEach(user => console.log(user.email));
}
logUserEmails(users);
