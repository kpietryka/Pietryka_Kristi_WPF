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
//Calculate average weekly grocery spending
var groceryTotal = [120, 100, 202, 115, 170];
//Calculate total amount spent on groceries
var totalAmount = groceryTotal[0] + groceryTotal[1] + groceryTotal[2] + groceryTotal[3] + groceryTotal[4];
//Calculate average weekly grocery spending
var averageWeekly = totalAmount / 5;
//Display results in console
console.log("You have spent a total of $" + totalAmount + " on groceries over 5 weeks." +
    " That is an average of $" + averageWeekly + " per week.");


//Discounts
//Calculate the discounted price for an item
var originalPrice = 100;
var percentDisc = 30;
var item = "dress";
var salesTax = .06;
//Calculate price of item without tax
var discPrice = originalPrice - (percentDisc * .01 * originalPrice);
//Calculate price of item with tax
var priceTaxed = discPrice * salesTax + discPrice;
//Print result to console
console.log("Your " + item + " was originally $" + originalPrice +
      ", but after a " + percentDisc + "% discount, it is now $" + discPrice +
      " without tax, and $" + priceTaxed + " with tax.");