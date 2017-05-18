'use strict';

/**
 * Stack data structure.
 * @class
 * @template T
 */
module.exports = class Stack {
  constructor() {
    this._items = [];
  }

  /**
   * Retrieve the value at the top of the stack.
   *
   * @template T
   * @returns {T} value of item at the top of the stack.
   */
  peek() {
    return this._items[this._items.length - 1];
  }

  /**
   * Add an item to the top of the stack.
   *
   * @template T
   * @param {T} item - item to add to the stack.
   */
  push(item) {
    this._items.push(item);
  }

  /**
   * Remove the item at the top of the stack.
   *
   * @template T
   * @returns {T} item at the top of the stack.
   */
  pop() {
    return this._items.pop();
  }
};
