import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(array, depth = 1) {
    let tempDepth;
    let maxDepth = depth;

    array.forEach((value) => {
      if (Array.isArray(value)) {
        tempDepth = this.calculateDepth(value, depth + 1);

        if (maxDepth < tempDepth) {
          maxDepth = tempDepth;
        }
      }
    });

    return maxDepth;
  }
}
