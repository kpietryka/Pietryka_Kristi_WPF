/*  Kristi Pietryka
    October 22, 2014
    Functions Worksheet */

// Circumference
// Calculate the circumference of a circle

// Write function for calculating circumference
// C = 2 * 3.14 * R
var calcCircumference = function(radius){
    //This is the code the function runs
    var circumference = 2 * 3.14 * radius;
    return circumference;
}

// Create variable for result
var c = calcCircumference(6);

// Print result to console for testing
console.log("The circumference of the circle is " + c);


// Stung!
// Calculate how many bee stings are needed to kill an animal
// 8.666666667 bee stings per pound to kill an animal

//Write function
var calcStings = function(victimWeight){
    var numberStings = 8.666666667 * victimWeight;
    return numberStings;
}

// Create variable for result
var stingsNeeded = calcStings(180);

// Print results to console
console.log("It takes " + stingsNeeded + " to kill this animal.");