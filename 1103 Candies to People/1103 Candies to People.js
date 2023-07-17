/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    output = Array(num_people).fill(0)
    count = 1
    spot = 0
    while (candies > count) {
        output[spot] += count
        candies -= count
        count ++
        spot ++
        if (spot == num_people) {
            spot -= num_people
        }
    }
    output[spot] += candies
    return output
};