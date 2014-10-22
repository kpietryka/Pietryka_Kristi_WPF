// Functions - Anonymous Functions
// Must be declared BEFORE they are called!


var calcArea = function(width, height){ //defining
    var area = width * height;
    return area;
}

var a = calcArea(20, 30); //invoking

console.log(a);