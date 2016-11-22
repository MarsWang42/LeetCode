/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split("");
    b = b.split("");
    let carry = 0,
        na = a.length,
        nb = b.length,
        result = [];
    while(na > 0 && nb > 0) {
        if (parseInt(a[--na])+parseInt(b[--nb]) + carry > 1) {
            result.unshift(parseInt(a[na])+parseInt(b[nb])+carry-2);
            carry = 1;
        } else {
            result.unshift(parseInt(a[na])+parseInt(b[nb])+carry);
            carry = 0;
        }
    }
    while (na > 0) {
        if (parseInt(a[--na]) + carry > 1) {
            result.unshift(parseInt(a[na])+carry-2);
            carry = 1;
        } else {
            result.unshift(parseInt(a[na])+carry);
            carry = 0;
        }
    }

    while (nb > 0) {
        if (parseInt(b[--nb]) + carry > 1) {
            result.unshift(parseInt(b[nb])+carry-2);
            carry = 1;
        } else {
            result.unshift(parseInt(b[nb])+carry);
            carry = 0;
        }
    }
    if(carry === 1) result.unshift(carry);
    return result.join("");
};
