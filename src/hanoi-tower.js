import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  

  const speedPerHour = turnsSpeed;
  const speedPerSecond = speedPerHour / 60 / 60;

  const diskSize = disksNumber;
  const turns = Math.pow(2, diskSize) - 1;

  const speed = Math.floor(turns / speedPerSecond);

  let game = {
    turns: turns,
    seconds: speed,
  }

  return game;

}
