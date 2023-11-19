
import { Pizza, PizzaProps } from "./models/Pizza";

// Grabbing the element with a class of root for rendering the pizzas to the DOM
// Adding the ! to let TS know that the element available
const rootElement = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaProps): string {
    return `
    <div class="pizza">
    <h2>${pizza.title}</h2>
    <p class="toppings">${pizza.toppings.join(", ")}</p>
    <p>${pizza.description}</p>
    <span>€${pizza.price}</span>
    </div>
    `;
}

function renderTemplate(templates: string[], parent: Element) {
    const templateElement = document.createElement("template");

    for (const t of templates) {
        templateElement.innerHTML += t;
    }

    parent.append(templateElement.content);
}

document.addEventListener("DOMContentLoaded", async () => {
    // Load/fetch Pizza Data
    const pizzas = await Pizza.loadAll();
    console.log("pizzas:", pizzas);
    
    // Create template string for each pizza
    const pizzaTemplate = pizzas.map(createPizzaTemplate);

    // render pizza template to the DOM
    renderTemplate(pizzaTemplate, rootElement);

});