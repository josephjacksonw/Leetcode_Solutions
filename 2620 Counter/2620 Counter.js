/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  called = -1;
  return function() {
      called ++;
      return n + called;
  };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/