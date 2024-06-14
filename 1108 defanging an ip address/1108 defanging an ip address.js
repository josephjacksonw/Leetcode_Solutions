/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    output = ""
    for (i=0; i<address.length; i++) {
        if (address[i] == ".") {
            output += "[.]"
        }
        else {
            output += address[i]
        }
    }
    return output
};