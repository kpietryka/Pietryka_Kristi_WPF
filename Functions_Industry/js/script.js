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

// Write result as variable
var paycheck = calcAmountMoney(83, 0.54,2.5, 2);

// Conditional (else if)
if (paycheck > 50){
    console.log("You made $" + paycheck + ". Congratulations!");
}else if(paycheck === 0){
    console.log("You made $" + paycheck + ". You did not drive at all this week!");
}else{
    console.log("You made $" + paycheck + ". Try to drive more next time!");
}