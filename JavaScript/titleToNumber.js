/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    output = 0;
    for (let i = 0; i < s.length; i++) {
        output = output*26 + s.charCodeAt(i) - "A".charCodeAt(0)+1;
    }
    return output;
};
