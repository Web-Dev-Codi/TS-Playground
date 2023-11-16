// classes 101

// A class is a blueprint for an object. How they look and behave

type Base = "classic" | "thick" | "thin" | "garlic";

// Allowes to create new Pizza Objects unlike interfaces
class Pizza {
    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
    title: string;
    price: number;
    base: Base = "classic";
    toppings: string[] = [];

    addTopping(topping: string): void {
        this.toppings.push(topping);
    }

    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b: Base): void {
        this.base = b;
    }
}

const pizzaOne = new Pizza("Astra Special", 23);
pizzaOne.selectBase("thick")
pizzaOne.addTopping("add love");
pizzaOne.addTopping("more love");
pizzaOne.removeTopping("add love")
console.log("pizzaOne:", pizzaOne);

