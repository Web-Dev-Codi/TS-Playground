"use strict";
// Abstract Classes
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - €${this.price}`;
    }
    format() {
        return `This menu item is called ${this.title} and is €${this.price}`;
    }
}
// Pizza inherates MenuItem constructor
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizzaOne = new Pizza("Astra Special", 15);
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizzaOne);
