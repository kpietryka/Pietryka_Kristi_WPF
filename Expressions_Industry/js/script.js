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

//Add extra inch to be safe...
length ++;
width ++;

// Calculate the area of the case top
var area = Number(length) * Number(width);

// Display the results in the console
console.log("In order to line the top of " + customerName + "\'s case, you need to order " + area +
            " square inches of material.");