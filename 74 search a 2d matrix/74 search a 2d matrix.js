/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (i=0; i<matrix.length; i++) {
      if (target == matrix[i][0]) {
          return true
      } else if (target <= matrix[i][0]) {
          if (i == 0) {
              return false
          } 
          for (x = matrix[0].length - 1; x > -1; x--) {
              if (target > matrix[i-1][x]) {
                  return false
              } else if (target == matrix[i-1][x]) {
                  return true
              } 
          }
      }
      if (i+1 == matrix.length) {
          for (x = matrix[0].length - 1; x > -1; x--) {
              if (target > matrix[i][x]) {
                  return false
              } else if (target == matrix[i][x]) {
                  return true
              } 
          }
      }
  }

  return false
};