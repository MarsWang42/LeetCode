/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    var n = A.length,
        result = 0,
        last = 0;
    if (n<3) return 0;
    for (let i = 2; i < n; i++) {
        if (A[i-1]-A[i-2] === A[i]-A[i-1]) last++;
        else last = 0;
        result = result + last;
    }
    return result;
};
