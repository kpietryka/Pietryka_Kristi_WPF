// Kristi Pietryka
// 9 October 2014
// Expressions Assignment - Personal

// How many pull-ups done in one week, and what is the average number of pull-ups per day compared to the goal?
// Define the daily pull-up goals in an array
var goalPullUps = [5, 5, 5, 5, 5, 5, 5];

// Ask the user how many pull-ups were done on each day
var day1 = prompt("How many pull-ups did you do on day one?");
var day2 = prompt("How many pull-ups did you do on day two?");
var day3 = prompt("How many pull-ups did you do on day three?");
var day4 = prompt("How many pull-ups did you do on day four?");
var day5 = prompt("How many pull-ups did you do on day five?");
var day6 = prompt("How many pull-ups did you do on day six?");
var day7 = prompt("How many pull-ups did you do on day seven?");

// Calculate total number of pull-ups for goal, as well as average goal
var totalGoal = goalPullUps[0] + goalPullUps[1] + goalPullUps[2] + goalPullUps[3] + goalPullUps[4] + goalPullUps[5] + goalPullUps[6];
var averageGoal = totalGoal / 7;

// Calculate total number of pull-ups done by user
var userTotal = Number(day1) + Number(day2) + Number(day3) + Number(day4) + Number(day5) + Number(day6) + Number(day7);

// Calculate user's average daily pull-ups
var userAverage = userTotal / 7;

// Display the goals for total and average to the user, as well as their total and average for comparison
alert("Your goal for total number of pull-ups this week was " + totalGoal +
        " pull-ups. You did " + userTotal + " pull-ups. Your target average daily number of pull-ups was " +
        averageGoal + " pull-ups. You did an average of " + userAverage + " pull-ups per day.");