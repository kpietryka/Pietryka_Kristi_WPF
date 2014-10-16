/*  Kristi Pietryka
    October 16, 2014
    Conditionals - Personal */

// Decide whether or not a person should work on homework tonight
// Base the decision on hours of homework to do and number of days until due date

// Declare variables/givens
var hoursOfWork = Number(prompt("Enter the number of hours of homework you have left: "));
var daysUntilDue = Number(prompt("Enter the number of days until the homework is due: "));

// Validate user input
if(hoursOfWork == "" || daysUntilDue == ""){
    console.log("You forgot to input something!");
}else if(daysUntilDue < 3){
    console.log("You should work on homework!");
}else if(hoursOfWork > 5){
    console.log("You should work on homework!");
}else{
    console.log("You can afford to skip homework tonight, but you should work on it soon!");
}

