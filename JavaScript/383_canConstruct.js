/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let rarray = ransomNote.split(""),
        marray = magazine.split(""),
        rlen = rarray.length,
        mlen = marray.length,
        hash = {};
    for (let i = 0; i < mlen; i++) {
        if (hash[marray[i]] === undefined) hash[marray[i]] = 1;
        else hash[marray[i]]++;
    }
    for (let i = 0; i < rlen; i++) {
        if (hash[rarray[i]] >0 ) hash[rarray[i]]--;
        else return false;
    }
    return true;
};
