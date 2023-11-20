"use strict";
// Intersection type
function addIdtovalue(val) {
    const id = Math.floor(Math.random() * 234);
    return Object.assign(Object.assign({}, val), { id });
}
// Remember to pass in the type before the ()
const post = addIdtovalue({ title: "Astra is the Best", thumbsUp: 4000 });
console.log("post:", post);
