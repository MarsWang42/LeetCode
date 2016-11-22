/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(" ");
    let i = 1;
    while (s[s.length-i].length === 0) {
        i++;
        if (i > s.length) return 0;
    }
    return s[s.length-i].length
};
