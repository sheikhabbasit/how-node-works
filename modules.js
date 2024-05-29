// console.log(arguments);
// console.log(require("module").wrapper);
// const hand = "chamboo";

// module.exports = hand;

const Calculator = require("./test-module-1");

const Calculator1 = new Calculator();
const sum = Calculator1.add(1, 2);
console.log(sum);
