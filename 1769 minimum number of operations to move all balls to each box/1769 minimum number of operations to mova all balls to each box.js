/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    output = Array.from({length: boxes.length}, () => 0)
    split = boxes.split("")
    //console.log(split)
    for (i=0; i < split.length; i++) {
        if (split[i] == 1) {
            //console.log(split[i])
            //console.log("there's a 1")
            for (x=0; x< output.length; x ++) {
                //console.log("i: " + i + " x: " + x)
                //console.log("x: " + x)

                output[x] += Math.abs(i-x)
            }
            //console.log(output)
        }
    }
    return output
};