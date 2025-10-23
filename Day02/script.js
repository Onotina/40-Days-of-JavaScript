console.log("Welcome to Day 2");

// Initializing Variable
let fruit = "mango";
let vegetable = "cauriflower";
console.log("My favorite fruit is", fruit, "and my favorite vegatable is", vegetable);

// Pass By Value
let country = "Nigeria";
let birth_country = "Ethiopia";
console.log("My nationality is", country, "and I was born in", birth_country);

country = birth_country;
console.log("I stayed in", country, "in summer!");
console.log("My birth country is still", birth_country);


// Types of Variable Declaration
var school = "Northeastern University";
console.log(school);
var school = "Miva Open University";
console.log(school);

const NATIONALITY = "Nigerian";
console.log("My nationality is", NATIONALITY);  

// Multiple Declaration
let name, department, university;
console.log("My name is", name);

/*---- Non-Primitive Data Types ----*/
// Objects 
let student = {
    name: "Alice",
    age: 21,
    department: "Computer Science",
    isEnrolled: true,
};
console.log("The name of the student is", student.name, "She is ", student.age, "years old");

// Array
let arrayName = [1, 2, 4, 5];
console.log(arrayName[0]);


/*
    ** Primitive Data Types **
        String - Text values
        Number - Numeric values
        Boolean - True/False
        Undefined - A variable is declared but not assigned
        Null - Represents nothing 
        BigInt - Large numbers
        Symbol - Unique Identifiers

    ** Non-Primitive (Reference) Data Types **
        Object - Collection of key-value pairs
        Array - Ordered list of values
        Function - Code that can be executed
 */