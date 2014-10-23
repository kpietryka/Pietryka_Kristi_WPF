/*  Kristi Pietryka
    October 22, 2014
    Functions - Personal  */

// Calculate the number of steps I've taken while running, based on distance
// There are an average of 2,000 steps per mile

// Write anonymous function to calculate number of steps taken
var calcSteps = function(numberMiles){
    var numberSteps = 2000 * numberMiles;
    return numberSteps;
}

var stepsTaken = calcSteps(3.5);

