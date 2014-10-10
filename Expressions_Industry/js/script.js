//Kristi Pietryka
//October 9, 2014
//Expressions - Industry (Background Info: I work at a music store)

// Calculate how many square inches of fabric will need to be ordered to line the top part of a flute case

// Input customer name so that cases do not get mixed up
var customerName = prompt("Enter the customer's name:");

// Area of a rectangle = length * width
// Get dimensions from user
var length = prompt("Enter the length of the case in inches:");
var width = prompt("Enter the width of the case in inches:");

// Add an inch of material to the dimensions just to be safe
length += 1;
width += 1;

// Calculate the area of the case top
var area = length * width;

// Display the results in the console
