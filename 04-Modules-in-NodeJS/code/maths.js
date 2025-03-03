/**
 * Split your code into different files and folders.
 * All maths related function will be written in math.js
 *
 * To use the math.js file in other file
 * --------------------------------------
 * use require -> const name = require('filename')
 *
 */

function AdditionMod(a, b) {
  return a + b;
}

function SubtractionMod(a, b) {
  return a - b;
}

function MultiplicationMod(a, b) {
  return a * b;
}

function DivisionMod(a, b) {
  const data = a / b;
  return data;
}

// Before gonna to import module, you need to first do export module
// private variable
// private function

// module.exports = AdditionMod;
// module.exports = SubtractionMod;

// we can use object to export multiple values

module.exports = {
  AdditionMod: AdditionMod,
  SubtractionMod: SubtractionMod,
  MultiplicationMod: MultiplicationMod,
  DivisionMod: DivisionMod,
};
