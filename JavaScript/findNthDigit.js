/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let k = 1,
        base = 1;
    while (n > base*9*k) {
        n -= base*9*k;
        k++;
        base*=10;
    }
    let pos = base + parseInt((n-1)/k);
    return Number(pos.toString().split("")[(n-1)%k]);
};
