/*  Kristi Pietryka
    October 22, 2014
    Functions Worksheet */

// Circumference
// Calculate the circumference of a circle

// Write function for calculating circumference
// C = 2 * 3.14 * R
var calcCircumference = function(radius){
    var circumference = 2 * 3.14 * radius;
    return circumference;
}


var c = calcCircumference(4);

console.log(c);