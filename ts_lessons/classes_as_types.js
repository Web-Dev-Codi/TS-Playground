"use strict";
// // Classes as Types
// type Base = "classic" | "thick" | "thin" | "garlic";
// class Pizza {
//     constructor(title: string, price: number) {
//         this.title = title;
//         this.price = price;
//     }
//     private title: string;
//     private price: number;
//     private base: Base = "classic";
//     private toppings: string[] = [];
//     addTopping(topping: string): void {
//         this.toppings.push(topping);
//     }
//     removeTopping(topping: string): void {
//         this.toppings = this.toppings.filter((t) => t !== topping);
//     }
//     selectBase(b: Base): void {
//         this.base = b;
//     }
// }
// const pizzaOne: Pizza = new Pizza("Astra Special", 15);
// const pizzaTwo: Pizza = new Pizza("Neby Special", 22);
// function addRonitoPizza(pizzas: Pizza[]): void {
//     for (const p of pizzas) {
//         p.addTopping("Roni")
//     }
// }
// addRonitoPizza([pizzaOne, pizzaTwo])
// console.log(pizzaOne,pizzaTwo);
