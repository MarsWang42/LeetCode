/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    let n = A.length,
        max = -99999999999999999999999;
    if (n === 0) return 0;
    for (let i = 0; i < n; i++) {
        let temp = 0;
        for (let j = i; j >= 0; j--) {
            temp += (i-j) * A[n-j-1];
        }
        for (let j = i+1; j < n; j++) {
            temp += j*A[j-i-1];
        }
        if (temp > max) max = temp;
    }
    return max;
};
