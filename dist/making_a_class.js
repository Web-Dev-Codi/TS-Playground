"use strict";
// classes 101
// Allowes to create new Pizza Objects unlike interfaces
class Pizza {
    constructor(title, price) {
        this.base = "classic";
        this.toppings = [];
        this.title = title;
        this.price = price;
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
const pizzaOne = new Pizza("Astra Special", 23);
pizzaOne.selectBase("thick");
pizzaOne.addTopping("add love");
pizzaOne.addTopping("more love");
pizzaOne.removeTopping("add love");
console.log("pizzaOne:", pizzaOne);
