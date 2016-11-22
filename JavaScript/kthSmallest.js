/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let n = matrix.length,
        left = matrix[0][0],
        right = matrix[n-1][n-1];

    while (left < right) {
        let mid = Math.floor((left + right)/2),
            count = 0;
        for (let i = 0; i < n; i++) {
            let l = 0, r = n;
            while (l < r) {
                let m = Math.floor((l + r)/2);
                if (matrix[i][m] > mid) r = m;
                else l = m + 1;
            }
            count += l;
        }
        if (count < k) left = mid + 1;
        else right = mid;
    }
    return left;
};
