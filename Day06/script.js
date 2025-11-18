console.log("*******************Day 06*********************");

// Declaring A Function
function printThis() {
    console.log("Printing...")
}
printThis(); // Uses the function printThis()


// Function as an Expression 
let sayName = function() {
    console.log("My name is Onotina Imoudu");
}

console.log(sayName); // Print to the console, the entire function

sayName(); // Use the function stored in sayMyName


// Parameters & Arguments
function sum(a, b, c) {
    const sumResult = a + b + c;
    console.log("The result of adding", a, b, c, "is", sumResult);
}
sum(34, 50, 11);


// Return Statement
function getName(name) {
    return "My name is " + name;
}
function getAge(age) {
    return age;
}
let age = getAge(24)

console.log(`${getName("Onotina Imoudu")}. I am ${age} years old`);


// Default Parameter
function calc(a=0, b=0) {
    return 2000 * (a + b);
}
console.log(calc(10, 50));
console.log(calc(10));
console.log(calc());


// Rest Parameter
function restFunc(a, b, ...rest) {
    console.log(a, b, ...rest);
}
restFunc(1, 2, 3, 5, 6, 7, 9, 12, 13, 15, 17);


// Nested Function
function outer() {
    console.log("Outer");

    // Declares a function called inner
    function inner() {
        console.log("Inner");
    }
    // Calls the function inner
    inner();
}
outer();


// Callback Function
const year = 2025;
function school(college) {
    // The first college I went to
    console.log("Northeastern University")

    // If the year is 2025, college I go to is:
    if(year === 2025) {
        college();
    }
}

school(function() { 
    console.log("Miva Open University");
}) // Using the Function


// Pure Function

function greeting(name) {
    return "Hello " + name;
}
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));


// Arrouw Function
let greetMe = (greetingMsg) => greetingMsg + " great";

console.log(greetMe("Hola"));

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("IIFE");
})();
(function(count) {
    console.log("IIFE", count);
})(1);


// Recursion
function fetchWater(count) {
    console.log("Fetching Water....", count);

    // Base Case
    if (count === 0) {
        console.log("No more water to fetch...")
        return;
    }

    // Recursive Case
    fetchWater(count - 1)
}
fetchWater(5);