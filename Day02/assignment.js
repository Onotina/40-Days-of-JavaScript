/*
    ASSIGNMENT TASKS
    ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
    ✅ Task 2: Print the values to the console.
    ✅ Task 3: Try reassigning values to let and const variables and observe errors.
    ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
*/

// Task 1
let name, age, isStudent, language;
name = "smith";
age = 24;
isStudent = false;
language = "Java";

// Task 2
console.log("The person's name is", name, "He is", 24, "years old. Current a student:", isStudent, "and his favorite programming language is", language);

// Task 3
age = 25;
console.log(name, "will be", age, "in 2026");

const nationality = "Kenyan";
// nationality = "Malawian";
console.log(nationality);

// Task 4
let parent = {
    name: "John",
    children: ["Ashley", "Alex", "Aston"],
    pickUp: true,
    idNumber: 502,
};
console.log("The parent is", parent.name);
console.log(parent.name, "has", parent.children.length, "children going to our school");

parent.children[3] = "Bree";
console.log(parent.name, "has a new children attending our school. Her name is", parent.children[3]); 

