/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    if (n === 1) return 10;
    return countNumbersWithUniqueDigits(n-1) + (countNumbersWithUniqueDigits(n-1)-countNumbersWithUniqueDigits(n-2))*(10-(n-1))
};
