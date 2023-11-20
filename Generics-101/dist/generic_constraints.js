"use strict";
// Generic Classes
// extends is the constraint. Must gave the id property
class DataCollection {
    // Now data can be any type
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
}
const users = new DataCollection([
    { name: "Brian", score: 4200, id: 1 },
    { name: "Gülden", score: 1200, id: 2 },
    { name: "Astra", score: 2200, id: 3 },
    { name: "Neby", score: 7200, id: 4 },
]);
users.add({ name: "Leeloo", score: 99999, id: 5 });
console.log("Load One:", users.loadOne());
console.log("Load All:", users.loadAll());
