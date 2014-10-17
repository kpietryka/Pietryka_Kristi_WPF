/*  Kristi Pietryka
    October 16, 2014
    Conditionals - Industry */

// Should a person be allowed to rent an instrument?
// (This is industry-related because I work at a music store.)

// Declare variables and ask for user input
var creditScore = Number(prompt("Enter your credit score: "));
var age = Number(prompt("Enter your age: "));

// Write conditional (ternary)
(age > 18 && creditScore >500) ? console.log("You can rent an instrument!") : console.log("You are not qualified to rent an instrument.");
