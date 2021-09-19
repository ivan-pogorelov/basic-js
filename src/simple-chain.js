import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  store: [],
  getLength() {
    return this.store.length;
  },
  addLink(value) {

    this.store.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.getLength()) {
      this.store.splice(0);
      throw new Error("You can't remove incorrect link!");
    } else {

      this.store.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.store = this.store.reverse();
    return this;
  },
  finishChain() {
    let result;
    result = this.store.join('~~');
    this.store = [];
    return result;
  }
};
