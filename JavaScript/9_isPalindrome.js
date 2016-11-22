/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let power = 1,
        n = x,
        p = 1;
    while (Math.floor(n/10) > 0) {
        n = Math.floor(n/10);
        power *= 10;
    }
    while (p < power) {
        if (Math.floor(x/p)%10 !== Math.floor(x/power)%10) return false;
        p*=10;
        power/=10;
    }
    return true;
};
