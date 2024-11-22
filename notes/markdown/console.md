# all console methods are available in the browser's console or dev tools
```js
console.log("Hello World"); //Logs "Hello World" to the console

console.error("This is an error"); //Logs "This is an error" to the console

console.warn("This is a warning"); //Logs "This is a warning" to the console

console.info("This is an info message"); //Logs "This is an info message" to the console

console.debug("This is a debug message"); //Logs "This is a debug message" to the console

console.trace("This is a trace message"); //Logs "This is a trace message" to the console

console.group("This is a group"); //Logs "This is a group" to the console

console.groupEnd(); //Logs "This is a group" to the console

console.groupCollapsed("This is a collapsed group"); //Logs "This is a collapsed group" to the console

console.groupEnd(); //Logs "This is a collapsed group" to the console

console.clear(); //Clears the console

console.time("Timer"); //Starts a timer

console.timeEnd("Timer"); //Ends a timer

console.assert(5 > 2, "5 is greater than 2"); //Logs "5 is greater than 2" to the console if the condition is true

console.assert(5 < 2, "5 is less than 2"); //Logs "5 is less than 2" to the console if the condition is false

console.table({ name: "John", age: 30, city: "New York" }); //Logs a table to the console

console.dir({ name: "John", age: 30, city: "New York" }); //Logs a table to the console

console.dirxml({ name: "John", age: 30, city: "New York" }); //Logs a table to the console

console.dirxml({ name: "John", age: 30, city: "New York" }, 2); //Logs a table to the console   
```

## note: generally, console.log is used to log messages to the console