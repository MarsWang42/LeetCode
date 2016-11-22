/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let list = [],
        p = 0;
    while (list.indexOf(n) === -1) {
        list.push(n);
        p = 0;
        while (n > 0) {
            let t = n%10;
            n = Math.floor(n/10);
            p += t*t;
        }
        if(p === 1) return true;
        n = p;
    }
    return false;
};
