# 3-javascript

Youtube tutorial

https://www.youtube.com/watch?v=k-G9yvnqFUo&list=PLWctyKyPphPj2KD1CTuBa_xjK8zjRS9jX

Ilgili siteler

— https://www.w3schools.com/html/

— https://developer.mozilla.org/en-US/

Onemli Basliklar ( Try it yourself yapilacak)

— https://www.w3schools.com/js/default.asp ('JS Tutorial' altindaki basliklar, 'JS Forms'a kadar)


# Assignment

Exercise 1: Hello world!

Write a statement, using the console.log() function. It should fulfill the following requirements:

It takes a string as an argument
The string should contain the message "Hello world!"
Execute the function 10 times, each time using the phrase in different languages
For example:

Halo, dunia! // Indonesian
Ciao, mondo! // Italian
Hola, mundo! // Spanish
Finished? Using the command line, navigate to your js-exercises folder and type in the following to test your code:

foo@bar:~$ node FILENAME.js
Expected output: It should show the message Hello world! in 10 different languages.

Exercise 2: Error debugging

Consider the following code:

console.log('I'm awesome'!;
Here are the requirements:

Copy the code in your .js file and run it in the command line using node.
You will see that you will get a SyntaxError.

Correct the mistake.
Hint: the SyntaxError message will give you some indication of what the error might be, but figure out yourself how to correct it!

Expected output: When done right, the command line should show the message I'm awesome!.

Exercise 3: Log the number

Follow the steps. Make sure that each step is written on the line after.

First, declare your variable numberX. Do not initialize it (which means, don't give it a starting value) yet
Add a console.log statement that explains in words what you think the value of x is
Add a console.log statement that logs the value of numberX.
Now initialize your variable numberX with a number (also called an integer in computer science terms)
Next, add a console.log statement that explains what you think the value of numberX is
Add a console.log statement that logs the value of numberX
Exercise 4: Log the string

Follow the steps. Make sure that each step is written on the line after.

Declare a variable myString and assign a string to it. Use your full name, including spaces, as the content for the string.
Write a console.log statement in which you explain in words what you think the value of the string is.
Now console.log the variable myString.
Now reassign to the variable myString a new string.
Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
Now console.log myString again.
Exercise 5: Round a number and log it

Follow the steps. Make sure that each step is written on the line after.

Declare a variable z and assign the number 7.25 to it.
Write a console.log statement in which you log the value of z.
Declare another variable a that has the value of z but rounded to the nearest integer.
Write a console.log statement in which you log the value of a.
So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
Write a console.log statement in which you log the value of the highest value.
Exercise 6: Log an array of animals

Follow the steps. Make sure that each step is written on the line after.

Declare variable and assign to it an empty array. Make sure that the name of the variable indicates it contains more than 1 item. For example items instead of item.
Write a console.log statement that explains in words what you think the value of the array is.
Write a console.log statement that logs the array.
Create a new variable with an array that has 3 of your favorite animals, each in a different string. Make sure the name of the variables says something about what the variable contains.
Write a console.log statement that logs the second array.
Add a statement that adds another string ("Piglet)" to the array of animals.
Write a console.log statement that logs the second array!
Exercise 7: Log the length of a string

Follow the steps. Make sure that each step is written on the line after.

Declare a variable called mySentence and initialize it with the following string: "Programming is so interesting!".
Figure out (using Google) how to get the length of mySentence.
Write a console.log statement to log the length of mySentence.
Exercise 8: Type checker

Create a function that fulfills the following requirements:

Takes in 2 arguments
Check the data type of each
Compares each data type
Logs to the console the message SAME TYPE if they are the same type. If they are different types log Not the same....
Follow the steps:

Declare 4 variables: 2 must be strings and 2 must be objects
Create 6 conditional statements, where for each you check if the data type of one variable is the same as the other
Find out how to check the type of a variable
Write 2 console.log statements to log the type of 2 variables, each with a different data type
Now compare the types of your different variables with one another
Log Not the same... when the types are different
Here's an incomplete example of how it could look:

// Declare all variables
let x = 9;
let y = 67;

// Check data type
console.log(...);

// Check if data type is the same
if (...) {
    console.log('SAME TYPE');
}
Exercise 9: Log the remainder

Answer the following questions. For each, write in comments what the answer is followed by how you came to that conclusion:

If x equals 7, and the only other statement is x = x % 3, what would be the value of x after the calculation?
If y equals 21, and the only other statement is y = y % 4, what would be the value of y after the calculation?
If z equals 13, and the only other statement is z = z % 2, what would be the value of z after the calculation?
Exercise 10: Compare arrays

Follow the steps:

Declare 2 variables, that each hold an array. The first array should have 4 items, the second 7 items
Find out how to get the length of each array. Write a console.log statement that shows the length of each array
const array = ["hello", 123, true, { name: "Noer" }];

console.log('The length of the array is...' + ...);
Write a conditional statement that checks if both are of equal length. If they are, log to the console They are the same!, if not log Two different sizes
