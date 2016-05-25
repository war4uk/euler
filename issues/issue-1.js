// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

import getRange from '../utils/generateRange';

export default getMulitpleSum(999);

// todo - we can have a formula here
function getMulitpleSum(upperBound) {
  return getRange(upperBound).filter(value => (value % 3 === 0 || value % 5 === 0))
    .reduce(
    (prevValue, value) => {
      if (value % 3 === 0 || value % 5 === 0) {
        return prevValue + value;
      }
      return prevValue;
    },
    0);
}
