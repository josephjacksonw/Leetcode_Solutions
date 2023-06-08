/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    output = 0
    for(i = 0; i < grid.length; i++) {
        for(x = 0; x < grid[i].length; x++) {
            if (grid[i][x] < 0) {
                output ++
            }
        }
    }
    return output
};