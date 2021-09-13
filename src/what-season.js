import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.toString !== Date.prototype.toString) {
    throw new Error('Invalid date!');
  }

  const winter = [11, 0, 1];
  const fall = [9, 8, 10];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];

  if (winter.includes(date.getMonth())) {
    return 'winter';
  } else if (fall.includes(date.getMonth())) {
    return 'fall';
  } else if (spring.includes(date.getMonth())) {
    return 'spring';
  } else if (summer.includes(date.getMonth())) {
    return 'summer';
  } else {
    throw new Error('Invalid date!');
  }
}
