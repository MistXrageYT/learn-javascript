# Hoisting in JavaScript

### what is hoisting?
#### answer: hoisting is the process of moving declarations to the top of the current scope.

## Example 1: Hoisting with var
```js
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted!";
```
## Example 2: Hoisting with function declarations
```js
hoistedFunction(); // Output: "I am a hoisted function!"
function hoistedFunction() {
  console.log("I am a hoisted function!");
}
```
## Example 3: Hoisting with let (no hoisting)
```js
try {
  console.log(nonHoistedLet); // ReferenceError: Cannot access 'nonHoistedLet' before initialization
} catch (e) {
  console.error(e);
}
let nonHoistedLet = "I am not hoisted!";
```
## Example 4: Hoisting with const (no hoisting)
```js
try {
  console.log(nonHoistedConst); // ReferenceError: Cannot access 'nonHoistedConst' before initialization
} catch (e) {
  console.error(e);
}
const nonHoistedConst = "I am not hoisted!";
```

