console.log("Day 05");


for(let ballDropCount = 1; ballDropCount <= 5; ballDropCount++) {
    console.log(`The ball Drop: ${ballDropCount}`);
}

// Addition of even numbers between 1 to 100
let evenSum = 0; 
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum = evenSum + i; 
    }
}
console.log(`The addition of even number from 1 to 100: ${evenSum}`);

// Break & Continue
let school = "Northeastern University";
for (let i = 0; i < school.length; i++) {
    if (i === 12) continue;
    if (i === 15) break;
    console.log(`${school.charAt(i)}`)
}

// While & Do-while
let counter = 0;
while(counter <= 5) {
    console.log("while:", counter);
    counter++;
}

let counter2 = 1;
do {
    console.log("do-while:", counter2);
    counter2++
} while (counter2 <= 4)