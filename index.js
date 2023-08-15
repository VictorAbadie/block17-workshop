// Before you begin coding, be sure that you:
// a. Cleaned up the coffee_data.js file (Check)

// b. Connect the coffee_data.js file to this index.js file. (Working)
const coffeeMenu = require("/home/victorabadie/coursework/block17/block17-workshop/coffee_data_starter.js")
    // console.log(coffeeMenu);

// PROMPT 2:
// Print an array of all the drinks.

const allDrinks = (item) => {
    return item.name;
} 
// console.table(coffeeMenu.map(allDrinks))


// PROMPT 3
// Print an array of drinks that cost 5 and under.

const drinksUnder5 = (item) => {
    return item.price <= 5;
}
// console.table(coffeeMenu.filter(drinksUnder5))


// PROMPT 4
// Print an array of drinks that are priced at an even number.

const evenDrinkPrice = (item) => {
    if (item.price % 2 === 0)
    return item.name;
}
// console.table(coffeeMenu.filter(evenDrinkPrice))


// PROMPT 5
// Print the total if you were to order one of every drink.

// *****Total Item Prices******

const pricesTotal = (item) => {
    return item.price;
}

const totalPrice = coffeeMenu.map(pricesTotal)

// ****** One of every item ******

const menuCostTotal = (acc, currentValue) => {
    return acc + currentValue;
}
const totalCost = totalPrice.reduce(menuCostTotal)

// console.log(totalCost)


// PROMPT 6
// Print an array with all the drinks that are seasonal.

const seasonalDrinks = (item) => {
    if (item.seasonal === true)
    return item.name
}
// console.table(coffeeMenu.filter(seasonalDrinks))


// PROMPT 7
// Print all the seasonal drinks with the words "with imported beans" after the item name.
// For example: "affogato with imported beans"

const seasonalDrinksWithBeans = coffeeMenu
.filter((item) => item.seasonal)
.map ((item) => `${item.name} with imported beans!`);

console.table(seasonalDrinksWithBeans)
