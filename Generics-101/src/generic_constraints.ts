// Generic Classes


interface HasId {
    id: number;
}
// extends is the constraint. Must gave the id property
class DataCollection<T extends HasId> {
    // Now data can be any type
    constructor(private data: T[]) { }


    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll(): T[] {
        return this.data;
    }
    add(val: T): T[] {
        this.data.push(val);
        return this.data;
    }

    deleteOne(id: number): void {
        this.data = this.data.filter(item => item.id !== id);
    }
}

interface User {
    name: string;
    score: number;
    id: number;
}

const users = new DataCollection<User>([
    { name: "Brian", score: 4200, id: 1 },
    { name: "Gülden", score: 1200, id: 2 },
    { name: "Astra", score: 2200, id: 3 },
    { name: "Neby", score: 7200, id: 4 },
]);


users.add({ name: "Leeloo", score: 99999, id: 5 });

console.log("Load One:", users.loadOne());
console.log("Load All:", users.loadAll());