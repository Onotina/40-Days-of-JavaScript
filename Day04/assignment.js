/*
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

    DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.
-------------------------------------------------------------
*/

/*
 1. What will be the output of this code snippet and why?

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
*/
// The output would be 'It's a normal day', the variable day has the value Monday
// When the switch statement checks if monday == Monday, it returns false
// so it move to the next case, which is default, then it prints the string 'It's a normal day to the console. 

/*
2. Build an ATM Cash Withdrawal System

Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
*/
let amount = 340;
if (amount % 100 == 0) {
    console.log("Withdrawal successful");
} else {
    console.log("Invalid amount");
}

/*
3. Build a Calculator with switch-case

Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
*/
let operator = "%"; 
let num1 = 9, num2 = 5;

switch (operator) {
    case "+":
        console.log(`${num1 + num2} `);
        break;
    case "-":
        console.log(`${num1 - num2}`);
        break;
    case "/":
        console.log(`${num1 / num2}`);
        break;
    case "%":
        console.log(`${num1 % num2}`);
        break;
}


/*
4. Pay for your movie ticket

Imagine, the INOX charges ticket prices based on age:

    Children (<18 years): $3
    Adults (18 - 60 years): $10
    Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/
let age = 63;
if (age < 18)
    console.log("The INOX ticket prices is $3");
else if(age >= 18 && age <= 60)
    console.log("The INOX ticket prices is $10");
else if(age > 60)
    console.log("The INOX ticket prices is $8");

/*
5. Horoscope Sign Checker

Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
*/
let month = "December";

switch (month) {
    case "January":
    case "December":
        console.log("Capricorn");
        break;
    case "January":
    case "February":
        console.log("Aquarius");
        break;
    case "March":
    case "February":
        console.log("Pisces");
        break;
    case "April":
    case "March":
        console.log("Aries");
        break;
    case "May":
    case "April":
        console.log("Taurus");
        break;
    case "June":
    case "May":
        console.log("Gemini");
        break;
    case "July":
    case "June":
        console.log("Cancer");
        break;
    case "August":
    case "July":
        console.log("Leo");
        break;
    case "September":
    case "August":
        console.log("Virgo");
        break;
    case "October":
    case "September":
        console.log("Libra");
        break;
    case "November":
    case "October":
        console.log("Scorpio");
        break;
    case "December":
    case "November":
        console.log("Sagittarius");
        break;
}


/*
6. Which Triangle?

A triangle has 3 sides. A Triangle type is determined by its sides:

    All sides equal is called, Equilateral Triangle.
    Two sides equal is called, Isosceles Triangle.
    All sides different is called, Scalene Triangle.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
*/
let numberOfEqualSide = 0;

switch (numberOfEqualSide) {
    case 0: 
        console.log("The triangle is an Scalene Triangle");
        break;
    case 2: 
        console.log("The triangle is an Isosceles Triangle");
        break;
    case 3: 
        console.log("The triangle is an Equilateral Triangle");
        break;
}