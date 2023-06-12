/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    output = []
    for (i = 0; i < nums.length; i++) {
        start = nums[i]
        if (nums[i+1] == nums[i] + 1) {
            while (nums[i+1] == nums[i] + 1) {
                i ++
            }
        }
        if (nums[i] == start) {
            output.push(start.toString())
        } else {
            output.push(`${start}->${nums[i]}`)
        }
    }
    return output
};