/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let mask = [],
        result = 0,
        len = words.length;
    for (let i = 0; i < len; i++) {
        let wlen = words[i].length;
        for (let j = 0; j < wlen; j++) {
            mask[i] = mask[i] | (1 << (words[i].charCodeAt(j)-'97'));
        }
        for (let j = 0; j < i; j++) {
            if (!(mask[i] & mask[j])) {
                let temp = wlen * words[j].length;
                result = (result > temp? result: temp);
            }
        }
    }
    return result;
};
