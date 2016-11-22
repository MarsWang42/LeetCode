/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let n = s.length,
        hash = {},
        result = 0,
        carry = 0;
    if (s === "") return 0;
    for(let i = 0; i < n; i++) {
        if (hash[s.charAt(i)] === undefined) {
            hash[s.charAt(i)] = 1;
        } else hash[s.charAt(i)] = hash[s.charAt(i)]+1;
    }
    for (let count in hash) {
        if (hash[count]%2 === 0) {
            result += hash[count]
        } else if (hash[count] > 2) {
            result += hash[count] -1;
            carry = 1;
        }
        else carry = 1;
    }
    return result+carry;
};
