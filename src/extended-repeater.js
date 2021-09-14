import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  options = {
    repeatTimes: options.repeatTimes || 1,
    additionRepeatTimes: options.additionRepeatTimes || 0,
    separator: options.separator || '+',
    addition: options.addition,
    additionSeparator: options.additionSeparator || '|',
  };

  if (options.addition && !options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  let result = [];
  
  for (let i = 0; i < options.repeatTimes; i++) {
    const arr = [];
    let preResult = [];
  
    preResult.push(String(str));

    for (let j = 0; j < options.additionRepeatTimes; j++) {
      arr.push(String(options.addition));
    }

    preResult.push(arr.join(options.additionSeparator));

    result.push(preResult.join(''));
  }

  return result.join(options.separator);
}