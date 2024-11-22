# What is functions?
## Answer: functions are blocks of code that can be used to perform a specific task.

# How do we create a function?
## Answer: we use the function keyword followed by a name for the function and then a set of parentheses () followed by a block of code that is the function's body.

# How do we call a function?
## Answer: we use the name of the function followed by a set of parentheses ().

# What is a function expression?
## Answer: a function expression is a function that is assigned to a variable.

# What is a function declaration?
## Answer: a function declaration is a function that is defined immediately.

# What is a function invocation?
## Answer: a function invocation is a call to a function.

# What is a function call?
## Answer: a function call is a call to a function.

# What is a function argument?
## Answer: a function argument is a value that is passed to a function when it is called.

# What is a function parameter?
## Answer: a function parameter is a value that is passed to a function when it is called.

# What is a function return value?
## Answer: a function return value is the value that is returned from a function when it is called.

# What is a function callback?
## Answer: a function callback is a function that is passed as an argument to another function.

# Examples
## Example 1: Function declaration
```javascript
function add() {
  console.log("I am a function declaration!");
}
```

## calling a function
```javascript
add();
```

## Example 2: Function expression
```javascript
//storing a function in a variable
const subtract = function () {
  console.log("I am a function expression!");
};
```
## calling a function expression
```js
subtract(); // use the variable name to call the function
```
## Example 3: Function Arruguments/Parameters
```javascript
function multiply(num1, num2) {
  console.log(num1 * num2);
}

multiply(2, 3); // Output: 6
```
## Example 4: Function Return Value
```javascript
function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(10, 2)); // Output: 5
```

## Example 5: Function Callback
```javascript
function callbackFunction() {
  console.log("I am a callback function!");
}

function callCallback(callback) {
  callback();
}

callCallback(callbackFunction);

//Output: "I am a callback function!"
```