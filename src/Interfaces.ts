// Interfaces
// Should start with a capital letter

interface Author {
    name: string,
    avatar: string,
}


// authorOne adhares to the Author type
const authorOne: Author = { name: "Brian", avatar: "/img/brian.png" };

console.log("authorOne:", authorOne);
interface Post {
    title: string,
    body: string,
    tags: string[],
    created_at: Date,
    author: Author;
}

const newPost: Post = {
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

function createPost(post: Post) {
    console.log(`Created post:  ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// With Arrays

let posts: Post[] = [];

posts.push(newPost)
console.log("posts:", posts);