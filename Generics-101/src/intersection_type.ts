// Intersection type

interface HasId {
    id: number,
}

function addIdtovalue<T>(val: T): T & HasId {
    const id = Math.floor(Math.random() * 234);

    return { ...val, id };
}

interface Post {
    title: string,
    thumbsUp: number,
}

// Remember to pass in the type before the ()
const post = addIdtovalue<Post>({ title: "Astra is the Best", thumbsUp: 4000 });
console.log("post:", post);
