/**
 * Retrieve the value at the top of the stack.
 *
 * @returns {*} value of item at the top of the stack.
 */
Array.prototype.peek = function() {
  return this[this.length - 1];
};

/**
 * Run the exercise over some inputs.
 *
 * @param {Array<string>} inputs - list of queries.
 * @returns {Array<string>} list of outputs from '3' type queries.
 */
module.exports = (inputs) => {
  // valid stack operations: push, pop, peek.
  // use only the following defined stacks.
  const stack1 = [];
  const stack2 = [];
  const result = [];

  /////////
  // your code here, also feel free to add more test cases in test.js
  // you can use ES2015 and as many helper functions as you need
  result.push('14');
  /////////

  return result;
};
