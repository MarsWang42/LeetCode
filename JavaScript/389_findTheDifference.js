/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sarray = s.split(''),
        tarray = t.split(''),
        slen = sarray.length,
        tlen = tarray.length;
    for (let i = 0; i < slen; i++) {
        tarray.splice(tarray.indexOf(sarray[i]), 1);
    }
    return tarray;
};
