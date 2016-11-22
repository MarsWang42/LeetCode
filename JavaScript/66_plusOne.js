/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length,
        carry = 1;
    for (let i = n-1; i >= 0; i--) {
        digits[i] += carry;
        if (digits[i] >= 10) {
            digits[i] -= 10;
            carry = 1
        } else carry = 0;
    }
    if (carry === 1) digits.unshift(1)
    return digits
};
