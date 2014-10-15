/* Kristi Pietryka
   October 15, 2014
   Activity: Conditionals Worksheet */

// Last Chance for Gas!
// Can the driver make it to the next gas station, or should they stop for gas?

// Write givens as variables
var efficiency = Number(prompt("Enter the number of miles per gallon of fuel that your car gets: "));
var gaugeReading = Number(prompt("Enter the percentage of fuel you have left: "));
var capacity = Number(prompt("Enter your tank's fuel capacity in gallons: "));
var currentGas = (0.01 * gaugeReading) * capacity;
var milesToGo = 200;
