/*  Kristi Pietryka
    October 16, 2014
    Conditionals - Wacky */

// Should I read a book today?
// If the person is bored OR if they have read less than two books this month, they should read a book.

// Declare variables and ask for input
var bored = prompt("Are you bored?");
var numberBooks = Number(prompt("How many books have you read this month?"));

// Write conditional
if(bored === "yes" || bored === "Yes"){
    console.log("You are bored, so you should read a book!");
}else if(numberBooks < 2){
    console.log("You haven't read very much this month. Read a book!");
}else{
    console.log("You seem too busy to read, but you should try to read a book anyway.");
}