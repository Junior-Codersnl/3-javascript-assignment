'use strict';


// It takes 4 parameters
const tellFortune = (numberOfChildren, partnerName, geographicLoc, jobTitle) => {
  // Return a string
  let result = `You will be a ${jobTitle} in ${geographicLoc}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  return result;
}

// Create 4 arrays and Give each array 5 random values
let numChildren = [1, 2, 3, 4, 5];
let partnerNames = ["Nora", "Amber", "Zoe", "Isabella", "Eva"];
let locations = ["Amsterdam", "Hengelo", "Rotterdam", "Maastricht", "Utrecht"];
let jobs = ["Web Developer", "Database Administrator", "Front End Developer", "Software Developer", "IT Manager"];

// Randomly select values from the arrays.
const randomlySelectValues = (parameters = []) => {
  let randOfParameterIndex = Math.floor(Math.random() * parameters.length);
  let itemOfParameter = parameters[randOfParameterIndex];
  return itemOfParameter;
}

let num = randomlySelectValues(numChildren);
let part = randomlySelectValues(partnerNames);
let loc = randomlySelectValues(locations);
let job = randomlySelectValues(jobs);


// Call the function 1 time, by passing the arrays as the argument.
console.log(tellFortune(num, part, loc, job));

//------------------------------------------------//

'use strict';

// Create an array with 2 predefined strings
const groceryArray = ["bananas", "milk"];

// Write a function 
const addToShoppingCart = grocery => { // It takes in 1 parameter
  groceryArray.push(grocery);// The push() method adds one or more elements to the end of an array
  if (groceryArray.length > 3) {
    groceryArray.shift();  // The shift() method removes the first array element
  }
  // Return a string
  let result = `You bought ${groceryArray}!`;
  return result;
}


// Call the function 3 times, each time with a different string as the argument.
console.log(addToShoppingCart("apples"));
console.log(addToShoppingCart("eggs"));
console.log(addToShoppingCart("orange juice"));


//----------------------------------------------------//

'use strict';

// Write a function It takes 1 parameter
function calculateTotalPrice(buyItem) {
  let totalPrice = 0;
  for (let i = 0; i < Object.keys(buyItem).length; i++) {
    totalPrice += Object.values(buyItem)[i];
  }
  // Return a number
  return totalPrice;
}

// Create an object with 5 properties.
let cartForParty = {
  bread: 1.5,
  chips: 1,
  cola: 2.5,
  hazelnut: 4,
  sweetmeat: 2.6
}


// Call the function 1 time, giving it the object cartForParty as an argument
console.log(calculateTotalPrice(cartForParty));


//--------------------------------------------------//

"use strict";

// Initialize x, y, z
let x = 7;
let y = 21;
let z = 13;

// The remainder / modulus operator (%) returns the remainder after (integer) division.
x = x % 3; // 7 - (3 * 2) = 1  -> 1, as three goes into 7 twice, leaving 1 left over.
y = y % 4; // 21 - (4 * 5) = 1
z = z % 2  // 13 - (2 * 6) = 1  

console.log(x);
console.log(y);
console.log(z);


//---------------------------------------------------//


'use strict'

// Declare a variable that holds an empty array
let drinkTray = [];

const drinkTypes = ["cola", "lemonade", "water"];


// Initialize a random variable
let randOfDT = Math.floor(Math.random() * 3);

// Create a loop that runs 5 times
let runTimes = 5;

for (let index = 0; index < runTimes; index++) {
  // to start with the next drink in the array i used a random value
  let indexOfDrinkTypes = (randOfDT + index) % drinkTypes.length;
  // push a drink into the drinkTray variable. 
  drinkTray.push(drinkTypes[indexOfDrinkTypes]);
}
// Log to the console: 
console.log(`Hey guys, I brought a ${drinkTray}!`);


//----------------------------------------------//


'use strict'

// Declare a variable that holds an array of 3 objects
const readingList = [
  {
    title: "The Hobbit",
    author: 'J.R.R. Tolkien',
    alreadyRead: true
  }, {
    title: "The Lord of the Rings",
    author: 'J.R.R. Tolkien',
    alreadyRead: false
  }, {
    title: "Kurt Kanunu",
    author: 'Kemal Tahir',
    alreadyRead: true
  }
];

// op through the array of books
for (let i = 0; i < readingList.length; i++) {
  // For each book, log the book title and book author
  console.log(`${readingList[i].title} by ${readingList[i].author}`)
  // Create a conditional statement to change the log depending on whether you read it yet or not. 
  if (readingList[i].alreadyRead) {
    console.log(`You already read ${readingList[i].title}`);
  } else {
    console.log(`You still need to read ${readingList[i].title}`);
  }
}