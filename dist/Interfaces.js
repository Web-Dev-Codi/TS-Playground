"use strict";
// Interfaces
// Should start with a capital letter
// authorOne adhares to the Author type
const authorOne = { name: "Brian", avatar: "/img/brian.png" };
console.log("authorOne:", authorOne);
const newPost = {
    title: "Love TS",
    body: "This is the Body",
    tags: ["Awesome", "Shit"],
    created_at: new Date(),
    author: {
        name: "Brian Cordisco",
        avatar: "img/cool/ts.jpg"
    }
};
// Interfaces as function arguments
function createPost(post) {
    return console.log(newPost);
}
