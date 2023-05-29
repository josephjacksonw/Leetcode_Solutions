var buildArray = function(nums) {
    output = []
    for (i=0; i < nums.length; i++) {
        output.push(nums[nums[i]])
    }
    return output
};