console.log("Welcome to Day 3");

/*** Arithmetic Operators ***/
let a = 10;
let b = 20;
let c = 4;

console.log("a + b is", a + b);
console.log("a - b is", a - b);
console.log("a * b is", a * b);
console.log("a / b is", a / b);
console.log("a ^ b is", a ** 3); // Exponential
console.log("a % c is", a % c); // Remainder

let count = 5;
console.log("count = count + 1:", count++); // Post Increment
console.log(count);

count = 5;
console.log("count = count + 1:", ++count); // Pre Increment
console.log(count);


/*** Comparison Operator ***/
console.log("**** Comparison Operators ****")
console.log("Is 4 == 5:", 4 == 5); // Loosely Equality
console.log("Is 0 == false:", 0 == false);
console.log("Is 3 == '3':", 3 == '3');
console.log("Is 3 === '3':", 3 === '3'); // Strict Equality
console.log("Is null === null:", null === null);
console.log("Is null === undefined:", null === undefined);

let person1 = {"name": "tapaScript"};
let person2 = {"name": "tapaScript"};

console.log("Is person1 === person2:", person1 === person2)


/*** Logical Operator ***/
console.log("**** Logical Operators ****");
// AND = &&
console.log("true && true", true && true);
console.log("true && false", true && false);
console.log("false && true", false && true);
console.log("false && false", false && false);

// if the first operand can be converted to false it returns the first operand
// otherwise it returns the second
console.log("Cow && Horse:", 'Cow' && 'Horse'); 

// OR = ||
console.log("true || true", true || true);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("false || false", false || false);

// if the first operand can be converted to true it returns the first operand
// otherwise it returns the second
console.log("Cow || Horse:", 'Cow' || 'Horse'); 

// NOT = !
console.log("!true", !true);
console.log("!false", !false);

// NULLISH = ??
/* if the first operands is null or underfined, return the second otherwise   
   return the second */
console.log("null ?? Northeastern:", null ?? "Northeastern");
console.log("undefined ?? 56:", undefined ?? 56);
console.log("House ?? null:", 'House' ?? null);


/*** Conditional (ternary) Operator ***/
console.log("**** Conditional (ternary) Operator ****");
let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Junior Citizen");


/*** Bitwise Operators ***/
console.log("**** Bitwise Operator ****");
console.log(15 & 9); 
    // 15 = 8 + 4 + 2 + 1 = 1111
     // 9 = 8 + 0 + 0 + 1 = 1001
     // 1111 & 1001 = 1001 (9)
console.log(15 | 9);
    // 15 = 1111, 9 = 1001
    // 1111 or 1001 = 1111 (15)
console.log(15 ^ 9);
   // 1111 xnor 1001 = 0110 (4 + 2 = 6)
console.log(9 << 2);
   // 9 = 1001 shift to the left by 2
   // 1 0 0 1 0 0 = 32 + 4 = 36
console.log(9 >> 2);
   // 9 = 1001 shift to the right by 2
   // 0010 = 2 + 0 = 2

/*** Grouping and Precedence ***/
console.log("**** Grouping ****");

/*** typeof ***/
console.log("**** typeof ****");
console.log(`Typeof "Onotina": ${typeof "Onotina"}`);
console.log(`Type of false: ${typeof false}`);