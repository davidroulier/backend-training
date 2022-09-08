/* First of all, there are some TypeScript issues within this file. Fix them before you can do anything */

type TPossibleFruitsCategories = "pits" | "citrus";

interface IFruit {
  name: string;
  category: TPossibleFruitsCategories;
  price: string;
}

const FRUITS: IFruit = [
  { name: "Orange", category: "citrus", pricePerKilo: 5 },
  { name: "Grapefruit", category: "citrus", pricePerKilo: 6 },
  { name: "Banana", category: "berries", pricePerKilo: 3 },
  { name: "Blueberry", category: "berries", pricePerKilo: 10 },
];

/* Exercise 1
 You have to display each fruit in the console, formatted in a sentence like this :
 "This is the fruit *name of the fruit*"
*/
export const showMeTheFruits = () => {
  //complete the code
};

/* Exercise 2
 You have to isolate only the fruits that belongs to the "citrus" category and show them in the console
*/
export const showCitrusFruits = () => {
  //complete the code
};

/* Exercise 3
You have to show all the fruits in the console from the least expensive to the most expensive
*/
export const showFruitsByAscPrice = () => {
  // complete the code
};

/* Exercise 4
You have to show all the fruits in the console from the most expensive to the least expensive
*/
export const showFruitsSortedByDescPrice = () => {
  // complete the code
};

/* Exercise 5
First you must create an isolated function that calculates the price of a fruit depending on the quantity you want
Then you have to display a sentence like this one : "This is the fruit *name of the fruit*. If you want *number of kilos* of it, it will cost *price*€" for every fruit
Finally you have to find a good name for the function
*/
export const thisFunctionDoesNotHaveAGoodName = () => {
  //complete the code
};
