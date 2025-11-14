/*
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

    DO NOT USE AI to FIND ANSWERS. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.
---------------------------------------------------------
*/

/*
1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

```bash
*
* *
* * *
* * * *
* * * * *
```
*/
for(let i = 1; i <= 5; i++) {
    let bash = ""
    for(let j = 0; j < i; j++) {
        bash = bash + "*" + " ";
    }
    console.log(bash);
}

/*
2. Craete Multiplication Table (Using for loop)
Write a program to print the multiplication table of a given number up to 10.
For Example: If N = 3, output should be:

```bash
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
```
*/
let num = 3;
for(let i = 0; i <= 12; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

/*
3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
*/
let sum = 0;
for(let i = 1; i <= 500; i++) {
    if(i % 2 !== 0) {
        sum = sum + i;
    }
}
console.log(sum);

/*
4. Skipping Multiples of 3
Write a program to print numbers from 1 to 20, but skip multiples of 3.
*/
for(i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

/*
5. Reverse Digits of a Number (Using while loop)
Write a program to reverse the digits of a given number using a while loop.

Example:
```bash
Input: 6789
Output: 9876
```
*/
let number = 234598, reverse = 0;
while(number !== 0) {
    // Finds the last digit 
    let last_digit = number % 10;

    // Adds a zero to the current number and append the last_digit
    reverse = reverse * 10 + last_digit; 

    // Integer Division to get rid of the last digit
    number = Math.floor(number / 10); 
}
console.log (`The reverse of 234598 is ${reverse}`);
/*
6. Write your understanding on the differences between for, while, and do-while loop. Create their flow charts.
*/
// The for loop is used when you know the fixed number of iteration, or know how many times you wish to loop
// The while loop is used when the amount of times is not given
// The Do-while loop is used when you want the loop to run at least ones, regardless of the whether the condition is true or false