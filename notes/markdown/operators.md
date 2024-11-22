# what it operators?
 operators are symbols that perform a specific task.

# can we create an operator?
no, we can't

# what is the difference between operators and functions?
operators are symbols that perform a specific task. Functions are blocks of code that can be used to perform a specific task.

# Operators

## Arithmetic/math Operators
`+` addition

`-` subtraction

`*` multiplication

`/` division

`%` modulus

`**` exponents


## Assignment Operators
`=` assignment

`+=` addition assignment

`-=` subtraction assignment

`*=` multiplication assignment

`/=` division assignment

`%=` modulus assignment

`**=` exponents assignment


## Comparison Operators
`==` equal to

`!=` not equal to

`>` greater than

`<` less than

`>=` greater than or equal to

`<=` less than or equal to

`===` strict equal to

`!==` strict not equal to


## Logical Operators
`&&` logical and

`||` logical or

`!` logical not


## Bitwise Operators
`&` bitwise and

`|` bitwise or

`^` bitwise xor

`~` bitwise not

`<<` bitwise left shift

`>>` bitwise right shift


## Ternary Operators
`?` if statement

`:` else statement


## typeof Operator
returns the type of a variable

## what is the difference between == and ===?
`==` is used to compare the value of two variables. === is used to compare the value and the type of two variables. 


# Example 1: Arithmetic Operators
```js
let a = 10;
let b = 5; 

let c = a + b; // 15

let d = a - b; // 5

let e = a * b; // 50

let f = a / b; // 2

let g = a % b; // 0

let h = a ** b; // 100000

```

# Example 2: Assignment Operators

```js
let x = 10; // assignment operator (=) is used to assign value to a variable (x) which is declared using let keyword
```

# Example 3: Comparison Operators
```js
let y = 10;
let z = 5;

if (y == z) { // == is used to compare the value of two variables to check if they are equal
    console.log("y is equal to z");
}

if (y != z) { // != is used to compare the value of two variables to check if they are not equal
    console.log("y is not equal to z");
}

if (y > z) { // > is used to compare the value of two variables to check if first variable is greater than the second
    console.log("y is greater than z");
}

if (y < z) { // < is used to compare the value of two variables to check if first variable is less than the second
    console.log("y is less than z");
}

if (y >= z) { // >= is used to compare the value of two variables to check if first variable is greater than or equal to the second
    console.log("y is greater than or equal to z");
}

if (y <= z) { // <= is used to compare the value of two variables to check if first variable is less than or equal to the second    
    console.log("y is less than or equal to z");
}

if (y === z) { // === is used to compare the value and the type of two variables to check if they are equal
    console.log("y is equal to z");
}

if (y !== z) { // !== is used to compare the value and the type of two variables to check if they are not equal
    console.log("y is not equal to z");
}
```

# Example 4: Logical Operators
```js
let p = 10;
let q = 5;

if (p && q) { // && is used to check if both variables are true
    console.log("p and q are true");
}

if (p || q) { // || is used to check if either variable is true
    console.log("p or q is true");
}

if (!p) { // ! is used to check if variable is false
    console.log("p is false");
}
```

# Example 5: Bitwise Operators
```js
let r = 10;
let s = 5;

let t = r & s; // & is used to check if both bits are 1
let u = r | s; // | is used to check if either bit is 1
let v = r ^ s; // ^ is used to check if either bit is 1 but not both
let w = ~r; // ~ is used to check if bit is 0
let shift = r << 2; // << is used to shift bits to the left
let shift2 = r >> 2; // >> is used to shift bits to the right
let shift3 = r >>> 2; // >>> is used to shift bits to the right without sign extension
```

# Example 6: Ternary Operators
```js
let num1 = 10;
let num2 = 5;

console.log(num1 == num2 ? "num1 is equal to num2" : "num1 is not equal to num2");

console.log(num1 === num2 ? "num1 is equal to num2" : "num1 is not equal to num2");

console.log(num1 !== num2 ? "num1 is not equal to num2" : "num1 is equal to num2");

console.log(num1 > num2 ? "num1 is greater than num2" : "num1 is less than num2");

console.log(num1 < num2 ? "num1 is less than num2" : "num1 is greater than num2");

console.log(num1 >= num2 ? "num1 is greater than or equal to num2" : "num1 is less than num2");

console.log(num1 <= num2 ? "num1 is less than or equal to num2" : "num1 is greater than num2");

console.log(num1 % num2 ? "num1 is divisible by num2" : "num1 is not divisible by num2");

console.log(num1 << num2 ? "num1 is shifted to the left by num2" : "num1 is not shifted to the left by num2");

console.log(num1 >> num2 ? "num1 is shifted to the right by num2" : "num1 is not shifted to the right by num2");

console.log(num1 >>> num2 ? "num1 is shifted to the right by num2 without sign extension" : "num1 is not shifted to the right by num2 without sign extension");

console.log(num1 & num2 ? "num1 is bitwise ANDed with num2" : "num1 is not bitwise ANDed with num2");

console.log(num1 | num2 ? "num1 is bitwise ORed with num2" : "num1 is not bitwise ORed with num2");

console.log(num1 ^ num2 ? "num1 is bitwise XORed with num2" : "num1 is not bitwise XORed with num2");

console.log(~num1 ? "num1 is bitwise NOTed" : "num1 is not bitwise NOTed");
```

# Example 7: typeof operator

```js
let number1 = 10;
let word = "hello";

console.log(typeof number1); // number
console.log(typeof word); // string

let boolean1 = true;
let boolean2 = false;

console.log(typeof boolean1); // boolean
console.log(typeof boolean2); // boolean

let object1 = {};

console.log(typeof object1); // object

let null1 = null;

console.log(typeof null1); // object

let undefined1;

console.log(typeof undefined1); // undefined
```