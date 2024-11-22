//what is fucntions?
//answer: functions are blocks of code that can be used to perform a specific task.

//how do we create a function?
//answer: we use the function keyword followed by a name for the function and then a set of parentheses () followed by a block of code that is the function's body.

//how do we call a function?
//answer: we use the name of the function followed by a set of parentheses ().

//what is a function expression?
//answer: a function expression is a function that is assigned to a variable.

//what is a function declaration?
//answer: a function declaration is a function that is defined immediately.

//what is a function invocation?
//answer: a function invocation is a call to a function.

//what is a function call?
//answer: a function call is a call to a function.

//what is a function argument?
//answer: a function argument is a value that is passed to a function when it is called.

//what is a function parameter?
//answer: a function parameter is a value that is passed to a function when it is called.

//what is a function return value?
//answer: a function return value is the value that is returned from a function when it is called.

//what is a function callback?
//answer: a function callback is a function that is passed as an argument to another function.

//examples
// Example 1: Function declaration
function add() {
  console.log("I am a function declaration!");
}

// calling a function
add();

// Example 2: Function expression
   //storing a function in a variable

const subtract = function () {
  console.log("I am a function expression!");
};

// calling a function expression
subtract(); // use the variable name to call the function

//Example 3: Function Arruguments/Parameters
function multiply(num1, num2) {
  console.log(num1 * num2);
}

multiply(2, 3); // Output: 6

//Example 4: Function Return Value
function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(10, 2)); // Output: 5

//Example 5: Function Callback
function callbackFunction() {
  console.log("I am a callback function!");
}

function callCallback(callback) {
  callback();
}

callCallback(callbackFunction);

//Output: "I am a callback function!"