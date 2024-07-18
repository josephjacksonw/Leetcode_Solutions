/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    i = 0
    pArray = []
    while (i < path.length) {
        while (path[i] == '/') {
            i++
        }
        if (i < path.length && path[i] == '.') {
            if (path[i+1] =='.') {
                if (path[i+2] == '/' || i+2 == path.length) {
                    pArray.pop()
                    i += 2
                }
            } else if (path[i+1] == '/' || i+1 == path.length) {
                i+= 1
            }
        } 
        if (i < path.length && path[i] != '/') {
            temp = ""
            while (path[i] != '/' && i < path.length) {
                temp += path[i]
                i++
            }
            pArray.push(temp)
        }
    }
    if (pArray.length == 0) {
        return "/"
    }
    out = ""
    for (j=0; j<pArray.length; j++) {
        out += '/'
        out += pArray[j]
    }
    return out
};