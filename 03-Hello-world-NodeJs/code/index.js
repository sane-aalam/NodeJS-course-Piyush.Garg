// Hello world program
console.log("Hello world!");
console.log("Node.js course piush garg!");

// console.log(window);
// window is not defined
//* Window(why gives this error)
// document.getElementbyId
// document.getElementbyClassName
// document.querySector
// alert()
// Node.js have only core feature - encoded,decode hashfile,creating the HTTP server,reading file
// install external package
// install internal package
// install fremework

//* clint-side(brower)
// You should get the output that logs as, 'Hello Thought Dump'.
// Because the variable declared globally would be accessible by the global object, i.e., the window object.
var greet = "Hello,Great Developer!";
console.log(window.greet);

// In the Node.js module system, each file is treated as a separate module.
// The Global objects are available in all modules.
// While in browsers, the global scope is the window object, in nodeJS, the global scope of a module is the module itself, so when you define a variable in the global scope of your Node.js module, it will be local to this module
var greet1 = "Hello,fellow developer!";
console.log(global.greet1);
