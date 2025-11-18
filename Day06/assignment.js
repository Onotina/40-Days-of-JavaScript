/**
 Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

    DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.
*/

/*
1. Write a Function to Convert Celsius to Fahrenheit

Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/
function celsiusToFahrenheit(celsius) {
    console.log(`${celsius}°C: ${celsius * 1.8 + 32}°F`);
}
celsiusToFahrenheit(180);

/*
2. Create a Function to Find the Maximum of Two Numbers

Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
*/
function findMax(num1, num2) {
    if(num1 > num2) 
        return num1;
    else if(num2 > num1) 
        return num1;
    else if(num1 === num2) 
        return "They are both the same";
}
console.log(`The largest number between is ${findMax(20, 35)}`);
console.log(`The largest number between is ${findMax(-25, -35)}`);
console.log(`The largest number between is: ${findMax(10, 10)}`);

/*
3. Function to Check if a String is a Palindrome

Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
*/
function isPalindrome(str) {
    let reverse = "";

    for(let i = 0; i < str.length; i++) {
        reverse = str.charAt(i) + reverse;
    }

    if (str == reverse) 
        return true;
    else 
        return false; 
}
console.log(isPalindrome("rice"));
console.log(isPalindrome("right"));
console.log(isPalindrome("dad"));

/*
4. Write a Function to Find Factorial of a Number

Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
*/
function factorial(n) {
    // base case
    if (n === 1)
        return 1

    // recursive case 
    return n * factorial(n - 1)
}
console.log(factorial(10))

/*
5. Write a function to Count Vowels in a String

Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
*/
function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "a"|| str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
            count = count + 1;
        }
    }

    return count;
}
console.log(`The number of vowels is: ${countVowels("College")}`);
console.log(`The number of vowels is: ${countVowels("onotina")}`);
console.log(`The number of vowels is: ${countVowels("you")}`);
console.log(`The number of vowels is: ${countVowels("lyghdf")}`);

/*
6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
*/
function capitalizeWords(sentence) {
    let newSentence = "";

    for(let i = 0; i < sentence.length; i++) {
        /*
            There are you two conditions to confirm whether a letter is the first letter of a word:
            1. It's the first letter in the sentence
            2. If it comes after a space
        */
        if (i === 0) { 
            newSentence = newSentence + sentence.charAt(i).toUpperCase();
        } else if (sentence.charAt(i - 1) === " ") {
            newSentence = newSentence + sentence.charAt(i).toUpperCase();
        } else {
            newSentence = newSentence + sentence.charAt(i);
        }
    }

    return newSentence;
}
console.log(capitalizeWords("hey world. how are you"));

/*
7. Use an IIFE to Print “Hello, JavaScript!”

Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.
*/
(function (){
    console.log("Hello, JavaScript!");
}());

/*
8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
*/
function greet(name, callback) {
    callback(name);
}
greet("Onotina Imoudu", (name) => {
    console.log("Hello world. My name is " + name);
});

/*
9. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {
    f1();
}
f2();
```
*/
// It pushes f2 to the call stack
// It pushes f1 to the call stack
// It pushes f1 off the call stack
// It pushes f2 off the call stack

/*
## 10. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```
*/
// It pushes f2 to the call stack
// It pushes f2 off the call stack
// It pushes f3 to the call stack
// It pushes f3 off the call stack 
// It pushes f1 to the call stack
// It pushes f1 off the call stack
// It pushes f3 off the call stack
// Produces an error, because there is no function in the global memory space