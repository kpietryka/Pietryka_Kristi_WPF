console.log('------loops-------');

var b = 50; //sets up the index

while (b > 0){  //checks the condition
    console.log(b + " kegs on the wall");
    b--; //decrements or increments the index
}


var c = 10;

do{
    console.log(c + " kegs on the wall");
    c--;
}
while(c > 0);


console.log("------For Loops---------");

for (var i = 10; i > 0; i--){
    console.log(i + " kegs on the wall");
}
