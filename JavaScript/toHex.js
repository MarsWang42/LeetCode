/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num < 0) num += Math.pow(2, 32);
    return num.toString(16);
};
