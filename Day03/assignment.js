/**
 * Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

    DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.
------------------------------------------------------------------------
*/

/*
1. Odd or Even?

Take a number and find if the number is an odd or even number.
Print the number and result in the console.
*/ 

let num = 23, num2 = 34;
console.log(`${num} is ${num % 2 == 0 ? "even" : "odd"}`);
console.log(`${num2} is ${num2 % 2 == 0 ? "even" : "odd"}`);

/*
2. Do you have a Driving License?

Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

    Manage age as a variable.
    Check if the age is elligible for a driving license and print it on the  console accordingly.
*/

let age = 16, age2 = 54;
console.log(`${age} can get driving license: ${age >= 18 ? "Eligible" : "Not Eligible"}`);
console.log(`${age2} can get driving license: ${age2 >= 18 ? "Eligible" : "Not Eligible"}`);

/*
3. Calculate CTC with a Bonus

Let's calculate how much you earn from your office.

    You get 12,300 rupees as your monthly salary.
    You get a 20% bonus on your annual salary.
    How much money do you make per annum as a CTC?
*/
let annualSalary = 12300 * 12;
let ctcSalary = annualSalary + (annualSalary * 0.2)
console.log("A CTC make ",ctcSalary,"rupees per annum");

/*
4. Write a program for the Traffic Light Simulation.

Red Light... Green Light... Let's Play!

    Create a color variable.
    Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
*/
let color = "red", color2 = "green";
console.log(`You need to ${color === "red" ? "STOP" : "GO"}`);
console.log(`You need to ${color2 === "green" ? "GO" : "STOP"}`);

/*
5. Create an Electricity Bill Calculator

Let's calculate how much you pay for electricity bills per month and annually.

    Create a units variable. Based on this value you will calculate the total electricity bill for a months.
    If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
    If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
*/
let unit = 50, electricBill = unit * 150;
console.log("The monthly electric bill is: " + electricBill + "rupees");
let annualElectricBill = (electricBill * 12) + (electricBill * 12 * 0.2);
console.log("The annual electric bill is: " + annualElectricBill + "rupees");

/* 
6. Leap Year Checker

Is 2025 a Leap Year?

    Take year as input.
    Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
*/
let year = 2025;
console.log(`is ${year} a leap year: ${year % 4 == 0 ? "Leap" : "Not Leap"}`);

/*
7. Max of Three Numbers

    Find the max number from the lot.

    Take three numbers and assign them to variables p, q, and r.
    Now find the maximum of these three numbers using the comparison operators.
*/
let p = 10, q = 29, r = -45;

let pGreater = p > q && p > r;
console.log("p is the maximum: " + pGreater)
let qGreater = q > p && q > r;
console.log("q is the maximum: " + qGreater)
let rGreater = r > q && r > p;
console.log("r is the maximum: " + rGreater)


/*
8. Bitwise Doubling

A tricky one for you

    Create a variable count and assign a value, say, 5.
    Now use the Bitwise shift operator to make the number double.
    Print it on the console.
*/
let count = 5;
// 5 = 101; 10 = 1010
console.log(`The double of count (${count}) is ${count << 1}`);
