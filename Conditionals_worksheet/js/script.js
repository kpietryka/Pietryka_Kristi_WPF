/* Kristi Pietryka
   October 15, 2014
   Activity: Conditionals Worksheet */

// Last Chance for Gas!
// Can the driver make it to the next gas station, or should they stop for gas?

// Write givens as variables
/*var efficiency = Number(prompt("Enter the number of miles per gallon of fuel that your car gets: "));
var gaugeReading = Number(prompt("Enter the percentage of fuel you have left: "));
var capacity = Number(prompt("Enter your tank's fuel capacity in gallons: "));
var gallonsInTank = (0.01 * gaugeReading) * capacity;
var milesInTank = gallonsInTank * efficiency;
var milesToGo = 200;

// Write conditional
if(milesInTank <= milesToGo){
    console.log("You only have " + gallonsInTank + " gallons of gas in your tank, better get gas now while you can!");
}else{
    console.log("Yes, you can make it without stopping for gas!");
}*/



// Check the Login
// Check to ensure that username and password entered by user are correct

// Write givens as variables
var username = prompt("Please enter your username: ");
var password = prompt("Please enter your password: ");
var correctUsername = "kpietryka";
var correctPassword = "FullSail16";

if(username === correctUsername && password === correctPassword){
    console.log("Welcome, " + username + "!");
}else if(username != correctUsername){
    console.log("User not found. Try again.");
}else if(password != correctPassword){
    console.log("Password does not match our records.");
}



// Movie Ticket Price
// Determine the cost of a movie ticket depending on age and time

