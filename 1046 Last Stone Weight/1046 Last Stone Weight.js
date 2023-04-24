/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {

  stones.sort(function(a, b){return b - a});

  while(stones.length > 1) {
      stones[0] = stones[0] - stones[1]
      stones = stones.slice(0,1).concat(stones.slice(2))
      stones.sort(function(a, b){return b - a});
  }
  return stones[0]

};