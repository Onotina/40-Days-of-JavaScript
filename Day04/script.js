console.log("-----DAY 04 -------");


/*-------------- IF ELSE STATEMENT -----------*/
let age = 24;

if (age >= 18) 
    console.log(`At ${age}, you're eligible to vote`);
else 
    console.log(`At ${age}, you're not eligible to vote`);


/*-------------- SWITCH STATEMENT -----------*/
let grade = "C";
switch (grade) {
    case "A": 
        console.log("Grade A");
        break;
    case "B": 
        console.log("Grade B");
        break;
    case "C": 
        console.log("Grade C");
        break;
    default:
        console.log("Failed");
        break;
}

const city = "Abuja";
switch(city) {
    case "Abuja":
    case "Lagos":
    case "Benin":
    case "Port Harcourt":
        console.log("All these are in Nigeria");
        break;
    case "London":
    case "Germany":
    case "Switzerland":
        console.log("In Europe");
        break;
    case "Boston":
    default:
        console.log("It is in USA");
}