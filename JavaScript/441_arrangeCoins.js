/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let max = n,
        min = 0,
        mid;
    while (min <= max) {
        mid = Math.floor((min+max)/2);
        if ((mid+1) * mid / 2 <= n) min = mid + 1;
        else  max = mid - 1;
    }
    return min-1;
};
