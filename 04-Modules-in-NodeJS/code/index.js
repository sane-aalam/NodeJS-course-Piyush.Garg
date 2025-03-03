//* Modules in Node.js
// Real world, you need to create different modules
// we have different module - HTTP server, FS module, Os module
// HTTP server is mostly used to create server
// FS Module to used read,write,update,delete files

const math = require("./maths");
console.log(math);

// { [object-have all methods]
//     AdditionMod: [Function: AdditionMod],
//     SubtractionMod: [Function: SubtractionMod] }

// "Math Add value is :
const sumTwoValue = math.AdditionMod(12, 14);
console.log(sumTwoValue); // 26

// "Math Sub value is :"
const subTwoValue = math.SubtractionMod(18, 10);
console.log(subTwoValue);

//De-structuring -> we can directlly use add and sub function

const { AdditionMod, SubtractionMod, MultiplicationMod, DivisionMod } = math;
console.log("math add value is :", AdditionMod(11, 13));
console.log("math sub value is :", SubtractionMod(11, 13));
console.log("math mul value is :", MultiplicationMod(12, 12));
console.log("math div value is :", DivisionMod(19 / 2));
// math add value is : 24
// math sub value is : -2
