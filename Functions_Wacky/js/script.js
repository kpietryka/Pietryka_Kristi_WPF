/* Kristi Pietryka
   October 23, 2014
   Functions - Wacky */

// Calculate the average number of pieces of pizza a person can eat per hour
// Number of slices divided by number of hours

// Create function for calculating number of slices per hour
var calcSlices = function(numberSlices, numberHours){
    var averageSlices = numberSlices / numberHours;
    return averageSlices;
}

// Write result as variable
var slicesPerHour = calcSlices(10, 2);

// Print results to console
console.log("The average number of slices eaten per hour is " + slicesPerHour + ".");