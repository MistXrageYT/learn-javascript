//what template litrals?
//answer: template litrals are a way to create a string that can contain variables and expressions.

//how do we use template litrals?
//answer: we use the backtick (`) followed by the variable name.

//what is the difference between template litrals and string concatenation?
//answer: template litrals are a way to create a string that can contain variables and expressions. String concatenation is a way to create a string that is the combination of two or more strings.

//what is this (`) called?
//answer: this is a backtick (`)

//where can we find it on a keyboard?
//answer: on most keyboards, the backtick (``) key is located on the top row, below the escape key and above the tab key. On some keyboards, it may be hidden behind another key, and you may need to press the fn key (or a similar key) to access it. The backtick key is also sometimes referred to as the "tilde" key, since it is often used to type the tilde symbol (~).

//how to use it?
//answer: we use the backtick (`) followed by the variable name.

//Example 1: Template litrals
const myName = "John";
const greeting = `Hello, ${myName}!`;

console.log(greeting); // Hello, John!


//Example 2
const name = "John";
const age = 30;
const message = `My name is ${name} and I am ${age} years old.`;

console.log(message); // My name is John and I am 30 years old.


//Example 3: Template litrals in functions
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John")); // Hello, John!

function addNames(name1, name2) {
    return `The names are ${name1} and ${name2}.`;
}

console.log(addNames("John", "Jane")); // The names are John and Jane.


//Example 4: Template litrals in objects
const person = {
    name: "John",
    age: 30,
    message: `My name is ${person.name} and I am ${person.age} years old.`
};

console.log(person.message); // My name is John and I am 30 years old.
