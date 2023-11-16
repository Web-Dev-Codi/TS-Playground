interface hasQuantity {
    quantity: number,
}

const something: hasQuantity = { quantity: 455 };


function printQuantity(item: hasQuantity): void {
    console.log(`the auntity of the item is ${item.quantity}`);
}

const fruit = {
    name: "mango",
    quantity: 50,
};

const vehicle = {
    type: "car",
    quantity: 3,
};

const person = {
    name: "Brian",
    age: 40
};

printQuantity(fruit);
printQuantity(vehicle);
printQuantity(person);