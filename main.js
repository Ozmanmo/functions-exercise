//Exercise1//
let password ="MyPassword";
let boolean = password.length >7
if (password.length > 5 ) { 
    console.log("true");   
}
else{ console.log("false");
}
//Exercise2//
height = 150;
boolean = height>=150;
if (boolean) {
    console.log("You can go on the ride");    
}
else{
    console.log("sorry you are not tall enough");
}
//Exercise3//
let diceRollOne= 6
let diceRollTwo= 6
if (diceRollOne===6&&diceRollTwo===6) {
    console.log("You have won a BEAR!!!")    
}
else if(diceRollOne===diceRollTwo){
    console.log("You have won three free throws!")
}
else if (diceRollOne===2 || diceRollOne===4 || diceRollOne===6 && diceRollTwo===2 && diceRollTwo===4 || diceRollTwo===6) {
    console.log("You win a free throw!")
}
else{
    console.log("You lose")
}
//functions
//functions take parameters to work
//The parameters are passed by its users
//When they are passed by developers to the function they are called arguments 
//code that you use over and over again rather than writing it out multipe times
//A parameter is a named variable passed into a function
function multiplyByTwo(kevin) {
 return kevin*2   
}
//self invoking anonymous function
(function () {
    console.log("I am a function thats calls iself")   
})()
//Function expression
//Rememeber the typeof operator returns a string indicating the type of the operands value
//assignments 
//exersise 1 
function helloWorld() {
console.log("Hello world")
}

console.log("musab"+ (helloWorld));
//exersise 2
function quadrupler(num1) {
return (num1)*4;

}
console.log(quadrupler(5));
//exersise 4
function tempretureConverter(farenheit) {
      return (farenheit-32)*5/9

}
console.log(tempretureConverter(20))
