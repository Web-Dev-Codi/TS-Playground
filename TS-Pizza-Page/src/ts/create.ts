import { PizzaProps, Pizza } from "./models/Pizza";

// Form Data API
const form = document.querySelector(".create") as HTMLFormElement;

form.addEventListener('submit', async (e) => {
    // Preventing page reload on submission
    e.preventDefault();
    // Storing the formdata object in a variable
    const data = new FormData(form);
    // Be sure to apply name attributes to each input to enable FormData functionality
    const newPizza: PizzaProps = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        toppings: data.getAll('toppings') as string[],
        price: parseInt(data.get('price') as string),
    };
    // Storing the inputs in a variable to be sent to JSON Server
    const res = await Pizza.save(newPizza);

    // Log an error on failed pizza submission
    if (!res.ok) {
        console.log("not able to save the pizza home slice!!!!");
    }
    // if successful pizza submission retrun to home page
    if (res.ok) {
        // Take us back to the home screen
        window.location.href = "/";
    }
});

