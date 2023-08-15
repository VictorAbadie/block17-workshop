// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers. (Check)
// b. All items should be strings. (Check)
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "Cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "Espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "Latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "Affogato",
        price: 9,
        seasonal: true,
    },
    {
        name: "Macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "Americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "Iced Coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "Frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "Cuban Espresso",
        price: 10,
        seasonal: true,
    }
]

module.exports = coffeeMenu