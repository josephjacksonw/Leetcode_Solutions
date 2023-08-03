/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    output = []
    two = ["a", "b", "c"]
    three = ["d", "e", "f"]
    four = ["g", "h", "i"]
    five = ["j", "k", "l"]
    six = ["m", "n", "o"]
    seven = ["p", "q", "r", "s"]
    eight = ["t", "u", "v"]
    nine = ["w", "x", "y", "z"]
    group = [two, three, four, five, six, seven, eight, nine]
    if (digits.length == 0) {
        return output
    } else if (digits.length == 1) {
        return group[parseInt(digits)-2]
    } else if (digits.length == 2) {
        console.log("2")
        for (i=0; i<group[parseInt(digits[0])-2].length; i++) {
            for (x=0; x<group[parseInt(digits[1])-2].length; x++) {
                output.push(group[parseInt(digits[0])-2][i] + group[parseInt(digits[1])-2][x])
            }
        }
    } else if (digits.length == 3) {
        console.log(3)
        for (i=0; i<group[parseInt(digits[0])-2].length; i++) {
            for (x=0; x<group[parseInt(digits[1])-2].length; x++) {
                for (j=0; j< group[parseInt(digits[2])-2].length; j++) {
                    output.push(group[parseInt(digits[0])-2][i] + group[parseInt(digits[1])-2][x] + group[parseInt(digits[2])-2][j])
                }
            }
        }
    } else {
        console.log(4)
        for (i=0; i<group[parseInt(digits[0])-2].length; i++) {
            for (x=0; x<group[parseInt(digits[1])-2].length; x++) {
                for (j=0; j< group[parseInt(digits[2])-2].length; j++) {
                    for (h=0; h<group[parseInt(digits[3])-2].length;h++) {
                        output.push(group[parseInt(digits[0])-2][i] + group[parseInt(digits[1])-2][x] + group[parseInt(digits[2])-2][j] + group[parseInt(digits[3])-2][h])
                    }
                }
            }
        }
    }
    return output
};