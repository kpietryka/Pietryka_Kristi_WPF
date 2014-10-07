//Kristi Pietryka
// 7 October 2014
// Expressions Worksheet

//Dog Years
//Calculate Sparky's age in dog years
var age = 3;
//Multiply age by 7
var result = age * 7;
//Print the result in the console
console.log("Sparky is " + age + " years old which is " + result + " in dog years.");


//Slice of Pie part I
//Calculate the number of pizza slices each guest will get
var slicesPerPizza = 8;
var numberGuests = 10;
var pizzasOrdered = 3;
var totalSlices = slicesPerPizza * pizzasOrdered;
//Divide the total number of slices by the number of guests
var result = totalSlices / numberGuests;
//Print the result in the console
console.log("Each person ate " + result + " slices of pizza at the party.");


//Slice of Pie part II
var sparkysShare = totalSlices % numberGuests;
//Print the result in the console
console.log("Sparky got " + sparkysShare + " slices of pizza.");


//Average Shopping Bill