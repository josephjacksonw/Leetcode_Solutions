/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (i = 0; i < 9; i++) {
      vert = []
      hori = []
      for (x = 0; x < 9; x++) {
          if (board[i][x] != ".") {
              if (hori.includes(board[i][x])) {
                  return false
              }
              hori.push(board[i][x])
          }
          if (board[x][i] != ".") {
              if (vert.includes(board[x][i])) {
                  return false
              }
              vert.push(board[x][i])
          }
      }
  }
  for (i = 0; i<9; i+=3) {
      square1 = []
      for (x = 0; x<3; x++) {
          if (board[i][x] != ".") {
              if(square1.includes(board[i][x])) {
                  return false
              }
              square1.push(board[i][x])
          }
          if (board[i+1][x] != ".") {
              if(square1.includes(board[i+1][x])) {
                  return false
              }
              square1.push(board[i+1][x])
          }
          if (board[i+2][x] != ".") {
              if(square1.includes(board[i+2][x])) {
                  return false
              }
              square1.push(board[i+2][x])
          }
      }
      sq2 = []
      for (x = 3; x<6; x++) {
          if (board[i][x] != ".") {
              if(sq2.includes(board[i][x])) {
                  return false
              }
              sq2.push(board[i][x])
          }
          if (board[i+1][x] != ".") {
              if(sq2.includes(board[i+1][x])) {
                  return false
              }
              sq2.push(board[i+1][x])
          }
          if (board[i+2][x] != ".") {
              if(sq2.includes(board[i+2][x])) {
                  return false
              }
              sq2.push(board[i+2][x])
          }
      }
      sq3 = []
      for (x = 6; x<9; x++) {
          if (board[i][x] != ".") {
              if(sq3.includes(board[i][x])) {
                  return false
              }
              sq3.push(board[i][x])
          }
          if (board[i+1][x] != ".") {
              if(sq3.includes(board[i+1][x])) {
                  return false
              }
              sq3.push(board[i+1][x])
          }
          if (board[i+2][x] != ".") {
              if(sq3.includes(board[i+2][x])) {
                  return false
              }
              sq3.push(board[i+2][x])
          }
      }
  }
  return true
};