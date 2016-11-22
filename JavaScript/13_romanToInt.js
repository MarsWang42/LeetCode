/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
        digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        result = 0;
    for (let i = 0; i < roman.length; i++) {
        while (s.indexOf(roman[i]) === 0) {
            result += digit[i];
            s = s.replace(roman[i], "");
        }
    }
    return result;
};
