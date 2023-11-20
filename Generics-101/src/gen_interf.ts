// Generic Intefaces

// Collection could be anything. Movies, Books, Tv Shows, VGs
// Add the T, but could be any letter you choose
interface Collection<T> {
    data: T[];
    name: string;
}

const collectionOne: Collection<string> = {
    data: ["Cool", "Dude", "Awesome"],
    name: "Fun things to say"
};
console.log("collectionOne:", collectionOne);
const collectionTwo: Collection<number> = {
    data: [5, 6, 5, 3, 5],
    name: "Numbers List"
};
console.log("collectionTwo:", collectionTwo);

// The type becomes whatever data type you pass into the functions argument
function randomCollectionItem<T>(c: Collection<T>): T {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}

const resultsOne = randomCollectionItem<string>(collectionOne);
const resultsTwo = randomCollectionItem(collectionTwo);
console.log("resultsOne:", resultsOne);
console.log("resultsTwo:", resultsTwo);
