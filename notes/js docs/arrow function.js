//what it arrow function?
//answer: arrow function is a function that is defined using the => operator.

//how do we create an arrow function?
//answer: we use the => operator followed by the function body.

//how do we call an arrow function?
//answer: we use the name of the function followed by a set of parentheses ().

//what it the difference between a function and an arrow function?
//answer: a function is a block of code that can be used to perform a specific task. An arrow function is a function that is defined using the => operator.

//what can a regular function do that an arrow function can't?
//answer: a regular function can be used as a constructor, can have its own this, can have its own arguments, and can be used as a generator. An arrow function can't be used as a constructor, has the same this as its parent scope, has the same arguments as its parent scope, and can't be used as a generator.

//examples
// Example 1: Arrow function declaration
const add = () => {
  console.log("I am a function declaration!");
};

// calling a function
add();

//Example 2: Function Arruguments/Parameters
const multiply = (num1, num2) => {
  console.log(num1 * num2);
};

multiply(2, 3); // Output: 6

//Example 3: Function Return Value
const divide = (num1, num2) => {
  return num1 / num2;
};

console.log(divide(10, 2)); // Output: 5

//Example 5: Function Callback
const callbackFunction = () => {
  console.log("I am a callback function!");
};

const callCallback = (callback) => {
  callback();
};

callCallback(callbackFunction);

//Output: "I am a callback function!"
