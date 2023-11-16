"use strict";
// Inheritance
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - €${this.price}`;
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
function printMenuItem(item) {
    console.log(item.details);
}
printMenuItem(pizzaOne);
