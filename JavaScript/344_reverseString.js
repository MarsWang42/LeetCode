/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str = "";
    for (i=s.length; i>0; i--) {
        str = str.concat(s.charAt(i-1));
    }
    return str
};

/**
 * @param {string}
 * @return {string}
 */
var reverseString = function(s) {
    return s.split("").reverse().join("");
};
