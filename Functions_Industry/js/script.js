/*  Kristi Pietryka
    October 23, 2014
    Functions - Industry  */

// Calculate the amount of money a person will be reimbursed for driving a number of miles
// Add an hourly bonus

// Write function
var calcAmountMoney = function(milesDriven, ratePerMile, hoursDriven, hourlyBonus){
    var amountMade = milesDriven * ratePerMile + hoursDriven * hourlyBonus;
    return amountMade;
}

